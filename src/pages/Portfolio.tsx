import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/projects';

export default function Portfolio() {
  const { t, isRTL } = useLanguage();
  const projects = getProjects(isRTL);

  const categoryMap: { [key: string]: string } = {
    'Contracting': isRTL ? 'مقاولات' : 'Contracting',
    'E-commerce': isRTL ? 'تجارة إلكترونية' : 'E-commerce',
    'Professional Services': isRTL ? 'خدمات مهنية' : 'Professional Services',
    'Medical': isRTL ? 'طبي' : 'Medical',
    'Creative': isRTL ? 'إبداعي' : 'Creative',
    'All': isRTL ? 'الكل' : 'All'
  };

  return (
    <div className="pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-32 ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="text-brand-blue font-bold text-xs tracking-[0.3em] uppercase block mb-6">{t('navPortfolio')}</span>
          <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.8] mb-12">
            {isRTL ? 'أعمال مختارة.' : 'Selected Works.'}
          </h1>
        </div>

        {/* Grid - Large items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode='popLayout'>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group block"
              >
                <Link to={`/portfolio/${project.slug}`} className="cursor-pointer overflow-hidden rounded-3xl sm:rounded-[40px] mb-8 block">
                  <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-white/[0.02] border border-white/5 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
                  <span className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-3">{categoryMap[project.category]}</span>
                  <Link to={`/portfolio/${project.slug}`}>
                    <h3 className="text-4xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  </Link>
                  <p className="text-white/50 text-lg leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
