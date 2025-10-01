import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FiStar, FiMessageCircle, FiUser, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Esete Getachew',
      position: 'CEO & Founder',
      company: 'Ethiopian Kidney Care | NGO',
      image: 'assets/images/es.JPG', 
      content: 'I\'m so impressed by your problem-solving skills and technical expertise. Your ability to deliver high-quality solutions on time is remarkable. I look forward to working with you on future projects.',
      rating: 5,
      project: 'Healthcare Management System',
      industry: 'Healthcare'
    },
    {
      id: 2,
      name: 'Biruktawit Taye',
      position: 'Creative Director & Owner',
      company: 'የእለት / yelet Design Studio',
      image: 'assets/images/bi.PNG', 
      content: 'Working with you was an absolute pleasure. You turned my creative vision into reality with exceptional skill and precision. The attention to detail and user experience was outstanding.',
      rating: 5,
      project: 'Brand Identity & Website',
      industry: 'Design & Creative'
    },
    {
      id: 3,
      name: 'Dr. Wendatir Getaneh',
      position: 'Founder & Lead Dentist',
      company: 'BENA Dental Clinic',
      image: 'assets/images/wo.PNG', 
      content: 'Your ability to understand my specific needs and deliver exactly what I envisioned is truly commendable. The solution has significantly improved our patient management process. Thank you!',
      rating: 5,
      project: 'Clinic Management Platform',
      industry: 'Healthcare'
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
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
                <FiMessageCircle className="text-slate-900 text-2xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
            </motion.div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              What my clients say about working with me and the solutions I've delivered
            </p>
          </div>

          {/* Testimonials Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 h-full"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <FiMessageCircle className="text-6xl text-cyan-400" />
                  </div>

                  <div className="p-8 h-full flex flex-col relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="text-yellow-400 fill-current text-lg"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-slate-200 text-lg leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl border border-cyan-400/30">
                      <div className="flex items-center gap-2 mb-2">
                        <FiBriefcase className="text-cyan-400 text-sm" />
                        <span className="text-sm font-semibold text-cyan-300">Project:</span>
                        <span className="text-sm text-slate-300">{testimonial.project}</span>
                      </div>
                      <div className="text-xs text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full inline-block">
                        {testimonial.industry}
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-slate-700 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-slate-300 text-sm font-medium mb-1">
                          {testimonial.position}
                        </p>
                        <p className="text-slate-400 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: linear-gradient(45deg, #22d3ee, #3b82f6) !important;
          opacity: 0.4 !important;
          width: 12px !important;
          height: 12px !important;
          transition: all 0.3s ease !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5) !important;
        }
        .testimonials-swiper .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
