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
      category: 'Web Development',
      level: 'Intermediate',
      description: 'Comprehensive course covering Django web framework, REST APIs, and full-stack development with Python.',
      credentialUrl: 'https://coursera.org/verify/H6XGZWUQ1RIV',
      tags: ['Django', 'Python', 'REST API', 'Web Development'],
      logo: '🔷', // Meta logo placeholder
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
      logo: '🎓', // Stanford logo placeholder
      verified: true,
      skills: ['Data Science', 'Algorithm Design', 'Statistical Analysis']
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
      logo: '🤖', // DeepLearning.AI logo placeholder
      verified: true,
      skills: ['Natural Language Processing', 'Information Retrieval', 'AI Architecture']
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
              <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                <FiAward className="text-slate-900 text-2xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-400 p-6 text-slate-900">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{cert.logo}</div>
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
                    <div className="flex items-center gap-2 text-slate-900/90">
                      <FiUser className="text-sm" />
                      <span className="text-sm">{cert.issuer}</span>
                      <span className="text-slate-900/60">•</span>
                      <span className="text-sm">{cert.platform}</span>
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
                    className="group/btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 px-6 py-3 rounded-xl font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg"
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
