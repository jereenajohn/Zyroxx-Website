import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Rocket, SmartphoneNfc, Globe, Palette, ShoppingCart, 
  Database, Link2, Cloud, ArrowUpRight, HelpCircle, ShieldAlert, X, CheckCircle2
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techs: string[];
  deliverables: string[];
}

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 'mobile-dev',
      icon: <Smartphone size={24} className="color-cyan" />,
      title: 'Mobile App Development',
      shortDesc: 'High-performance native mobile applications tailored for optimal performance.',
      fullDesc: 'We design and construct high-performance native apps for iOS and Android that leverage full device capabilities, ensuring smooth framerates, secure local caching, and seamless animations.',
      techs: ['Swift', 'Kotlin', 'Objective-C', 'Java', 'Xcode', 'Android Studio'],
      deliverables: ['Custom Native iOS/Android Codebase', 'Biometric Authentication Integration', 'Offline Sync & SQLite Database', 'Native UI Layout Design']
    },
    {
      id: 'flutter-dev',
      icon: <Rocket size={24} className="color-cyan" />,
      title: 'Flutter App Development',
      shortDesc: 'Cross-platform app development using Google’s premier modern UI toolkit.',
      fullDesc: 'Leverage a single high-performance codebase to deploy beautiful apps on iOS, Android, web, and desktop. We write clean Dart code using robust state management paradigms like Bloc or Riverpod.',
      techs: ['Flutter', 'Dart', 'Bloc', 'Riverpod', 'Hive', 'Codemagic'],
      deliverables: ['Single Codebase for Multiple Platforms', 'Pixel-Perfect Custom UI Rendered on Canvas', 'Custom Native Platform Channels', 'Optimized Release APK & IPA packages']
    },
    {
      id: 'ios-android',
      icon: <SmartphoneNfc size={24} className="color-cyan" />,
      title: 'Android & iOS Apps',
      shortDesc: 'Comprehensive dual-platform release engineering and architecture.',
      fullDesc: 'We handle the complete development cycle of deploying applications on both stores, ensuring compliance with strict platform review guidelines and high user rating averages.',
      techs: ['SwiftUI', 'Jetpack Compose', 'Kotlin Multiplatform', 'Fastlane'],
      deliverables: ['Responsive Tablet & Phone Layouts', 'Push Notifications (APNS & FCM)', 'In-App Purchase & Subscriptions Flow', 'App Store Compliance Verification']
    },
    {
      id: 'web-dev',
      icon: <Globe size={24} className="color-cyan" />,
      title: 'Web Development',
      shortDesc: 'Modern, blazing-fast, responsive web interfaces and web applications.',
      fullDesc: 'We build SEO-optimized, highly responsive, lightning-fast web applications. We implement state-of-the-art frameworks to deliver premium static pages, dashboards, and server-side systems.',
      techs: ['React', 'Next.js', 'Vite', 'TypeScript', 'HTML5', 'CSS Modules'],
      deliverables: ['Fully Responsive Desktop & Mobile Layouts', 'Server-Side Rendering (SSR) & Static Site Gen', 'Clean Semantics & Perfect Lighthouse Audits', 'Headless CMS Integrations']
    },
    {
      id: 'ui-ux',
      icon: <Palette size={24} className="color-cyan" />,
      title: 'UI/UX Design',
      shortDesc: 'Premium wireframing, component-driven design systems, and UX flows.',
      fullDesc: 'We structure intuitive, high-converting digital flows. From wireframe schemas to full component prototypes, our style is visually clean, highly interactive, and designed to match corporate standards.',
      techs: ['Figma', 'Adobe XD', 'Principle', 'Illustrator', 'Penpot'],
      deliverables: ['Complete High-Fidelity Interactive Prototypes', 'Custom Unified Component Design System', 'User Persona Maps & UX Flow Diagrams', 'Developer Handoff Redlines']
    },
    {
      id: 'ecommerce',
      icon: <ShoppingCart size={24} className="color-cyan" />,
      title: 'E-commerce Solutions',
      shortDesc: 'Custom shopping platforms, payment portals, and conversion funnels.',
      fullDesc: 'We set up secure, custom digital storefronts that load instantly, handle thousands of checkout hits, and integrate seamlessly with accounting systems and product inventories.',
      techs: ['Next.js Commerce', 'Shopify Hydrogen', 'Stripe API', 'WooCommerce', 'GraphQL'],
      deliverables: ['Custom Product Search & Filtering System', 'Secure Checkout with Multi-Payment Gateways', 'Admin Management Console & Order Tracker', 'Abandoned Cart Retargeting setup']
    },
    {
      id: 'backend',
      icon: <Database size={24} className="color-cyan" />,
      title: 'Backend Development',
      shortDesc: 'Secure, scalable databases, microservices, and computing engines.',
      fullDesc: 'We engineer high-throughput server backends and database architectures. Our designs guarantee high concurrency, secure token-based logins, and scalable microservices infrastructure.',
      techs: ['Node.js', 'Django', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
      deliverables: ['RESTful / GraphQL APIs Architecture', 'Secure OAuth2 / JWT Auth Systems', 'Database Performance Profiling & Sharding', 'WebSockets for Live Real-Time Events']
    },
    {
      id: 'api-integ',
      icon: <Link2 size={24} className="color-cyan" />,
      title: 'API Integration',
      shortDesc: 'Seamless integration with third-party platforms, ERPs, and payment gateways.',
      fullDesc: 'We link your systems together. We build solid integrations with complex banking portals, sales systems, external ERPs, marketing trackers, and logistics platforms.',
      techs: ['Stripe', 'PayPal', 'Salesforce', 'Hubspot', 'Twilio', 'SendGrid'],
      deliverables: ['Custom Webhooks Receivers & Senders', 'Robust Error-Handling & Fault Tolerant Middleware', 'Detailed Logging & System Diagnostics', 'Data Mapping & Auto Sync Routines']
    },
    {
      id: 'cloud',
      icon: <Cloud size={24} className="color-cyan" />,
      title: 'Cloud Deployment',
      shortDesc: 'Automated CI/CD pipelines, container orchestration, and serverless hosting.',
      fullDesc: 'We orchestrate robust deployment scripts to host your systems securely on cloud clusters, ensuring automated failover, load balancing, and minimal computing overhead costs.',
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
      deliverables: ['Infrastructure as Code (IaC) Scripts', 'Automated Build & Deployment Pipelines', 'Live Autoscaling & Multi-Region Configurations', 'System Resource Monitors & Alerts']
    },
    {
      id: 'publishing',
      icon: <ArrowUpRight size={24} className="color-cyan" />,
      title: 'App Publishing',
      shortDesc: 'End-to-end management of iOS App Store and Android Play Store releases.',
      fullDesc: 'We remove the friction of getting your mobile app live. We coordinate visual marketing assets, write optimized metadata, configure privacy policies, and manage reviewer feedback.',
      techs: ['App Store Connect', 'Google Play Console', 'Privacy Policies', 'Metadata Optimization'],
      deliverables: ['Successful App Store & Play Store Submissions', 'App Store Optimization (ASO) Setup', 'Privacy and Data Use Disclosure Filings', 'Reviewer Clarification Responses']
    },
    {
      id: 'maintenance',
      icon: <HelpCircle size={24} className="color-cyan" />,
      title: 'Maintenance & Support',
      shortDesc: 'Proactive system monitoring, dependency patches, and security checks.',
      fullDesc: 'We keep your system running 24/7. We apply regular package upgrades, perform server health audits, check database bottlenecks, and deploy security patches.',
      techs: ['Sentry', 'Datadog', 'PM2', 'SSL Certificates', 'Security Auditing'],
      deliverables: ['24/7 Automated Error Logging & Monitoring', 'Regular Dependency Upgrades & Security Audits', 'Database Cleanups & Incremental Backups', 'SLA Support for Critical Incident Response']
    },
    {
      id: 'branding',
      icon: <ShieldAlert size={24} className="color-cyan" />,
      title: 'Branding & Solutions',
      shortDesc: 'Corporate visual identities, graphic guidelines, and tech consulting.',
      fullDesc: 'We define how your brand communicates digitally. We create modern logo variants, responsive marketing assets, unified email templates, and corporate guidelines.',
      techs: ['Figma', 'Illustrator', 'Brand Guidelines', 'Corporate Assets'],
      deliverables: ['Vector Logo Formats & Guidelines', 'Responsive Corporate Presentation Templates', 'Color Palette & Typography Brand Guidelines', 'Custom Corporate Marketing Visual Assets']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="ambient-glow" style={{ top: '20%', right: '0' }}></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title gradient-text">What We Do Best</h2>
          <p className="section-description">
            We deliver end-to-end digital engineering. From pixel-perfect frontends to robust,
            high-throughput backends, we cover the full cycle of modern IT needs.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="service-card glass-panel"
            >
              <div className="service-card-glow"></div>
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-short-desc">{service.shortDesc}</p>
              
              <button 
                className="service-learn-more"
                onClick={() => setActiveService(service)}
              >
                Learn More
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setActiveService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="modal-content glass-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setActiveService(null)}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="modal-icon-box">{activeService.icon}</div>
                <div>
                  <span className="modal-subtitle">Service details</span>
                  <h3 className="modal-title gradient-text">{activeService.title}</h3>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-desc-section">
                  <h4>Overview</h4>
                  <p>{activeService.fullDesc}</p>
                </div>

                <div className="modal-columns">
                  <div className="modal-column">
                    <h4>Core Technologies</h4>
                    <div className="modal-tags">
                      {activeService.techs.map((tech) => (
                        <span key={tech} className="modal-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-column">
                    <h4>What You Get</h4>
                    <ul className="modal-list">
                      {activeService.deliverables.map((item, idx) => (
                        <li key={idx} className="modal-list-item">
                          <CheckCircle2 size={16} className="color-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setActiveService(null)}>
                  Close
                </button>
                <a href="#contact" className="btn btn-primary" onClick={() => {
                  setActiveService(null);
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}>
                  Request Inquiry
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
