
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionAnimatorProps {
  children: React.ReactNode;
  className?: string;
}

const SectionAnimator: React.FC<SectionAnimatorProps> = ({ children, className }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className || ''} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default SectionAnimator;
