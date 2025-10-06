import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';


const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('testimonialsTitle')}</h2>
          </div>
          <div className="relative max-w-3xl mx-auto h-72">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {index === currentIndex && (
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 shadow-lg object-cover"
                      loading="lazy"
                    />
                    <p className="text-xl italic text-slate-600 mb-4">"{testimonial.quote}"</p>
                    <h3 className="font-bold text-dark-gray text-lg">{testimonial.name}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </SectionAnimator>
      </div>
    </section>
  );
};

export default Testimonials;