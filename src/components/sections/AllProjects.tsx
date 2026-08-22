import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal, ArrowLeft } from 'lucide-react';
import { projects } from '../../data/projectsData';

interface AllProjectsProps {
  onBack: () => void;
}

export default function AllProjects({ onBack }: AllProjectsProps) {
  return (
    <section className="py-24 min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-6 mb-16">
          <button
            id="back-to-home-btn"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors group cursor-pointer bg-transparent border-none outline-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            00. Back to Home
          </button>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Full Project <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="max-w-2xl text-white/60 font-light text-base md:text-lg">
              A comprehensive showcase of my developer journey, spanning client platforms, AI applications, interactive 3D designs, and full-stack systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative rounded-2xl overflow-hidden glass border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video overflow-hidden bg-black/40 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                </div>

                <div className="p-7 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors ml-auto"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity">
                <Terminal size={14} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
