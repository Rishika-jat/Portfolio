import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center transition-transform duration-300 ${
        isPointer ? 'scale-[2.5] bg-white' : 'scale-100'
      }`}
    >
        <div className="w-1 h-1 bg-primary rounded-full" />
    </motion.div>
  );
}
