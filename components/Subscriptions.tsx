import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

const Subscriptions: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useModal();
  return (
    <section id="subscriptions" className="py-20 bg-soft-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('subscriptionsTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {t('subscriptionsSubtitle')}
            </p>
          </div>
        </SectionAnimator>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {SUBSCRIPTION_PLANS.map((plan, index) => (
            <SectionAnimator key={index} className={plan.isHighlighted ? 'lg:scale-110' : ''}>
              <div
                className={`relative bg-white p-8 rounded-xl shadow-lg h-full flex flex-col ${
                  plan.isHighlighted ? 'border-4 border-accent' : 'border-4 border-transparent'
                }`}
              >
                {plan.isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('mostPopular')}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-dark-gray mb-2">{t(plan.nameKey)}</h3>
                <div className="my-4">
                  <span className="text-5xl font-extrabold text-dark-gray">{plan.price}</span>
                  <span className="text-slate-500"> {t(plan.periodKey)}</span>
                </div>
                <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                  {plan.featureKeys.map((featureKey, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent me-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className={`w-full text-center px-6 py-3 font-semibold rounded-full transition-transform duration-300 hover:scale-105 ${
                    plan.isHighlighted
                      ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg'
                      : 'text-primary border-2 border-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {t('choosePlan')}
                </button>
              </div>
            </SectionAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;