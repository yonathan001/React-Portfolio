import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiUser } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Django Web Framework',
      issuer: 'META',
      platform: 'Coursera',
      date: '2025',
      category: 'Framework',
      level: 'Advanced',
      description: 'Comprehensive course covering Django web framework, REST APIs, and full-stack development with Python.',
      credentialUrl: 'https://coursera.org/verify/H6XGZWUQ1RIV',
      tags: ['Django', 'Python', 'REST API', 'Web Development'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
      logoClass: 'h-10 w-10 object-contain',
      verified: true,
      skills: ['Backend Development', 'API Design', 'Database Management']
    },
    {
      id: 2,
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Stanford University',
      platform: 'Coursera',
      date: '2025',
      category: 'Machine Learning',
      level: 'Advanced',
      description: 'Advanced machine learning course covering regression, classification algorithms, and practical implementation.',
      credentialUrl: 'https://coursera.org/verify/EC8Z2W1PYQ9X',
      tags: ['Machine Learning', 'AI', 'Regression', 'Classification'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Stanford_University_seal_2003.svg/1024px-Stanford_University_seal_2003.svg.png',
      logoClass: 'h-10 w-10 object-contain bg-white p-1 rounded-full',
      verified: true,
      skills: ['AI', 'ML', 'Regression', 'Classification']
    },
    {
      id: 3,
      title: 'RAG (Retrieval Augmented Generation)',
      issuer: 'DeepLearning.AI',
      platform: 'Coursera',
      date: '2025',
      category: 'Artificial Intelligence',
      level: 'Advanced',
      description: 'Cutting-edge course on Retrieval Augmented Generation, combining information retrieval with language generation.',
      credentialUrl: 'https://coursera.org/verify/EC8Z2W1PYQ9X',
      tags: ['AI', 'NLP', 'RAG', 'Deep Learning'],
      logo: 'https://www.deeplearning.ai/wp-content/uploads/2023/01/cropped-dlai-logo-color-1-32x32.png',
      logoClass: 'h-10 w-10 object-contain bg-white p-1 rounded',
      verified: true,
      skills: ['RAG', 'Vector Search', 'LLM Integration', 'Context Retrieval']
    }
  ];


  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-900/30 text-green-400 border-green-400/30';
      case 'Intermediate': return 'bg-blue-900/30 text-blue-400 border-blue-400/30';
      case 'Advanced': return 'bg-purple-900/30 text-purple-400 border-purple-400/30';
      default: return 'bg-slate-700/30 text-slate-400 border-slate-400/30';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-slate-700 rounded-full">
                <FiAward className="text-cyan-400 text-2xl" />
              </div>
              
              <h2 className="font-inter text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Certifications
              </h2>
            </motion.div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>


          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-700/50 hover:border-cyan-400/50"
              >
                {/* Certificate Header */}
                <div className="relative bg-slate-700 p-6 text-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`} 
                        className={cert.logoClass || 'h-10 w-10 object-contain'}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg=='; // Fallback to a circle
                          e.target.className = 'h-10 w-10 bg-slate-600 rounded-full p-1';
                        }}
                      />
                      {cert.verified && (
                        <div className="flex items-center gap-1 bg-slate-900/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <FiAward className="text-sm" />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <FiUser className="text-sm" />
                      <span className="text-sm">{cert.issuer}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-sm text-white/90">{cert.platform}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <FiCalendar className="text-sm" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 text-cyan-400 rounded-full border border-cyan-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Credential Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full inline-flex items-center justify-center gap-2 bg-slate-700 text-cyan-400 px-6 py-3 rounded-xl font-medium hover:bg-slate-600 transition-all duration-300 border border-slate-600 hover:border-cyan-400/50"
                  >
                    <span>View Credential</span>
                    <FiExternalLink className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
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
