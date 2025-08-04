import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, CheckCircleIcon } from './IconComponents';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Fale Conosco</h2>
          <p className="mt-4 text-lg text-gray-500">
            Tem alguma pergunta ou quer solicitar um orçamento? Nossa equipe está pronta para ajudar.
          </p>
        </div>
        <div className="mt-16 md:grid md:grid-cols-2 md:gap-8">
          <div className="relative">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center bg-slate-50 rounded-lg p-12 h-full text-center">
                    <CheckCircleIcon className="h-16 w-16 text-emerald-500" />
                    <h3 className="mt-4 text-2xl font-bold text-slate-800">Mensagem Enviada!</h3>
                    <p className="mt-2 text-slate-600">Agradecemos o seu contato. Retornaremos em breve.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Enviar Nova Mensagem</button>
                </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Seu email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md" placeholder="Sua mensagem"></textarea>
              </div>
              <div>
                <button type="submit" disabled={isLoading} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400">
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
            )}
          </div>
          <div className="mt-12 md:mt-0">
             <div className="bg-slate-50 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-900">Informações de Contato</h3>
                <div className="mt-6 space-y-6">
                    <div className="flex items-start">
                        <MapPinIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="ml-4">
                            <p className="text-base text-gray-700">Endereço</p>
                            <p className="text-base text-gray-500">Luís Eduardo Magalhães – BA</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-500">Ver no mapa</a>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <PhoneIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="ml-4">
                            <p className="text-base text-gray-700">Telefone</p>
                            <p className="text-base text-gray-500">(XX) XXXX-XXXX</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <MailIcon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div className="ml-4">
                            <p className="text-base text-gray-700">Email</p>
                            <p className="text-base text-gray-500">contato@topfacilalojamentos.com.br</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;