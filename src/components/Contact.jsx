import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                I'm always looking for new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you!
              </p>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <FiMail className="text-cyan-400 text-2xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                  <a 
                    href="mailto:yonathanwondosen@gmail.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    yonathanwondosen@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <FiMapPin className="text-cyan-400 text-2xl mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">Available for remote work worldwide</p>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center gap-6 mb-12"
              >
                <a
                  href="mailto:yonathanwondosen@gmail.com"
                  className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <FiMail className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                </a>
                <a
                  href="https://github.com/yonathan001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/yo_na_th_an/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-full border border-slate-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FiInstagram className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm"
              >
                © {currentYear} Yonathan Wondosen. All rights reserved.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 text-sm"
              >
                <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  About
                </a>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Experience
                </a>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Projects
                </a>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
