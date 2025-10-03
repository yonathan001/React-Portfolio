import { FiDownload, FiArrowRight } from 'react-icons/fi';

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

  // Social links removed per request

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(100,255,218,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-screen py-20">
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="font-inter inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 rounded-full text-cyan-400 font-medium text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Available for new opportunities
                </div>

                <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-white mb-2 font-medium">Hey, I'm</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
                    Yonathan
                  </span>
                </h1>
                
                <p className="font-inter text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                  🚀 Senior 
                  <span className="text-cyan-400 font-semibold tracking-wide">Software Engineer</span> |
                  4+ Years in Full-Stack Dev | Building scalable apps and intelligent solutions
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadCV}
                  className="font-inter px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold rounded-2xl 
                  hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FiDownload className="w-5 h-5" />
                  Download Resume
                </button>

                <a
                  href="#contact"
                  className="font-inter px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-2xl 
                  border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Let's Talk
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Tech Stack */}
              <div className="pt-8 border-t border-slate-700/50">
                <p className="font-inter text-slate-400 text-sm mb-4 text-center font-normal">Specialized in</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Flask', 'Django', 'Node.js', 'Laravel'].map((tech) => (
                    <span
                      key={tech}
                      className="font-inter px-4 py-2 bg-slate-800/30 text-slate-300 text-sm font-medium
                      border border-slate-700/30 hover:border-cyan-400/50 hover:text-cyan-400 rounded-lg transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="font-inter flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
