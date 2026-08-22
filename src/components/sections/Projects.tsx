import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal, Layers } from 'lucide-react';
import { projects } from '../../data/projectsData';

interface ProjectsProps {
  onViewAll: () => void;
}

export default function Projects({ onViewAll }: ProjectsProps) {
  // Front 6 featured projects
  const frontProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-[0.2em]">
              <Layers size={14} />
              04. Portfolio
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h3>
            <p className="text-white/60 font-light max-w-xl text-base">
              Client-delivered platforms, AI-driven applications, 3D animated experiences, and responsive web products.
            </p>
          </div>
          <button 
            id="view-all-projects-btn"
            onClick={(e) => {
              e.preventDefault();
              onViewAll();
            }} 
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 outline-none py-3 px-5 rounded-xl glass"
          >
            View All Projects
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
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
                      <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h4>
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

              {/* Decorative element */}
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
