import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import {
  SiDjango,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss
} from 'react-icons/si';

import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-700' },
    { name: 'Django', icon: SiDjango, color: 'text-green-700' },
    { name: 'PHP', icon: SiPhp, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
    
  ];

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, link: 'https://github.com/YonathanWondosen' },
    { name: 'LinkedIn', icon: FiLinkedin, link: 'https://www.linkedin.com/in/yonathan-wondosen-a025bb239/' },
    { name: 'Instagram', icon: FiInstagram, link: 'https://www.instagram.com/yo_na_th_an/' },
    
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">About Me</h2>
          
          {/* Profile Card */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="bg-tertiary rounded-2xl p-6 shadow-xl">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-secondary/20">
                  {/* Add your profile image here */}
                  <div className="w-full h-full flex items-center justify-center text-secondary">
                    YN {/* Replace with your initials or image */}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Yonathan Wondosen</h3>
                <p className="text-textSecondary text-center mb-4">Software Developer</p>
                <div className="flex justify-center gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-textSecondary">
                    <span>📍</span>
                    <span>Addis Ababa,Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-2 text-textSecondary">
                    <span>📞</span>
                    <span>+251 914 287 268</span>
                  </div>
                  <div className="flex items-center gap-2 text-textSecondary">
                    <span>📧</span>
                    <span>yonathanwondosen@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-tertiary rounded-2xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-4">My Profile</h3>
                <div className="space-y-4 text-textSecondary">
                  <p>
                  Hello👋! My name is Yonathan Wondosen. I'm a senior full-stack software developer based in Ethiopia. I primarily work with Laravel (PHP), React.js, SQL, NoSQL, Tailwind, and Bootstrap. My expertise lies in web applications that are efficient and user-friendly.
                  </p>
                  <p>
                  I constantly update my skills and explore new technologies to stay ahead in the ever-evolving tech landscape. I have a strong passion for problem-solving and a deep dedication to my work. Building high-performance digital solutions that enhance user experience and drive efficiency is always a priority.
                  </p>
                 
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-tertiary rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-tertiary/80 transition-colors"
                >
                  <skill.icon className={`text-3xl ${skill.color}`} />
                  <span className="text-sm text-textSecondary">{skill.name}</span>
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
