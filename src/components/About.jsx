import { FiGithub, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail, FiUser, FiCode, FiDownload, FiExternalLink, FiCloud } from 'react-icons/fi';
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
  SiSpringboot
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
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-400', level: 75 }
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
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400', level: 90 }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, link: 'https://www.linkedin.com/in/yonathan-wondosen-a025bb239/', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: FiGithub, link: 'https://github.com/YonathanWondosen', color: 'hover:text-slate-300' },
    { name: 'Instagram', icon: FiInstagram, link: 'https://www.instagram.com/yo_na_th_an/', color: 'hover:text-pink-400' }
  ];

  const stats = [
    { label: 'Years Experience', value: '4+', icon: '🚀' },
    { label: 'Projects Completed', value: '15+', icon: '💼' },
    { label: 'Technologies', value: '12+', icon: '⚡' },
    { label: 'Happy Clients', value: '98%', icon: '😊' }
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Passionate full-stack developer crafting innovative solutions with modern technologies
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 sticky top-8">
                {/* Profile Image */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-400 p-1">
                    <img
                      src="assets/images/mee.png"
                      alt="Yonathan Wondosen"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Yonathan Wondosen</h3>
                  <p className="text-cyan-400 font-medium mb-1">Senior Software Engineer</p>
                  <p className="text-slate-400 text-sm">Full-Stack Developer & Tech Lead</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-slate-700/50 rounded-full text-slate-300 ${social.color} transition-all duration-300 hover:bg-slate-600/50`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <FiMapPin className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FiPhone className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">+251 914 287 268</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FiMail className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm">yonathanwondosen@gmail.com</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 px-6 py-3 rounded-xl font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiDownload className="text-sm" />
                  Download CV
                </motion.button>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <FiCode className="text-cyan-400 text-2xl" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p className="text-lg">
                    Hello 👋! I'm <span className="text-cyan-400 font-semibold">Yonathan Wondosen</span>, 
                    a passionate senior full-stack software developer based in Ethiopia. With over 4 years of experience, 
                    I specialize in building efficient, scalable, and user-friendly software solutions.
                  </p>

                  <p>
                    I work extensively with modern technologies including <span className="text-cyan-400">React.js</span>, 
                    <span className="text-cyan-400"> TypeScript</span>, <span className="text-cyan-400">Python</span> (Django, Flask), 
                    <span className="text-cyan-400"> Laravel</span>, and both SQL and NoSQL databases. My expertise spans 
                    the entire development lifecycle, from concept to deployment.
                  </p>

                  <p>
                    Beyond full-stack development, I have hands-on experience with <span className="text-cyan-400">DevOps practices</span>, 
                    including Docker containerization, AWS EC2 deployment, and CI/CD pipeline implementation using GitHub Actions. 
                    I'm passionate about creating solutions that make a real impact.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/30"
                      >
                        <div className="text-2xl mb-1">{stat.icon}</div>
                        <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </motion.div>
                    ))}
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
              <h3 className="text-3xl font-bold text-white mb-4">Technical Expertise</h3>
              <p className="text-slate-400">Technologies and tools I work with</p>
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
                  <h4 className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors duration-300">
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
