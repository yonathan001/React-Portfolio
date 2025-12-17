import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-lg">
              <FiMail className="text-black text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get In Touch
            </h2>
          </div>
          
          <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
            I'm always looking for new opportunities. Let's connect!
          </p>

          {/* Social Links */}
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:yonathanwondosen@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Email"
            >
              <FiMail className="text-white text-lg" />
            </a>
            <a
              href="tel:+251914287268"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Phone"
            >
              <FiPhone className="text-white text-lg" />
            </a>
            <a
              href="https://github.com/YonathanWondosen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="text-white text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/yo_na_th_an/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Instagram"
            >
              <FiInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://t.me/yo_na_th_an"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;