import { motion } from 'motion/react';
import { 
  Globe, 
  ShoppingBag, 
  Zap, 
  Cpu, 
  Server, 
  Link as LinkIcon, 
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { isRTL } = useLanguage();

  const services = [
    {
      id: "01",
      icon: <Globe className="w-10 h-10" />,
      title: isRTL ? 'تصميم المواقع الإلكترونية' : 'Web Design',
      desc: isRTL 
        ? 'نبتكر واجهات رقمية تأسر الحواس وتعكس هوية علامتك التجارية بدقة متناهية. نركز على تجربة المستخدم والأداء المتفوق لتوليد أفضل النتائج.' 
        : 'We create digital interfaces that captivate the senses and reflect your brand identity with extreme precision. We focus on UX and superior performance.',
      features: isRTL ? ['تصميم عصري', 'متجاوب تماماً', 'تجربة مستخدم سلسة'] : ['Modern Design', 'Fully Responsive', 'Smooth UX'],
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      id: "02",
      icon: <ShoppingBag className="w-10 h-10" />,
      title: isRTL ? 'تصميم المتاجر الإلكترونية' : 'E-commerce Design',
      desc: isRTL 
        ? 'نحول متجرك إلى آلة بيع متكاملة. نصمم منصات تجارة إلكترونية تركز على تحويل الزوار إلى عملاء دائمين مع سهولة فائقة في نظام الإدارة.' 
        : 'We turn your store into a complete selling machine. We design e-commerce platforms focused on converting visitors into loyal customers with ease of management.',
      features: isRTL ? ['بوابات دفع آمنة', 'إدارة المخزون', 'تحسين التحويل'] : ['Secure Payments', 'Inventory Management', 'Conversion Optimization'],
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      id: "03",
      icon: <Zap className="w-10 h-10" />,
      title: isRTL ? 'صفحات الهبوط' : 'Landing Pages',
      desc: isRTL 
        ? 'صفحات مصممة خصيصاً لحملاتك التسويقية. نركز على قوة الرسالة والوضوح التام لدفع المستخدم لاتخاذ إجراء فور رؤية الصفحة مباشرة.' 
        : 'Specially designed pages for your marketing campaigns. We focus on message strength and total clarity to drive the user to take action immediately.',
      features: isRTL ? ['سرعة تحميل فائقة', 'CTA قوي', 'تحليل البيانات'] : ['Super Fast Loading', 'Strong CTA', 'Data Analytics'],
      color: 'bg-yellow-500/10 text-yellow-500'
    },
    {
      id: "04",
      icon: <Cpu className="w-10 h-10" />,
      title: isRTL ? 'الأتمتة الذكية' : 'Smart Automation',
      desc: isRTL 
        ? 'دع التكنولوجيا تعمل بدلاً عنك. نبتكر أنظمة أتمتة توفر وقتك وجهدك، من خلال ربط تطبيقاتك وتحسين سير العمل اليومي بذكاء كلي.' 
        : 'Let technology work for you. We innovate automation systems that save your time and effort by connecting your apps and optimizing daily workflows.',
      features: isRTL ? ['ربط الأنظمة', 'أتمتة البريد', 'تحسين الإنتاجية'] : ['System Integration', 'Email Automation', 'Productivity Boost'],
      color: 'bg-emerald-500/10 text-emerald-400'
    },
    {
      id: "05",
      icon: <Server className="w-10 h-10" />,
      title: isRTL ? 'استضافة المواقع' : 'Web Hosting',
      desc: isRTL 
        ? 'نوفر لك بيئة استضافة آمنة، سريعة، وموثوقة بنسبة 99.9%. موقعك سيبقى متاحاً لعملائك في كل وقت وبأفضل أداء ممكن للمستخدمين.' 
        : 'We provide you with a secure, fast, and 99.9% reliable hosting environment. Your site will remain available to your customers at all times with the best possible performance.',
      features: isRTL ? ['أداء عالي', 'نسخ احتياطي', 'دعم فني مستمر'] : ['High Performance', 'Backups', '24/7 Support'],
      color: 'bg-indigo-500/10 text-indigo-400'
    },
    {
      id: "06",
      icon: <LinkIcon className="w-10 h-10" />,
      title: isRTL ? 'نطاقات مخصصة' : 'Custom Domains',
      desc: isRTL 
        ? 'عزز احترافية عملك بنطاق خاص يعبر عنك. نقوم بربط وإدارة الدومين الخاص بك لضمان تواجد رقمي فريد ومميز في عالم الإنترنت.' 
        : 'Enhance your business professionalism with a custom domain that represents you. We connect and manage your domain to ensure a unique and distinctive digital presence.',
      features: isRTL ? ['دومين احترافي', 'تفعيل SSL', 'بريد أعمال'] : ['Professional Domain', 'SSL Activation', 'Business Email'],
      color: 'bg-pink-500/10 text-pink-400'
    },
  ];

  return (
    <div className="pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`mb-32 ${isRTL ? 'text-right' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-4 mb-8 ${isRTL ? 'justify-end' : 'justify-start'}`}
          >
            {!isRTL && <div className="h-[2px] w-12 bg-brand-blue" />}
            <span className="text-brand-blue font-bold text-xs tracking-[0.4em] uppercase">
              {isRTL ? 'خدماتنا الاستراتيجية' : 'Our Strategic Services'}
            </span>
            {isRTL && <div className="h-[2px] w-12 bg-brand-blue" />}
          </motion.div>
          
          <h1 className="text-7xl md:text-[140px] font-bold tracking-tighter leading-[0.8] mb-12">
            {isRTL ? (
              <>نصنع <span className="text-brand-blue">القيمة</span> <br/> الرقمية.</>
            ) : (
              <>Crafting Digital <br/> <span className="text-brand-blue">Value</span>.</>
            )}
          </h1>
          
          <p className={`text-2xl text-white/50 max-w-3xl leading-relaxed font-light ${isRTL ? 'ml-auto' : ''}`}>
            {isRTL 
              ? 'نحن لا نبني مواقع فحسب، بل نصمم حلولاً تكنولوجية متكاملة تهدف لدفع نمو أعمالك وتحقيق أهدافك الطموحة في الفضاء الرقمي.'
              : 'We don\'t just build websites; we design integrated technological solutions aimed at driving your business growth and achieving your ambitious goals in the digital space.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-10 rounded-[50px] bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-blue/5 blur-[80px] group-hover:bg-brand-blue/10 transition-all rounded-full" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`p-5 rounded-2xl inline-block mb-10 transition-transform duration-500 group-hover:scale-110 w-fit ${service.color} ${isRTL ? 'mr-auto ml-0' : ''}`}>
                  {service.icon}
                </div>

                <div className="mb-4">
                  <span className="text-brand-blue font-mono text-sm tracking-widest opacity-40 block mb-2">{service.id}</span>
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-lg text-white/40 leading-relaxed font-light mb-10 flex-grow">
                  {service.desc}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      <span className="text-sm font-bold text-white/60 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 md:p-24 rounded-[60px] bg-brand-blue relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className={`relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                {isRTL ? 'جاهز لرفع مستوى عملك؟' : 'Ready to Elevate Your Business?'}
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                {isRTL 
                  ? 'دعنا نحول رؤيتك إلى واقع رقمي ملموس. فريقنا مستعد لبدء العمل على مشروعك القادم وتجاوز كل التوقعات.'
                  : 'Let\'s turn your vision into a tangible digital reality. Our team is ready to start working on your next project and exceed all expectations.'}
              </p>
            </div>
            
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-brand-blue font-bold rounded-full text-xl hover:shadow-2xl transition-all whitespace-nowrap shadow-xl"
            >
              {isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
