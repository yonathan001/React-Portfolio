import { FiGithub, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail, FiUser, FiCode, FiDownload, FiExternalLink, FiCloud } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  SiDjango,
  SiDocker,
  SiFlask,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiGithubactions
} from 'react-icons/si';

import { motion } from 'framer-motion';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: 'text-cyan-400', level: 90 },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 95 },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: SiPython, color: 'text-blue-400', level: 95 },
        { name: 'Django', icon: SiDjango, color: 'text-green-400', level: 90 },
        { name: 'Flask', icon: SiFlask, color: 'text-blue-400', level: 85 },
        { name: 'Laravel', icon: SiLaravel, color: 'text-red-400', level: 80 },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400', level: 85 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', level: 90 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', level: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: SiDocker, color: 'text-blue-400', level: 80 },
        { name: 'AWS', icon: FiCloud, color: 'text-orange-400', level: 75 },
        { name: 'Git', icon: SiGit, color: 'text-red-400', level: 95 },
        { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-gray-400', level: 85 },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400', level: 90 }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, link: 'https://www.linkedin.com/in/yonathan-wondosen-a025bb239/', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: FiGithub, link: 'https://github.com/YonathanWondosen', color: 'hover:text-slate-300' },
    { name: 'Instagram', icon: FiInstagram, link: 'https://www.instagram.com/yo_na_th_an/', color: 'hover:text-pink-400' },
    { name: 'Telegram', icon: FaTelegramPlane, link: 'https://t.me/yo_na_th_an', color: 'hover:text-blue-400' }
  ];

  const stats = [
    { label: 'Years Experience', value: '4+', icon: '🚀' },
    { label: 'Projects Completed', value: '15+', icon: '💼' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                <FiUser className="text-slate-900 text-2xl" />
              </div>
              <h2 className="font-inter text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.div>
           
          </div>

          {/* Main Content */}
          <div className="mb-16">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                {/* Profile Header */}
                <div className="text-center mb-12">
                 
                  
                  <h3 className="font-inter text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="text-white">I'm </span>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Yonathan Wondosen</span>
                  </h3>
                 
                  <p className="font-inter text-slate-400 font-normal">Senior Software Engineer Full-Stack Developer & Tech Lead</p>
                </div>

                {/* Journey Content */}
                <div className="space-y-8 text-slate-300 leading-relaxed">
                  

                  {/* Technical Expertise - Single Card */}
                  <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30 mt-12">
                    <div className="flex items-center gap-3 mb-6">
                      <FiCode className="text-cyan-400 text-2xl" />
                      <h4 className="font-inter text-xl font-semibold text-white">Technical Expertise</h4>
                    </div>
                    <div className="space-y-4">
                      <p className="font-inter font-normal">
                      Hello 👋! My name is Yonathan Wondosen. I'm a senior full-stack software developer based in Ethiopia. I work extensively with React.js / TypeScript, Python (Django, Flask), Laravel, Tailwind, SQL and NO-SQL Databases, building efficient, scalable, and user-friendly software solutions.
                      In addition to full-stack development,</p>

                      <p>  I have hands-on experience with DevOps practices, including Docker
                      containerization, deploying and managing applications on AWS EC2 and VPS environments, and implementing CI/CD pipelines using GitHub Actions to automate testing, building, and deployment processes.
                      </p>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-700/30 rounded-xl p-6 text-center border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300"
                      >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="font-inter text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                        <div className="font-inter text-xs text-slate-400 font-normal">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact & Social */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 pt-8 border-t border-slate-700/50">
                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-slate-300">
                        <FiPhone className="text-cyan-400" />
                        <span className="font-inter font-normal">+251 914 287 268</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <FiMail className="text-cyan-400" />
                        <span className="font-inter font-normal">yonathanwondosen@gmail.com</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-slate-700/50 rounded-xl text-slate-300 hover:text-cyan-400 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="font-inter text-3xl font-bold text-white mb-4">Technical Expertise</h3>
              <p className="font-inter text-slate-400 font-normal">Technologies and tools I work with</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skillCategories.flatMap(category => category.skills).map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <skill.icon className={`text-4xl ${skill.color} group-hover:drop-shadow-lg transition-all duration-300`} />
                  </motion.div>
                  <h4 className="font-inter text-slate-200 font-medium text-sm group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
