import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Globe, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/projects';

export default function Portfolio() {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const allProjects = getProjects(isRTL);

  const categoryMap: { [key: string]: string } = {
    'Contracting': isRTL ? 'مقاولات عامة' : 'Contracting',
    'E-commerce': isRTL ? 'متاجر إلكترونية' : 'E-commerce',
    'Professional Services': isRTL ? 'خدمات شركات وأعمال' : 'Professional Services',
    'Medical': isRTL ? 'طبي ورعاية' : 'Medical & Welfare',
    'Creative': isRTL ? 'إبداعي وصناعة محتوى' : 'Creative Design',
    'Education': isRTL ? 'تعليم ومدارس' : 'Academic & Education',
    'All': isRTL ? 'الكل' : 'All'
  };

  // Get distinct categories present in projects + 'All'
  const categories = ['All', 'Professional Services', 'E-commerce', 'Contracting', 'Medical', 'Education', 'Creative'];

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-40 pb-24 min-h-screen bg-[#060B16]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className={`mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            {isRTL ? 'معرض الأعمال الرقمية' : 'Digital Works' }
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            {isRTL ? 'مشاريع متميزة تعانق النجاح.' : 'Crafting High-Performance Sites.'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl font-light"
          >
            {isRTL 
              ? 'تصفح أعمالنا الاستثنائية التي تجمع بين الإبداع البصري والأداء البرمجي الفائق لتحقيق مبيعات متفوقة لعملائنا.'
              : 'Explore our interactive creations engineered to convert audiences into loyal clients.'}
          </motion.p>
        </div>

        {/* Categories Filtering Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className={`flex flex-wrap items-center gap-2 mb-16 pb-4 border-b border-white/5 scrollbar-thin ${isRTL ? 'flex-row-reverse justify-start' : 'justify-start'}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-brand-blue text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              {categoryMap[cat]}
            </button>
          ))}
        </motion.div>

        {/* Premium Grid - cards display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between bg-[#111827]/60 backdrop-blur-lg rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all duration-300 shadow-xl p-6 sm:p-8 hover:bg-[#111827]/80"
              >
                
                <div>
                  <div className={`flex mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-brand-blue rounded-full bg-brand-blue/10 border border-brand-blue/20">
                      {categoryMap[project.category]}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal min-h-[96px] line-clamp-4">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Lower Action buttons */}
                <div className={`pt-6 border-t border-white/[0.04] flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Primary Direct Visit Button */}
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue hover:bg-brand-blue/90 border border-brand-blue text-white rounded-xl text-xs sm:text-sm font-bold shadow-[0_4px_12px_rgba(59,130,246,0.08)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.25)] transition-all group/btn"
                  >
                    <span>{isRTL ? 'دخول الموقع' : 'Enter Site'}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>

                  {/* Secondary Details button */}
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
          </AnimatePresence>
        </div>

        {/* Empty status check */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              {isRTL ? 'عفواً، لا توجد مشاريع مضافة حالياً في هذا التصنيف.' : 'No projects found in this category.'}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
