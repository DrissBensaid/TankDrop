import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';

const FaqItem: React.FC<{ item: typeof FAQ_ITEMS[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const { t } = useLanguage();
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-start"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-dark-gray">{t(item.questionKey)}</span>
        <svg
          className={`w-6 h-6 text-primary transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-slate-600">{t(item.answerKey)}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-soft-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('faqTitle')}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </SectionAnimator>
      </div>
    </section>
  );
};

export default Faq;