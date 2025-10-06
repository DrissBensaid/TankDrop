
import type React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
