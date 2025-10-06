import React, { useState, useEffect } from 'react';
import SectionAnimator from './SectionAnimator';
import { useLanguage } from '../contexts/LanguageContext';

interface FormState {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Reset errors when language changes
  useEffect(() => {
    setErrors({});
  }, [language]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formState.fullName.trim()) {
      newErrors.fullName = t('errorFullName');
    }
    if (!formState.email.trim()) {
      newErrors.email = t('errorEmailReq');
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = t('errorEmailInvalid');
    }
    if (formState.message.trim().length < 20) {
      newErrors.message = t('errorMessage');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if(errors[name as keyof FormErrors]) {
        validate();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = `New Message from ${formState.fullName}`;
      const body = `Name: ${formState.fullName}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const mailtoLink = `mailto:info@tankdrop.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setIsSubmitted(true);
      setFormState({ fullName: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimator>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">{t('contactTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600">{t('contactSubtitle')}</p>
          </div>
        </SectionAnimator>
        <div className="grid lg:grid-cols-2 gap-12">
          <SectionAnimator>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-gray">{t('getInTouch')}</h3>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+212681603641" className="text-lg text-slate-600 hover:text-primary">+212 681 603 641</a>
              </div>
              <div className="flex items-center space-x-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                <a href="mailto:info@tankdrop.store" className="text-lg text-slate-600 hover:text-primary">info@tankdrop.store</a>
              </div>
               <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-lg text-slate-600">{t('location')}</p>
              </div>
               <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56034176255!2d-7.66939414595872!3d33.57240323328416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x4002564881495e0!2sCasablanca!5e0!3m2!1sen!2sma!4v1678886456789!5m2!1sen!2sma" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TankDrop Location in Casablanca">
                </iframe>
              </div>
            </div>
          </SectionAnimator>
          <SectionAnimator>
             <div className="bg-soft-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-dark-gray mb-6">{t('sendMessage')}</h3>
                {isSubmitted && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">{t('formSuccess')}</div>}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-slate-700 font-semibold mb-2 text-start">{t('formFullName')}</label>
                        <input type="text" id="fullName" name="fullName" value={formState.fullName} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.fullName ? 'border-red-500 focus:ring-red-300' : 'border-slate-300 focus:ring-primary'}`} required />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1 text-start">{errors.fullName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-slate-700 font-semibold mb-2 text-start">{t('formEmail')}</label>
                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-slate-300 focus:ring-primary'}`} required />
                        {errors.email && <p className="text-red-500 text-sm mt-1 text-start">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-slate-700 font-semibold mb-2 text-start">{t('formMessage')}</label>
                        <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-300' : 'border-slate-300 focus:ring-primary'}`} required minLength={20}></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1 text-start">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                        {t('formSubmit')}
                    </button>
                </form>
             </div>
          </SectionAnimator>
        </div>
      </div>
    </section>
  );
};

export default Contact;
