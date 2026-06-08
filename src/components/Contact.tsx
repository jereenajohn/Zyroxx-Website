import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Linkedin = ({ size = 24, ...props }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 24, ...props }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = ({ size = 24, ...props }: CustomIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormFields>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Full name is required';
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!form.message.trim()) tempErrors.message = 'Message content is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'Please provide a valid email format';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate server request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="ambient-glow" style={{ bottom: '-10%', right: '-5%' }}></div>
      <div className="ambient-glow-purple" style={{ top: '-10%', left: '10%' }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title gradient-text">Start Your Project</h2>
          <p className="section-description">
            Ready to convert your ideas into production-ready software? 
            Send us a message and our lead systems architect will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Info & Map Mock */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-info-panel"
          >
            
            <div className="info-cards">
              <div className="info-card-item glass-panel">
                <div className="info-icon-box">
                  <Mail size={20} className="color-cyan" />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:hello@zyroxx.com" className="info-link">hello@zyroxx.com</a>
                </div>
              </div>

              <div className="info-card-item glass-panel">
                <div className="info-icon-box">
                  <Phone size={20} className="color-cyan" />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+15550199022" className="info-link">+1 (555) 019-9022</a>
                </div>
              </div>

              <div className="info-card-item glass-panel">
                <div className="info-icon-box">
                  <MapPin size={20} className="color-cyan" />
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p className="info-link">100 Cyber Tower, Suite 404, Tech District, CA 94016</p>
                </div>
              </div>
            </div>

            {/* Glowing Tech Map Placeholder */}
            <div className="map-holder-box glass-panel">
              <div className="map-scanning-grid"></div>
              <div className="map-neon-marker">
                <div className="marker-ping"></div>
                <div className="marker-dot"></div>
              </div>
              <div className="map-text-overlay">
                <span>Silicon Valley HQ</span>
                <p>Zyroxx Digital Hub</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials-wrapper">
              <span>Follow our releases:</span>
              <div className="contact-social-icons">
                <a href="#" className="social-icon-btn glass-panel" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" className="social-icon-btn glass-panel" aria-label="GitHub"><Github size={18} /></a>
                <a href="#" className="social-icon-btn glass-panel" aria-label="Twitter"><Twitter size={18} /></a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Validation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-form-panel glass-panel"
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="form-success-state"
                >
                  <CheckCircle2 size={64} className="color-cyan success-pulse-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out to Zyroxx. Our engineering representative 
                    will review your specifications and contact you shortly.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setSubmitStatus('idle')}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="contact-form-element"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="error-msg-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && <span className="error-msg-text">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. Flutter Mobile App Development Inquiry"
                      value={form.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'input-error' : ''}
                    />
                    {errors.subject && <span className="error-msg-text">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your project goals, required tech, and approximate budget..."
                      value={form.message}
                      onChange={handleChange}
                      className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-msg-text">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-mini"></div> Processing...
                      </>
                    ) : (
                      <>
                        Send Inquiry <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
