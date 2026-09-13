import { motion } from 'motion/react';
import { Cpu, Database, Layout, Terminal, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'HTML5', 'CSS3'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'MUI'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['NestJS', 'Node.js', 'Express.js', 'Java Spring Boot', 'REST APIs'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI & Engineering Tools',
    icon: Cpu,
    skills: ['Cursor', 'Claude', 'GitHub Copilot', 'Git', 'Docker', 'Postman', 'PgAdmin', 'CI/CD'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">02. Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Tech Stack <span className="text-slate-400 dark:text-white/20">&</span> Skills</h3>
          </div>
          <p className="max-w-md text-slate-600 dark:text-white/60 font-light">
            I leverage a diverse set of modern tools to build secure, scalable, and intuitive digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl glass border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Background gradient hint */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity animate-pulse`} />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all">
                    <category.icon size={24} className="text-slate-800 dark:text-white group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white">{category.title}</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-xs font-medium text-slate-700 dark:text-white/70 border border-slate-200/80 dark:border-white/5 hover:border-primary/40 hover:text-primary dark:hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
