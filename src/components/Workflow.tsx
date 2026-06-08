import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Palette, Code, CheckSquare, Send, HeartHandshake } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const Workflow: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      icon: <FileText size={20} className="color-cyan" />,
      title: 'Requirement Gathering',
      desc: 'We map out your business goals, target client personas, product goals, and software specifications.'
    },
    {
      number: '02',
      icon: <Search size={20} className="color-cyan" />,
      title: 'Planning & Research',
      desc: 'We define the system architecture, selected databases, hosting clusters, and development sprints.'
    },
    {
      number: '03',
      icon: <Palette size={20} className="color-cyan" />,
      title: 'UI/UX Design',
      desc: 'We build complete wireframes and clickable high-fidelity designs, aligning with your corporate identity.'
    },
    {
      number: '04',
      icon: <Code size={20} className="color-cyan" />,
      title: 'Development',
      desc: 'Our engineers construct structured, scalable frontends and secure backends, backed by code analysis.'
    },
    {
      number: '05',
      icon: <CheckSquare size={20} className="color-cyan" />,
      title: 'Testing',
      desc: 'We run rigorous unit tests, layout assertions, integration audits, and performance checks.'
    },
    {
      number: '06',
      icon: <Send size={20} className="color-cyan" />,
      title: 'Deployment',
      desc: 'We publish mobile apps on store platforms and spin up scalable servers on secure cloud clusters.'
    },
    {
      number: '07',
      icon: <HeartHandshake size={20} className="color-cyan" />,
      title: 'Support & Maintenance',
      desc: 'We supply round-the-clock error logging, database optimization, scaling checks, and system updates.'
    }
  ];

  return (
    <section className="workflow-section">
      <div className="ambient-glow" style={{ top: '25%', left: '-10%' }}></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Workflow</span>
          <h2 className="section-title gradient-text">How We Work</h2>
          <p className="section-description">
            We follow a structured engineering workflow to make sure your project is 
            delivered on-time, fully documented, and robust.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="timeline-container">
          {/* Central Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="timeline-spine"
          ></motion.div>

          <div className="timeline-steps">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`timeline-row ${isEven ? 'row-even' : 'row-odd'}`}>
                  
                  {/* Visual Node */}
                  <div className="timeline-node-wrapper">
                    <motion.div 
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="timeline-node"
                    >
                      <span className="node-number">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Spacer for structural balance */}
                  <div className="timeline-spacer"></div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, type: 'spring', damping: 20 }}
                    className="timeline-card glass-panel"
                  >
                    <div className="card-header-row">
                      <div className="step-icon-box">{step.icon}</div>
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.desc}</p>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;
