import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take between 4-8 weeks depending on the complexity and scope of the digital experience being built." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide monthly maintenance and support packages to ensure your platform stays fast and secure." },
  { q: "What is your pricing structure?", a: "Every project is unique. We provide custom quotes based on your specific requirements and goals." }
];

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`${isRTL ? 'طلب مشروع جديد' : 'New Project Request'}: ${formData.service}`);
    const body = encodeURIComponent(
      `${isRTL ? 'الاسم' : 'Name'}: ${formData.name}\n` +
      `${isRTL ? 'الخدمة' : 'Service'}: ${formData.service}\n\n` +
      `${isRTL ? 'الرسالة' : 'Message'}:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:servicex35@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success state after a small delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="pt-48 pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row gap-24 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Info Side */}
          <div className={`lg:w-1/3 space-y-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="text-brand-blue font-bold text-xs tracking-[0.3em] uppercase block">
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              {isRTL ? 'لنبتكر معاً.' : 'Let’s Create Together.'}
            </h1>
            <div className="space-y-10 pt-10">
              {[
                { label: 'Email', val: 'servicex35@gmail.com' },
                { label: 'Phone', val: '+964 788 237 7036' },
                { label: t('navContact') === 'اتصل بنا' ? 'الموقع' : 'Location', val: t('navContact') === 'اتصل بنا' ? 'العراق، بغداد' : 'Iraq, Baghdad' }
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest block mb-2">{item.label}</span>
                  <p className="text-2xl font-medium">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="space-y-12"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="border-b border-white/10 focus-within:border-brand-blue transition-colors pb-4">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={isRTL ? 'الاسم بالكامل' : 'Full Name'} 
                        className="w-full bg-transparent text-2xl focus:outline-none placeholder:text-white/10" 
                      />
                    </div>
                    <div className="border-b border-white/10 focus-within:border-brand-blue transition-colors pb-4">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder={isRTL ? 'البريد الإلكتروني' : 'Email Address'} 
                        className="w-full bg-transparent text-2xl focus:outline-none placeholder:text-white/10" 
                      />
                    </div>
                  </div>
                  <div className="border-b border-white/10 focus-within:border-brand-blue transition-colors pb-4">
                    <input 
                      type="text" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder={isRTL ? 'الخدمة المطلوبة' : 'Subject / Service'} 
                      className="w-full bg-transparent text-2xl focus:outline-none placeholder:text-white/10" 
                    />
                  </div>
                  <div className="border-b border-white/10 focus-within:border-brand-blue transition-colors pb-4">
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={isRTL ? 'رسالتك...' : 'Your Message...'} 
                      className="w-full bg-transparent text-2xl focus:outline-none placeholder:text-white/10 resize-none" 
                    />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="h-16 px-12 text-lg disabled:opacity-50" 
                      icon={!isSubmitting && <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />}
                    >
                      {isSubmitting ? (isRTL ? 'جارٍ الإرسال...' : 'Sending...') : (isRTL ? 'إرسال الطلب' : 'Send Message')}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`bg-brand-blue/5 border border-brand-blue/20 rounded-[40px] p-20 text-center space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div className={`w-20 h-20 bg-brand-blue/20 rounded-3xl flex items-center justify-center text-brand-blue mx-auto`}>
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 text-center">
                    <h2 className="text-4xl font-bold">{isRTL ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!'}</h2>
                    <p className="text-white/50 text-xl leading-relaxed">
                      {isRTL 
                        ? 'شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن عبر بريدك الإلكتروني.' 
                        : 'Thank you for reaching out. We will get back to you as soon as possible via your email.'}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={resetForm} variant="outline" className="h-14 px-10">
                      {isRTL ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                    </Button>
                    <a href={`mailto:servicex35@gmail.com?subject=${formData.service}&body=Name: ${formData.name}%0D%0A%0D%0A${formData.message}`}>
                      <Button className="h-14 px-10 bg-[#EA4335] border-[#EA4335] hover:bg-[#EA4335]/90">
                        {isRTL ? 'فتح في البريد الإلكتروني' : 'Open in Gmail'}
                      </Button>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Big Socials Section */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-wrap justify-between gap-10">
          {[
            { name: 'Mostaql', url: 'https://mostaql.com/u/Saif_writes' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saif-aldin-yasin-8028653a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@saifweb?_r=1&_t=ZN-96EoAdnHRQs' }
          ].map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-4xl md:text-6xl font-bold text-white/10 hover:text-brand-blue transition-all duration-300">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
