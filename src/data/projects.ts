export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  url: string;
  desc: string;
  details: string;
  features: string[];
}

export const getProjects = (isRTL: boolean): Project[] => [
  { 
    id: 1, 
    slug: 'al-markab',
    title: isRTL ? 'شركة المركب للمقاولات' : 'Al-Markab Contracting', 
    category: 'Contracting', 
    image: 'https://lh3.googleusercontent.com/d/1AaImRga_EL6liq4PgOpv8EKez2A8aat-',
    url: 'https://6bedsa.vercel.app',
    desc: isRTL 
      ? 'بوابة رقمية متكاملة لشركة مقاولات وإنشاءات كبرى تستعرض المنجزات العمرانية والمشاريع السكنية الفاخرة بشكل هندسي منسق.' 
      : 'A premium construction portal featuring modern layouts, engineering showcases, and robust interactive portfolios.',
    details: isRTL 
      ? 'موقع إلكتروني متكامل لشركة المركب للمقاولات، يستعرض خبرات الشركة في مجال البناء والتشييد، مع تسليط الضوء على المشاريع الكبرى والخدمات الهندسية المتقدمة واستمارة طلب عرض السعر المباشر.'
      : 'A comprehensive website for Al-Markab Contracting, showcasing the company\'s expertise in construction and building, highlighting major projects and advanced engineering services with custom quota request tools.',
    features: isRTL 
      ? ['عرض المشاريع والمنجزات', 'خدمات المقاولات العامة', 'واجهة مستخدم عصرية', 'متوافق بالكامل مع الجوال', 'نظام متطور لطلب عرض سعر']
      : ['Project Portfolio Showcase', 'General Contracting Services', 'Modern High-Contrast UI', 'Mobile Responsive Layout', 'Quotation Request System']
  },
  { 
    id: 2, 
    slug: 'pearl-clean',
    title: isRTL ? 'شركة لؤلؤة النظافة للخدمات المنزلية' : 'Pearl Clean Services', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    url: 'https://pearl-clean-saudi.lovable.app',
    desc: isRTL 
      ? 'منصة حجز إلكترونية تفاعلية لخدمات التنظيف والتعقيم في المملكة العربية السعودية، صممت بأسلوب عصري يسهل تجربة المستخدم.' 
      : 'A high-conversion service booking showcase for domestic and office cleaning services, tailored with premium UI/UX.',
    details: isRTL 
      ? 'موقع ويب فاخر واحترافي مصمم خصيصاً لشركات التنظيف المتميزة، ليتيح للعملاء حجز المواعيد، واختيار الباقات المناسبة، والتواصل الفوري مع فريق صيانة النظافة والتعقيم.'
      : 'A high-end service platform engineered for professional cleaning agencies, letting users easily schedule services, choose specific plans, and instantly chat with support.',
    features: isRTL 
      ? ['حجز مواعيد واستفسار فوري', 'باقات تنظيف مريحة', 'واجهات سريعة تزيد المبيعات', 'دعم فني وتواصل سريع', 'خرائط تغطية المناطق']
      : ['Instant Appointment Booking', 'Flexible Pricing Packages', 'Conversion-Focused Layout', 'Seamless Customer Support', 'Interactive Service Area Map']
  },
  { 
    id: 3, 
    slug: 'alaml-vision',
    title: isRTL ? 'منصة مدرسة رؤية الأمل التعليمية' : 'Al-Amal Vision School', 
    category: 'Education', 
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070&auto=format&fit=crop',
    url: 'https://alaml-vision-web.lovable.app',
    desc: isRTL 
      ? 'بوابة رقمية تفاعلية شاملة لمدرسة رؤية الأمل بهدف تيسير تواصل الطلاب والكادر التعليمي وعرض المناهج والأنشطة الإبداعية.' 
      : 'A modern, dynamic academic portal designed to bridges communication between school administration, parents, and students.',
    details: isRTL 
      ? 'موقع ويب تعليمي متكامل يستعرض رؤية مدرسة رؤية الأمل ورسالتها السامية، مع توفير واجهات لعرض الأنشطة الأكاديمية والفعاليات والأخبار الهامة لأولياء الأمور.'
      : 'An educational school web app detailing academic programs, creative student events, latest news, and a smooth admission portal for parents and students.',
    features: isRTL 
      ? ['بوابة القبول والتسجيل الالكتروني', 'أحدث أخبار وفعاليات المدرسة', 'عرض شامل للهيئة الأكاديمية', 'أدوات تفاعل سهلة ومريحة', 'متكامل مع وسائل التواصل']
      : ['Structured Online Admissions', 'Dynamic News & Events Carousel', 'Academic Department Showcase', 'Interactive Inquiry Forms', 'Social Media Integrations']
  },
  { 
    id: 4, 
    slug: 'el-aldil-law',
    title: isRTL ? 'شركة العدل للمحاماة والاستشارات' : 'El-Adil Law Firm', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    url: 'https://el-aldil-law.lovable.app',
    desc: isRTL 
      ? 'هوية قانونية مرموقة وموقع استشارات ذكي يستعرض مجالات الاختصاص والتميز المهني والتمثيل القضائي للشركات والأفراد.' 
      : 'A prestigious legal platform showcasing top-tier advocacy, diverse practice defense areas, and trusted business legal consulting.',
    details: isRTL 
      ? 'منصة رسمية ممتازة لشركة العدل للمحاماة والاستشارات القانونية، تجمع بين جودة التصميم والتوثيق القانوني الذكي وتسهيل تواصل الموكلين مع المستشارين.'
      : 'Official legal presentation for El-Adil Law Firm, built with strong typographic elegance, legal practice highlights, and secured contact entryways for rapid consulting inquiries.',
    features: isRTL 
      ? ['طلب استشارة قانونية مشفرة', 'استعراض تخصصات الدفاع والقوانين', 'سجل نجاحات وقضايا الشركة', 'مقالات للمستهلك القانوني', 'تغطية واسعة للاستشارات المخصصة']
      : ['Secure Legal Consultation Form', 'Comprehensive Practice Areas', 'Professional Law Firm Overview', 'Legal Advisory Articles Section', 'Direct Attorney Communication']
  },
  { 
    id: 5, 
    slug: 'regal-legal',
    title: isRTL ? 'مكتب علي العيساوي للمحاماة' : 'Ali Al-Isaoui Law Office', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop',
    url: 'https://regal-legal-studio.lovable.app',
    desc: isRTL 
      ? 'واجهة تفاعلية رصينة لتقديم الخدمات الدفاعية والاستشارات الفردية والتجارية بمستوى غير مسبوق من الأمان والثقة.' 
      : 'An elegant legal showcase for Ali Al-Isaoui’s law chambers, optimized for corporate defense and client trust.',
    details: isRTL 
      ? 'موقع مخصص لمكتب مستشار القانون الرائد علي العيساوي، يبرز التميز القانوني والخبرات المستحقة وتسهيل حجز والتقاء العملاء مع طاقم المحامين المتخصصين.'
      : 'Chamber website for the elite attorney and legal counselor Ali Al-Isaoui, constructed to exhibit strong legal competence, custom caseloads, and secure appointments booking.',
    features: isRTL 
      ? ['حجز جدول استشارات', 'تعريف بقيم وأخلاقيات المكتب', 'ساعات العمل ووسائل الاتصال المباشر', 'دعم فني كامل للمستندات', 'متوافق مع الهواتف الذكية والأجهزة اللوحية']
      : ['Interactive Booking Assistant', 'Direct Legal Consultation Desk', 'Core Ethics & Team Profiles', 'Client Testamonials & Trust Icons', 'Fully Responsive UX Layout']
  },
  { 
    id: 6, 
    slug: 'ambition-blueprint',
    title: isRTL ? 'شركة الطموح للمقاولات العامة' : 'Ambition Contracting Studio', 
    category: 'Contracting', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    url: 'https://ambition-blueprint-studio.lovable.app',
    desc: isRTL 
      ? 'موقع معماري فاخر وتشييد بنيوي يستعرض المخططات الكبرى للخدمات الإنشائية وبنية المدن الحديثة بطابع بساطي فريد.' 
      : 'A state-of-the-art contracting portfolio crafted to demonstrate massive architecture blueprints and modern engineering.',
    details: isRTL 
      ? 'منصة شركة الطموح للمقاولات العامة، مصممة لاستعراض الخطوات التفصيلية للبناء والتشييد، والاهتمام بالسلامة المهنية، وضمان الموثوقية للمستثمرين.'
      : 'A landmark engineering platform for Ambition Contracting, highlighting massive development scales, safety measures, structural mastery, and interactive investor galleries.',
    features: isRTL 
      ? ['معرض صور تفاعلي للمشاريع', 'الرؤية والمخططات الهندسية المستدامة', 'طلب تقديم عرض سعر فوري', 'التصاميم والمباني الإبداعية', 'الشهادات والمواصفات المعتمدة']
      : ['Rich Multi-category Architectural Gallery', 'Sustainability Planning Showcase', 'Instant Bid Request Flow', 'Interactive Structural Blueprints', 'Premium Client Testimonials']
  },
  { 
    id: 7, 
    slug: 'dari-clean',
    title: isRTL ? 'شركة داري كلين لخدمات التنظيف' : 'Dari Clean Cleaning', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop',
    url: 'https://dari-clean-qx4n.arcada.app',
    desc: isRTL 
      ? 'منصة متقدمة وبسيطة تتيح تجربة حجز دقيقة لخدمات تنظيف الفلل، الشقق، والمطابخ بأحدث المعايير الصحية والبيئية.' 
      : 'A fluid service booking portal for residential home care and sanitation with modular clean packages.',
    details: isRTL 
      ? 'موقع "داري كلين" المتطور، يثري تجربة تنظيف المنزل عبر واجهات غاية في الأناقة لحساب المساحة وطلب الخدمة والتواصل مباشرة عبر الهواتف والواتساب.'
      : 'A smart web solution for Dari Clean Home services, engineered to allow swift domestic cleaning estimations, rapid callouts, and multi-tier booking packages.',
    features: isRTL 
      ? ['أسعار وخدمات واضحة وسريعة', 'طلب عاملات بنظام الساعة', 'تواصل مباشر بمرونة تامة', 'متجر الباقات المتكاملة', 'تقييمات العملاء والآراء']
      : ['Transparent & Structured Pricing', 'Hourly and Daily maid service scheduling', 'Seamless Chat & WhatsApp Action buttons', 'Detailed Cleaning Checklists', 'High-speed load performance']
  },
  { 
    id: 8, 
    slug: 'white-ice',
    title: isRTL ? 'شركة وايت آيس لتركيب وصيانة التكييف' : 'White Ice AC Services', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    url: 'https://white-ice-ac-qf0q.arcada.app',
    desc: isRTL 
      ? 'بوابة الكترونية لحجز خدمات صيانة، غسيل، وتركيب التكييف المركزي والمنزلي بسرعة بالغة لخدمة العملاء بأوقات الحرارة الشديدة.' 
      : 'Highly responsive maintenance scheduler and service showcase built for advanced heating, cooling and ventilation agencies.',
    details: isRTL 
      ? 'موقع شركة "وايت آيس" هو الشريك الرائد لحر الصيف الشديد، فهو يوفر للعملاء آلية فحص وجدولة لتركيب التكييف المنزلي بأقصى سرعة ومعايير هندسية معتمدة.'
      : 'The official digital service portal for White Ice AC, created with high conversion-rate features to coordinate Emergency calling, diagnostic dispatch, and system ventilation installations.',
    features: isRTL 
      ? ['جدولة صيانة مستعجلة', 'خدمات تركيب وصيانة متكاملة', 'تقدير أسعار المكيفات أونلاين', 'عرض لخطوات العمل السليم', 'قناة دعم عملاء فورية']
      : ['Emergency Repair Dispatch Button', 'Complete Installation Guides', 'AC Repair Price Estimation', 'HVAC Performance Checklists', 'Direct Technician Contact Channel']
  },
  { 
    id: 9, 
    slug: 'ghadir-al-warid',
    title: isRTL ? 'متجر غدير الورد الإلكتروني' : 'Ghadir Al-Warid Store', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2070&auto=format&fit=crop',
    url: 'https://ghadir-al-warid.vercel.app/',
    desc: isRTL ? 'متجر راقي للزهور والهدايا يقدم تنسيقات فريدة ومجموعات فاخرة وتوصيل فوري سريع.' : 'A premium floral and gift shop offering unique arrangements, customized packaging and luxury express delivery.',
    details: isRTL
      ? 'منصة تجارة إلكترونية متخصصة في بيع الزهور والهدايا، تتميز بتصميم جذاب وسهولة في التصفح والشراء، مع نظام دفع آمن وحجز المناسبات.'
      : 'An e-commerce platform specializing in flowers and gifts, featuring an attractive design, easy browsing, and a secure payment system with custom gift packaging guides.',
    features: isRTL
      ? ['كتالوج منتجات تفاعلي وبصري', 'نظام سلة تسوق متقدم', 'خيارات تغليف هدايا مخصصة', 'تتبع ذكي للطلبات', 'دفع إلكتروني متكامل وآمن']
      : ['Interactive Product Catalog', 'Advanced Shopping Cart', 'Gift Wrapping Options', 'Realtime Order Tracking', 'Secure Online Payments Gateway']
  },
  { 
    id: 10, 
    slug: 'abdulmalik-hamid',
    title: isRTL ? 'مكتب المحامي عبد الملك حامد' : 'Abdulmalik Hamid Law Office', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
    url: 'https://abdulmalik-hamid-law-offi-ladg.arcada.app',
    desc: isRTL ? 'خدمات قانونية احترافية تقدم استشارات قضائية مخصصة وتمثيلاً خبيراً أمام المحاكم بكفاءة عالية.' : 'Professional legal services providing expert counsel and elite representation in various legal and corporate domains.',
    details: isRTL
      ? 'موقع رسمي لمكتب محاماة يستعرض الخدمات القانونية المختلفة، مع إمكانية حجز استشارات قانونية والتعرف على فريق العمل والنجاحات القضائية.'
      : 'Official website for a law firm showcasing various legal services, with the ability to book consultations and meet the elite legal advisory team.',
    features: isRTL
      ? ['حجز استشارات أونلاين مجدول', 'عرض مجالات الاختصاص بدقة', 'مدونة قانونية معرفية', 'نماذج تواصل مشفرة وآمنة', 'دعم متعدد اللغات لرجال الأعمال']
      : ['Online Consultation Scheduler', 'Detailed Practice Areas Display', 'Legal Knowledge Center', 'Official Encrypted Contact Forms', 'Multi-language Business Support']
  },
  { 
    id: 11, 
    slug: 'al-masa-vet',
    title: isRTL ? 'عيادة الماسة الرائدة البيطرية' : 'Al-Masa Vet Clinic', 
    category: 'Medical', 
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop',
    url: 'https://almasa-vet-clinic-uqpu.arcada.app',
    desc: isRTL ? 'عيادة مخصصة لرعاية الحيوانات تقدم خدمات بيطرية عالية المستوى وبرامج صحية احترافية للغاية.' : 'Dedicated animal care clinic providing top-tier veterinary operations, digital diagnostics and wellness programs.',
    details: isRTL
      ? 'منصة رقمية لعيادة بيطرية تهدف لتسهيل الوصول للخدمات الصحية للحيوانات الأليفة، مع معلومات شاملة عن الرعاية والوقاية والتطعيمات.'
      : 'A digital platform for an advanced veterinary clinic aimed at facilitating access to pet healthcare services, with comprehensive care, emergency response, and immunization tracking.',
    features: isRTL
      ? ['حجز مواعيد واستفسار بيطري', 'سجلات طبية مشفرة', 'تواصل سريع مع الطبيب بموقع فوري', 'نصائح الرعاية للحيوانات الأليفة', 'جدول التطعيمات الرقمي']
      : ['Vet Appointment Booking System', 'Electronic Medical Records Hub', 'Direct Vet Emergency Contact', 'Pet Care Digital Guidelines', 'Location Integration with Google Maps']
  },
  { 
    id: 12, 
    slug: 'talal-flowers',
    title: isRTL ? 'متجر تلال الزهور الفاخر' : 'Talal Flowers Shop', 
    category: 'E-commerce', 
    image: 'https://lh3.googleusercontent.com/d/1A5-_LSb6mHnxHHC2A22aElvwH2RNOkXP',
    url: 'https://talal-flowers-shop-sdqk.arcada.app',
    desc: isRTL ? 'بوابة إلكترونية لبيع أرقى أنواع الزهور وتنسيقات الهدايا بلمسية جمالية إبداعية مبهرة ونظام بيع آمن.' : 'An online portal selling the finest global flowers and boutique gift arrangements with high user retention.',
    details: isRTL
      ? 'متجر إلكتروني عصري يركز على تجربة المستخدم البصرية لبيع أرقى أنواع الزهور وتنسيقات المناسبات وحزم الأعراس والمؤتمرات الكبرى.'
      : 'A modern e-commerce platform focusing on high aesthetics for selling premium flowers and executing customized corporate events setup.',
    features: isRTL
      ? ['تصميم بساطي لافت وأنيق', 'ترشيح المنتجات وتصفية دقيقة', 'بطاقات إهداء مخصصة للعملاء', 'توصيل عاجل ومجدول بمرونة', 'دفع فوري بكل الطرق المتاحة']
      : ['Attractive Minimal Layout', 'Advanced Search Filters', 'On-Checkout Custom Greeting Cards', 'Same-Day Delivery Scheduling', 'Secure Card Payments Integration']
  },
  { 
    id: 13, 
    slug: 'video-editor',
    title: isRTL ? 'منصة مخرج الأفلام وصانع الفيديو' : 'Visual Director & Video Editor', 
    category: 'Creative', 
    image: 'https://lh3.googleusercontent.com/d/1tbDAZVbIEApgusoLaWrxAef_GbAJPm4y',
    url: 'https://videto-video-editor-obnt.arcada.app',
    desc: isRTL ? 'منصة عرض سينمائية مبهرة تبرز مهارات الإخراج والدمج البصري والمونتاج لإنتاج لقطات ملهمة.' : 'A premium cinematic showreel and motion portfolio outlining skills in visual direction and editing.',
    details: isRTL
      ? 'موقع محفظة أعمال (Portfolio) لمصمم فيديو وصانع أفلام يركز على استعراض جودة الإنتاج البصري وتصميم المؤثرات البصرية وتسهيل التوظيف والتعاقد.'
      : 'A premium portfolio showcase for film makers and video editors to list high-definition videos, behind-the-scenes diaries, and drive custom creative contracts.',
    features: isRTL
      ? ['معرض فيديوهات فائق السرعة', 'لقطات ما خلف الكواليس', 'مجالات المونتاج وتحسين الألوان', 'روابط التواصل والتوظيف', 'ملف سيرة ذاتية تفاعلية جذابة']
      : ['High-Performance Video Playback', 'Production Diaries Module', 'Color Grading & FX Showcases', 'Direct Contract Channels', 'Interactive Client Board Room']
  }
];
