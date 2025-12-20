import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'RAG AI Chatbot',
      description:
        'Advanced RAG AI system integrating Large Language Models with MongoDB vector search for accurate, context-aware responses.',
      image: 'assets/images/rag.png',
      tags: ['Python', 'Flask', 'OpenAI', 'MongoDB'],
      github: '#',
      demo: '#',
      year: '2025'
    },
    {
      id: 2,
      title: 'EMR System',
      description:
        'Comprehensive clinic management system eliminating paperwork and streamlining healthcare workflow.',
      image: 'assets/images/cms.png',
      tags: ['React', 'Flask', 'MySQL'],
      github: '#',
      demo: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'EtPay-Rent',
      description:
        'Modern property management solution with automated rent collection and maintenance tracking.',
      image: 'assets/images/epr.png',
      tags: ['React', 'Java Spring', 'PostgreSQL'],
      github: '#',
      demo: '#',
      year: '2025'
    },
    {
      id: 4,
      title: 'Chapa Payment Gateway Integration',
      description:
        'Seamless Ethiopian payment gateway integration with comprehensive transaction management.',
      image: 'assets/images/chapa.png',
      tags: ['Laravel', 'MySQL', 'Payment API'],
      github: 'https://github.com/yonathan001/Chapa_Payment_Laravel',
      demo: '#',
      year: '2024'
    },
   

    {
      id: 5,
      title: 'Better auth -  oAuth',
      description:
        'Implementing secure social login with better auth to fully protected OAuth login, automatic session handling, and seamless integration with my backend and Prisma Schema. ',
      image: 'assets/images/ba.png',
      tags: ['Node', 'Next','Prisma','oAuth', 'Better Auth'],
      github: 'https://github.com/yonathan001/ecom-node',
      demo: '',
      year: '2025'
    },
     {
      id: 6,
      title: 'AI MicroFinance',
      description:
        'AI-driven credit scoring system using verified identity and behavioral data.',
      image: 'assets/images/mf.png',
      tags: ['Python', 'Flask', 'React', 'AI'],
      github: 'https://github.com/mckienzie7/MicroFinance-Solution',
      demo: 'https://addismicrofinance.tech/',
      year: '2025'
    },
  ]

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-5">
            <div className="p-3 rounded-xl bg-white">
              <FiCode className="text-black text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Selected works focused on performance, scalability, and real-world impact
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20"
          >
            <FiGithub />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs text-white/50">{project.year}</span>
        </div>

        <p className="text-sm text-white/70 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 py-2 text-sm"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 py-2 text-sm"
          >
            Demo <FiExternalLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Projects
