import { FiUser, FiPhone, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss,
  SiPython, SiDjango, SiFlask, SiLaravel, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Python', icon: SiPython },
    { name: 'Django', icon: SiDjango },
    { name: 'Flask', icon: SiFlask },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit }
  ];

  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects', value: '15+' },
    { label: 'Clients', value: '20+' },
    { label: 'Technologies', value: '15+' }
  ];

  return (
    <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg">
                <FiUser className="text-black text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
            </div>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Get to know more about my background and skills
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Yonathan Wondosen
              </h3>
              <p className="text-white/80 font-semibold mb-6">Senior Software Engineer & Full-Stack Developer</p>
              
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>
                  Hi, My Name is Yonathan Wondosen. I'm a senior full-stack
software engineer based in Ethiopia. I work extensively with
React/Next.js, TypeScript, Tailwind, Python (Django, Flask),
Node/Express, SQL and NO-SQL Databases, building efficient,
scalable, and user-friendly software solutions.

                </p>
                <p>
                 In addition to full-stack development, I have hands-on experience
with DevOps practices, including Docker containerization,
deploying and managing applications on AWS and VPS
environments, and implementing CI/CD pipelines using GitHub
Actions to automate testing, building, and deployment processes.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <FiMail className="text-white" />
                  <span className="text-sm">yonathanwondosen@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <FiPhone className="text-white" />
                  <span className="text-sm">+251 914 287 268</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <FiMapPin className="text-white" />
                  <span className="text-sm">Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/YonathanWondosen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="text-white" />
                </a>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/[0.07] transition-colors"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <skill.icon className="text-white text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-white/80 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;