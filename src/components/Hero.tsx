import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe2, Layers } from 'lucide-react';
import logo from '../assets/logo.png';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow" style={{ top: '-10%', left: '10%' }}></div>
      <div className="ambient-glow-purple" style={{ top: '20%', right: '5%' }}></div>
      
      {/* Decorative Grid Lines */}
      <div className="hero-grid-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="hero-badge-dot"></span>
            <span>Global IT Freelancing Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-title"
          >
            Transforming Ideas Into <br />
            <span className="cyber-text text-glow">Powerful Digital</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-description"
          >
            Zyroxx is an elite team of developers, designers, and systems architects. We craft professional, scalable software products for startups, enterprises, and brands globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-ctas"
          >
            <button 
              className="btn btn-primary" 
              onClick={() => handleScrollTo('contact')}
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleScrollTo('portfolio')}
            >
              View Portfolio
            </button>
            <button 
              className="btn btn-secondary text-glow" 
              onClick={() => handleScrollTo('services')}
              style={{ borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              Our Services
            </button>
          </motion.div>

          {/* Micro Features */}
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-feat-item">
              <Code2 size={16} className="color-cyan" />
              <span>Elite Code</span>
            </div>
            <div className="hero-feat-item">
              <Layers size={16} className="color-cyan" />
              <span>Modern UX</span>
            </div>
            <div className="hero-feat-item">
              <Globe2 size={16} className="color-cyan" />
              <span>Global Reach</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Logo Container with 3D Cyber Floating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="visual-glow-halo"></div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-logo-card glass-panel"
          >
            {/* Tech scanner active line animation */}
            <div className="laser-scanner-line"></div>
            
            <div className="logo-card-inner">
              <img src={logo} alt="Zyroxx Metallic Shield" className="hero-visual-logo" />
              
              <div className="logo-info">
                <span className="info-tag">CORE ENGINE</span>
                <span className="info-title">ZYROXX v1.0.4</span>
              </div>
            </div>
            
            {/* Card corner brackets */}
            <div className="card-bracket tl"></div>
            <div className="card-bracket tr"></div>
            <div className="card-bracket bl"></div>
            <div className="card-bracket br"></div>
          </motion.div>

          {/* Floating cyber circles background elements */}
          <div className="floating-circle c1"></div>
          <div className="floating-circle c2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
