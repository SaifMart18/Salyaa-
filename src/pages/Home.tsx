import { motion } from 'motion/react';
import { 
  ArrowRight, Code, Layout, Smartphone, Search, Palette, Rocket, 
  Shield, Zap, TrendingUp, Star, Check, ExternalLink, Globe, Server, 
  Headphones, ChevronRight, MessageCircle 
} from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projects';

export default function Home() {
  const { t, isRTL } = useLanguage();
  const featuredProjects = getProjects(isRTL).slice(0, 2);

  return (
    <div className="relative overflow-x-hidden bg-[#0B1120] text-white smooth-scroll">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[1400px] h-screen bg-brand-blue/5 blur-[150px] rounded-full opacity-30" />

      {/* Hero Section */}
      <section id="hero" className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-blue/80 text-[11px] font-bold uppercase tracking-[0.2em] mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
            {t('heroBadge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] tracking-tight mb-10"
          >
            {t('heroTitle1')}
            <span className="text-[#3B82F6]">{t('heroTitleHighlight')}</span>
            {t('heroTitle2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-[17px] text-white/50 max-w-3xl mx-auto mb-12 leading-[1.8] font-light"
          >
            {t('heroSub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          >
            <Link to="/contact">
              <Button className="h-14 px-10 bg-brand-blue hover:bg-brand-blue/90 border-brand-blue text-sm rounded-lg">
                {t('heroStartBtn')}
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="h-14 px-10 border-white/10 hover:bg-white/5 text-sm rounded-lg">
                {t('heroWorksBtn')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative px-4 sm:px-0"
          >
            <div className="relative aspect-video sm:aspect-[16/9] rounded-2xl sm:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Agency Workflow" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Ribbon */}
      <section className="py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 transition-all hover:opacity-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {['WordPress', 'WooCommerce', 'Next.js', 'Tailwind CSS', 'Alpine.js'].map(tech => (
              <span key={tech} className="text-xl md:text-2xl font-bold tracking-tighter">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-24 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Meeting" 
                  className="w-full aspect-video lg:aspect-square object-cover transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className={`flex-1 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">{isRTL ? 'من نحن' : 'Who We Are'}</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]">
                {t('aboutPartnerTitle')}
              </h2>
              <p className="text-lg text-white/50 leading-relaxed font-light">
                {t('aboutPartnerDesc')}
              </p>
              
              <ul className="space-y-4 pt-4">
                {[t('aboutPoint1'), t('aboutPoint2')].map((point, i) => (
                  <li key={i} className={`flex items-center gap-4 text-white/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about" className={`inline-flex items-center gap-4 text-white hover:text-brand-blue transition-all font-bold pt-6 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('aboutMoreLink')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-2 translate-x-0' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">{t('servicesBadge')}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{t('servicesSectionTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('serviceWeb'), desc: t('serviceWebDesc'), icon: <Code className="w-6 h-6" /> },
              { title: t('serviceEcommerce'), desc: t('serviceEcommerceDesc'), icon: <Smartphone className="w-6 h-6" /> },
              { title: t('serviceCloud'), desc: t('serviceCloudDesc'), icon: <Server className="w-6 h-6" /> },
              { title: t('serviceSupport'), desc: t('serviceSupportDesc'), icon: <Headphones className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-[#141C2F] border border-white/5 hover:border-brand-blue/30 transition-all group ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {s.desc}
                </p>
                <Link to="/services" className={`inline-flex items-center gap-2 text-xs font-bold text-white/60 hover:text-brand-blue transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {isRTL ? 'تفاصيل الخدمة' : 'Service Details'}
                  <ArrowRight className={`w-3 h-3 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Selection */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">{isRTL ? 'أعمالنا' : 'Portfolio'}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{t('portfolioGridTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-0">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl sm:rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-square sm:aspect-[4/3] object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <Link to={`/portfolio/${project.slug}`} className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-0 group-hover:opacity-95 transition-all flex flex-col justify-end p-8 sm:p-12 text-right">
                  <span className="text-brand-blue font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-4">{project.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{project.title}</h3>
                  <Button variant="outline" className="w-fit h-10 sm:h-12 text-[10px] sm:text-xs border-white/20">{isRTL ? 'عرض التفاصيل' : 'View Details'}</Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/portfolio">
              <Button variant="outline" className="h-14 px-12 rounded-full border-white/10 hover:bg-brand-blue hover:border-brand-blue">
                {t('portfolioMoreBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block mb-6">{isRTL ? 'لماذا نحن' : 'Why Us'}</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{t('performanceTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: t('perf1Title'), desc: t('perf1Desc'), icon: <Zap className="w-6 h-6" /> },
              { title: t('perf2Title'), desc: t('perf2Desc'), icon: <Shield className="w-6 h-6" /> },
              { title: t('perf3Title'), desc: t('perf3Desc'), icon: <MessageCircle className="w-6 h-6" /> }
            ].map((p, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-[#141C2F] border border-white/5 flex gap-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center text-brand-blue">
                  {p.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className={`space-y-6 ${isRTL ? 'text-right md:order-last' : 'text-left'}`}>
              <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">{isRTL ? 'آراء العملاء' : 'Testimonials'}</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{t('testimonialsTitle')}</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-brand-blue hover:text-white transition-all">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-brand-blue hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                name: t('testimonial1Name'), 
                role: t('testimonial1Role'), 
                text: t('testimonial1Text'), 
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop" 
              },
              { 
                name: t('testimonial2Name'), 
                role: t('testimonial2Role'), 
                text: t('testimonial2Text'), 
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop" 
              }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-12 rounded-[40px] bg-[#141C2F] border border-white/5 relative flex flex-col justify-between ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="space-y-6">
                  <div className={`flex gap-1 text-[#FBBF24] ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xl text-white/70 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                </div>
                
                <div className={`flex items-center gap-4 mt-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/20">
                    <img src={test.img} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{test.name}</h4>
                    <p className="text-white/30 text-xs mt-1">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            {t('ctaReadyTitle')}
          </h2>
          <p className="text-xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto">
            {t('ctaReadySub')}
          </p>
          <Link to="/contact">
            <Button className="h-16 px-16 text-lg rounded-full shadow-2xl shadow-brand-blue/20">
              {t('heroStartBtn')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/9647882377036" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50`}
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
