import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Eye, Smartphone, Monitor, ShoppingBag, Palette, Layout } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'mobile' | 'website' | 'ecommerce' | 'uiux' | 'admin';
  categoryLabel: string;
  tech: string[];
  desc: string;
  previewUrl: string;
  colorScheme: string; // gradient values
  deviceType: 'phone' | 'browser';
}

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers size={14} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={14} /> },
    { id: 'website', label: 'Websites', icon: <Monitor size={14} /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag size={14} /> },
    { id: 'uiux', label: 'UI/UX', icon: <Palette size={14} /> },
    { id: 'admin', label: 'Admin Panels', icon: <Layout size={14} /> },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Nova Wallet',
      category: 'mobile',
      categoryLabel: 'Mobile Apps',
      tech: ['Flutter', 'Dart', 'Firebase', 'Web3.js'],
      desc: 'Next-gen decentralized multi-chain crypto wallet with high-speed transaction updates.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #09203f 0%, #537895 100%)',
      deviceType: 'phone'
    },
    {
      id: 2,
      title: 'Vertex Analytics',
      category: 'website',
      categoryLabel: 'Websites',
      tech: ['React', 'Next.js', 'Chart.js', 'Vercel'],
      desc: 'Corporate analytics platform featuring real-time charting, ML forecasts, and team sync.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      deviceType: 'browser'
    },
    {
      id: 3,
      title: 'Equinox Fashion',
      category: 'ecommerce',
      categoryLabel: 'E-commerce',
      tech: ['Next.js', 'Stripe API', 'Shopify Commerce', 'GraphQL'],
      desc: 'Pixel-perfect, high-performance apparel webstore with instant sub-second search and checkout.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #243b55 0%, #141e30 100%)',
      deviceType: 'browser'
    },
    {
      id: 4,
      title: 'Apex Design System',
      category: 'uiux',
      categoryLabel: 'UI/UX Design',
      tech: ['Figma', 'Tokens Studio', 'Typography Grid'],
      desc: 'Comprehensive multi-platform UI library designed for high consistency across products.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
      deviceType: 'browser'
    },
    {
      id: 5,
      title: 'Aura Cloud Panel',
      category: 'admin',
      categoryLabel: 'Admin Panels',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      desc: 'Internal corporate command console managing remote server node loads and user access logs.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      deviceType: 'browser'
    },
    {
      id: 6,
      title: 'Vortex Fitness',
      category: 'mobile',
      categoryLabel: 'Mobile Apps',
      tech: ['React Native', 'Expo Go', 'Node.js Backend'],
      desc: 'Cross-platform mobile application tracking workout sessions, step counts, and macro metrics.',
      previewUrl: '#',
      colorScheme: 'linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)',
      deviceType: 'phone'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="ambient-glow" style={{ top: '-10%', left: '5%' }}></div>
      <div className="ambient-glow-purple" style={{ bottom: '0', right: '10%' }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-description">
            Explore a curated selection of our high-end engineering deliverables. 
            We build systems that combine flawless logic with visual elegance.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="portfolio-filters"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn glass-panel ${selectedFilter === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout 
          className="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card glass-panel"
              >
                {/* Visual Mockup Area */}
                <div 
                  className="project-preview-area"
                  style={{ background: project.colorScheme }}
                >
                  <div className="preview-glow"></div>
                  
                  {/* CSS Rendered Mockups */}
                  {project.deviceType === 'phone' ? (
                    <div className="mock-phone">
                      <div className="mock-phone-speaker"></div>
                      <div className="mock-phone-screen">
                        <div className="mock-phone-content">
                          <div className="mock-widget w1"></div>
                          <div className="mock-widget w2"></div>
                          <div className="mock-widget w3"></div>
                        </div>
                      </div>
                      <div className="mock-phone-button"></div>
                    </div>
                  ) : (
                    <div className="mock-browser">
                      <div className="mock-browser-header">
                        <span className="dot r"></span>
                        <span className="dot y"></span>
                        <span className="dot g"></span>
                        <div className="mock-browser-address">zyroxx-preview.io/{project.id}</div>
                      </div>
                      <div className="mock-browser-screen">
                        <div className="mock-browser-content">
                          <div className="mock-sidebar"></div>
                          <div className="mock-main">
                            <div className="mock-row r1"></div>
                            <div className="mock-row r2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="project-preview-overlay">
                    <div className="overlay-buttons">
                      <button 
                        className="btn btn-primary"
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
                        <Eye size={16} /> Preview
                      </button>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => alert(`Details for "${project.title}" mock requested! Our sales representative will showcase this project live during our consultation.`)}
                      >
                        <ExternalLink size={16} /> Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="project-card-info">
                  <span className="project-card-category">{project.categoryLabel}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                  
                  <div className="project-card-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
