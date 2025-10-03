import { FiExternalLink, FiGithub, FiCode, FiEye, FiStar, FiCalendar } from 'react-icons/fi';
import React, { useState } from 'react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'RAG AI Chatbot',
      subtitle: 'Retrieval-Augmented Generation System',
      description: 'Advanced RAG AI system that integrates Large Language Models with MongoDB vector search. Uses embeddings to store and retrieve relevant documents based on user queries, then passes retrieved context to LLM for accurate, context-aware responses.',
      image: 'assets/images/rag.png',
      tags: ['Python', 'Flask', 'OpenAI', 'Vector Store', 'MongoDB'],
      category: 'AI/ML',
      github: '#',
      demo: '#',
      year: '2024',
      complexity: 'Advanced',
      features: ['Vector Search', 'LLM Integration', 'Context Retrieval', 'Real-time Chat']
    },
    {
      id: 2,
      title: 'EMR System',
      subtitle: 'Electronic Medical Record Platform',
      description: 'Comprehensive clinic management system that eliminates paperwork from reception to doctors. Streamlines patient records management, appointment scheduling, and overall healthcare workflow with intuitive design.',
      image: 'assets/images/cms.png',
      tags: ['React', 'Flask', 'MySQL', 'Healthcare'],
      category: 'Web Development',
      github: '#',
      demo: '#',
      year: '2024',
      complexity: 'Advanced',
      features: ['Patient Management', 'Appointment System', 'Medical Records', 'Reporting','SMS Notifications','Chat '] 
    },
    {
      id: 3,
      title: 'EtPay-Rent',
      subtitle: 'Property Management Platform',
      description: 'Modern property management solution that eliminates headaches for both landlords and tenants. Features automated rent collection, maintenance request tracking, and comprehensive property analytics.',
      image: 'assets/images/epr.png',
      tags: ['React.js', 'Tailwind', 'Java Spring', 'PostgreSQL'],
      category: 'Web Development',
      github: '#',
      demo: '#',
      year: '2024',
      complexity: 'Advanced',
      features: ['Rent Collection', 'Maintenance Tracking', 'Analytics', 'Multi-tenant']
    },
    {
      id: 4,
      title: 'Chapa Integration',
      subtitle: 'Ethiopian Payment Gateway',
      description: 'Seamless integration of Chapa payment gateway API into existing projects. Enables secure local Ethiopian payment processing with comprehensive transaction management and reporting.',
      image: '../assets/images/chapa.png',
      tags: ['Laravel', 'MySQL', 'Payment API'],
      category: 'Integration',
      github: 'https://github.com/yonathan001/Chapa_Payment_Laravel',
      demo: '#',
      year: '2024',
      complexity: 'Intermediate',
      features: ['Payment Processing', 'Transaction History', 'API Handling', 'Security']
    },
    {
      id: 5,
      title: 'AI MicroFinance',
      subtitle: 'Credit Scoring Solution',
      description: 'Secure, AI-driven credit scoring evaluation model that treats verified identity and behavioral data as alternative collateral. Revolutionary approach to microfinance accessibility.',
      image: 'assets/images/mf.png',
      tags: ['Python', 'Flask', 'Gemini API', 'React', 'TypeScript'],
      category: 'AI/ML',
      github: 'https://github.com/mckienzie7/MicroFinance-Solution',
      demo: 'https://addismicrofinance.tech/',
      year: '2024',
      complexity: 'Advanced',
      features: ['AI Credit Scoring', 'Dashboard Overview' , 'Loan Management','Stripe Payment Processing']
    },
  ];

  const filteredProjects = projects;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-900/30 text-green-400 border-green-400/30';
      case 'Completed': return 'bg-blue-900/30 text-blue-400 border-blue-400/30';
      case 'In Progress': return 'bg-yellow-900/30 text-yellow-400 border-yellow-400/30';
      default: return 'bg-slate-700/30 text-slate-400 border-slate-400/30';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-blue-400';
      case 'Advanced': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                <FiCode className="text-slate-900 text-2xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
            </p>
          </div>

{/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 relative"
              >
                

                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gray-900/30 flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <FiGithub className="text-white text-xl" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <FiEye className="text-white text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-400">
                        <FiCalendar className="text-sm" />
                        <span className="text-xs">{project.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-slate-400">Complexity:</span>
                      <span className={`text-xs font-semibold ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-200 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-200 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 text-cyan-400 rounded-full border border-cyan-400/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                      <FiGithub className="text-sm" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-900 px-4 py-2 rounded-xl font-medium transition-all duration-300"
                    >
                      <span className="text-sm">Live Demo</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;