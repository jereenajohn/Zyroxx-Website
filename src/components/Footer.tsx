import React, { useState } from 'react';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }

    setNewsletterStatus('loading');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 1200);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-panel">
      <div className="footer-top-divider"></div>
      
      <div className="container footer-container">
        
        {/* Col 1: Logo & Intro */}
        <div className="footer-col-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Zyroxx Logo" className="footer-logo-img" />
            <span className="footer-logo-text">ZYROXX</span>
          </div>
          <p className="footer-brand-desc">
            Transforming complex business problems into elegant, production-ready mobile applications, web systems, and design frameworks.
          </p>
          <p className="footer-brand-tagline text-glow">
            “Transforming Ideas Into Powerful Digital Solutions”
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col-links">
          <h4>Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#pricing" onClick={(e) => handleScrollTo(e, 'pricing')}>Pricing</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')}>FAQ</a></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="footer-col-services">
          <h4>Core Offerings</h4>
          <ul className="footer-links-list">
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Mobile App Dev</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Flutter Architectures</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Web Applications</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>UI/UX Design Systems</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Cloud Deploy & CI/CD</a></li>
            <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Maintenance retainers</a></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="footer-col-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter to receive tips on digital engineering and cloud scaling.</p>
          
          <form className="newsletter-form-box" onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input-group">
              <Mail size={16} className="newsletter-mail-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterStatus === 'error') setNewsletterStatus('idle');
                }}
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
              />
              <button 
                type="submit" 
                className="newsletter-submit-btn" 
                aria-label="Subscribe"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
              >
                <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Status alerts */}
            {newsletterStatus === 'error' && (
              <span className="newsletter-msg error">Please enter a valid email.</span>
            )}
            {newsletterStatus === 'success' && (
              <span className="newsletter-msg success">Subscription activated!</span>
            )}
          </form>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <span className="copyright-text">
            © {new Date().getFullYear()} Zyroxx. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="bullet-sep">•</span>
            <a href="#">Terms of Service</a>
            <span className="bullet-sep">•</span>
            <span className="built-with">
              Crafted with <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" /> by Zyroxx team.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
