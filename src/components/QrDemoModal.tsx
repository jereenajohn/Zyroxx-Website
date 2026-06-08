import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles, UtensilsCrossed, Calendar, Check } from 'lucide-react';

// Import actual screenshots from assets
import qrMenu1 from '../assets/QR_menu1.png';
import qrMenu2 from '../assets/QR_menu2.png';

interface ScreenshotItem {
  img: string;
  caption: string;
  description: string;
}

interface QrDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrDemoModal: React.FC<QrDemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'customer' | 'kitchen'>('customer');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Group screenshots by category
  const customerScreenshots: ScreenshotItem[] = [
    {
      img: qrMenu1,
      caption: 'Digital QR Menu & Order Cart',
      description: 'Tableside customer view. Scanning the table QR code opens the digital menu instantly. Customers can browse items, customize options, view prices, and build their cart directly on their personal mobile browser.'
    }
  ];

  const kitchenScreenshots: ScreenshotItem[] = [
    {
      img: qrMenu2,
      caption: 'Kitchen & Billing Management Panel',
      description: 'Unified administrative console. Displays incoming live orders grouped by table number. Automatically dispatches preparation instructions to the kitchen screen and syncs order amounts with the billing terminal.'
    }
  ];

  const getScreenshotsByTab = () => {
    switch (activeTab) {
      case 'customer': return customerScreenshots;
      case 'kitchen': return kitchenScreenshots;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'customer': return 'Customer Ordering Interface';
      case 'kitchen': return 'Kitchen & Billing Terminal Dashboard';
    }
  };

  const getTabDesc = () => {
    switch (activeTab) {
      case 'customer': return 'Designed for optimal mobile performance under cellular data. Provides customers with instant load-times, filterable food categories, item modifications, and a streamlined ordering cart.';
      case 'kitchen': return 'A WebSocket-enabled dashboard that pulls new orders in real-time. Features table tracking, order status updates (Pending, Cooking, Served), and automated receipt printing logs for accounting.';
    }
  };

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
        <div className="clud-header" style={{ borderBottom: '1px solid rgba(239, 68, 68, 0.1)' }}>
          <div className="clud-logo-wrapper">
            <div className="clud-logo-icon">🍔</div>
            <div>
              <h1 className="clud-logo-text" style={{ fontFamily: "'Fredoka One', cursive" }}>QR <span>SYSTEM</span></h1>
              <p className="clud-tagline">Tableside Restaurant Ordering Solution</p>
            </div>
          </div>
          <button className="clud-close-btn" onClick={onClose} aria-label="Close walkthrough">
            <X size={20} />
          </button>
        </div>

        {/* Portal Tabs Selector */}
        <div className="clud-portal-selector">
          <button 
            className={`portal-tab-btn ${activeTab === 'customer' ? 'active' : ''}`}
            onClick={() => setActiveTab('customer')}
            style={activeTab === 'customer' ? activeTabStyle : undefined}
          >
            <UtensilsCrossed size={16} />
            <span>Customer Menu</span>
          </button>
          <button 
            className={`portal-tab-btn ${activeTab === 'kitchen' ? 'active' : ''}`}
            onClick={() => setActiveTab('kitchen')}
            style={activeTab === 'kitchen' ? activeTabStyle : undefined}
          >
            <Sparkles size={16} />
            <span>Kitchen & Billing</span>
          </button>
        </div>

        {/* Inner Content Area */}
        <div className="clud-content-body">
          <div className="portal-intro-box">
            <h3>{getTabTitle()}</h3>
            <p>{getTabDesc()}</p>
          </div>

          <div className="clud-screenshot-grid" style={{ gridTemplateColumns: '1fr' }}>
            {getScreenshotsByTab().map((screen, idx) => (
              <div key={idx} className="clud-screenshot-card glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="screenshot-img-container" style={{ height: '420px' }} onClick={() => setLightboxImg(screen.img)}>
                  <img src={screen.img} alt={screen.caption} className="screenshot-image" style={{ objectFit: 'contain' }} />
                  <div className="screenshot-overlay-hover">
                    <ZoomIn size={24} className="zoom-icon" style={{ color: '#ef4444' }} />
                    <span>Zoom Screenshot</span>
                  </div>
                </div>
                <div className="screenshot-info">
                  <h5 style={{ borderLeft: '3px solid #ef4444', paddingLeft: '8px' }}>{screen.caption}</h5>
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

const activeTabStyle: React.CSSProperties = {
  background: 'rgba(239, 68, 68, 0.15)',
  color: '#ef4444',
  border: '1px solid rgba(239, 68, 68, 0.25)'
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
    color: #ef4444;
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
    border-color: rgba(239, 68, 68, 0.3);
  }

  .screenshot-img-container {
    position: relative;
    overflow: hidden;
    background: #070918;
    cursor: pointer;
  }

  .screenshot-image {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    padding: 8px;
    box-sizing: border-box;
  }

  .screenshot-img-container:hover .screenshot-image {
    transform: scale(1.02);
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

  .screenshot-info {
    padding: 1.25rem 1.5rem;
    text-align: left;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .screenshot-info h5 {
    font-family: 'Fredoka One', sans-serif;
    font-size: 1.05rem;
    color: #ffffff;
    margin: 0;
  }

  .screenshot-info p {
    font-family: 'Outfit', sans-serif;
    font-size: 0.88rem;
    color: #cbd5e1;
    line-height: 1.5;
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
    color: #ef4444;
  }
`;

export default QrDemoModal;
