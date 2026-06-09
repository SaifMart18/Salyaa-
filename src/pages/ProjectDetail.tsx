
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/projects';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { isRTL } = useLanguage();
  const projects = getProjects(isRTL);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-8">
          {isRTL ? 'المشروع غير موجود' : 'Project Not Found'}
        </h1>
        <Link to="/portfolio" className="text-brand-blue hover:underline">
          {isRTL ? 'العودة لمعرض الأعمال' : 'Back to Portfolio'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/portfolio" 
            className={`flex items-center gap-2 text-white/50 hover:text-brand-blue transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            <span className="font-bold uppercase tracking-widest text-xs">
              {isRTL ? 'العودة للأعمال' : 'Back to Portfolio'}
            </span>
          </Link>

          <div className={`flex flex-col md:flex-row justify-between items-start gap-8 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
            <div className="flex-1">
              <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                {project.title}
              </h1>
            </div>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-opacity-90 transition-all group"
            >
              <span>{isRTL ? 'زيارة الموقع الرسمي' : 'Visit Official Site'}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`lg:col-span-2 space-y-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <section>
              <h2 className="text-3xl font-bold mb-6 border-b border-white/5 pb-4 inline-block">
                {isRTL ? 'عن المشروع' : 'About the Project'}
              </h2>
              <p className="text-2xl text-white/60 leading-relaxed font-light">
                {project.details}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8 border-b border-white/5 pb-4 inline-block">
                {isRTL ? 'المميزات الرئيسية' : 'Key Features'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <CheckCircle2 className="text-brand-blue w-6 h-6 flex-shrink-0" />
                    <span className="text-lg text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <div className={`p-10 rounded-[40px] bg-white/[0.03] border border-white/5 ${isRTL ? 'text-right' : ''}`}>
              <h3 className="text-xl font-bold mb-8 opacity-40 uppercase tracking-widest">
                {isRTL ? 'تقنيات العمل' : 'Project Info'}
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">
                    {isRTL ? 'التصنيف' : 'Category'}
                  </div>
                  <div className="text-xl font-bold">{project.category}</div>
                </div>
                <div>
                  <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">
                    {isRTL ? 'العميل' : 'Client'}
                  </div>
                  <div className="text-xl font-bold">{project.title}</div>
                </div>
                <div>
                  <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">
                    {isRTL ? 'السنة' : 'Year'}
                  </div>
                  <div className="text-xl font-bold">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
