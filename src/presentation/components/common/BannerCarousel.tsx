'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Slide = { src: string; alt?: string };
type Props = {
  images: Slide[];
  intervalMs?: number; // 0 — отключить автопрокрутку
};

export default function BannerCarousel({ images, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const restartRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // swipe state
  const swipe = useRef<{startX: number; currentX: number; dragging: boolean}>({
    startX: 0,
    currentX: 0,
    dragging: false,
  });

  // Остановка автопрокрутки
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Запуск автопрокрутки
  const startTimer = useCallback(() => {
    if (!intervalMs || intervalMs <= 0) return;
    stopTimer();
    timerRef.current = setInterval(() => goTo(index + 1), intervalMs);
  }, [index, intervalMs]);

  // Переход к слайду
  const goTo = useCallback(
    (i: number) => {
      if (!images.length) return;
      const el = containerRef.current;
      const next = ((i % images.length) + images.length) % images.length;
      setIndex(next);
      if (el) {
        el.scrollTo({
          left: next * (el.clientWidth || 0),
          behavior: 'smooth',
        });
      }
    },
    [images.length]
  );

  // автопрокрутка
  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);

  // синхронизация при ресайзе (без анимации)
  useEffect(() => {
    const onResize = () => {
      const el = containerRef.current;
      if (!el) return;
      el.scrollTo({ left: index * (el.clientWidth || 0), behavior: 'auto' });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index]);

  // обработка ручного скролла/свайпа — обновляем индекс и перезапускаем автоплей
  const onScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    stopTimer();
    const current = Math.round(el.scrollLeft / (el.clientWidth || 1));
    if (current !== index) setIndex(current);

    if (restartRef.current) clearTimeout(restartRef.current);
    restartRef.current = setTimeout(() => startTimer(), 800);
  };

  // ===== TOUCH EVENTS (MOBILE SWIPE) ======
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    swipe.current.startX = e.touches[0].clientX;
    swipe.current.currentX = swipe.current.startX;
    swipe.current.dragging = true;
    stopTimer();
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swipe.current.dragging) return;
    swipe.current.currentX = e.touches[0].clientX;

    // Optional: do visual slide drag if needed for effect
    // Например, не реализовано: можно через transform
  };

  const onTouchEnd = () => {
    if (!swipe.current.dragging) return;
    const distance = swipe.current.startX - swipe.current.currentX;
    const minSwipeDistance = 50; // px

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goTo(index + 1); // Свайп влево (следующий)
      } else if (distance < 0) {
        goTo(index - 1); // Свайп вправо (предыдущий)
      }
    }
    swipe.current.dragging = false;

    if (restartRef.current) clearTimeout(restartRef.current);
    restartRef.current = setTimeout(() => startTimer(), 800);
  };

  // ===== MOUSE EVENTS (DESKTOP DRAG SWIPE) =====
  // Обеспечим swipe для десктопа через мышь (mouse drag)
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    swipe.current.startX = e.clientX;
    swipe.current.currentX = e.clientX;
    swipe.current.dragging = true;
    stopTimer();
    // Добавляем mousemove и mouseup для всего документа
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!swipe.current.dragging) return;
    swipe.current.currentX = e.clientX;
  };

  const onMouseUp = () => {
    if (!swipe.current.dragging) return;
    const distance = swipe.current.startX - swipe.current.currentX;
    const minSwipeDistance = 50;

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goTo(index + 1);
      } else if (distance < 0) {
        goTo(index - 1);
      }
    }
    swipe.current.dragging = false;

    // Чистим слушателей
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (restartRef.current) clearTimeout(restartRef.current);
    restartRef.current = setTimeout(() => startTimer(), 800);
  };

  if (!images?.length) return null;

  return (
    <div className="relative w-full">
      <div
  ref={containerRef}
  onScroll={onScroll}
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
  onMouseDown={onMouseDown}
  className="
   h-[...]
    overflow-x-scroll overflow-y-hidden
    snap-x snap-mandatory flex
    touch-pan-x
    select-none
    cursor-grab active:cursor-grabbing
    no-scrollbar
  "
  style={{
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    WebkitUserSelect: 'none',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  }}
>
        {images.map((img, i) => (
          <div key={img.src} className="relative min-w-screen snap-center">
               <Image
                 src={img.src}
                 alt={img.alt || `slide-${i + 1}`}
                 width={1920}
                 height={1080}
                 priority={i === 0}
                 sizes="100vw"
                 className="w-full h-auto object-contain md:object-cover"
                 draggable={false}
                 unselectable="on"
               />
             </div>
        ))}
      </div>
      {/* Стрелки */}
      <button
        aria-label="Prev"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 p-2 text-white"
        type="button"
      >
        <span className="sr-only">Previous</span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        aria-label="Next"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rotate-180 rounded-full bg-black/40 hover:bg-black/60 p-2 text-white"
        type="button"
      >
        <span className="sr-only">Next</span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}
