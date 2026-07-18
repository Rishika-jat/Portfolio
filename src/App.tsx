/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ThreeBackground from './components/ThreeBackground';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import AllProjects from './components/sections/AllProjects';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [view, setView] = useState<'home' | 'all-projects'>('home');

  const handleViewChange = (newView: 'home' | 'all-projects') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-primary/30">
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      
      <ThreeBackground />
      <Cursor />
      <Navbar currentView={view} onViewChange={handleViewChange} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects onViewAll={() => handleViewChange('all-projects')} />
            <Contact />
          </>
        ) : (
          <AllProjects onBack={() => handleViewChange('home')} />
        )}
      </main>

      <div className="fixed bottom-10 left-10 z-[1000] hidden lg:flex flex-col gap-6 items-center">
        <div className="w-px h-24 bg-white/10" />
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-white/20">
          Scroll to explore
        </p>
      </div>

      <div className="fixed bottom-10 right-10 z-[1000] hidden lg:flex flex-col gap-6 items-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-white/20">
          Rishika Jat &copy; 2026
        </p>
        <div className="w-px h-24 bg-white/10" />
      </div>
    </div>
  );
}
