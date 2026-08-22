import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // GSAP entrance for the main headline
    const headline = containerRef.current.querySelector('.headline-animated');
    if (headline) {
      gsap.fromTo(headline, 
        { opacity: 0, scale: 0.9, rotateX: 45 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1.5, ease: 'power4.out', delay: 2.2 }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-display font-bold tracking-tight headline-animated opacity-0"
        >
          Building the <span className="text-gradient">Future</span> <br />
          of Web & AI
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed"
        >
          Hi, I'm <span className="text-white font-semibold">Rishika Jat</span>. 
          A Software Engineer | fullstack Developer specializing in crafting high-performance web applications and AI-driven experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            id="hero-contact-btn"
            className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Icons Decore */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none hidden md:block"
        >
          <div className="flex gap-12 text-6xl font-display font-black text-white/5 whitespace-nowrap">
            <span>REACT</span>
            <span>NEXTJS</span>
            <span>TYPESCRIPT</span>
            <span>AI</span>
            <span>DOCKER</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
