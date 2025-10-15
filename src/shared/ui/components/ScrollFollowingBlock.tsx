"use client";

import { useEffect, useRef, useState } from 'react';

interface ScrollFollowingBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollFollowingBlock({ children, className = "" }: ScrollFollowingBlockProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скроллим вниз
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Скроллим вверх
        setIsScrollingDown(false);
      }
      
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Вычисляем позицию блока в зависимости от скролла
  const getBlockPosition = () => {
    const baseTop = 32; // 2rem = 32px
    const maxOffset = 150; // Увеличиваем максимальное смещение
    
    if (scrollY < 50) {
      return baseTop;
    }
    
    if (isScrollingDown) {
      // При скролле вниз блок опускается быстрее
      return Math.min(baseTop + (scrollY - 50) * 0.6, baseTop + maxOffset);
    } else {
      // При скролле вверх блок поднимается быстрее
      return Math.max(baseTop - (scrollY - 50) * 0.5, baseTop - maxOffset);
    }
  };

  return (
    <div 
      ref={blockRef}
      className={`scroll-following-block ${className}`}
      style={{
        position: 'sticky',
        top: `${getBlockPosition()}px`,
        zIndex: 10,
        transition: 'top 0.1s ease-out, transform 0.2s ease-out',
        transform: isScrollingDown ? 'translateY(5px)' : 'translateY(-5px)'
      }}
    >
      {children}
    </div>
  );
}
