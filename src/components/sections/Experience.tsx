import { motion } from 'motion/react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Naikroop Solutions',
    role: 'Associate Software Engineer',
    period: 'Aug 2025 - Present',
    description: [
      'Created a Backend Flow Designer in NaikFlow which enables users to create backend services through a drag-and-drop interface.',
      'Conducted multiple successful MVP demos for premier enterprise clients and assisted in onboarding them.',
      'Managed end-to-end client communication, gathering requirements, and providing technical solutions.'
    ]
  },
  {
    company: 'Naikroop Solutions',
    role: 'Software Engineer Intern',
    period: 'Feb 2025 - July 2025',
    description: [
      'Developed a React Framework which enables rendering an SPA with JSON data created through a drag-and-drop interface or an AI Agent.',
      'Implemented fully automated CI/CD pipeline with GitHub Actions and Cypress for E2E testing on Azure Cloud.'
    ]
  },
  {
    company: 'Singaji Software Solutions',
    role: 'Web Developer',
    period: 'Nov 2024 - Dec 2024',
    description: [
      'Created responsive websites using HTML, CSS, JavaScript, and WordPress.',
      'Worked in an Agile development environment with regular sprints and stand-up meetings.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-20">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">03. Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Work Experience</h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
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
                  <h4 className="text-2xl font-bold font-display">{exp.role}</h4>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/40">
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
                    <li key={i} className="flex gap-3 text-white/60 leading-relaxed group">
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
