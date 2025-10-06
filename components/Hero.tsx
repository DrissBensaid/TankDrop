import React from 'react';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useModal();
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <img 
        src="https://picsum.photos/1920/1080?random=10" 
        alt="Fuel delivery truck at night in a Moroccan city"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        loading="eager"
      />
      <div className="relative z-10 text-center px-4">
        <SectionAnimator>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-xl whitespace-pre-line">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light drop-shadow-lg">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              {t('urgentOrder')}
            </button>
            <a
              href="tel:+212681603641"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white/20 backdrop-blur-sm border-2 border-white rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              {t('callNow')}
            </a>
          </div>
        </SectionAnimator>
      </div>
    </section>
  );
};

export default Hero;