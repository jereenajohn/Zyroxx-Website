import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Compass, ShieldCheck, Target } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5s
      const increment = value / (duration / 16); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(timer);
          setCount(value);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number cyber-text text-glow">
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const whyChooseItems = [
    {
      icon: <Award size={20} className="color-cyan" />,
      title: 'Top-tier Talent',
      description: 'Senior engineers and creative designers collaborating to build flawless systems.'
    },
    {
      icon: <ShieldCheck size={20} className="color-cyan" />,
      title: 'Reliable Delivery',
      description: 'On-time delivery using agile sprints, maintaining robust standard operation procedures.'
    },
    {
      icon: <Compass size={20} className="color-cyan" />,
      title: 'Global Operations',
      description: 'Operating globally, offering offshore/onshore project solutions with 24/7 responsiveness.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="ambient-glow" style={{ bottom: '-10%', left: '-5%' }}></div>
      <div className="container about-container">
        
        {/* Left Side: Story & Values */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-text-content"
        >
          <span className="section-subtitle">About Company</span>
          <h2 className="section-title gradient-text">
            Crafting Digital Solutions with Engineering Excellence
          </h2>
          <p className="about-description">
            Zyroxx is a premier, client-first software development and IT consulting agency. 
            We close the gap between complex ideas and beautiful, production-ready software. 
            Whether building interactive mobile apps, core APIs, or custom SaaS environments, 
            our focus remains on performance, clean code, and premium user experiences.
          </p>

          <div className="about-mv-container">
            <div className="mv-card glass-panel">
              <div className="mv-card-header">
                <Target size={20} className="color-cyan" />
                <h3>Our Mission</h3>
              </div>
              <p>To empower startups and global companies by executing top-tier custom software that scales smoothly, delivers high ROI, and looks beautiful.</p>
            </div>
            
            <div className="mv-card glass-panel">
              <div className="mv-card-header">
                <Compass size={20} className="color-cyan" />
                <h3>Our Vision</h3>
              </div>
              <p>To be the world’s most trusted software engineering agency, known for absolute engineering rigor, futuristic designs, and flawless products.</p>
            </div>
          </div>

          <div className="why-choose-list">
            <h3 className="why-choose-heading">Why clients choose Zyroxx:</h3>
            <div className="why-grid">
              {whyChooseItems.map((item, idx) => (
                <div key={idx} className="why-item">
                  <div className="why-item-icon-box">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-stats-container"
        >
          <div className="stats-grid">
            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-card glass-panel"
            >
              <AnimatedCounter value={250} suffix="+" />
              <span className="stat-label">Projects Completed</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-card glass-panel"
            >
              <AnimatedCounter value={120} suffix="+" />
              <span className="stat-label">Happy Clients</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-card glass-panel"
            >
              <AnimatedCounter value={24} suffix="+" />
              <span className="stat-label">Technologies Mastered</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="stat-card glass-panel"
            >
              <AnimatedCounter value={8} suffix="+" />
              <span className="stat-label">Years of Expertise</span>
            </motion.div>
          </div>
          
          <div className="stats-side-visual glass-panel">
            <div className="visual-dot-grid"></div>
            <p className="side-visual-quote">
              "Quality is not an act, it is a habit. We refine every line of code to ensure your system performs flawlessly under load."
            </p>
            <span className="side-visual-author">— Zyroxx Tech Lead</span>
          </div>

          <div className="engineering-monitor-card glass-panel">
            <div className="monitor-header">
              <div className="pulse-indicator">
                <span className="pulse-dot"></span>
                <span className="pulse-text">ZYROXX SECURE ENGINE v2.4</span>
              </div>
              <span className="system-status-badge">ONLINE</span>
            </div>
            
            <div className="monitor-body">
              <div className="metric-row">
                <span className="metric-label">Uptime Integrity</span>
                <span className="metric-value">99.99%</span>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill uptime" style={{ width: '99.99%' }}></div>
                </div>
              </div>
              
              <div className="metric-row">
                <span className="metric-label">Security Shield</span>
                <span className="metric-value">100% Passed</span>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill security" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="metric-row">
                <span className="metric-label">Clean Code Index</span>
                <span className="metric-value">99.8%</span>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill clean-code" style={{ width: '99.8%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="monitor-terminal">
              <div className="terminal-line"><span className="time">[17:05:12]</span> &gt; CI/CD Pipeline build #409 passed</div>
              <div className="terminal-line"><span className="time">[17:05:13]</span> &gt; Security audit: 0 vulnerabilities found</div>
              <div className="terminal-line"><span className="time">[17:05:14]</span> &gt; Server cluster health: Excellent</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
