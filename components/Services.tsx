import React from 'react';
import { SERVICES } from '../constants';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-20 bg-soft-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('servicesTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
        </SectionAnimator>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
             <SectionAnimator key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark-gray mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-600">{t(service.descriptionKey)}</p>
              </div>
            </SectionAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;