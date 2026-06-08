import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Eye, Smartphone, Monitor, ShoppingBag, Palette, Layout } from 'lucide-react';
import CludDemoModal from './CludDemoModal';
import QrDemoModal from './QrDemoModal';
import WeddingDemoModal from './WeddingDemoModal';
import RestaurantDemoModal from './RestaurantDemoModal';
import ElectrobattlesDemoModal from './ElectrobattlesDemoModal';
import ChaiDemoModal from './ChaiDemoModal';
import cludUser4 from '../assets/clud_user4.png';
import qrMenu1 from '../assets/QR_menu1.png';
import wedding1 from '../assets/wedding_portfolio1.png';
import restaurantImg from '../assets/restaurant.png';
import electroWebsiteImg from '../assets/electrowebsite1.png';
import chaiImg from '../assets/chai1.png';

interface Project {
  id: number;
  title: string;
  category: 'mobile' | 'website' | 'webapp' | 'portfolio';
  categoryLabel: string;
  tech: string[];
  desc: string;
  previewUrl: string;
  liveUrl: string;
  colorScheme: string; // gradient values
  deviceType: 'phone' | 'browser';
}

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isCludOpen, setIsCludOpen] = useState<boolean>(false);
  const [isChaiOpen, setIsChaiOpen] = useState<boolean>(false);
  const [isQrOpen, setIsQrOpen] = useState<boolean>(false);
  const [isWeddingOpen, setIsWeddingOpen] = useState<boolean>(false);
  const [isRestOpen, setIsRestOpen] = useState<boolean>(false);
  const [isEbOpen, setIsEbOpen] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers size={14} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={14} /> },
    { id: 'website', label: 'Websites', icon: <Monitor size={14} /> },
    { id: 'webapp', label: 'Web Apps', icon: <Layout size={14} /> },
    { id: 'portfolio', label: 'Portfolios', icon: <Palette size={14} /> },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'CLUD',
      category: 'webapp',
      categoryLabel: 'Web App',
      tech: ['Flutter', 'Python', 'Django', 'PostgreSQL'],
      desc: 'Creative pottery & crochet workshop booking platform with dedicated Admin, Trainer, and User panels.',
      previewUrl: '#clud-demo',
      liveUrl: 'https://cludofficial.in',
      colorScheme: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      deviceType: 'phone'
    },
    {
      id: 2,
      title: 'Chai Tapri',
      category: 'website',
      categoryLabel: 'Website',
      tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      desc: 'Artisanal cafe website presenting dynamic menus, daily specials, and booking systems.',
      previewUrl: '#chai-demo',
      liveUrl: 'https://chai-website-omega.vercel.app/',
      colorScheme: 'linear-gradient(135deg, #78350f 0%, #d97706 100%)',
      deviceType: 'phone'
    },
    {
      id: 3,
      title: 'ElectroBattles',
      category: 'mobile',
      categoryLabel: 'Mobile App & Website',
      tech: ['Flutter', 'Python', 'Django', 'Meta API', 'PostgreSQL'],
      desc: 'Dance studio management app for tracking student attendance, scheduling dance battles, and triggering automated Meta WhatsApp fee reminders.',
      previewUrl: '#eb-demo',
      liveUrl: 'https://electrobattles.in',
      colorScheme: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
      deviceType: 'phone'
    },
    {
      id: 4,
      title: 'QR Menu System',
      category: 'webapp',
      categoryLabel: 'Web App',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      desc: 'Tableside QR-code ordering website for restaurants that routes orders directly to kitchen displays and billing systems.',
      previewUrl: '#qr-demo',
      liveUrl: 'https://al-sulthan.vercel.app/',
      colorScheme: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      deviceType: 'phone'
    },
    {
      id: 5,
      title: 'Wedding Portfolio',
      category: 'portfolio',
      categoryLabel: 'Portfolio',
      tech: ['Lovable'],
      desc: 'Elegant interactive wedding galleries and event timelines built directly for couples and planning agencies.',
      previewUrl: '#wedding-demo',
      liveUrl: 'https://eternal-frames-story.lovable.app/',
      colorScheme: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
      deviceType: 'phone'
    },
    {
      id: 6,
      title: 'Avrum Cafe',
      category: 'website',
      categoryLabel: 'Website',
      tech: ['Lovable'],
      desc: 'Seamless online food ordering and delivery portal with dynamic cart systems, checkout flows, and dish modifications.',
      previewUrl: '#rest-demo',
      liveUrl: 'https://velvet-dine-glow.lovable.app',
      colorScheme: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
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
                  
                  {/* Direct Full-Width Rendered Preview Images */}
                  {project.title === 'CLUD' ? (
                    <img src={cludUser4} alt="CLUD Preview" className="project-preview-img" />
                  ) : project.title === 'Chai Tapri' ? (
                    <img src={chaiImg} alt="Chai Tapri Preview" className="project-preview-img" />
                  ) : project.title === 'ElectroBattles' ? (
                    <img src={electroWebsiteImg} alt="ElectroBattles Preview" className="project-preview-img" />
                  ) : project.title === 'QR Menu System' ? (
                    <img src={qrMenu1} alt="QR Menu System Preview" className="project-preview-img" />
                  ) : project.title === 'Wedding Portfolio' ? (
                    <img src={wedding1} alt="Wedding Portfolio Preview" className="project-preview-img" />
                  ) : project.title === 'Avrum Cafe' ? (
                    <img src={restaurantImg} alt="Avrum Cafe Preview" className="project-preview-img" />
                  ) : null}

                  {/* Overlay on hover */}
                  <div className="project-preview-overlay">
                    <div className="overlay-buttons">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <Eye size={16} /> Preview
                      </a>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => {
                          if (project.title === 'CLUD') {
                            setIsCludOpen(true);
                          } else if (project.title === 'Chai Tapri') {
                            setIsChaiOpen(true);
                          } else if (project.title === 'ElectroBattles') {
                            setIsEbOpen(true);
                          } else if (project.title === 'QR Menu System') {
                            setIsQrOpen(true);
                          } else if (project.title === 'Wedding Portfolio') {
                            setIsWeddingOpen(true);
                          } else if (project.title === 'Avrum Cafe') {
                            setIsRestOpen(true);
                          } else {
                            alert(`Details for "${project.title}" mock requested! Our sales representative will showcase this project live during our consultation.`);
                          }
                        }}
                      >
                        <ExternalLink size={16} /> Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="project-card-info">
                  <span className="project-card-category">{project.categoryLabel}</span>
                  <h3 className="project-card-title">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-title-link"
                    >
                      {project.title} <ExternalLink size={14} style={{ marginLeft: '4px', opacity: 0.7 }} />
                    </a>
                  </h3>
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

      {/* Interactive CLUD Dashboard Demo Modal */}
      <AnimatePresence>
        {isCludOpen && (
          <CludDemoModal isOpen={isCludOpen} onClose={() => setIsCludOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive QR Menu System Demo Modal */}
      <AnimatePresence>
        {isQrOpen && (
          <QrDemoModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Wedding Portfolio Demo Modal */}
      <AnimatePresence>
        {isWeddingOpen && (
          <WeddingDemoModal isOpen={isWeddingOpen} onClose={() => setIsWeddingOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Restaurant Demo Modal */}
      <AnimatePresence>
        {isRestOpen && (
          <RestaurantDemoModal isOpen={isRestOpen} onClose={() => setIsRestOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive ElectroBattles Demo Modal */}
      <AnimatePresence>
        {isEbOpen && (
          <ElectrobattlesDemoModal isOpen={isEbOpen} onClose={() => setIsEbOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Chai Cafe Demo Modal */}
      <AnimatePresence>
        {isChaiOpen && (
          <ChaiDemoModal isOpen={isChaiOpen} onClose={() => setIsChaiOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
