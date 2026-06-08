import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  ctaText: string;
  isPopular: boolean;
}

export const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$2,499',
      period: 'per project',
      tagline: 'Best for startups looking to launch an MVP quickly.',
      features: [
        'Single Platform App (Android or iOS)',
        'Up to 5 Main Screens / Flows',
        'Standard UI/UX Component Layouts',
        'Basic Integration (Firebase/Auth)',
        '30-Day Post-Release Bug Support',
        '1 Rounds of Design Revisions'
      ],
      ctaText: 'Start Starter Plan',
      isPopular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: 'per project',
      tagline: 'Perfect for established brands and growing digital services.',
      features: [
        'Cross-Platform App (iOS & Android)',
        'Up to 15 Screens & Custom UI Engine',
        'Custom Premium UI/UX Design System',
        'Backend Database & Admin Console',
        'Third-Party API & Payment Portals',
        '90-Day Priority Support & SLA',
        'Unlimited Design Revisions'
      ],
      ctaText: 'Order Professional Plan',
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'based on specs',
      tagline: 'Built for corporate architectures and large-scale operations.',
      features: [
        'Multi-Platform Apps + Full web portal',
        'Unlimited Screens & Microservices API',
        'High-Throughput Node/Go Backend',
        'Advanced IA Infrastructure (AWS/IaC)',
        'Secure Compliance Audit & SSL setup',
        '1-Year Dedicated Tech SLA Support',
        'Continuous Development retainer option'
      ],
      ctaText: 'Contact Enterprise Sales',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="ambient-glow" style={{ top: '-10%', right: '15%' }}></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Flexible Rates</span>
          <h2 className="section-title gradient-text">Transparent Pricing</h2>
          <p className="section-description">
            Choose the scope that matches your business timeline. No hidden costs. 
            All projects are backed by absolute code ownership contracts.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`pricing-card glass-panel ${plan.isPopular ? 'pricing-card-popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="popular-ribbon">
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="plan-price-box">
                  <span className="price-num">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <div className="pricing-card-divider"></div>

              <ul className="plan-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="plan-feature-item">
                    <Check size={16} className="color-cyan" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn pricing-cta-btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    window.scrollTo({
                      top: contact.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
