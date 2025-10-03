import { FiBriefcase, FiCalendar, FiMapPin, FiCode, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Chief Technology Officer',
      company: 'Ethiopian Kidney Care NGO',
      companyType: 'Non-Profit Organization',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Jun 2024 - Present',
      type: 'Volunteer',
      status: 'Current',
      description: [
        'Leading IT department strategy and digital transformation initiatives for healthcare NGO',
        'Architected and developed multiple high-impact healthcare technology solutions',
        'Implemented new features that increased user engagement by 40% in existing web applications',
        'Managed cross-functional teams and established development best practices'
      ],
      achievements: [
        'Implimented new system solutions',
        'Led team of IT',
        
      ],
      skills: ['Leadership', 'Healthcare Tech', 'Team Management', 'System Architecture', 'Web Applications'],
      icon: '🏥'
    },
    {
      id: 2,
      title: 'Full Stack Software Developer',
      company: 'EtPayRent',
      companyType: 'PropTech',
      location: 'Addis Ababa, Ethiopia',
      duration: 'March 2024 - Present',
      type: 'Full-time',
      status: 'Current',
      description: [
        'Developing and maintaining comprehensive property management platform',
        'Integrated Telebirr and multiple payment gateways for seamless transactions',
        'Conducting market research and data analysis for feature development'
       
      ],
      achievements: [
        'Integrated 1+ payment gateways',
        'Architected and Developed Complex Backend system'
      ],
      skills: ['React', 'Spring Boot', 'Java', 'Payment APIs', 'Tailwind CSS', 'PostgreSQL'],
      icon: '🏠'
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'Freelance & Contract Work',
      companyType: 'Various Clients',
      location: 'Remote & Addis Ababa',
      duration: 'Dec 2020 - Present',
      type: 'Freelance',
      status: 'Ongoing',
      description: [
        'Delivered 15+ successful projects including AI-powered applications and EMR systems',
        'Specialized in RAG (Retrieval-Augmented-Generation) AI solutions and healthcare platforms',
        'Built custom web applications for diverse industries including healthcare and fintech',
        'Maintained 98% client satisfaction rate with consistent project delivery'
      ],
      achievements: [
        '15+ successful projects',
        'LLM / AI integration',
        'Built custom web applications for diverse industries including healthcare and fintech'
      ],
      skills: ['React', 'Python', 'Flask', 'Django', 'Node.js' ,'Laravel', 'AI/ML', 'Docker', 'AWS', 'Git'],
      icon: '💼'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Current': return 'bg-green-900/30 text-green-400 border-green-400/30';
      case 'Ongoing': return 'bg-blue-900/30 text-blue-400 border-blue-400/30';
      case 'Completed': return 'bg-slate-700/30 text-slate-400 border-slate-400/30';
      default: return 'bg-slate-700/30 text-slate-400 border-slate-400/30';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time': return 'bg-purple-900/30 text-purple-400 border-purple-400/30';
      case 'Volunteer': return 'bg-cyan-900/30 text-cyan-400 border-cyan-400/30';
      case 'Freelance': return 'bg-orange-900/30 text-orange-400 border-orange-400/30';
      default: return 'bg-slate-700/30 text-slate-400 border-slate-400/30';
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full">
                <FiBriefcase className="text-slate-900 text-2xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Work Experience
              </h2>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              My professional journey and key contributions in technology and software development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-slate-600 rounded-full" />
            
            {/* Experience items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 ml-0 lg:ml-0 lg:px-8 w-full">
                    <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/50 relative overflow-hidden">
                      {/* Company Icon */}
                      <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {exp.icon}
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(exp.status)}`}>
                            {exp.status}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-cyan-400">
                            <FiBriefcase className="text-sm" />
                            <span className="font-semibold">{exp.company}</span>
                            <span className="text-slate-400 text-sm">• {exp.companyType}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-slate-400 text-sm">
                            <div className="flex items-center gap-1">
                              <FiMapPin className="text-xs" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FiCalendar className="text-xs" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                          <FiCode className="text-cyan-400" />
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-start leading-relaxed">
                              <span className="text-cyan-400 mr-3 mt-1 text-xs">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                          <FiAward className="text-yellow-400" />
                          Key Achievements:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <FiAward className="text-yellow-400 text-xs" />
                              <span className="text-slate-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-200 mb-3">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Timeline dot and line - hidden on mobile, visible on md and up */}
                  <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 h-full w-12">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center z-10 border-4 border-slate-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats Removed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
