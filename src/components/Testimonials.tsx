import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string; // will render custom avatar block
  text: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Founder & CEO',
      company: 'NovaHealth Inc.',
      image: 'SJ',
      text: 'Zyroxx rebuilt our mobile application using Flutter and the results have been incredible. Our app crash rates dropped to zero, and the user signup rate doubled in two weeks. Absolute professionals!',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'VP of Technology',
      company: 'Vertex Tech',
      image: 'MC',
      text: 'We engaged Zyroxx for a full-scale Next.js dashboard overhaul. They structured a beautiful, responsive, and secure UI that integrated seamlessly with our database backends. Their clean-code guidelines are top notch.',
      rating: 5
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Product Owner',
      company: 'Aura Logistics',
      image: 'ER',
      text: 'Highly competent engineering team! They took over our API integration and cloud deployment pipeline, automating our testing and docker containers. Our hosting overhead costs were reduced by 40%. Highly recommended.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // auto-advance every 8s

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const current = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="ambient-glow" style={{ top: '10%', right: '10%' }}></div>
      <div className="ambient-glow-purple" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title gradient-text">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it. We partner with innovators worldwide to 
            engineer software products that deliver real value.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="testimonials-slider-container"
        >
          <div className="testimonials-slider-box glass-panel">
            
            <div className="quote-mark">“</div>

            <div className="slider-height-limiter">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="testimonial-slide"
                >
                  <p className="testimonial-text">{current.text}</p>
                  
                  <div className="testimonial-stars">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                    ))}
                  </div>

                  <div className="testimonial-author-box">
                    <div className="author-avatar-neon">
                      <span>{current.image}</span>
                    </div>
                    <div>
                      <h4 className="author-name">{current.name}</h4>
                      <p className="author-role">{current.role}, <span className="color-cyan">{current.company}</span></p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="slider-controls">
              <button className="slider-arrow-btn glass-panel" onClick={handlePrev} aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              
              <div className="slider-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`slider-dot-btn ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>

              <button className="slider-arrow-btn glass-panel" onClick={handleNext} aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
