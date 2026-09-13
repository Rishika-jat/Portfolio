import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  currentView?: 'home' | 'all-projects';
  onViewChange?: (view: 'home' | 'all-projects') => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
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
        scrolled 
          ? "bg-white/85 dark:bg-[#020205]/80 backdrop-blur-md py-4 border-b border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none" 
          : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#"
            onClick={(e) => {
              if (currentView !== 'home') {
                e.preventDefault();
                onViewChange?.('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-sm">
              <span className="text-white text-sm font-bold">RJ</span>
            </div>
            <span className="text-slate-900 dark:text-white hidden sm:block transition-colors">Rishika Jat</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (currentView !== 'home') {
                    onViewChange?.('home');
                  }
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10"
            >
              <a 
                href="https://github.com/Rishika-jat" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rishika-jat-981144290" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 text-slate-800 dark:text-white cursor-pointer rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => {
                  setIsOpen(false);
                  if (currentView !== 'home') {
                    onViewChange?.('home');
                  }
                }}
                className="text-lg font-medium text-slate-800 hover:text-primary dark:text-white/80 dark:hover:text-white transition-colors"
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
