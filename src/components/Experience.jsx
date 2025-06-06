import { FiBriefcase, FiCalendar } from 'react-icons/fi';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Cheif Technology Officer (volunteer)',
      company: 'Ethiopian Kidney Care NGO',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Jun 2024 - Present',
      description: [
        'Managing IT Department',
        'Development of multiple high-impact projects with Technology ',
        'Implemented new features that increased user engagement in existing web applications',
        
      ],
      skills: ['Technology', 'Development ', 'Management', 'Team Work', 'Web Application '],
    },

    {
      title: 'Full Stack Software Developer',
      company: 'EtPayRent',
      location: 'Addis Ababa, Ethiopia',
      duration: 'March 2025 - Present',
      description: [
        'I am working on Development and Maintenance of the system',
        'Telebirr and other payment gateways integration',
        'Conducting relevant research and data gathering',
   
      ],
      skills: ['React', 'API', 'JSON' , 'Tailwind', 'Spring Boot', 'Java' ],
    },
    {
      title: 'Software Developer',
      company: 'Freelancing on Upwork and Local companies',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Dec 2020 - Present',
      description: [
        'Worked on various freelance projects, including E-commerce websites, Landing Pages, Electronic medical record (EMR) Systems and custom web applications.',
        
   
      ],
      skills: ['React', 'Laravel','Python', 'Django', 'MYSQL', 'PHP', 'Javascript' , 'Tailwind', 'Git', 'PostgreSQL'],
    },
    
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-secondary/20" />
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-primary" />
                  
                  {/* Content */}
                  <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                    <div className="bg-tertiary p-6 rounded-xl shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-textPrimary mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-textSecondary text-sm">
                            {exp.location}
                          </p>
                        </div>
                        <div className="flex items-center text-textSecondary text-sm">
                          <FiCalendar className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-textSecondary text-sm flex items-start">
                            <span className="text-secondary mr-2">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
