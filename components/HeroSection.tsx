import React from 'react';

interface HeroProps {
    onScrollToAccommodation: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ onScrollToAccommodation }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          <span className="block">Alojamentos prontos para receber</span>
          <span className="block text-emerald-400 mt-2">seu time com estrutura profissional.</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-lg md:text-xl text-slate-200">
          Conforto, segurança e bem-estar para equipes em Luís Eduardo Magalhães – BA.
        </p>
        <div className="mt-10">
          <button
            onClick={onScrollToAccommodation}
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            Conheça nossa estrutura
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;