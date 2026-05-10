import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUpRight, Music2 as TikTokIcon, Briefcase } from 'lucide-react';
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
    <footer id="main-footer" className="bg-[#0B1120] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <Link to="/" className={`flex items-center gap-4 ${isRTL ? 'justify-end' : 'flex-row-reverse justify-end'}`}>
              <div className="w-16 h-16 rounded-full overflow-hidden border border-brand-blue/30 flex items-center justify-center bg-white/5 p-1">
                <img src="https://lh3.googleusercontent.com/d/11V_O87SdW-ObGeHEPpYS_-FxaNVn7X9V" alt="Salyaa Logo" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col leading-none text-right">
                <span className="text-2xl font-display font-bold tracking-tighter text-white">sal<span className="text-brand-blue">yaa</span></span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">Web Design Agency</span>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              {t('footerDesc')}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {socialLinks.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all group">
                  <social.icon className="w-4 h-4 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-bold mb-6">{t('footerExplore')}</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={`text-white/50 hover:text-white transition-colors flex items-center gap-2 group ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    {t(`nav${item}`)}
                    <ArrowUpRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-bold mb-6">{t('footerServices')}</h4>
            <ul className="space-y-4">
              {[t('sdTitle'), t('devTitle'), t('seoTitle'), t('brandTitle'), t('uxTitle')].map(item => (
                <li key={item}>
                  <Link to="/services" className="text-white/50 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-bold mb-6">{t('footerContact')}</h4>
            <ul className="space-y-4 text-white/50">
              <li className={isRTL ? 'flex flex-row-reverse justify-end' : ''}>servicex35@gmail.com</li>
              <li className={isRTL ? 'flex flex-row-reverse justify-end' : ''}>+964 788 237 7036</li>
              <li className={isRTL ? 'flex flex-row-reverse justify-end' : ''}>{isRTL ? 'العراق، بغداد' : 'Iraq, Baghdad'}</li>
            </ul>
          </div>
        </div>

        <div className={`pt-10 border-t border-white/5 flex flex-col md:mx-0 ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center gap-6`}>
          <p className="text-white/30 text-sm">
            © {currentYear} {t('footerRights')}
          </p>
          <div className={`flex gap-8 text-sm text-white/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="hover:text-white">{t('privacy')}</a>
            <a href="#" className="hover:text-white">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
