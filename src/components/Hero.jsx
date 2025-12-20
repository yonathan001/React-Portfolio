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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block text-white">Yonathan.W</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-semibold mb-4">
            Senior Software Engineer
          </p>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Building scalable applications and intelligent solutions with over 4 years of experience
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <FiDownload />
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-8 py-4  text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Let's Talk
              <FiArrowRight />
            </a>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-white/60 text-sm mb-4">Specialized in</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Python', 'Django', 'Flask', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;