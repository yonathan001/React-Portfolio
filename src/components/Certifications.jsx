import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Django Web Framework',
      issuer: 'META',
      platform: 'Coursera',
      date: '2025',
      description: 'Comprehensive course covering Django web framework, REST APIs, and full-stack development.',
      credentialUrl: 'https://coursera.org/verify/H6XGZWUQ1RIV',
      tags: ['Django', 'Python', 'REST API']
    },
    {
      id: 2,
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Stanford University',
      platform: 'Coursera',
      date: '2025',
      description: 'Advanced machine learning course covering regression and classification algorithms.',
      credentialUrl: 'https://coursera.org/verify/EC8Z2W1PYQ9X',
      tags: ['Machine Learning', 'AI', 'Regression']
    },
    {
      id: 3,
      title: 'RAG (Retrieval Augmented Generation)',
      issuer: 'DeepLearning.AI',
      platform: 'Coursera',
      date: '2025',
      description: 'Cutting-edge course on Retrieval Augmented Generation and language models.',
      credentialUrl: 'https://coursera.org/verify/EME9M2PTADJL',
      tags: ['AI', 'NLP', 'RAG']
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg">
                <FiAward className="text-black text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Certifications
              </h2>
            </div>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Industry-recognized certifications and continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <FiAward className="text-white text-xl" />
                  </div>
                  <div className="flex items-center gap-1 text-white/60 text-xs">
                    <FiCalendar className="text-xs" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-white/80 font-semibold text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-white/60 text-xs mb-3">
                    {cert.platform}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
                  >
                    <span>View Certificate</span>
                    <FiExternalLink className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;