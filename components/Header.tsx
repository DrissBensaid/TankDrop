import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

const LanguageSwitcher: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languages = {
    en: '🇬🇧 EN',
    fr: '🇫🇷 FR',
    ar: '🇲🇦 AR'
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center ${isScrolled ? 'text-dark-gray' : 'text-white drop-shadow-md'} font-medium hover:text-primary transition-colors py-2 lg:py-0`}>
        {languages[language]}
        <svg className={`w-4 h-4 ms-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 lg:right-0 lg:left-auto mt-2 bg-white rounded-md shadow-lg py-1 z-10">
          {(Object.keys(languages) as Array<keyof typeof languages>).map(lang => (
            <button key={lang} onClick={() => { setLanguage(lang); setIsOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-dark-gray hover:bg-slate-100">
              {languages[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white/90 shadow-md' : 'bg-black/20'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className={`text-3xl font-extrabold text-primary transition-all duration-300 ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
              TankDrop
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.nameKey}
                href={item.href}
                className={`${isScrolled ? 'text-dark-gray' : 'text-white drop-shadow-md'} font-medium hover:text-primary transition-colors`}
                aria-label={t(item.nameKey)}
              >
                {t(item.nameKey)}
              </a>
            ))}
            <LanguageSwitcher isScrolled={isScrolled} />
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={openModal}
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              {t('orderNow')}
            </button>
             <button
              onClick={openModal}
              className="px-5 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              {t('emergencyOrder')}
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-dark-gray' : 'text-white drop-shadow-md'} hover:text-primary focus:outline-none`}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-lg px-4 pt-2 pb-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.nameKey}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-dark-gray font-medium py-2 hover:text-primary transition-colors"
            >
              {t(item.nameKey)}
            </a>
          ))}
          <LanguageSwitcher isScrolled={true} />
          <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-slate-200">
            <button
              onClick={() => { openModal(); setIsMenuOpen(false); }}
              className="w-full text-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"
            >
              {t('orderNow')}
            </button>
             <button
              onClick={() => { openModal(); setIsMenuOpen(false); }}
              className="w-full text-center px-5 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-full"
            >
              {t('emergencyOrder')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;