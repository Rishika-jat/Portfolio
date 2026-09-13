import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass cursor-pointer transition-colors duration-300 ${
        isDark 
          ? 'hover:border-primary/50 text-white/80 hover:text-white' 
          : 'hover:border-primary/50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun size={17} className="text-amber-400 hover:text-amber-300 transition-colors" />
          ) : (
            <Moon size={17} className="text-indigo-600 hover:text-indigo-500 transition-colors" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-mono tracking-wider select-none font-medium">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </motion.button>
  );
}
