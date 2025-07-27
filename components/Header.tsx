
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './IconComponents';

interface HeaderProps {
  onScrollToAbout: () => void;
  onScrollToAccommodation: () => void;
  onScrollToExpansion: () => void;
  onScrollToContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollToAbout, onScrollToAccommodation, onScrollToExpansion, onScrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavClick = (scrollFunc: () => void) => {
    setIsMenuOpen(false);
    // Use a timeout to allow the menu to close before scrolling
    setTimeout(() => {
      scrollFunc();
    }, 300);
  };

  const navLinkClasses = "cursor-pointer text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-300";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-2xl font-bold text-slate-900">TopFácil<span className="text-emerald-600">.</span></span>
            </button>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={onScrollToAbout} className={navLinkClasses}>Quem Somos</button>
              <button onClick={onScrollToAccommodation} className={navLinkClasses}>Alojamentos</button>
              <button onClick={onScrollToExpansion} className={navLinkClasses}>Visão</button>
              <button onClick={onScrollToContact} className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Fale Conosco
              </button>
            </nav>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative h-8 w-8 inline-flex items-center justify-center p-2 rounded-md text-slate-700 focus:outline-none" aria-label="Abrir menu">
                <MenuIcon className={`block h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <XIcon className={`absolute block h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full w-full text-center">
            <button onClick={() => handleNavClick(onScrollToAbout)} className="text-slate-100 hover:text-emerald-400 block py-4 text-3xl font-medium transition-colors">Quem Somos</button>
            <button onClick={() => handleNavClick(onScrollToAccommodation)} className="text-slate-100 hover:text-emerald-400 block py-4 text-3xl font-medium transition-colors">Alojamentos</button>
            <button onClick={() => handleNavClick(onScrollToExpansion)} className="text-slate-100 hover:text-emerald-400 block py-4 text-3xl font-medium transition-colors">Visão</button>
            <button onClick={() => handleNavClick(onScrollToContact)} className="mt-8 w-3/4 max-w-xs text-center items-center justify-center px-8 py-4 border border-transparent text-xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Fale Conosco
            </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
