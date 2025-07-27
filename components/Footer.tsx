
import React from 'react';

const Footer: React.FC = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 items-center justify-center md:justify-between text-center md:text-left">
          <p className="text-base text-slate-400">&copy; {new Date().getFullYear()} TopFácil Alojamentos. Todos os direitos reservados.</p>
          <div className="flex-shrink-0">
             <button 
                onClick={handleScrollToTop} 
                className="text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white rounded-md px-2"
                aria-label="Voltar ao topo"
              >
              TopFácil<span className="text-emerald-500">.</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
