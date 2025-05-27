import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  // You can add more certifications to this array
  const certifications = [
    {
      id: 1,
      title: 'Django Web Framework',
      issuer: 'Coursera ',
      date: '2025',
      description: 'Yonathan Wondosen has successfully completed Django Web Framework an online non-credit course authorized by Meta and offered through Coursera ',
      credentialUrl: 'https://coursera.org/verify/H6XGZWUQ1RIV',
      tags: ['Django', 'Python', 'REST API']
    }


    
    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="py-20 bg-tertiary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-secondary/10 mr-4">
                      <svg 
                        className="w-6 h-6 text-secondary" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-textSecondary text-sm mb-3">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  
                  <p className="text-textSecondary text-sm mb-4">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  
                  <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-secondary text-xs px-2 py-1 rounded-full border border-secondary/30 bg-secondary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm text-secondary hover:text-accent transition-colors"
                  >
                    View Credential
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
