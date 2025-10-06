import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('howItWorksTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {t('howItWorksSubtitle')}
            </p>
          </div>
        </SectionAnimator>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <SectionAnimator key={index}>
                <div className="text-center relative">
                  <div className="flex items-center justify-center mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-5 border-2 border-primary/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">{t(step.titleKey)}</h3>
                  <p className="text-slate-600">{t(step.descriptionKey)}</p>
                </div>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;