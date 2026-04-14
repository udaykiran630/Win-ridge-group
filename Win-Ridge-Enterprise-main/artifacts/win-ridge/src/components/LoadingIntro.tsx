import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingIntro({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#03150d] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/Intro.png" 
                alt="Win Ridge Group" 
                className="h-32 md:h-48 w-auto object-contain"
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_#166534]"
              />
            </div>

            {/* Progress Details */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <motion.span 
                className="text-white/60 text-xs tracking-[0.3em] uppercase font-light"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Initializing Excellence
              </motion.span>
              <span className="text-primary text-sm font-bold tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-10 overflow-hidden">
             <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.2 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[120px] font-bold text-white leading-none whitespace-nowrap opacity-5 select-none"
             >
               WIN RIDGE
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
