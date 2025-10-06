import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Subscriptions from './components/Subscriptions';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import OrderModal from './components/OrderModal';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModalProvider, useModal } from './contexts/ModalContext';


const AppContent: React.FC = () => {
    const { isModalOpen, closeModal } = useModal();

    return (
        <div className="bg-soft-white text-dark-gray font-poppins">
            <Header />
            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <Subscriptions />
                <Testimonials />
                <Faq />
                <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
            <WhatsAppButton />
            <OrderModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
        <ModalProvider>
            <AppContent />
        </ModalProvider>
    </LanguageProvider>
  );
};

export default App;
