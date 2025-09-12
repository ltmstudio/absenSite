import React from 'react';
import { componentStyles } from '../../theme/theme';

interface SectionProps {
  variant?: 'base' | 'large' | 'small';
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  variant = 'base', 
  children, 
  className = '' 
}) => {
  const sectionStyles = componentStyles.section[variant];
  
  return (
    <section className={`${sectionStyles} ${className}`}>
      {children}
    </section>
  );
};
