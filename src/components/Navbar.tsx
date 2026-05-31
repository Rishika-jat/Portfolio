import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[1001]" 
        style={{ scaleX }}
      />
      
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500",
        scrolled ? "bg-[#020205]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-white text-sm">RJ</span>
            </div>
            <span className="text-white hidden sm:block">Rishika Jat</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-4 pl-4 border-l border-white/10"
            >
              <a href="https://github.com/Rishika-jat" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/rishika-jat" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </>
  );
}
