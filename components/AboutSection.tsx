import React from 'react';
import { SproutIcon, ShieldCheckIcon } from './IconComponents';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Quem Somos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Construindo mais que alojamentos, um futuro.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nascemos com o propósito de oferecer moradias dignas e seguras, acreditando que o bem-estar dos colaboradores é a base para o sucesso de qualquer projeto.
          </p>
        </div>

        <div className="mt-12 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-12 md:items-center">
          <div className="relative">
             <img className="rounded-lg shadow-xl w-full" src="https://picsum.photos/600/400?random=1" alt="Estrutura TopFácil" />
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-2xl font-bold text-slate-900">Nosso Propósito</h3>
            <p className="mt-4 text-lg text-slate-600">
              Nossa experiência nos mostrou a necessidade de alojamentos de alta qualidade. Por isso, a TopFácil foi criada: um projeto sólido para garantir o melhor ambiente para equipes de trabalho, aliando profissionalismo e cuidado.
            </p>
            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Compromisso com o Bem-Estar</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Acreditamos que um ambiente de descanso adequado é fundamental. Nossas instalações são projetadas para oferecer segurança, conforto e praticidade.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                    <SproutIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sustentabilidade como Pilar</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Investimos em soluções como energia solar e poço artesiano, reforçando nosso compromisso com a autonomia, a eficiência e o meio ambiente.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;