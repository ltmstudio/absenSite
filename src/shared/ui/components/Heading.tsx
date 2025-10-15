import React from 'react';
import { componentStyles } from '../../theme/theme';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const headingStyles = componentStyles.heading[`h${level}` as keyof typeof componentStyles.heading];
  
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  return (
    <Tag className={`${headingStyles} ${className}`}>
      {children}
    </Tag>
  );
};

