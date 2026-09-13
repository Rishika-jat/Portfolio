import aiRecipeMakerImg from '../assets/images/ai_recipe_maker_1788885690760.jpg';
import craveChefImg from '../assets/images/crave_chef_1780161688501.png';
import clinicoImg from '../assets/images/clinico_booking_1780161612983.png';
import nexusErpImg from '../assets/images/nexus_erp_1780161632358.png';
import apexBillingImg from '../assets/images/apex_billing_1780161647339.png';
import ledgerSphereImg from '../assets/images/ledgersphere_dashboard_1780161664365.png';
import kutumbhSakhiImg from '../assets/images/kutumbh_sakhi_1784355946081.jpg';
import preciousGingersnapImg from '../assets/images/precious_gingersnap_1784355963637.jpg';
import sonyHeadphoneImg from '../assets/images/sony_3d_headphone_1784983118387.jpg';

export interface Project {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  github?: string;
  live: string;
  category?: 'client' | 'showcase' | 'fullstack';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-recipe-maker',
    title: 'AI Recipe Recommendation System',
    desc: 'An AI-powered web application that generates personalized recipe suggestions from user-provided ingredients, simplifying meal-planning decisions with curated YouTube cooking guides.',
    image: aiRecipeMakerImg,
    tags: ['ReactJS', 'AI Agent', 'TailwindCSS', 'YouTube API'],
    live: 'https://ai-recipe-maker-0tc2.onrender.com/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'crave-chef-ai',
    title: 'Crave — AI-Powered Food Delivery Platform',
    desc: 'A full-stack food delivery application featuring an AI-powered meal planner, generating personalized recommendations, ingredient-customization, and streamlined ordering flows.',
    image: craveChefImg,
    tags: ['ReactJS', 'AI Meal Planner', 'TailwindCSS', 'Redux', 'Full-Stack'],
    github: 'https://github.com/Rishika-jat/Food-Delivery',
    live: 'https://food-delivery-crave.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'kutumbh-sakhi',
    title: 'Kutumbh Sakhi — E-Commerce & Inventory Management',
    desc: 'A full-stack e-commerce application with real-time inventory, product, cart, and order management, paired with an admin dashboard with automatic stock updates.',
    image: kutumbhSakhiImg,
    tags: ['ReactJS', 'TailwindCSS', 'Context API', 'Inventory Admin'],
    live: 'https://kutumbsakhi.in/',
    category: 'client',
    featured: true
  },
  {
    id: 'precious-gingersnap',
    title: 'Precious Gingersnap',
    desc: 'A highly animated, immersive creative landing page featuring advanced fluid glassmorphic styling, organic dynamic motion paths, and custom amber-hued visual physics.',
    image: preciousGingersnapImg,
    tags: ['ReactJS', 'Framer Motion', 'TailwindCSS', 'Interactive'],
    live: 'https://precious-gingersnap-de1ef6.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'sony-3d-headphone',
    title: 'Sony WH-1000XM6 - 3D Experience',
    desc: 'A futuristic 3D animated product showcase for the Sony WH-1000XM6 flagship headphones with immersive dark theme visuals, interactive sound optics, and interactive hardware specifications.',
    image: sonyHeadphoneImg,
    tags: ['ReactJS', '3D Animation', 'Framer Motion', 'TailwindCSS'],
    live: 'https://3d-headphone-animated.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'ecommerce-web',
    title: 'E-Commerce Website',
    desc: 'The E-commerce Project showcasing products with responsive design and filter options, shopping cart, and Wishlist. It offers basic user authentication enhancing shopping experience.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Ecommerce.png',
    tags: ['ReactJS', 'TailwindCSS', 'Redux'],
    github: 'https://github.com/Rishika-jat/Ecommerce',
    live: 'https://rishika-jat-ecommerce-web.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    desc: 'Weather App featuring reusable UI components, real-time weather updates via Fetch API, and location-based highlights. Detailed 24-hour forecast and a 7-day forecast with Context API state management.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Weather%20App.png',
    tags: ['ReactJS', 'TailwindCSS'],
    github: 'https://github.com/Rishika-jat/Weather-App',
    live: 'https://rishika-jat-weather-app.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'it-solution',
    title: 'IT Solution Website',
    desc: 'An IT Solution showcase designed to be fully flexible and adaptable to any device screen, providing a seamless experience across all platforms with a truly responsive design.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Boostrap_website.png',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/Rishika-jat/IT-Solution-Website',
    live: 'https://rishika-bootstrap-demo-website.netlify.app/',
    category: 'showcase',
    featured: true
  },
  {
    id: 'add-to-cart',
    title: 'Add to Cart System',
    desc: 'A simple Add to Cart feature that allows users to add, increase, decrease, and remove items seamlessly, with real-time total price updates and order confirmation.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/Add%20to%20cart.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Rishika-jat/add-to-cart',
    live: 'https://rishika-jat-add-to-cart.netlify.app/',
    category: 'showcase'
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Clone',
    desc: 'Replicates the look and feel of YouTube\'s interface, featuring an adaptive responsive layout that renders seamlessly across multiple browser contexts.',
    image: 'https://rishika-jat-portfolio-website.vercel.app/YoutubeClone.png',
    tags: ['HTML5', 'CSS3'],
    github: 'https://github.com/Rishika-jat/Youtube-Clone',
    live: 'https://rishika-jat-youtube-clone.netlify.app/',
    category: 'showcase'
  },
  {
    id: 'clinico-booking',
    title: 'Clinico Booking - Healthcare Platform',
    desc: 'A unified MERN healthcare platform enabling swift virtual and in-person professional clinical consultation bookings, interactive doctor calendar management, and patient portal access control.',
    image: clinicoImg,
    tags: ['MERN Stack', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
    github: 'https://github.com/Rishika-jat/Appointment-Booking-Platform',
    live: 'https://appointment-booking-system-hospital.netlify.app/',
    category: 'fullstack'
  },
  {
    id: 'nexus-erp',
    title: 'Nexus ERP - HR Management System',
    desc: 'An enterprise-grade ERP portal loaded with live operational widgets tracking corporate headcounts, employee attendance, real-time payroll allocations, and automated leave balance databases.',
    image: nexusErpImg,
    tags: ['ReactJS', 'TailwindCSS', 'Recharts', 'Interactions'],
    github: 'https://github.com/Rishika-jat/HR-Employee-Management-System',
    live: 'https://hr-employee-management-system.netlify.app/',
    category: 'fullstack'
  },
  {
    id: 'apex-billing',
    title: 'Apex - Invoice Billing Software',
    desc: 'Robust financial accounting suite engineered to generate instant professional tax invoice sheets, run place of supply HSN/GST audits, and keep interactive vendor database logs.',
    image: apexBillingImg,
    tags: ['ReactJS', 'TailwindCSS', 'Context API', 'PDF Engine'],
    github: 'https://github.com/Rishika-jat/Invoice-Billing-Software',
    live: 'https://invoice-billing-sw.netlify.app/',
    category: 'fullstack'
  },
  {
    id: 'ledger-sphere',
    title: 'LedgerSphere - Wealth Ledger Suite',
    desc: 'Chronological cash flow tracking dashboard integrating dynamic outflow charts, customized income-vs-expense target multipliers, and smart spending budget recommendations.',
    image: ledgerSphereImg,
    tags: ['ReactJS', 'TailwindCSS', 'Recharts', 'LocalStorage'],
    github: 'https://github.com/Rishika-jat/Expense-Tracker',
    live: 'https://personal-expense-and-income-tracker.netlify.app/',
    category: 'fullstack'
  }
];

export const showcaseProjects = projects.slice(0, 6);
