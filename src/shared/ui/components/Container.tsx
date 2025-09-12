import React from 'react';
import { componentStyles } from '../../theme/theme';

interface ContainerProps {
  variant?: 'base' | 'narrow' | 'wide';
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  variant = 'base', 
  children, 
  className = '' 
}) => {
  const containerStyles = componentStyles.container[variant];
  
  return (
    <div className={`${containerStyles} ${className}`}>
      {children}
    </div>
  );
};

