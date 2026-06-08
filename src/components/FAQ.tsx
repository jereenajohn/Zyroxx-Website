import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is the average timeline for an MVP or web portal?',
      answer: 'Typically, a Starter MVP takes 4 to 6 weeks from kick-off to deployment on stores or hosting nodes. Larger, enterprise-level products involving custom backends and integrations require 8 to 12 weeks of agile sprints.'
    },
    {
      question: 'How do you handle project pricing and milestones?',
      answer: 'We divide the project into distinct development phases (Design Handoff, Backend Integration, Core Release, Publishing). You pay per milestone after inspecting and approving the live preview of that specific sprint.'
    },
    {
      question: 'What happens after the product is launched? Do you offer support?',
      answer: 'Absolutely. Every contract includes a complimentary support window (from 30 to 90 days depending on the tier) covering minor revisions and bugs. We also offer dedicated SLA retainer plans for 24/7 server monitoring, cloud backups, and feature expansion.'
    },
    {
      question: 'Which technologies do you recommend for cross-platform apps?',
      answer: 'We highly recommend Flutter and Dart for mobile apps since they produce native performance and custom visual widgets using a single codebase, saving you up to 50% in development costs. For complex dashboards, React and Next.js are our go-to choices.'
    },
    {
      question: 'Who owns the final source code and IP rights?',
      answer: 'You do. Once the final payment milestone is processed, the full ownership of the GitHub repositories, graphics assets, deployment scripts, and intellectual property rights is contractually transferred directly to your organization.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="ambient-glow" style={{ top: '20%', left: '5%' }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title gradient-text">Frequently Asked Questions</h2>
          <p className="section-description">
            Here are short answers to the questions we receive most frequently. 
            If you need more details, reach out to our team via the contact form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="faq-accordion-container"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card glass-panel ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="question-header">
                    <HelpCircle size={18} className="color-cyan" />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-arrow-box"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
