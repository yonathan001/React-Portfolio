import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'CMS - Clinic Management System',
      description: 'The CMS system eliminates paperwork from reception to doctors, streamlining patient records management, and overall workflow, providing a seamless experience for both staff and patients.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['HTML5', 'Tailwind', 'PHP', 'JavaScript', 'MySQL' , 'JSON' ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Chapa Payment Gateway Integration with Laravel',
      description: 'working on integrating the Chapa payment gateway API into my project with #Laravel framework. This integration involved leveraging Laravels powerful features to handle payment transactions seamlessly',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Laravel', 'Tailwind', 'MySQL'],
      github: 'https://github.com/yonathan001/Chapa_Payment_Laravel',
      demo: '#',
    },
    {
      title: 'Ethiopian kidney Patients',
      description: 'The web application that is specifically developed for kidney patients in Ethiopian. Some features of the wep app is nearby dialysis center finding, connecting volunteers taxi drivers and patients.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP'],
      github: '#',
      demo: 'http://ethiopiankp.com',
    },
    {
      title: 'OTP - One time password verification',
      description: 'Adding One time password verification in Laravel projcet.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Laravel', 'MySQL', 'Tailwind'],
      github: 'https://github.com/yonathan001/OTP-Verification',
      demo: '#',
    },
    {
      title: 'TODO - TASK MANAGEMENT',
      description: 'Task List app using React.Js, Node.Js, and MongoDB',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js' , 'Tailwind'],
      github: 'https://github.com/yonathan001/MyTask',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website to showcase my skills and projects.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Tailwind', 'vite', 'JSX'],
      github: 'https://github.com/yonathan001/React-Portfolio',
      demo: '#',
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
          <h2 className="section-title text-center mb-16">Featured Projects</h2>
          
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
                <div className="relative overflow-hidden group h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
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
