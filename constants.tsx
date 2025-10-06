import React from 'react';
import type { Testimonial, FAQItem } from './types';

export const NAV_ITEMS = [
  { nameKey: 'nav.home', href: '#home' },
  { nameKey: 'nav.services', href: '#services' },
  { nameKey: 'nav.howItWorks', href: '#how-it-works' },
  { nameKey: 'nav.subscriptions', href: '#subscriptions' },
  { nameKey: 'nav.testimonials', href: '#testimonials' },
  { nameKey: 'nav.faq', href: '#faq' },
  { nameKey: 'nav.contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    titleKey: 'service1Title',
    descriptionKey: 'service1Desc',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    titleKey: 'service2Title',
    descriptionKey: 'service2Desc',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    titleKey: 'service3Title',
    descriptionKey: 'service3Desc',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    titleKey: 'step1Title',
    descriptionKey: 'step1Desc',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    titleKey: 'step2Title',
    descriptionKey: 'step2Desc',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    titleKey: 'step3Title',
    descriptionKey: 'step3Desc',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    titleKey: 'step4Title',
    descriptionKey: 'step4Desc',
  },
];

export const SUBSCRIPTION_PLANS = [
  {
    nameKey: 'plan1Name',
    price: '49',
    periodKey: 'pricePerMonth',
    featureKeys: ['plan1Feat1', 'plan1Feat2', 'plan1Feat3', 'plan1Feat4'],
    isHighlighted: false,
  },
  {
    nameKey: 'plan2Name',
    price: '99',
    periodKey: 'pricePerMonth',
    featureKeys: ['plan2Feat1', 'plan1Feat2', 'plan1Feat3', 'plan1Feat4'],
    isHighlighted: true,
  },
  {
    nameKey: 'plan3Name',
    price: '199',
    periodKey: 'pricePerMonth',
    featureKeys: ['plan3Feat1', 'plan1Feat2', 'plan1Feat3', 'plan3Feat2'],
    isHighlighted: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Excellent service! They’ve saved me multiple times. Fast and professional.',
    name: 'Amine K.',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    quote: 'I was skeptical at first, but the process was simple and secure. Thank you, TankDrop!',
    name: 'Salma B.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    quote: 'Our business plan saved us time and money. Very professional service.',
    name: 'Youssef L.',
    image: 'https://picsum.photos/100/100?random=3',
  },
];

export const FAQ_ITEMS: { questionKey: string, answerKey: string }[] = [
    { questionKey: 'faq1Question', answerKey: 'faq1Answer' },
    { questionKey: 'faq2Question', answerKey: 'faq2Answer' },
    { questionKey: 'faq3Question', answerKey: 'faq3Answer' },
    { questionKey: 'faq4Question', answerKey: 'faq4Answer' },
];