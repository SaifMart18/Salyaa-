import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Languages, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navServices'), path: '/services' },
    { name: t('navPortfolio'), path: '/portfolio' },
    { name: t('navAbout'), path: '/about' },
    { name: t('navContact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      id="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#0B1120]/95 backdrop-blur-md border-b border-white/5' : 'py-4 bg-[#0B1120]/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Elements (Hamburger/Lang) */}
        <div className={`flex items-center gap-6 ${isRTL ? 'order-last' : 'order-first'}`}>
          <button 
            id="mobile-menu-toggle"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all group" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:border-brand-blue transition-all hidden md:flex"
          >
            <Globe className="w-3 h-3" />
            {language === 'en' ? 'Arabic' : 'English'}
          </button>
        </div>

        {/* Logo */}
        <div className={isRTL ? 'order-first' : 'order-last'}>
          <Link to="/" className={`flex items-center gap-2 md:gap-3 group ${isRTL ? '' : 'flex-row-reverse'}`}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-brand-blue/30 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-all flex items-center justify-center bg-white/5 p-1">
              <img src="https://lh3.googleusercontent.com/d/11V_O87SdW-ObGeHEPpYS_-FxaNVn7X9V" alt="salyaa Logo" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
            </div>
            <div className={`flex flex-col leading-none ${isRTL ? 'text-right' : 'text-right'}`}>
              <span className="text-lg md:text-2xl font-bold tracking-tighter text-white">sal<span className="text-brand-blue">yaa</span></span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Web Design Agency</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -300 : 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? -300 : 300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0B1120] flex flex-col p-8 pt-24 h-screen overflow-y-auto"
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-all" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className={`flex flex-col gap-6 md:gap-8 ${isRTL ? 'items-end' : 'items-start'} max-w-md mx-auto w-full`}>
              <div className="space-y-3 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300 hover:text-brand-blue hover:translate-x-1 block py-1.5 ${
                        location.pathname === link.path ? 'text-brand-blue' : 'text-slate-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="pt-6 flex flex-col gap-6 w-full"
              >
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3.5 bg-brand-blue rounded-full font-bold text-base hover:scale-105 transition-all text-white text-center shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
                >
                  {t('startProject')}
                </Link>

                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold ${isRTL ? 'justify-end' : 'justify-start'}`}
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? 'Arabic Version' : 'English Version'}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
