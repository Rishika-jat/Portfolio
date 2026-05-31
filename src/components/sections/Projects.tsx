import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal } from 'lucide-react';

import craveChefImg from '../../assets/images/crave_chef_1780161688501.png';
import clinicoImg from '../../assets/images/clinico_booking_1780161612983.png';
import nexusErpImg from '../../assets/images/nexus_erp_1780161632358.png';
import apexBillingImg from '../../assets/images/apex_billing_1780161647339.png';
import ledgerSphereImg from '../../assets/images/ledgersphere_dashboard_1780161664365.png';

const projects = [
  {
    title: 'Crave Chef AI - Food Delivery',
    desc: 'An AI-powered luxury food delivery application featuring custom dynamic meal plans, curated gourmet recipes, custom diet matrices, and interactive customer wishlist tracking.',
    image: craveChefImg,
    tags: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'Redux'],
    github: 'https://github.com/Rishika-jat/Food-Delivery',
    live: 'https://food-delivery-crave.netlify.app/'
  },
  {
    title: 'Clinico Booking - Healthcare Platform',
    desc: 'A unified MERN healthcare platform enabling swift virtual and in-person professional clinical consultation bookings, interactive doctor calendar management, and patient portal access control.',
    image: clinicoImg,
    tags: ['MERN Stack', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
    github: 'https://github.com/Rishika-jat/Appointment-Booking-Platform',
    live: 'https://appointment-booking-system-hospital.netlify.app/'
  },
  {
    title: 'Nexus ERP - HR Management System',
    desc: 'An enterprise-grade ERP portal loaded with live operational widgets tracking corporate headcounts, employee attendance, real-time payroll allocations, and automated leave balance databases.',
    image: nexusErpImg,
    tags: ['ReactJS', 'TailwindCSS', 'Recharts', 'Interactions'],
    github: 'https://github.com/Rishika-jat/HR-Employee-Management-System',
    live: 'https://hr-employee-management-system.netlify.app/'
  },
  {
    title: 'Apex - Invoice Billing Software',
    desc: 'Robust financial accounting suite engineered to generate instant professional tax invoice sheets, run place of supply HSN/GST audits, and keep interactive vendor database logs.',
    image: apexBillingImg,
    tags: ['ReactJS', 'TailwindCSS', 'Context API', 'PDF Engine'],
    github: 'https://github.com/Rishika-jat/Invoice-Billing-Software',
    live: 'https://invoice-billing-sw.netlify.app/'
  },
  {
    title: 'LedgerSphere - Wealth Ledger Suite',
    desc: 'Chronological cash flow tracking dashboard integrating dynamic outflow charts, customized income-vs-expense target multipliers, and smart spending budget recommendations.',
    image: ledgerSphereImg,
    tags: ['ReactJS', 'TailwindCSS', 'Recharts', 'LocalStorage'],
    github: 'https://github.com/Rishika-jat/Expense-Tracker',
    live: 'https://personal-expense-and-income-tracker.netlify.app/'
  },
  {
    title: 'E-Commerce Website',
    desc: 'The E-commerce Project showcasing products with responsive design and filter options, shopping cart, and Wishlist. It offers basic user authentication enhancing shopping experience.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Ecommerce.png',
    tags: ['ReactJS', 'TailwindCSS', 'Redux'],
    github: 'https://github.com/Rishika-jat/Ecommerce',
    live: 'https://rishika-jat-ecommerce-web.netlify.app/'
  },
  {
    title: 'Weather Application',
    desc: 'Weather App featuring reusable UI components, real-time weather updates via Fetch API, and location-based highlights. You can check out a detailed 24-hour forecast and a 7-day forecast. The app uses Context API for seamless state management and is fully responsive, ensuring it works on all devices.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Weather%20App.png',
    tags: ['ReactJS', 'TailwindCSS'],
    github: 'https://github.com/Rishika-jat/Weather-App',
    live: 'https://rishika-jat-weather-app.netlify.app/'
  },
  {
    title: 'To-Do List',
    desc: 'A fully functional To-Do List app with task addition, deletion, editing, task storage in local storage, and filter options to sort by status—Pending, Done, and All. 💻',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Todolist.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Rishika-jat/To-Do-List',
    live: 'https://rishika-jat-to-do-list.netlify.app/'
  },
  {
    title: 'Add to Cart System',
    desc: 'A simple Add to Cart feature that allows users to add, increase, decrease, and remove items seamlessly, with real-time total price updates and order confirmation.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Add%20to%20cart.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Rishika-jat/add-to-cart',
    live: 'https://rishika-jat-add-to-cart.netlify.app/'
  },
  {
    title: 'IT Solution Website',
    desc: 'An IT Solution showcase designed to be fully flexible and adaptable to any device screen, providing a seamless experience across all platforms with a truly responsive design. 💻📱',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Boostrap_website.png',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/Rishika-jat/IT-Solution-Website',
    live: 'https://rishika-bootstrap-demo-website.netlify.app/'
  },
  {
    title: 'Age Calculator',
    desc: 'Calculates precise age from the user’s date of birth, displaying the result in years, months, and days. It features intuitive input handling.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/ageCalculator.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Rishika-jat/Age-Calculator',
    live: 'https://rishika-jat-age-calculator.netlify.app/'
  },
  {
    title: 'YouTube Clone',
    desc: 'Replicates the beautiful look and feel of YouTube\'s interface, featuring an adaptive responsive layout that renders seamlessly across multiple browser contexts.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/YoutubeClone.png',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/Rishika-jat/Youtube-Clone',
    live: 'https://rishika-jat-youtube-clone.netlify.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">04. Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h3>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors group">
            View All Projects
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden glass border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>

              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                    <Github size={18} />
                    Source
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 p-2 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity">
                <Terminal size={16} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
