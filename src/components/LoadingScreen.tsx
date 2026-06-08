import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Zyroxx Core...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setLoadingText('Loading system modules...');
    } else if (progress < 60) {
      setLoadingText('Configuring secure cloud network...');
    } else if (progress < 85) {
      setLoadingText('Establishing digital architecture...');
    } else if (progress < 100) {
      setLoadingText('Syncing visual design assets...');
    } else {
      setLoadingText('Ready.');
      setTimeout(onComplete, 500);
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="loader-logo-wrapper"
        >
          {/* Neon Ring Effect */}
          <div className="logo-neon-ring"></div>
          <img src={logo} alt="Zyroxx" className="loader-logo-img" />
        </motion.div>

        <motion.div 
          className="progress-bar-wrapper"
          initial={{ width: 0 }}
          animate={{ width: '250px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="progress-bar-track">
            <motion.div 
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        <div className="loader-stats">
          <span className="loader-percentage">{progress}%</span>
          <span className="loader-text">{loadingText}</span>
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;
