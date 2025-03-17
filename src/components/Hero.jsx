import { FiDownload } from 'react-icons/fi';
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 -right-12 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-secondary/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center md:text-left md:grid md:grid-cols-2 md:items-center md:gap-12 md:space-y-0">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <span className="inline-block text-secondary font-medium px-4 py-2 bg-secondary/10 rounded-full">
                Software engineer.
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Hey, I'm{' '}
                  <span className="text-secondary">
                    Yonathan
                  </span>
                </h1>
                <p className="text-textSecondary text-lg md:text-xl max-w-xl leading-relaxed">
                  I'm full-stack software developer with 4+ years of experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 rounded-2xl bg-secondary text-primary font-semibold 
                  hover:translate-y-[-4px] hover:shadow-lg hover:shadow-secondary/25
                  transition-all duration-300 flex items-center gap-3 group"
                >
                  <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-8 border-t border-textSecondary/10"
              >
                <p className="text-textSecondary text-sm mb-4">Specialized </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['React','Laravel','Django','Tailwind'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-primary-light text-textSecondary text-sm
                      border border-textSecondary/10 hover:border-secondary/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative Image/Pattern */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent
                transform rotate-12 animate-pulse"
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-secondary/20 via-secondary/10 to-transparent
                  transform -rotate-12"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;
