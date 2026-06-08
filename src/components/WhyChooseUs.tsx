import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Zap, Shield, Heart, Compass, Cpu, Clock, Award
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const WhyChooseUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Award className="color-cyan" size={24} />,
      title: 'High Quality Development',
      desc: 'Strict linting, automated pipelines, and code reviews guarantee zero technical debt.'
    },
    {
      icon: <Cpu className="color-cyan" size={24} />,
      title: 'Scalable Architecture',
      desc: 'Systems built with containerized microservices that handle sudden traffic spikes gracefully.'
    },
    {
      icon: <Zap className="color-cyan" size={24} />,
      title: 'Fast Delivery',
      desc: 'Agile sprints, automated CI/CD configurations, and daily check-ins expedite deployment.'
    },
    {
      icon: <Compass className="color-cyan" size={24} />,
      title: 'Professional UI/UX',
      desc: 'Pixel-perfect CSS implementations based on high-fidelity designs matching unified guidelines.'
    },
    {
      icon: <Clock className="color-cyan" size={24} />,
      title: '24/7 Support',
      desc: 'Round-the-clock incident management system ensuring zero downtime for critical systems.'
    },
    {
      icon: <Shield className="color-cyan" size={24} />,
      title: 'Secure Solutions',
      desc: 'Encryption-at-rest, OAuth2 logins, SSL certificates, and periodic penetration audits.'
    },
    {
      icon: <Heart className="color-cyan" size={24} />,
      title: 'Client Satisfaction',
      desc: 'We are client-first, adapting specifications dynamically and communicating transparently.'
    },
    {
      icon: <CheckCircle className="color-cyan" size={24} />,
      title: 'Cross Platform Expertise',
      desc: 'Native and hybrid apps utilizing React, Next.js, and Flutter for uniform user flows.'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="ambient-glow" style={{ bottom: '-15%', left: '20%' }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title gradient-text">Engineering You Can Trust</h2>
          <p className="section-description">
            We do not cut corners. We focus on producing code and designs that stand the 
            test of time, so your digital assets remain secure, fast, and scalable.
          </p>
        </motion.div>

        <div className="why-us-grid">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="why-us-card glass-panel"
            >
              <div className="why-us-card-header">
                <div className="why-us-icon-box">{feat.icon}</div>
                <h3>{feat.title}</h3>
              </div>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
