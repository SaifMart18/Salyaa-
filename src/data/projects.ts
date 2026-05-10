
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
    desc: isRTL ? 'شركة رائدة في مجال الإنشاءات تقدم حلول بناء شاملة بدقة وتميز.' : 'A leading construction company providing comprehensive building solutions with precision and excellence.',
    details: isRTL 
      ? 'موقع إلكتروني متكامل لشركة المركب للمقاولات، يستعرض خبرات الشركة في مجال البناء والتشييد، مع تسليط الضوء على المشاريع الكبرى والخدمات الهندسية المتقدمة.'
      : 'A comprehensive website for Al-Markab Contracting, showcasing the company\'s expertise in construction and building, highlighting major projects and advanced engineering services.',
    features: isRTL 
      ? ['عرض المشاريعPortfolio', 'خدمات المقاولات العامة', 'واجهة مستخدم عصرية', 'متوافق مع الجوال', 'نظام طلب عرض سعر']
      : ['Project Portfolio', 'General Contracting Services', 'Modern UI/UX', 'Mobile Responsive', 'Quotation Request System']
  },
  { 
    id: 2, 
    slug: 'ghadir-al-warid',
    title: isRTL ? 'متجر غدير الورد' : 'Ghadir Al-Warid Store', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2070&auto=format&fit=crop',
    url: 'https://ghadir-al-warid.vercel.app/',
    desc: isRTL ? 'متجر راقي للزهور والهدايا يقدم تنسيقات فريدة ومجموعات فاخرة.' : 'A premium floral and gift shop offering unique arrangements and luxury collections.',
    details: isRTL
      ? 'منصة تجارة إلكترونية متخصصة في بيع الزهور والهدايا، تتميز بتصميم جذاب وسهولة في التصفح والشراء، مع نظام دفع آمن.'
      : 'An e-commerce platform specializing in flowers and gifts, featuring an attractive design, easy browsing, and a secure payment system.',
    features: isRTL
      ? ['كتالوج منتجات تفاعلي', 'نظام سلة تسوق متقدم', 'خيارات تغليف هدايا', 'تتبع الطلبات', 'دفع إلكتروني آمن']
      : ['Interactive Product Catalog', 'Advanced Shopping Cart', 'Gift Wrapping Options', 'Order Tracking', 'Secure Online Payment']
  },
  { 
    id: 3, 
    slug: 'abdulmalik-hamid',
    title: isRTL ? 'مكتب المحامي عبد الملك حامد' : 'Abdulmalik Hamid Law Office', 
    category: 'Professional Services', 
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
    url: 'https://abdulmalik-hamid-law-offi-ladg.arcada.app',
    desc: isRTL ? 'خدمات قانونية احترافية تقدم استشارات وتمثيلاً خبيراً في مختلف المجالات القانونية.' : 'Professional legal services providing expert counsel and representation in various legal domains.',
    details: isRTL
      ? 'موقع رسمي لمكتب محاماة يستعرض الخدمات القانونية المختلفة، مع إمكانية حجز استشارات قانونية والتعرف على فريق العمل.'
      : 'Official website for a law firm showcasing various legal services, with the ability to book consultations and meet the legal team.',
    features: isRTL
      ? ['حجز استشارات أونلاين', 'عرض مجالات الاختصاص', 'مدونة قانونية', 'نماذج تواصل رسمية', 'متعدد اللغات']
      : ['Online Consultation Booking', 'Practice Areas Display', 'Legal Blog', 'Official Contact Forms', 'Multi-language Support']
  },
  { 
    id: 4, 
    slug: 'al-masa-vet',
    title: isRTL ? 'عيادة الماسة البيطرية' : 'Al-Masa Vet Clinic', 
    category: 'Medical', 
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop',
    url: 'https://almasa-vet-clinic-uqpu.arcada.app',
    desc: isRTL ? 'عيادة مخصصة لرعاية الحيوانات تقدم خدمات بيطرية عالية المستوى وبرامج صحية.' : 'Dedicated animal care clinic providing top-tier veterinary services and wellness programs.',
    details: isRTL
      ? 'منصة رقمية لعيادة بيطرية تهدف لتسهيل الوصول للخدمات الصحية للحيوانات الأليفة، مع معلومات شاملة عن الرعاية والوقاية.'
      : 'A digital platform for a veterinary clinic aimed at facilitating access to pet healthcare services, with comprehensive care and prevention info.',
    features: isRTL
      ? ['حجز مواعيد بيطرية', 'سجلات طبية إلكترونية', 'متجر مستلزمات طبية', 'نصائح رعاية الحيوان', 'خرائط الموقع']
      : ['Vet Appointment Booking', 'Electronic Medical Records', 'Medical Supplies Store', 'Pet Care Tips', 'Location Maps']
  },
  { 
    id: 5, 
    slug: 'talal-flowers',
    title: isRTL ? 'متجر تلال الزهور' : 'Talal Flowers Shop', 
    category: 'E-commerce', 
    image: 'https://lh3.googleusercontent.com/d/1A5-_LSb6mHnxHHC2A22aElvwH2RNOkXP',
    url: 'https://talal-flowers-shop-sdqk.arcada.app',
    desc: isRTL ? 'بوابة إلكترونية لبيع أرقى أنواع الزهور وتنسيقات الهدايا بلمسة جمالية فريدة.' : 'An online portal selling the finest flowers and gift arrangements with a unique aesthetic touch.',
    details: isRTL
      ? 'متجر إلكتروني عصري يركز على تجربة المستخدم البصرية لبيع أرقى أنواع الزهور وتنسيقات المناسبات الخاصة.'
      : 'A modern e-commerce store focusing on the visual user experience for selling premium flowers and special event arrangements.',
    features: isRTL
      ? ['تصميم بساطي جذاب', 'ترشيح المنتجات حسب النوع', 'بطاقات إهداء مخصصة', 'توصيل سريع', 'دفع ببطاقات الائتمان']
      : ['Attractive Minimal Design', 'Filter Products by Type', 'Custom Gift Cards', 'Fast Delivery', 'Credit Card Payment']
  },
  { 
    id: 6, 
    slug: 'video-editor',
    title: isRTL ? 'محرر فيديو' : 'Video Editor', 
    category: 'Creative', 
    image: 'https://lh3.googleusercontent.com/d/1tbDAZVbIEApgusoLaWrxAef_GbAJPm4y',
    url: 'https://videto-video-editor-obnt.arcada.app',
    desc: isRTL ? 'منصة عرض احترافية تبرز مهارات الإخراج والمونتاج وصناعة المحتوى البصري.' : 'A professional showcase platform highlighting skills in directing, editing, and visual content creation.',
    details: isRTL
      ? 'موقع محفظة أعمال (Portfolio) لمصمم فيديو يركز على عرض جودة الإنتاج البصري والقدرة على سرد القصص من خلال المونتاج.'
      : 'A portfolio website for a video editor focused on showcasing visual production quality and the ability to tell stories through editing.',
    features: isRTL
      ? ['معرض فيديوهات مدمج', 'تسجيل لقطات الإنتاج', 'خدمات المونتاج وتصحيح الألوان', 'روابط التواصل الاجتماعي', 'سيرة ذاتية تفاعلية']
      : ['Integrated Video Gallery', 'Behind the Scenes Footage', 'Editing & Color Grading Services', 'Social Media Links', 'Interactive Resume']
  },
];
