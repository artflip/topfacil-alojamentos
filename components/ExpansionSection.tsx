
import React from 'react';
import { TrendingUpIcon, CheckCircleIcon, UsersIcon } from './IconComponents';

const ExpansionSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Visão de Futuro e Parcerias
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-6 text-slate-300">
          Acreditamos no crescimento conjunto e na melhoria contínua. Estamos sempre em busca de novas oportunidades e parceiros para construir o futuro da moradia corporativa com excelência.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-700/50 p-8 rounded-lg">
            <TrendingUpIcon className="mx-auto h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white">Crescimento Contínuo</h3>
            <p className="mt-2 text-slate-400">Nosso projeto é dinâmico, evoluindo para se adaptar às novas necessidades do mercado e de nossos clientes.</p>
          </div>

          <div className="bg-slate-700/50 p-8 rounded-lg">
            <CheckCircleIcon className="mx-auto h-10 w-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white">Qualidade Inegociável</h3>
            <p className="mt-2 text-slate-400">Mantemos um padrão de excelência em todas as unidades, pois a qualidade é a nossa principal assinatura.</p>
          </div>

          <div className="bg-slate-700/50 p-8 rounded-lg">
            <UsersIcon className="mx-auto h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white">Parcerias de Valor</h3>
            <p className="mt-2 text-slate-400">Buscamos parceiros alinhados à nossa visão para fortalecer o mercado e gerar valor mútuo.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpansionSection;
