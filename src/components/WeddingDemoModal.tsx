import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Import actual screenshots from assets
import wedding1 from '../assets/wedding_portfolio1.png';
import wedding2 from '../assets/wedding_portfolio2.png';
import wedding3 from '../assets/wedding_portfolio3.png';
import wedding4 from '../assets/wedding_portfolio4.png';

interface ScreenshotItem {
  img: string;
  caption: string;
  description: string;
}

interface WeddingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeddingDemoModal: React.FC<WeddingDemoModalProps> = ({ isOpen, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Group screenshots in a single unified list
  const screenshots: ScreenshotItem[] = [
    {
      img: wedding1,
      caption: 'Main Landing / Couple Welcome Page',
      description: 'Elegant home layout introducing the wedding couple with fluid typography and hero visual headers.'
    },
    {
      img: wedding2,
      caption: 'Love Story & Event Timeline',
      description: 'Responsive chronological timeline tracing the couple’s journey and details of upcoming wedding functions.'
    },
    {
      img: wedding3,
      caption: 'High-Resolution Photo Album Grid',
      description: 'Collaborative gallery integration for event coordinators. Allows guests to browse high-speed image streams categorized by events.'
    },
    {
      img: wedding4,
      caption: 'Interactive RSVP & Venue Locator',
      description: 'Administrative RSVP tracker and Google Maps location guide for guests to plan travel and confirm attendance.'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="clud-modal-backdrop" style={backdropStyle}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="clud-modal-container glass-panel"
        style={modalContainerStyle}
      >
        <style dangerouslySetInnerHTML={{__html: cssStyles}} />

        {/* Modal Header */}
        <div className="clud-header" style={{ borderBottom: '1px solid rgba(244, 63, 94, 0.1)' }}>
          <div className="clud-logo-wrapper">
            <div className="clud-logo-icon">🌸</div>
            <div>
              <h1 className="clud-logo-text" style={{ fontFamily: "'Fredoka One', cursive" }}>WEDDING <span>PORTFOLIO</span></h1>
              <p className="clud-tagline">Interactive Wedding Sites & Collaborative Albums</p>
            </div>
          </div>
          <button className="clud-close-btn" onClick={onClose} aria-label="Close walkthrough">
            <X size={20} />
          </button>
        </div>

        {/* Inner Content Area */}
        <div className="clud-content-body">
          <div className="portal-intro-box">
            <h3>Couple Gallery & Event Management Walkthrough</h3>
            <p>Designed for couples to share memories directly and event managers to coordinate RSVPs, location listings, and photo streams in a single integrated wedding album platform.</p>
          </div>

          <div className="clud-screenshot-grid">
            {screenshots.map((screen, idx) => (
              <div key={idx} className="clud-screenshot-card glass-panel">
                <div className="screenshot-img-container" onClick={() => setLightboxImg(screen.img)}>
                  <img src={screen.img} alt={screen.caption} className="screenshot-image" />
                  <div className="screenshot-overlay-hover">
                    <ZoomIn size={24} className="zoom-icon" style={{ color: '#f43f5e' }} />
                    <span>Zoom Screenshot</span>
                  </div>
                </div>
                <div className="screenshot-info">
                  <h5 style={{ borderLeft: '3px solid #f43f5e', paddingLeft: '8px' }}>{screen.caption}</h5>
                  <p>{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImg && (
            <div className="clud-lightbox-backdrop" onClick={() => setLightboxImg(null)}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="clud-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="clud-lightbox-close" onClick={() => setLightboxImg(null)}>
                  <X size={24} />
                </button>
                <img src={lightboxImg} alt="Enlarged screenshot" className="clud-lightbox-img" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Inline Styles
const backdropStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(5, 5, 15, 0.85)',
  backdropFilter: 'blur(8px)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  boxSizing: 'border-box'
};

const modalContainerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1050px',
  height: '85vh',
  maxHeight: '900px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#0a0d1e',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  overflow: 'hidden',
  color: '#e2e8f0',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
};


const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Outfit:wght@300;400;600;700;800&display=swap');

  .clud-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    background: #11142e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .clud-logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .clud-logo-icon {
    font-size: 2.2rem;
  }

  .clud-logo-text {
    font-family: 'Fredoka One', cursive, sans-serif;
    font-size: 2.2rem;
    color: #ffffff;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0;
  }

  .clud-logo-text span {
    color: #f43f5e;
  }

  .clud-tagline {
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    color: #94a3b8;
    margin: 2px 0 0 0;
  }

  .clud-close-btn {
    background: rgba(255, 255, 255, 0.05);
    border: none;
    color: #94a3b8;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clud-close-btn:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }

  .clud-portal-selector {
    display: flex;
    background: #0d0f23;
    padding: 0.5rem;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .portal-tab-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    color: #94a3b8;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .portal-tab-btn:hover {
    background: rgba(255, 255, 255, 0.02);
    color: #cbd5e1;
  }

  .clud-content-body {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
    box-sizing: border-box;
    background: #060814;
  }

  .portal-intro-box {
    margin-bottom: 2rem;
    text-align: left;
  }

  .portal-intro-box h3 {
    font-family: 'Fredoka One', sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
    margin: 0 0 0.5rem 0;
  }

  .portal-intro-box p {
    font-family: 'Outfit', sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0;
  }

  .clud-screenshot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .clud-screenshot-card {
    background: #0f122c;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .clud-screenshot-card:hover {
    transform: translateY(-4px);
    border-color: rgba(244, 63, 94, 0.3);
  }

  .screenshot-img-container {
    height: 320px;
    position: relative;
    overflow: hidden;
    background: #070918;
    cursor: pointer;
  }

  .screenshot-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    padding: 8px;
    box-sizing: border-box;
  }

  .screenshot-img-container:hover .screenshot-image {
    transform: scale(1.03);
  }

  .screenshot-overlay-hover {
    position: absolute;
    inset: 0;
    background: rgba(10, 13, 30, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s ease;
    color: #ffffff;
    font-family: 'Outfit', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .screenshot-img-container:hover .screenshot-overlay-hover {
    opacity: 1;
  }

  .zoom-icon {
    color: #f43f5e;
  }

  .screenshot-info {
    padding: 1rem;
    text-align: left;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .screenshot-info h5 {
    font-family: 'Fredoka One', sans-serif;
    font-size: 0.95rem;
    color: #ffffff;
    margin: 0;
  }

  .screenshot-info p {
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    color: #94a3b8;
    line-height: 1.4;
    margin: 0;
  }

  .clud-lightbox-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(3, 4, 10, 0.92);
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .clud-lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clud-lightbox-img {
    max-width: 100%;
    max-height: 85vh;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
    object-fit: contain;
    background: #060814;
  }

  .clud-lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;
  }

  .clud-lightbox-close:hover {
    color: #f43f5e;
  }
`;

export default WeddingDemoModal;
