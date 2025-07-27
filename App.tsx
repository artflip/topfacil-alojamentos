
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AccommodationSection from './components/AccommodationSection';
import FeaturesSection from './components/FeaturesSection';
import ExpansionSection from './components/ExpansionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const accommodationRef = useRef<HTMLDivElement>(null);
  const expansionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header 
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToAccommodation={() => scrollTo(accommodationRef)}
        onScrollToExpansion={() => scrollTo(expansionRef)}
        onScrollToContact={() => scrollTo(contactRef)}
      />
      <main className="flex-grow">
        <HeroSection onScrollToAccommodation={() => scrollTo(accommodationRef)} />
        <div ref={aboutRef}><AboutSection /></div>
        <div ref={accommodationRef}><AccommodationSection /></div>
        <FeaturesSection />
        <div ref={expansionRef}><ExpansionSection /></div>
        <div ref={contactRef}><ContactSection /></div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      {showBackToTop && <BackToTopButton onClick={handleBackToTop} />}
    </div>
  );
};

export default App;
