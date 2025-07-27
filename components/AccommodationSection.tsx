
import React from 'react';
import { BuildingIcon, UsersIcon, BedIcon } from './IconComponents';

const AccommodationCard: React.FC<{ icon: React.ReactNode; title: string; description: string; imageUrl: string; iconBgClass: string; iconTextClass: string }> = ({ icon, title, description, imageUrl, iconBgClass, iconTextClass }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${iconBgClass} ${iconTextClass}`}>
            {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const AccommodationSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nossos Alojamentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Estrutura Completa para o seu Time
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Oferecemos uma infraestrutura pensada em cada detalhe para garantir o bem-estar e a segurança dos trabalhadores.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AccommodationCard
            icon={<BuildingIcon className="w-6 h-6" />}
            title="Estrutura Modular"
            description="Dois blocos independentes com quartos que oferecem organização e privacidade. Capacidade inicial para 56 trabalhadores."
            imageUrl="https://picsum.photos/400/300?random=2"
            iconBgClass="bg-blue-100"
            iconTextClass="text-blue-600"
          />
          <AccommodationCard
            icon={<UsersIcon className="w-6 h-6" />}
            title="Quartos Versáteis"
            description="Contamos com quartos para 8 e 4 trabalhadores, adaptando-se com flexibilidade às necessidades de diferentes equipes."
            imageUrl="https://picsum.photos/400/300?random=3"
            iconBgClass="bg-emerald-100"
            iconTextClass="text-emerald-600"
          />
          <AccommodationCard
            icon={<BedIcon className="w-6 h-6" />}
            title="Conforto e Praticidade"
            description="Camas, armários individuais, limpeza e segurança. Tudo complementado por cantina, lavanderia e áreas de convivência."
            imageUrl="https://picsum.photos/400/300?random=4"
            iconBgClass="bg-blue-100"
            iconTextClass="text-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
