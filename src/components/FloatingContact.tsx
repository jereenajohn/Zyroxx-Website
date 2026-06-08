import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingContact: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="floating-contact-container">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="floating-tooltip glass-panel"
          >
            <span>Chat on WhatsApp</span>
            <div className="tooltip-arrow"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919745030424"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="floating-contact-btn whatsapp-style"
        aria-label="Chat on WhatsApp"
        style={{ textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.472 14.382c-.022-.014-.508-.25-1.01-.49-.51-.24-.71-.24-.87.01-.16.25-.63.78-.77.93-.14.15-.28.17-.57.04a7.713 7.713 0 0 1-2.2-1.35c-.83-.73-1.39-1.63-1.55-1.92-.16-.29-.02-.45.12-.58.12-.13.29-.33.43-.5.14-.17.18-.28.28-.46.1-.18.05-.33-.02-.47-.07-.14-.63-1.51-.86-2.07-.23-.55-.47-.48-.63-.49-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.02 2.76 1.16 2.95c.14.19 2 3.06 4.85 4.29.68.29 1.22.47 1.63.6.69.22 1.32.19 1.81.12.55-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.1-.23-.19-.47-.36zM12 21.84c-1.66 0-3.3-.44-4.74-1.28l-.34-.2-3.52.92.94-3.43-.22-.35A8.9 8.9 0 0 1 2.8 12c0-4.96 4.04-9 9-9 4.96 0 9 4.04 9 9 0 4.96-4.04 9-9 9zM12 1a10.9 10.9 0 0 0-11 11c0 1.94.5 3.82 1.48 5.46L0 24l6.74-1.77A10.87 10.87 0 0 0 12 23c6.07 0 11-4.93 11-11S18.07 1 12 1z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default FloatingContact;
