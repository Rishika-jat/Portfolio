import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020205] flex flex-col items-center justify-center p-6"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-6xl font-display font-black tracking-tighter"
        >
          RISHIKA<span className="text-primary italic">JAT</span>
        </motion.div>
        
        <motion.div
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-4 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-10 left-10 md:left-20 overflow-hidden">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em] leading-loose"
        >
          Initializing Portfolio / System v4.0.2<br />
          Loading shaders & assets...<br />
          Decrypting tech stack...
        </motion.p>
      </div>
    </motion.div>
  );
}
