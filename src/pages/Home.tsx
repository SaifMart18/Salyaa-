import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Code, Layout, Smartphone, Search, Palette, Rocket, 
  Shield, Zap, TrendingUp, Star, Check, ExternalLink, Globe, Server, 
  Headphones, ChevronRight, MessageCircle, ArrowUpRight, User, Mail
} from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { getProjects } from '../data/projects';

export default function Home() {
  const { t, isRTL } = useLanguage();
  const featuredProjects = getProjects(isRTL).slice(0, 2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });

  const serviceOptions = isRTL ? [
    'تصميم وبرمجة موقع تعريفي (Landing Page / Corporate Site)',
    'إنشاء متجر إلكتروني متكامل (E-commerce)',
    'تطبيقات ويب مخصصة وأنظمة سحابية (Web Applications)',
    'تصميم الهوية البصرية وتجربة المستخدم (UI/UX Design)',
    'تحسين محركات البحث والتسويق الرقمي (SEO & Marketing)',
    'دعم فني وصيانة وإدارة محتوى مستمرة'
  ] : [
    'Custom Corporate Website / Landing Page',
    'Full-Featured E-commerce Store',
    'Custom Web Application & Cloud Systems',
    'UI/UX Design & Brand Strategy',
    'Search Engine Optimization (SEO)',
    'Maintenance, Technical Support & Updates'
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = "9647882377036";
    const formattedMessage = isRTL 
      ? `مرحباً سيلية (salyaa)، أود تقديم طلب خدمة جديد:\n\n👤 *الاسم الكامل:* ${formData.name}\n✉️ *البريد الإلكتروني:* ${formData.email}\n🛠️ *الخدمة المطلوبة:* ${formData.service}\n\n📝 *تفاصيل إضافية / شرح:*\n${formData.details || 'لا يوجد تفاصيل إضافية.'}`
      : `Hello salyaa, I would like to request a service:\n\n👤 *Full Name:* ${formData.name}\n✉️ *Email Address:* ${formData.email}\n🛠️ *Requested Service:* ${formData.service}\n\n📝 *Project Description:*\n${formData.details || 'No additional details provided.'}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            className={`text-4xl md:text-6xl lg:text-[70px] font-bold leading-[1.2] mb-10 ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}
          >
            {t('heroTitle1')}
            <span className="text-[#3B82F6]">{t('heroTitleHighlight')}</span>
            {t('heroTitle2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-[1.8] font-normal"
          >
            {t('heroSub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`flex flex-row items-center justify-center gap-3 sm:gap-4 mb-16 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <Link to="/contact">
              <Button className="h-14 px-6 sm:px-10 bg-brand-blue hover:bg-brand-blue/90 border-brand-blue text-xs sm:text-sm rounded-full">
                {t('heroStartBtn')}
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="h-14 px-6 sm:px-10 border-white/10 hover:bg-white/5 text-xs sm:text-sm rounded-full">
                {t('heroWorksBtn')}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Larger Showcase Image Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
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
              <h2 className={`text-4xl md:text-5xl font-bold leading-[1.3] ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>
                {t('aboutPartnerTitle')}
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal">
                {t('aboutPartnerDesc')}
              </p>
              
              <ul className="space-y-4 pt-4">
                {[t('aboutPoint1'), t('aboutPoint2')].map((point, i) => (
                  <li key={i} className={`flex items-center gap-4 text-slate-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm md:text-base">{point}</span>
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
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] max-w-4xl mx-auto ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>{t('servicesSectionTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('serviceWeb'), desc: t('serviceWebDesc'), icon: <Code className="w-6 h-6" /> },
              { title: t('serviceEcommerce'), desc: t('serviceEcommerceDesc'), icon: <Smartphone className="w-6 h-6" /> },
              { title: t('serviceCloud'), desc: t('serviceCloudDesc'), icon: <Server className="w-6 h-6" /> },
              { title: t('serviceSupport'), desc: t('serviceSupportDesc'), icon: <Headphones className="w-6 h-6" /> }
            ].map((s, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-[#141C2F]/60 backdrop-blur-md border border-white/5 hover:border-brand-blue/30 transition-all group ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-300 text-[14px] leading-relaxed mb-8">
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
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>{t('portfolioGridTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col justify-between bg-[#111827]/45 backdrop-blur-md rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all duration-300 shadow-xl p-6 sm:p-8 hover:bg-[#111827]/75"
              >
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-brand-blue rounded-full bg-brand-blue/10 border border-brand-blue/20">
                      {project.category === 'Contracting' ? (isRTL ? 'مقاولات عامة' : 'Contracting') :
                       project.category === 'E-commerce' ? (isRTL ? 'متاجر إلكترونية' : 'E-commerce') :
                       project.category === 'Education' ? (isRTL ? 'تعليم ومدارس' : 'Education') :
                       project.category === 'Medical' ? (isRTL ? 'طبي ورعاية' : 'Medical & Welfare') :
                       project.category === 'Creative' ? (isRTL ? 'إبداعي وصناعة محتوى' : 'Creative Design') :
                       (isRTL ? 'خدمات شركات وأعمال' : 'Professional Services')}
                    </span>
                  </div>

                  <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal min-h-[72px] line-clamp-4">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className={`pt-6 border-t border-white/[0.04] flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue hover:bg-brand-blue/90 border border-brand-blue text-white rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(59,130,246,0.08)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.25)] transition-all group/btn"
                  >
                    <span>{isRTL ? 'دخول الموقع' : 'Enter Site'}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>

                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="px-4 py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{isRTL ? 'التفاصيل' : 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>{t('performanceTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: t('perf1Title'), desc: t('perf1Desc'), icon: <Zap className="w-6 h-6" /> },
              { title: t('perf2Title'), desc: t('perf2Desc'), icon: <Shield className="w-6 h-6" /> },
              { title: t('perf3Title'), desc: t('perf3Desc'), icon: <MessageCircle className="w-6 h-6" /> }
            ].map((p, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-[#141C2F]/60 backdrop-blur-md border border-white/5 flex gap-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center text-brand-blue">
                  {p.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order / WhatsApp Service Form Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#111827]/30 to-[#0B1120]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">
              {isRTL ? 'تواصل مباشر وسريع' : 'Quick & Direct Contact'}
            </span>
            <h2 className={`text-3xl md:text-5xl font-black ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>
              {isRTL ? 'اطلب خدمتك وباشر مشروعك الآن' : 'Request Your Service & Start Today'}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              {isRTL 
                ? 'املأ الاستمارة البسيطة أدناه وسنقوم بتحويلك فوراً لمحادثتنا في واتساب مع الطلب وبكامل التنسيق.'
                : 'Fill out this simple form to generate a dynamic message and start a chat with us instantly on WhatsApp.'}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[32px] bg-[#111827]/45 backdrop-blur-md border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'الاسم الكامل' : 'Full Name'} <span className="text-brand-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className={`absolute inset-y-0 flex items-center px-4 pointer-events-none text-slate-500 ${isRTL ? 'right-0' : 'left-0'}`}>
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRTL ? 'مثال: علي أحمد' : 'e.g. John Doe'}
                      className={`w-full h-13 bg-[#141C2F]/80 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-brand-blue">*</span>
                  </label>
                  <div className="relative">
                    <div className={`absolute inset-y-0 flex items-center px-4 pointer-events-none text-slate-500 ${isRTL ? 'right-0' : 'left-0'}`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full h-13 bg-[#141C2F]/80 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'الخدمة المطلوبة' : 'Requested Service'} <span className="text-brand-blue">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full h-13 bg-[#141C2F]/80 border border-white/10 rounded-2xl text-white text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all appearance-none cursor-pointer ${isRTL ? 'pr-4 pl-10 text-right' : 'pl-4 pr-10 text-left'}`}
                  >
                    <option value="" disabled className="bg-[#111827]">
                      {isRTL ? 'اختر الخدمة المطلوبة...' : 'Choose requested service...'}
                    </option>
                    {serviceOptions.map((opt, index) => (
                      <option key={index} value={opt} className="bg-[#111827]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className={`absolute inset-y-0 flex items-center px-4 pointer-events-none text-slate-400 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <label className={`block text-xs font-semibold uppercase tracking-wider text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL ? 'تفاصيل المشروع / شرح بسيط (اختياري)' : 'Project Details / Simple Description (Optional)'}
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder={isRTL ? 'يرجى تقديم شرح موجز عن تفاصيل مشروعك أو أهدافك...' : 'Briefly describe your project details, layout preferences or goals...'}
                  className={`w-full p-4 bg-[#141C2F]/80 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{isRTL ? 'إرسال الطلب عبر واتساب' : 'Send Request via WhatsApp'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 overflow-hidden relative bg-gradient-to-b from-[#0B1120] to-[#060B16]">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-initial">
            <div className={`space-y-4 md:space-y-6 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-brand-blue font-bold text-xs tracking-widest uppercase block">{isRTL ? 'شركاء النجاح وآراء واقعية' : 'SUCCESS PARTNERS & GENUINE REVIEWS'}</span>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isRTL ? 'tracking-normal' : 'tracking-tight'}`}>
                {isRTL ? 'قصص نجاح ترويها الثقة.' : 'Success Stories Built on Trust.'}
              </h2>
              <p className="text-slate-400 text-sm md:text-lg max-w-2xl font-light">
                {isRTL 
                  ? 'نعرض لكم آراء وتقييمات عملائنا الحقيقيين وتجاربهم البرمجية والرقمية مع أعمالهم.'
                  : 'Genuine feedback and metrics shared by our actual business partners.'}
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-xs text-slate-400 font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isRTL ? 'مرر للتوقف المؤقت' : 'Hover to pause scrolling'}</span>
            </div>
          </div>
        </div>

        {/* Custom Infinite Sliding Marquee */}
        <div className="marquee-container overflow-hidden w-full relative py-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%_90%,transparent_100%)]" dir="ltr">
          <div className="flex gap-8 w-max animate-marquee-slow">
            {/* Track 1 */}
            <div className="flex gap-8">
              {[
                {
                  name: isRTL ? 'المهندسة ريم العبيدي' : 'Eng. Reem Al-Obeidi',
                  role: isRTL ? 'مؤسس منصة "دكانك" للتجارة الرقمية' : 'Founder - Dokanek E-commerce',
                  company: isRTL ? 'دكانك فاشن' : 'Dokanek Fashion',
                  text: isRTL 
                    ? 'تعاونا مع salyaa لتصميم متجرنا الإلكتروني بالكامل. النتائج فاقت توقعاتنا بكثير؛ تضاعفت نسبة المبيعات خلال أول شهرين فقط بفضل مرونة واجهة المستخدم والسرعة الخيالية للمتجر على الهواتف.'
                    : 'We partnered with salyaa for our store redesign. The results surpassed expectations; sales doubled in two months thanks to the superb mobile speed and layout.',
                  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'المقاول ياسر الهاشمي' : 'Yasser Al-Hashemi',
                  role: isRTL ? 'المدير العام لشركة "الرافدين للمقاولات"' : 'General Manager - Al-Rafidain Contracting',
                  company: isRTL ? 'الرافدين للمقاولات' : 'Al-Rafidain Co.',
                  text: isRTL 
                    ? 'مكانة شركتنا تطلبت هوية رقمية تليق بنا وبالمشاريع الضخمة التي ننافس عليها. موقعنا السلس والجديد مدهش وساعد الشركاء بتصفح سوابق أعمالنا، وساعدنا بنيل عدة عقود فورية.'
                    : 'Our company stature required a matching elite digital presence. The new contracting site is incredible and made it simple to showcase portfolios and win bids.',
                  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'الدكتورة سارة الجابري' : 'Dr. Sara Al-Jabri',
                  role: isRTL ? 'مديرة "مجمع نيو دنت الطبي"' : 'Director - NewDent Medical Complex',
                  company: isRTL ? 'نيودنت الطبي' : 'NewDent Center',
                  text: isRTL 
                    ? 'فريق سيلية صمم لنا نظام حجز مواعيد وتجربة تصفح مريحة جداً للمراجعين. انخفضت نسبة إلغاء الحجوزات بفضل التنظيم الرائع، ولديهم التزام بالوقت والدعم الفني السريع.'
                    : 'They designed a seamless booking system and excellent user interface. Appointment cancellation dropped significantly through simple and secure reminders.',
                  img: 'https://images.unsplash.com/photo-1582750433449-64c02421a3a7?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'المهندس أحمد الجنابي' : 'Eng. Ahmad Al-Janabi',
                  role: isRTL ? 'المدير التنفيذي لـ "مجموعة المعار للتقنية"' : 'CEO - Al-Ma\'ar Tech Solutions',
                  company: isRTL ? 'مجموعة المعار' : 'Al-Ma\'ar Group',
                  text: isRTL 
                    ? 'صممت لنا salyaa موقع الشركة التعريفي بأحدث التقنيات. السرعة ومستوى الحماية كانا أولويتنا وتفوقت سيلية فيها بامتياز، مع دعم احترافي مستمر على مدار الساعة يعطينا ثقة كاملة.'
                    : 'salyaa built our corporate site using cutting-edge frameworks. Speed and defense were key priorities, and they exceeded all of them with persistent support.',
                  img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'أ. مريم الشلاوي' : 'Mariam Al-Shalawi',
                  role: isRTL ? 'الرئيس التنفيذي لمنصة "سمارت الرقمية"' : 'CEO - Smart Digital Platform',
                  company: isRTL ? 'سمارت الرقمية' : 'Smart Digital',
                  text: isRTL 
                    ? 'نحتاج دائماً إلى الأداء وسرعة التحضير. تصميم المتجر الإلكتروني المتكامل والبرمجة الأنيقة من سيلية جعل موقعنا يتصدر المشهد بامتياز ويحقق أرقام مبيعات متفوقة.'
                    : 'We always demand speed and software reliability. The integrated shop and elegant engineering from salyaa elevated our brand visibility and sales values.',
                  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                }
              ].map((test, i) => (
                <div
                  key={`track-1-${i}`}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="w-[360px] sm:w-[480px] flex-shrink-0 p-8 sm:p-10 rounded-[32px] bg-[#111827]/40 backdrop-blur-md border border-white/5 relative flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-[#FBBF24]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      
                      {test.verified && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wider">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <span>{isRTL ? 'عميل موثوق' : 'Verified Partner'}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light italic">
                      "{test.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.04]">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-blue/20">
                      <img src={test.img} alt={test.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-blue transition-colors duration-300">{test.name}</h4>
                      <p className="text-slate-400 text-xs mt-0.5 font-light leading-none">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="flex gap-8" aria-hidden="true">
              {[
                {
                  name: isRTL ? 'المهندسة ريم العبيدي' : 'Eng. Reem Al-Obeidi',
                  role: isRTL ? 'مؤسس منصة "دكانك" للتجارة الرقمية' : 'Founder - Dokanek E-commerce',
                  company: isRTL ? 'دكانك فاشن' : 'Dokanek Fashion',
                  text: isRTL 
                    ? 'تعاونا مع salyaa لتصميم متجرنا الإلكتروني بالكامل. النتائج فاقت توقعاتنا بكثير؛ تضاعفت نسبة المبيعات خلال أول شهرين فقط بفضل مرونة واجهة المستخدم والسرعة الخيالية للمتجر على الهواتف.'
                    : 'We partnered with salyaa for our store redesign. The results surpassed expectations; sales doubled in two months thanks to the superb mobile speed and layout.',
                  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'المقاول ياسر الهاشمي' : 'Yasser Al-Hashemi',
                  role: isRTL ? 'المدير العام لشركة "الرافدين للمقاولات"' : 'General Manager - Al-Rafidain Contracting',
                  company: isRTL ? 'الرافدين للمقاولات' : 'Al-Rafidain Co.',
                  text: isRTL 
                    ? 'مكانة شركتنا تطلبت هوية رقمية تليق بنا وبالمشاريع الضخمة التي ننافس عليها. موقعنا السلس والجديد مدهش وساعد الشركاء بتصفح سوابق أعمالنا، وساعدنا بنيل عدة عقود فورية.'
                    : 'Our company stature required a matching elite digital presence. The new contracting site is incredible and made it simple to showcase portfolios and win bids.',
                  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'الدكتورة سارة الجابري' : 'Dr. Sara Al-Jabri',
                  role: isRTL ? 'مديرة "مجمع نيو دنت الطبي"' : 'Director - NewDent Medical Complex',
                  company: isRTL ? 'نيودنت الطبي' : 'NewDent Center',
                  text: isRTL 
                    ? 'فريق سيلية صمم لنا نظام حجز مواعيد وتجربة تصفح مريحة جداً للمراجعين. انخفضت نسبة إلغاء الحجوزات بفضل التنظيم الرائع، ولديهم التزام بالوقت والدعم الفني السريع.'
                    : 'They designed a seamless booking system and excellent user interface. Appointment cancellation dropped significantly through simple and secure reminders.',
                  img: 'https://images.unsplash.com/photo-1582750433449-64c02421a3a7?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'المهندس أحمد الجنابي' : 'Eng. Ahmad Al-Janabi',
                  role: isRTL ? 'المدير التنفيذي لـ "مجموعة المعار للتقنية"' : 'CEO - Al-Ma\'ar Tech Solutions',
                  company: isRTL ? 'مجموعة المعار' : 'Al-Ma\'ar Group',
                  text: isRTL 
                    ? 'صممت لنا salyaa موقع الشركة التعريفي بأحدث التقنيات. السرعة ومستوى الحماية كانا أولويتنا وتفوقت سيلية فيها بامتياز، مع دعم احترافي مستمر على مدار الساعة يعطينا ثقة كاملة.'
                    : 'salyaa built our corporate site using cutting-edge frameworks. Speed and defense were key priorities, and they exceeded all of them with persistent support.',
                  img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                },
                {
                  name: isRTL ? 'أ. مريم الشلاوي' : 'Mariam Al-Shalawi',
                  role: isRTL ? 'الرئيس التنفيذي لمنصة "سمارت الرقمية"' : 'CEO - Smart Digital Platform',
                  company: isRTL ? 'سمارت الرقمية' : 'Smart Digital',
                  text: isRTL 
                    ? 'نحتاج دائماً إلى الأداء وسرعة التحضير. تصميم المتجر الإلكتروني المتكامل والبرمجة الأنيقة من سيلية جعل موقعنا يتصدر المشهد بامتياز ويحقق أرقام مبيعات متفوقة.'
                    : 'We always demand speed and software reliability. The integrated shop and elegant engineering from salyaa elevated our brand visibility and sales values.',
                  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
                  verified: true
                }
              ].map((test, i) => (
                <div
                  key={`track-2-${i}`}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="w-[360px] sm:w-[480px] flex-shrink-0 p-8 sm:p-10 rounded-[32px] bg-[#111827]/40 backdrop-blur-md border border-white/5 relative flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-[#FBBF24]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      
                      {test.verified && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wider">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <span>{isRTL ? 'عميل موثوق' : 'Verified Partner'}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light italic">
                      "{test.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.04]">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-blue/20">
                      <img src={test.img} alt={test.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-blue transition-colors duration-300">{test.name}</h4>
                      <p className="text-slate-400 text-xs mt-0.5 font-light leading-none">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className={`text-4xl md:text-6xl lg:text-[70px] font-bold leading-[1.2] ${isRTL ? 'tracking-normal' : 'tracking-tighter'}`}>
            {t('ctaReadyTitle')}
          </h2>
          <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
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
      <motion.a 
        href="https://wa.me/9647882377036" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} p-4 bg-[#25D366] text-white rounded-full z-50 flex items-center justify-center`}
        animate={{ 
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 15px rgba(37, 211, 102, 0.4)",
            "0 0 35px rgba(37, 211, 102, 0.8)",
            "0 0 15px rgba(37, 211, 102, 0.4)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.15, 
          boxShadow: "0 0 45px rgba(37, 211, 102, 0.95)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
