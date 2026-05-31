import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">01. About Me</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Crafting Digital Excellence Through <span className="text-gradient">Logic & Creativity</span>
              </h3>
            </div>
            
            <p className="text-white/60 leading-relaxed text-lg font-light">
              I am a result-oriented software developer with a passion for optimizing project outcomes and driving engineering excellence. 
              Based in Indore, India, I scale applications using modern tech stacks and integrate AI agents to solve complex problems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Indore, India', icon: MapPin },
                { label: 'BCA (2023-26)', icon: GraduationCap },
                { label: 'Software Engineer | fullstack Developer', icon: User },
                { label: 'Working at Naikroop', icon: Briefcase },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Developer Setup"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020205] to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl glass">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-white/40">Current Status</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-sm font-medium">Developing low-code backend flow designers at Naikroop Solutions.</p>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
