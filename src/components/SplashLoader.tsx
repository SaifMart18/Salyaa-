import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const SplashLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#0B1120] flex items-center justify-center p-6"
        >
          {/* Logo Animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 1, ease: "easeOut" }
              }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-brand-blue/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] bg-white/5 p-2 mb-8"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/11V_O87SdW-ObGeHEPpYS_-FxaNVn7X9V" 
                alt="salyaa Logo" 
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.8 }
              }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                sal<span className="text-brand-blue">yaa</span>
              </h1>
              <div className="mt-4 flex items-center justify-center gap-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                  className="h-[1px] bg-brand-blue/50"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashLoader;
