import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Award, Zap, Heart, Globe } from 'lucide-react';

export default function About() {
  const { isRTL } = useLanguage();

  const stats = [
    { label: isRTL ? 'تأسست في' : 'Founded', value: '2023', icon: <Globe className="w-5 h-5" /> },
    { label: isRTL ? 'مشروع منجز' : 'Projects Built', value: '40+', icon: <Zap className="w-5 h-5" /> },
    { label: isRTL ? 'عملاء سعداء' : 'Happy Clients', value: '40+', icon: <Heart className="w-5 h-5" /> },
    { label: isRTL ? 'رضا العملاء' : 'Client Satisfaction', value: '100%', icon: <Award className="w-5 h-5" /> },
  ];

  const team = [
    { 
      name: 'Saif Aldin Yasin', 
      role: isRTL ? 'المؤسس والمدير التنفيذي' : 'CEO & Founder', 
      image: 'https://lh3.googleusercontent.com/d/1Ltj50AZzvXv_J-nldsXqav9cn5F0Zptp',
      bio: isRTL 
        ? 'خبير في الاستراتيجيات الرقمية شغوف بخلق تجارب مستخدم استثنائية تجمع بين الفن والبرمجة.' 
        : 'Digital strategy expert passionate about creating exceptional user experiences that blend art and code.'
    },
  ];

  return (
    <div className="pt-48 pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Intro */}
        <section className="mb-40">
          <div className={`flex flex-col lg:flex-row gap-20 items-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`flex-[1.5] space-y-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-brand-blue" />
                <span className="text-brand-blue font-bold text-xs tracking-[0.3em] uppercase">
                  {isRTL ? 'جوهرنا الرقمي' : 'Our Digital Essence'}
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[110px] font-bold tracking-tighter leading-tight lg:leading-[0.85] text-white">
                {isRTL ? (
                  <>نبتكر للمستقبل، <br className="hidden md:block" /><span className="text-brand-blue">نصنع</span> للتميز.</>
                ) : (
                  <>Innovating the future, <br className="hidden md:block" /><span className="text-brand-blue">Designing</span> for excellence.</>
                )}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {isRTL 
                  ? 'منذ انطلاقتنا في عام 2023، نؤمن بأن الابتكار الحقيقي يكمن في دمج الجمال مع الوظيفة. قمنا بتنفيذ أكثر من 40 مشروعاً فريداً، حيث نكرس خبراتنا لخلق حلول رقمية تتجاوز التوقعات، معتمدين على الدقة في الأداء والإبداع في التصميم لدفع نمو أعمال عملائنا في العصر الرقمي.'
                  : 'Since our inception in 2023, we have believed that true innovation lies in the fusion of beauty and functionality. We have executed over 40 unique projects, dedicating our expertise to creating digital solutions that exceed expectations, relying on performance precision and design creativity to drive our clients\' business growth in the digital age.'}
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 md:p-10 rounded-3xl md:rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-brand-blue/30 transition-all group"
                >
                  <div className="text-brand-blue mb-4 md:mb-6 group-hover:scale-110 transition-transform origin-left">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Founder - Artistic Layout */}
        <section className="py-24 md:py-32 border-t border-white/5">
          <div className={`flex flex-col lg:flex-row gap-12 md:gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 relative group w-full max-w-md lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 aspect-[4/5] rounded-3xl md:rounded-[60px] overflow-hidden border border-white/10"
              >
                <img 
                  src={team[0].image} 
                  alt={team[0].name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute -inset-4 bg-brand-blue/10 blur-[100px] rounded-full -z-10 group-hover:bg-brand-blue/20 transition-all" />
            </div>

            <div className={`flex-1 space-y-6 md:space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-2">
                <span className="text-brand-blue font-bold text-sm tracking-widest uppercase opacity-70">
                  {isRTL ? 'المؤسس' : 'The Founder'}
                </span>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                  {team[0].name}
                </h2>
              </div>
              
              <p className={`text-lg md:text-2xl text-white/50 leading-relaxed italic border-brand-blue py-4 ${isRTL ? 'border-r-4 pr-8' : 'border-l-4 pl-8'}`}>
                "{team[0].bio}"
              </p>

              <div className="pt-8">
                <motion.button
                  whileHover={{ x: isRTL ? -10 : 10 }}
                  className="flex items-center gap-4 text-white font-bold text-lg group"
                >
                  <span className="border-b border-white group-hover:text-brand-blue group-hover:border-brand-blue transition-all">
                    {isRTL ? 'تواصل مع المؤسس' : 'Connect with Founder'}
                  </span>
                  <ArrowUpRight className={`w-6 h-6 text-brand-blue ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Mini */}
        <section className="mt-20 p-16 rounded-[50px] bg-brand-blue flex flex-col md:flex-row items-center justify-between gap-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter text-center md:text-left">
            {isRTL ? 'هل أنت مستعد لبدء رحلتك الرقمية؟' : 'Ready to start your digital journey?'}
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-brand-blue font-bold rounded-full hover:bg-opacity-90 transition-all text-xl"
          >
            {isRTL ? 'ابدأ الآن' : 'Start Now'}
          </motion.button>
        </section>
      </div>
    </div>
  );
}

