import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'EMR - Electronic Medical Record System',
      description: 'The Clinic Management system eliminates paperwork from reception to doctors, streamlining patient records management, and overall workflow.',
      image: 'assets/images/cms.png',
      tags: ['HTML', 'Tailwind', 'Laravel PHP', 'JavaScript', 'JSON','MySQL' ],
      github: '#',
      demo: '#',
    },

    {
      title: 'EtPay-Rent - Property Managment System',
      description: 'Eliminate the headaches of property management for both landlords and tenants. Rent collections and maintenance requests',
      image: 'assets/images/epr.png',
      tags: ['React.js', 'Tailwind', 'Java Springboot', 'postgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Chapa Payment Gateway Integration',
      description: 'Working on integrating the Chapa (Local Ethiopian Payment gateway) API into one existing project',
      image: '../assets/images/chapa.png',
      tags: ['Laravel', 'Tailwind', 'MySQL'],
      github: 'https://github.com/yonathan001/Chapa_Payment_Laravel',
      demo: '#',
    },
   
    
    {
      title: ' Kidney Patient Support Application',
      description: 'For a kidney patients in Ethiopian. Fetaures: Nearby dialysis center finding, connecting volunteers taxi drivers and patients.',
      image: 'assets/images/ekp.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP'],
      github: '#',
      demo: 'http://ethiopiankp.com',
    },
   
    
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website to showcase my skills and projects.',
      image: 'assets/images/portfolio.png',
      tags: ['React', 'Tailwind', 'vite', 'JSX'],
      github: 'https://github.com/yonathan001/React-Portfolio',
      demo: 'https://yonathan.com.et',
    },

    {
      title: 'AI based invoice Analyzer ',
      description: 'AI based invoice analyzer using Gemini API',
      image: 'assets/images/invoice.png',
      tags: ['Python','Flask','Gemini API', 'React','TypeScript'],
      github: 'https://github.com/yonathan001/AI-Invoice-Analyzer',
      demo: '#',
    },
    {
      title: 'AI Driven Micro Finance Solution ',
      description: 'A secure, AI-Driven credit scoring evaluation model  that treat verified identity and behavioral data as a form of alternative collateral. ',
      image: 'assets/images/mf.png',
      tags: ['Python','Flask','Gemini API', 'React','TypeScript'],
      github: 'https://github.com/mckienzie7/MicroFinance-Solution',
      demo: 'https://addismicrofinance.tech/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Featured Projects </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links - Now at bottom */}
                  <div className="mt-auto pt-4 border-t border-tertiary flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                    >
                      <span className="text-sm">Live Demo</span>
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
