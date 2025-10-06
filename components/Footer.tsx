import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-start">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">TankDrop</h3>
            <p className="text-slate-400 max-w-sm mx-auto md:mx-0">
              {t('footerDesc')}
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-white">{t('nav.home')}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#subscriptions" className="text-slate-400 hover:text-white">{t('nav.subscriptions')}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white">{t('nav.contact')}</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">{t('contactInfo')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center justify-center md:justify-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>+212 681 603 641</li>
              <li className="flex items-center justify-center md:justify-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>info@tankdrop.store</li>
              <li className="flex items-center justify-center md:justify-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{t('location')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
