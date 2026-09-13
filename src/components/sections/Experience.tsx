import { motion } from 'motion/react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Naikroop Solutions',
    role: 'Software Engineer',
    period: 'Jul 2026 – Present',
    description: [
      'Lead User Acceptance Testing (UAT) for production releases, identifying and resolving defects to cut post-release issues by 25%.',
      'Improve multi-user functionality, increasing platform scalability and reliability to support 500+ concurrent users.',
      'Apply UX best practices to simplify complex technical workflows, increasing adoption among non-technical users by 30%.',
      'Write comprehensive unit tests, raising code coverage to 80% and reducing production regression bugs by 35%.'
    ]
  },
  {
    company: 'Naikroop Solutions',
    role: 'Associate Software Engineer',
    period: 'Aug 2025 – Jun 2026',
    description: [
      'Built a Backend Flow Designer within NaikFlow that lets non-technical users create backend services via drag-and-drop, cutting backend development time by 40%.',
      'Presented 15+ MVP demos to enterprise clients, including AurionPro, helping drive successful onboarding and 90% client retention.',
      'Managed end-to-end client communication — gathering requirements, proposing technical solutions, and delivering — across 8+ concurrent projects.',
      'Used Cursor and Claude with effective prompt-engineering techniques for code refactoring and logic generation, speeding up development by 35% while keeping code clean.',
      'Contributed to a Java-based code generator that auto-translates visual workflows into backend services, reducing manual coding effort by 50%.'
    ]
  },
  {
    company: 'Naikroop Solutions',
    role: 'Software Engineer Intern',
    period: 'Feb 2025 – Jul 2025',
    description: [
      'Built a reusable React component framework with a drag-and-drop interface, enabling dynamic SPA rendering from JSON configurations and cutting UI development time by 30%.',
      'Implemented a fully automated CI/CD pipeline using GitHub Actions and Cypress for end-to-end testing on Azure Cloud, reducing deployment time by 40% and catching 50+ defects pre-release.',
      'Researched and benchmarked leading No-Code/Low-Code platforms (Bubble, Retool) to inform NaikFlow\'s architecture and product roadmap.'
    ]
  },
  {
    company: 'Singaji Software Solutions',
    role: 'Web Developer',
    period: 'Nov 2024 – Dec 2024',
    description: [
      'Built 10+ responsive, cross-browser websites using HTML, CSS, JavaScript, and WordPress.',
      'Customized WordPress themes and managed content for 2 client sites, improving page load speed by 20%.',
      'Collaborated in an Agile environment with daily stand-ups and sprint planning, consistently delivering features on schedule.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-50/50 dark:bg-white/[0.01] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-20">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">03. Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Work Experience</h3>
        </div>

        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-12 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <h4 className="text-2xl font-bold font-display text-slate-900 dark:text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-transparent rounded-full text-xs font-mono text-slate-500 dark:text-white/40">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium">
                  <Building2 size={16} />
                  <span>{exp.company}</span>
                </div>

                <ul className="space-y-3 max-w-3xl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-white/60 leading-relaxed group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
