import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const Experience = () => {
  const experiences = [
    
    {
      id: 2,
      title: 'Full Stack Software Developer',
      company: 'EtPayRent',
      location: 'Hybrid - Addis Ababa, Ethiopia',
      duration: 'March 2025 - Nov 2025',
      type: 'Full-time',
      status: 'ended',
      description:
        'Developing and maintaining comprehensive property management platform. Integrated Telebirr and multiple payment gateways for seamless transactions.',
      skills: ['React', 'Spring Boot', 'Java', 'Payment APIs', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'Freelance & Contract Work',
      location: 'Remote - Addis Ababa, Ethiopia',
      duration: 'Dec 2020 - Present',
      type: 'Freelance',
      status: 'Ongoing',
      description:
        'Delivered 15+ successful projects including AI-powered applications and EMR systems. Specialized in RAG AI solutions and healthcare platforms.',
      skills: ['React', 'Python', 'Flask', 'Django', 'Node.js', 'Laravel', 'AI/ML', 'Docker', 'AWS']
    },
    {
      id: 1,
      title: 'Technology Officer',
      company: 'Ethiopian Kidney Care NGO',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Jun 2024 - Present',
      type: 'Volunteer',
      status: '',
      description:
        'Leading IT department strategy and digital transformation initiatives for healthcare NGO. Architected and developed multiple high-impact healthcare technology solutions.',
      skills: ['Leadership', 'Healthcare Tech', 'System Architecture', 'Web Applications']
    }

  ]

  return (
    <section id="experience" className="relative bg-black py-24 text-white overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-4">
            <div className="rounded-xl bg-white p-3">
              <FiBriefcase className="text-xl text-black" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Work Experience
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-white/60">
            A timeline of roles, responsibilities, and real-world impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-8" />

          <div className="space-y-14">
            {experiences.map(exp => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ exp }) => {
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
    <div
      ref={cardRef}
      className={`relative pl-12 md:pl-24 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-white md:left-8" />

      {/* Card */}
      <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {exp.status && (
              <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
                {exp.status}
              </span>
            )}
            <h3 className="mb-1 text-xl font-medium tracking-tight">
              {exp.title}
            </h3>
            <p className="text-lg text-white/80">{exp.company}</p>
            <span className="mt-2 inline-block rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="space-y-2 text-sm text-white/60 lg:text-right">
            <div className="flex items-center gap-2 lg:justify-end">
              <FiCalendar />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 lg:justify-end">
              <FiMapPin />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-white/70">
          {exp.description}
        </p>

        {/* Skills */}
        <div>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/80 transition hover:bg-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default Experience