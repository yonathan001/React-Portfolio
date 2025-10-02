import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = 'assets/yonathan-resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'yonathan-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yonathan001', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/yonathan-wondosen-a025bb239/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:yonathanwondosen@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(100,255,218,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-12 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 -right-12 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl" 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-screen py-20">
            {/* Text Content */}
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-inter inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 rounded-full text-cyan-400 font-medium text-sm"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </motion.div>

                <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-white mb-2 font-medium">Hey, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
                    Yonathan
                  </span>
                </h1>
                
                <p className="font-inter text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
  🚀 Senior 
  <span className="text-cyan-400 font-semibold tracking-wide"> Software Engineer   </span> |
  4+ Years in Full-Stack Dev | Building scalable apps and intelligent solutions
</p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-inter group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-2xl 
                  hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-400/25"
                >
                  <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-inter group px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-2xl 
                  border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Let's Talk
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 justify-center"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl text-slate-300 hover:text-cyan-400 
                    border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="pt-8 border-t border-slate-700/50"
              >
                <p className="font-inter text-slate-400 text-sm mb-4 text-center font-normal">Specialized in</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Flask', 'Django', 'Node.js', 'Laravel'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="font-inter px-4 py-2 bg-slate-800/30 backdrop-blur-sm text-slate-300 text-sm font-medium
                      border border-slate-700/30 hover:border-cyan-400/50 hover:text-cyan-400 rounded-lg transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-inter flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
