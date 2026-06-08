import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles, User, Shield } from 'lucide-react';

// Import actual screenshots from assets
import cludUser1 from '../assets/clud_user1.png';
import cludUser2 from '../assets/clud_user2.png';
import cludUser3 from '../assets/clud_user3.png';
import cludUser4 from '../assets/clud_user4.png';

import cludTrainer1 from '../assets/clud_trainer1.png';
import cludTrainer2 from '../assets/clud_trainer2.png';
import cludTrainer3 from '../assets/clud_trainer3.png';

import cludAdmin1 from '../assets/clud_admin1.png';
import cludAdmin2 from '../assets/clud_admin2.png';
import cludAdmin3 from '../assets/clud_admin3.png';
import cludAdmin4 from '../assets/clud_admin4.png';

interface ScreenshotItem {
  img: string;
  caption: string;
  description: string;
}

interface CludDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CludDemoModal: React.FC<CludDemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'user' | 'trainer' | 'admin'>('user');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Group screenshots by category
  const userScreenshots: ScreenshotItem[] = [
    {
      img: cludUser1,
      caption: 'Landing Screen',
      description: 'The creative landing section introducing CLUD’s creative workshop platform in Kerala.'
    },
    {
      img: cludUser2,
      caption: 'Upcoming Workshops List',
      description: 'A mobile-responsive list of scheduled creative workshops (e.g. Punchneedle, Pottery) showing pricing, dates, and durations.'
    },
    {
      img: cludUser3,
      caption: 'Class Information & Detail Page',
      description: 'Detailed view of a workshop, illustrating what is provided, core materials, and trainer information.'
    },
    {
      img: cludUser4,
      caption: 'Booking & Ticket Confirmation',
      description: 'User ticket verification flow showing active bookings, seat reservation numbers, and confirmed check-in codes.'
    }
  ];

  const trainerScreenshots: ScreenshotItem[] = [
    {
      img: cludTrainer1,
      caption: 'Trainer Class Dashboard',
      description: 'A listing of upcoming classes allocated to the trainer, showing total registered students.'
    },
    {
      img: cludTrainer2,
      caption: 'Student Attendance Tracker',
      description: 'Roster of enrolled students for verification, providing search tools and ticket detail checking.'
    },
    {
      img: cludTrainer3,
      caption: 'Marking Student Attendance',
      description: 'Trainer interface to toggle checkmarks for student attendance, instantly verifying checked-in attendees.'
    }
  ];

  const adminScreenshots: ScreenshotItem[] = [
    {
      img: cludAdmin1,
      caption: 'Admin Dashboard Stats',
      description: 'Core platform metrics summary including active trainers, overall registrations, revenue tracking, and verified classes.'
    },
    {
      img: cludAdmin2,
      caption: 'Add Workshop Form',
      description: 'Administrative form to define new classes: category selection (pottery, crochet, painting), pricing, schedule, and trainer assignments.'
    },
    {
      img: cludAdmin3,
      caption: 'Class Verification Roster',
      description: 'Review queue for pending classes drafted by trainers. Admins can audit details, edit configuration, and verify before publishing.'
    },
    {
      img: cludAdmin4,
      caption: ' Roster & User Management',
      description: 'Administrative command console tracking user registrations, session bookings, and trainer accounts.'
    }
  ];

  const getScreenshotsByTab = () => {
    switch (activeTab) {
      case 'user': return userScreenshots;
      case 'trainer': return trainerScreenshots;
      case 'admin': return adminScreenshots;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'user': return 'User Booking & Discovery Portal';
      case 'trainer': return 'Trainer Workspace & Attendance Panel';
      case 'admin': return 'Admin Control Panel & Verification System';
    }
  };

  const getTabDesc = () => {
    switch (activeTab) {
      case 'user': return 'Allows students to browse upcoming art/craft workshops (pottery, crochet, macrame), view deliverables, place reservations, and review their confirmed booking history.';
      case 'trainer': return 'Provides instructors with a dedicated scheduler to trace their allocated workshops, review student rosters, and log attendance which reflects instantly on student accounts.';
      case 'admin': return 'Empowers administrators with a workspace to audit pending classes uploaded by trainers, add new workshop specifications, track registrations, and monitor analytics.';
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
        <div className="clud-header">
          <div className="clud-logo-wrapper">
            <div className="clud-logo-icon">🦆</div>
            <div>
              <h1 className="clud-logo-text">CL<span>U</span>D</h1>
              <p className="clud-tagline">Real Screenshot Walkthrough</p>
            </div>
          </div>
          <button className="clud-close-btn" onClick={onClose} aria-label="Close walkthrough">
            <X size={20} />
          </button>
        </div>

        {/* Portal Tabs Selector */}
        <div className="clud-portal-selector">
          <button 
            className={`portal-tab-btn ${activeTab === 'user' ? 'active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            <Sparkles size={16} />
            <span>User Portal</span>
          </button>
          <button 
            className={`portal-tab-btn ${activeTab === 'trainer' ? 'active' : ''}`}
            onClick={() => setActiveTab('trainer')}
          >
            <User size={16} />
            <span>Trainer Panel</span>
          </button>
          <button 
            className={`portal-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <Shield size={16} />
            <span>Admin Control</span>
          </button>
        </div>

        {/* Inner Content Area */}
        <div className="clud-content-body">
          <div className="portal-intro-box">
            <h3>{getTabTitle()}</h3>
            <p>{getTabDesc()}</p>
          </div>

          <div className="clud-screenshot-grid">
            {getScreenshotsByTab().map((screen, idx) => (
              <div key={idx} className="clud-screenshot-card glass-panel">
                <div className="screenshot-img-container" onClick={() => setLightboxImg(screen.img)}>
                  <img src={screen.img} alt={screen.caption} className="screenshot-image" />
                  <div className="screenshot-overlay-hover">
                    <ZoomIn size={24} className="zoom-icon" />
                    <span>Zoom Screenshot</span>
                  </div>
                </div>
                <div className="screenshot-info">
                  <h5>{screen.caption}</h5>
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
    filter: drop-shadow(0 2px 8px rgba(234, 88, 12, 0.4));
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
    color: #f97316;
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

  .portal-tab-btn.active {
    background: rgba(249, 115, 22, 0.15);
    color: #f97316;
    border: 1px solid rgba(249, 115, 22, 0.25);
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

  /* Screenshot Grid Layout */
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
    border-color: rgba(249, 115, 22, 0.3);
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
    color: #f97316;
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

  /* Lightbox Styles */
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
    color: #f97316;
  }
`;

export default CludDemoModal;
