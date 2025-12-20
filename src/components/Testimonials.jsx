import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Esete Getachew',
      position: 'CEO & Founder',
      company: 'Ethiopian Kidney Care | NGO',
      image: 'assets/images/es.JPG',
      content: 'I\'m so impressed by your problem-solving skills and technical expertise. Your ability to deliver high-quality solutions on time is remarkable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Biruktawit Taye',
      position: 'Creative Director & Owner',
      company: 'የእለት / yelet Design Studio',
      image: 'assets/images/bi.PNG',
      content: 'Working with you was an absolute pleasure. You turned my creative vision into reality with exceptional skill and precision.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Dr. Wendatir Getaneh',
      position: 'Founder & Lead Dentist',
      company: 'BENA Dental Clinic',
      image: 'assets/images/wo.PNG',
      content: 'Your ability to understand my specific needs and deliver exactly what I envisioned is truly commendable. The solution has significantly improved our patient management process.',
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`text-sm ${index < rating ? 'text-white fill-current' : 'text-white/20'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Client Testimonials
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative mt-6 md:mt-8">
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] mx-2 md:mx-3"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 h-full">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 md:mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 border border-white/10"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-xs md:text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-[10px] md:text-xs truncate">
                      {testimonial.position}
                    </p>
                    <p className="text-white/50 text-[10px] md:text-xs truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;