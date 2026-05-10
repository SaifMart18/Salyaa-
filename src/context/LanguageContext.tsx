import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navbar & General
  navHome: { en: 'Home', ar: 'الرئيسية' },
  navServices: { en: 'Services', ar: 'خدماتنا' },
  navPortfolio: { en: 'Portfolio', ar: 'أعمالنا' },
  navAbout: { en: 'About', ar: 'من نحن' },
  navContact: { en: 'Contact', ar: 'اتصل بنا' },
  startProject: { en: 'Start Project', ar: 'ابدأ مشروعك' },
  
  // Hero Section Exact from Image (Salyaa Rebranded)
  heroBadge: { en: 'Salyaa Web Design Company', ar: 'شركة تصميم مواقع Salyaa' },
  heroTitle1: { en: 'Web Design Agency | We Build Your ', ar: 'شركة تصميم مواقع | نبني ' },
  heroTitleHighlight: { en: 'Digital Excellence', ar: 'تميزكم' },
  heroTitle2: { en: ' ', ar: ' الرقمي' },
  heroSub: { 
    en: 'At Salyaa, we transform your ideas into advanced digital platforms. As a web design agency, we provide integrated software solutions to increase your sales. We rely on WordPress, Next.js, and custom programming to build an exceptional user experience for our clients.', 
    ar: 'في Salyaa، نحول أفكاركم إلى منصات رقمية متطورة. بصفتنا شركة تصميم مواقع، نقدم حلولاً برمجية متكاملة لزيادة مبيعاتكم. نعتمد على أنظمة WordPress، تطبيقات Next.js، وحلول البرمجة الخاصة لنبني لعملائنا تجربة مستخدم استثنائية.' 
  },
  heroStartBtn: { en: 'Start Your Project Now', ar: 'ابدأ مشروعك الآن' },
  heroWorksBtn: { en: 'View Our Works', ar: 'عرض أعمالنا' },
  heroStatProjects: { en: 'Successful Projects', ar: 'مشروع ناجح' },
  heroStatYears: { en: 'Years of Experience', ar: 'سنوات من الخبرة' },

  // New Sections from Video
  aboutPartnerTitle: { en: 'Your Strategic Partner for Digital Success and Business Development', ar: 'شريكك الاستراتيجي للنجاح الرقمي وتطوير الأعمال' },
  aboutPartnerDesc: { en: 'At Salyaa, we go beyond core web development. We merge creative design with strategic planning to ensure your digital presence delivers clear ROI.', ar: 'في Salyaa، ندمج التصميم الإبداعي مع التخطيط الاستراتيجي لضمان أن حضورك الرقمي يحقق عائداً واضحاً على الاستثمار.' },
  aboutPoint1: { en: 'Expert team specialized in UI/UX and Web Performance', ar: 'فريق خبراء متخصصون في تجربة المستخدم (UI/UX) وتطوير الويب' },
  aboutPoint2: { en: 'High-performance software solutions with scalability', ar: 'حلول برمجية بأعلى كفاءة لضمان سرعة تصفح استثنائية' },
  aboutMoreLink: { en: 'Learn more about Salyaa', ar: 'تعرف أكثر على شركة سيلية' },

  servicesSectionTitle: { en: 'Integrated Software Solutions for Your Digital Business', ar: 'حلول برمجية متكاملة لدعم أعمالك الرقمية' },
  serviceEcommerce: { en: 'E-commerce Development', ar: 'برمجة المتاجر الإلكترونية' },
  serviceEcommerceDesc: { en: 'Strategic online stores built to maximize sales and conversion.', ar: 'نقوم بتصميم متاجر إلكترونية سريعة مع حلول الشحن وبوابات الدفع.' },
  serviceWeb: { en: 'Website Design & Dev', ar: 'تصميم وبرمجة المواقع' },
  serviceWebDesc: { en: 'Custom websites tailored to your brand identity and business goals.', ar: 'بناء مواقع احترافية بهوية تجارية واضحة تعزز حضورك الرقمي.' },
  serviceCloud: { en: 'Cloud Hosting Services', ar: 'الاستضافة السحابية الآمنة' },
  serviceCloudDesc: { en: 'High-performance, secure cloud hosting for uninterrupted business.', ar: 'مساحات استضافة سحابية آمنة تضمن استقرار موقعك وأداءه العالي.' },
  serviceSupport: { en: 'Professional Technical Support', ar: 'الدعم الفني الاحترافي' },
  serviceSupportDesc: { en: '24/7 technical monitoring and proactive maintenance for your systems.', ar: 'فريق متخصص جاهز لمساعدتكم في أي تعديل أو مشكلة تقنية.' },

  portfolioGridTitle: { en: 'Watch How We Turn Our Clients Ideas Into Reality', ar: 'شاهد كيف حولنا أفكار عملائنا إلى واقع' },
  portfolioMoreBtn: { en: 'View All Works', ar: 'عرض جميع الأعمال' },

  performanceTitle: { en: 'We Offer More Than Just Code', ar: 'نقدم أكثر من مجرد كود برمجي' },
  perf1Title: { en: 'Ultra Fast Performance', ar: 'سرعة وأداء فائق' },
  perf1Desc: { en: 'We optimize every line of code to ensure lightning-fast loading times.', ar: 'نضمن تحميل الصفحات بسرعة فائقة لزيادة رضا المستخدمين.' },
  perf2Title: { en: 'Security & Reliability', ar: 'أمان وموثوقية' },
  perf2Desc: { en: 'Robust security architecture to protect your business data and user privacy.', ar: 'نظام حماية متكامل يحمي البيانات ويمنع التهديدات.' },
  perf3Title: { en: 'Ongoing Technical Support', ar: 'دعم فني مستمر' },
  perf3Desc: { en: 'We are your long-term partners, providing continuous updates and support.', ar: 'نعمل كشركاء لفترة طويلة ونقدم التحديثات والتحسينات اللازمة.' },

  testimonialsTitle: { en: 'Success Partners Trust Us', ar: 'شركاء النجاح يثقون بنا' },
  testimonial1Name: { en: 'Mariam Al-Shalawi', ar: 'مريم الشلاوي' },
  testimonial1Role: { en: 'CEO - Smart Digital Solutions', ar: 'المدير التنفيذي - سمارت للخدمات الرقمية' },
  testimonial1Text: { 
    en: 'We needed reliability and speed. The integrated e-commerce services and Salyaa development made our site a leader in our industry from day one.', 
    ar: 'كنا نحتاج موثوقية وبرمجة، خدمات المتجر الإلكتروني المتكاملة بذكاء وتطوير Salyaa جعلت من موقعنا واجهة وسجل الريادة من اليوم الأول.' 
  },
  testimonial2Name: { en: 'Khalid Al-Mansour', ar: 'خالد المنصور' },
  testimonial2Role: { en: 'Executive Director - Al-Ma\'ar Information Technology', ar: 'المدير التنفيذي - شركة المعار لتقنية المعلومات' },
  testimonial2Text: { 
    en: 'Salyaa developed our corporate site with high professionalism and an exceptional browsing experience that helped us achieve our goals effectively.', 
    ar: 'لقد وفرنا مع Salyaa موقع شركة معمار للتطوير الذكية بشكل احترافي مع تجربة تصفح رائعة وسريعة جعلتنا نحقق أهدافنا بفعالية.' 
  },
  faqSectionTitle: { en: 'Have Questions? We Have Answers', ar: 'لديك استفسارات؟ لدينا الإجابات' },
  ctaReadyTitle: { en: 'Ready to turn your vision into reality?', ar: 'جاهز لتحويل رؤيتك إلى واقع؟' },
  ctaReadySub: { en: 'Contact us today to discuss your project and let us build the perfect digital presence for your company.', ar: 'تواصل معنا اليوم لمناقشة مشروعك، وسنقوم بتصميم وتطوير حضور رقمي احترافي لشركتك.' },
  
  // Trust Section
  trustedBy: { en: 'Trusted by modern businesses worldwide', ar: 'موثوق به من قبل الشركات الحديثة في جميع أنحاء العالم' },
  
  // Services
  servicesBadge: { en: 'Our Expertise', ar: 'خبراتنا' },
  servicesTitle: { en: 'Design-led services for startups', ar: 'خدمات تركز على التصميم للشركات الناشئة' },
  servicesSub: { en: 'Expertly crafted solutions that transform how users interact with your business.', ar: 'حلول تم تصميمها باحترافية تغير طريقة تفاعل المستخدمين مع عملك.' },
  learnMore: { en: 'Learn More', ar: 'اقرأ المزيد' },
  
  // Service Cards
  sdTitle: { en: 'Web Design', ar: 'تصميم المواقع' },
  sdDesc: { en: 'Premium, aesthetically pleasing website designs that capture your brand\'s essence.', ar: 'تصاميم مواقع متميزة وجذابة تعكس جوهر علامتك التجارية.' },
  devTitle: { en: 'Development', ar: 'التطوير' },
  devDesc: { en: 'High-performance, scalable web applications built with the latest technologies.', ar: 'تطبيقات ويب عالية الأداء وقابلة للتوسع مبنية بأحدث التقنيات.' },
  uxTitle: { en: 'UI/UX Design', ar: 'تصميم واجهة المستخدم' },
  uxDesc: { en: 'User-centric interfaces that provide seamless experiences and drive interactions.', ar: 'واجهات تركز على المستخدم توفر تجارب سلسة وتعزز التفاعل.' },
  seoTitle: { en: 'SEO Optimization', ar: 'تحسين محركات البحث' },
  seoDesc: { en: 'Data-driven strategies to boost your search rankings and drive organic traffic.', ar: 'استراتيجيات تعتمد على البيانات لتعزيز ترتيبك وزيادة الزيارات.' },
  brandTitle: { en: 'Branding', ar: 'الهوية التجارية' },
  brandDesc: { en: 'Cohesive visual identities that help your business stand out and build trust.', ar: 'هويات بصرية متماسكة تساعد عملك على التميز وبناء الثقة.' },
  fastTitle: { en: 'Fast Delivery', ar: 'سرعة التنفيذ' },
  fastDesc: { en: 'Agile workflows that ensure your project is delivered on time without compromise.', ar: 'سير عمل مرن يضمن تسليم مشروعك في الوقت المحدد دون تنازلات.' },

  // CTA Section
  ctaTitle: { en: 'Let’s Build Something Amazing Together', ar: 'لنبدأ في بناء شيء مذهل معاً' },
  ctaSub: { en: 'Ready to take your digital experience to the next level? Join 100+ brands succeeding with our tailored solutions.', ar: 'هل أنت مستعد لنقل تجربتك الرقمية إلى المستوى التالي؟ انضم إلى أكثر من 100 علامة تجارية ناجحة مع حلولنا المخصصة.' },
  bookConsult: { en: 'Book a Free Consultation', ar: 'احجز استشارة مجانية' },

  // Home Page New Sections
  homeAboutTitle: { en: 'We Are More Than Just An Agency', ar: 'نحن أكثر من مجرد وكالة' },
  homeAboutSub: { en: 'We are your strategic partners in the digital world. Our team combines creative artistry with technical precision to build products that redefine industries.', ar: 'نحن شركاؤكم الاستراتيجيون في العالم الرقمي. يجمع فريقنا بين الفن الإبداعي والدقة التقنية لبناء منتجات تعيد تعريف الصناعات.' },
  homeChooseTitle: { en: 'Why Brands Choose Salyaa', ar: 'لماذا تختار العلامات التجارية سيلية' },
  homeChooseSub: { en: 'We don\'t follow trends; we set them. Our process ensures that your digital identity is not just seen, but remembered.', ar: 'نحن لا نتبع الصيحات، بل نصنعها. تضمن عمليتنا أن هويتك الرقمية ليست مجرد رؤية، بل تظل في الذاكرة.' },
  stat1Label: { en: 'Success Projects', ar: 'مشروع ناجح' },
  stat2Label: { en: 'Happy Clients', ar: 'عميل سعيد' },
  stat3Label: { en: 'Years Experience', ar: 'سنوات خبرة' },
  stat4Label: { en: 'Creative Experts', ar: 'خبير إبداعي' },
  feature1Title: { en: 'Precision Design', ar: 'تصميم دقيق' },
  feature1Desc: { en: 'Every pixel is placed with intent, ensuring a visual harmony that speaks to your users.', ar: 'كل بكسل يوضع بقصد، مما يضمن تناغماً بصرياً يخاطب مستخدميك.' },
  feature2Title: { en: 'Future-Proof Tech', ar: 'تقنيات المستقبل' },
  feature2Desc: { en: 'We use modern frameworks that guarantee speed, security, and scalability for years to come.', ar: 'نحن نستخدم أطر عمل حديثة تضمن السرعة والأمان وقابلية الرفع لسنوات قادمة.' },
  feature3Title: { en: 'Strategic Growth', ar: 'نمو استراتيجي' },
  feature3Desc: { en: 'Our websites are built to convert, turning visitors into long-term brand advocates.', ar: 'تم بناء مواقعنا للتحويل، وتحويل الزوار إلى داعمين للعلامة التجارية على المدى الطويل.' },

  // Footer
  footerDesc: { en: 'We build digital experiences that convert. Premium web design and development for modern brands.', ar: 'نحن نصمم تجارب رقمية تهدف للتحويل. تصميم وتطوير مواقع متميزة للعلامات التجارية الحديثة.' },
  footerServices: { en: 'Services', ar: 'الخدمات' },
  footerExplore: { en: 'Explore', ar: 'استكشف' },
  footerContact: { en: 'Contact', ar: 'الاتصال' },
  footerRights: { en: 'Salyaa Agency. All rights reserved.', ar: 'وكالة سيلية. جميع الحقوق محفوظة.' },
  privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  terms: { en: 'Terms of Service', ar: 'شروط الخدمة' },
};

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string) => {
    if (!translations[key]) return key;
    return translations[key][language];
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, isRTL }}>
      <div className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
