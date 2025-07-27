
import React from 'react';
import { ArrowUpIcon } from './IconComponents';

interface BackToTopButtonProps {
  onClick: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-[88px] right-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-110"
      aria-label="Voltar ao topo"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
