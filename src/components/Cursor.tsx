import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  
  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse/trackpad)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsFinePointer(hasFinePointer);

    if (!hasFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Fast DOM traversal without expensive getComputedStyle call
        const isClickable = !!target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center transition-transform duration-200 will-change-transform ${
        isPointer ? 'scale-[2.2] bg-white' : 'scale-100'
      }`}
    >
      <div className="w-1 h-1 bg-primary rounded-full" />
    </motion.div>
  );
}
