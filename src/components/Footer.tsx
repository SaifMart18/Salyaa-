import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUpRight, Music2 as TikTokIcon, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: TikTokIcon, url: 'https://www.tiktok.com/@saifweb?_r=1&_t=ZN-96EoAdnHRQs' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/saif-aldin-yasin-8028653a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { icon: Briefcase, url: 'https://mostaql.com/u/Saif_writes' },
  ];

  return (
    <footer id="main-footer" className="bg-[#060B16] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity / Side Sidebar Logo Column */}
          <div className="space-y-6 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3.5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-brand-blue/30 flex items-center justify-center bg-white/5 p-1 transition-all duration-300 group-hover:border-brand-blue">
                <img 
                  src="https://lh3.googleusercontent.com/d/11V_O87SdW-ObGeHEPpYS_-FxaNVn7X9V" 
                  alt="salyaa Logo" 
                  className="w-full h-full object-contain rounded-full" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-display font-black tracking-tight text-white hover:text-brand-blue transition-colors duration-300">
                  sal<span className="text-brand-blue">yaa</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-500 mt-1">
                  {isRTL ? 'شركة تصميم مواقع' : 'Web Design Agency'}
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              {t('footerDesc')}
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer to push directories to correct sides on lg view */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/[0.04]">
              {t('footerExplore')}
            </h4>
            <ul className="space-y-3.5">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-brand-blue text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{t(`nav${item}`)}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/[0.04]">
              {t('footerServices')}
            </h4>
            <ul className="space-y-3.5">
              {[t('sdTitle'), t('devTitle'), t('seoTitle'), t('brandTitle'), t('uxTitle')].map(item => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="text-slate-400 hover:text-brand-blue text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/[0.04]">
              {t('footerContact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="hover:text-white transition-colors">servicex35@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="ltr hover:text-white transition-colors pointer-events-none">+964 788 237 7036</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>{isRTL ? 'العراق، بغداد' : 'Iraq, Baghdad'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 mt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-normal">
          <p>
            © {currentYear} {t('footerRights')}
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t('terms')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
