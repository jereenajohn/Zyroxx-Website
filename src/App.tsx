import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/global.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
// import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import AnimatedBackground from './components/AnimatedBackground';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="app-shell">
          {/* Global Sticky / Background Components */}
          <AnimatedBackground />
          <Navbar />
          <ScrollToTop />
          <FloatingContact />

          {/* Site Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Technologies />
            <WhyChooseUs />
            <Workflow />
            <Pricing />
            {/* <Team /> */}
            <Testimonials />
            <FAQ />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
