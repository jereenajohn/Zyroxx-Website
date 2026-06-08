import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

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
            <span>Consult our Architect</span>
            <div className="tooltip-arrow"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleClick}
        className="floating-contact-btn btn-primary"
        aria-label="Start consultation"
      >
        <MessageSquareText size={20} />
      </motion.button>
    </div>
  );
};

export default FloatingContact;
