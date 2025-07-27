import React from 'react';
import { SunIcon, DropletsIcon, MapPinIcon, ShieldCheckIcon } from './IconComponents';

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBgClass: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, iconBgClass }) => (
    <div className="flex gap-4">
      <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md ${iconBgClass} text-white`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-base text-gray-500">{description}</p>
      </div>
    </div>
);


const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Infraestrutura e Diferenciais</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluções que geram valor e sustentabilidade
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Investimos em recursos próprios para garantir autonomia, segurança e o melhor serviço para nossos parceiros.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <FeatureItem
              icon={<SunIcon className="h-6 w-6" />}
              title="Energia Solar"
              description="Nosso sistema de energia solar garante fornecimento estável e reduz custos, um compromisso com a sustentabilidade e eficiência."
              iconBgClass="bg-emerald-600"
            />
            <FeatureItem
              icon={<DropletsIcon className="h-6 w-6" />}
              title="Poço Artesiano Legalizado"
              description="Autonomia no abastecimento de água de qualidade, um diferencial que garante a operação contínua sem depender de redes externas."
              iconBgClass="bg-blue-600"
            />
            <FeatureItem
              icon={<MapPinIcon className="h-6 w-6" />}
              title="Localização Estratégica"
              description="Situados em Luís Eduardo Magalhães (LEM), estamos próximos aos principais polos de construção, agronegócio e logística da região."
              iconBgClass="bg-blue-600"
            />
            <FeatureItem
              icon={<ShieldCheckIcon className="h-6 w-6" />}
              title="Segurança e Conformidade"
              description="Operamos com todas as licenças e seguimos rigorosos padrões de segurança, oferecendo tranquilidade para sua empresa e colaboradores."
              iconBgClass="bg-emerald-600"
            />
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;