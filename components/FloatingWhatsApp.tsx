
import React from 'react';

const WhatsAppIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg viewBox="0 0 32 32" className={className}>
        <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.38.33-.85.33-1.515.24-1.663-.09-.144-.43-.214-.9-.214zm-2.83 4.965c-.393 0-1.167.37-1.254.465-.143.143-.286.302-.53.302s-.616-.157-1.167-.37c-1.472-.6-2.618-1.53-3.6-2.618C9.08 17.062 7.7 15.11 7.4 12.82c-.043-1.1.33-2.05.746-2.615.143-.188.33-.302.53-.302.142 0 .285.043.428.043.143 0 .286-.043.358-.043.143 0 .286.044.428.044s.215.143.286.286c.07.188.687 2.05.76 2.24s.07.214-.07.357l-.428.428c-.07.072-.143.143-.143.286s0 .215.07.286c.214.43.9.9,1.43 1.43.712.712 1.43 1.14 2.36 1.43.143.07.214.07.286 0 .143-.07.214-.143.286-.214l.43-.43c.143-.143.286-.07.357-.07s.43.07.57.143c.143.142 1.636 1.976 1.82 2.162.142.142.07.285.07.357s-.07.143-.143.214c-.143.143-.214.215-.286.286-.07.072-.143.143-.143.215s.07.143.143.214c.07.072.143.143.143.215s-.07.143-.143.214z" fill="currentColor"></path>
    </svg>
);

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "5511999999999"; // Substituir pelo número de telefone correto
  const message = "Olá! Gostaria de mais informações sobre os alojamentos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
