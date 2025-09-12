import React from 'react';
import { componentStyles } from '../../theme/theme';

interface TextProps {
  variant?: 'body' | 'small' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  children, 
  className = '' 
}) => {
  const textStyles = componentStyles.text[variant];
  
  return (
    <p className={`${textStyles} ${className}`}>
      {children}
    </p>
  );
};
