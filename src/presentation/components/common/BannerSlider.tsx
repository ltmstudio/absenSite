"use client";

import { useState, useEffect } from 'react';
import { StaticDataSource } from '../../../data/datasources/banner_data';
import { Button } from '../../../shared/ui';

export interface BannerSliderProps {
  autoSlide?: boolean;
  slideInterval?: number;
}

export function BannerSlider({ autoSlide = true, slideInterval = 5000 }: BannerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = StaticDataSource.getBanners();

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (banners.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">Нет баннеров для отображения</p>
      </div>
    );
  }

  const currentBanner = banners[currentSlide];

  return (
    <div className="min-h-[600px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[600px] banner-slider relative w-full h-auto items-center  flex rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${currentBanner.backgroundImage})` }}>
      {/* Слайд */}

      {/* Современный градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Контент */}
      <div className="relative z-10 flex items-center py-8 md:py-12">
        <div className="w-full lg:max-w-[80%] mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-hero-title mb-3 md:mb-4 text-white drop-shadow-lg">
              {currentBanner.title}
            </h2>

            <p className="text-description-large mb-6 md:mb-8 text-white drop-shadow-sm max-w-xl">
              {currentBanner.description}
            </p>
            <Button
              variant="white"
              size="lg"
              className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {currentBanner.buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Современные кнопки навигации */}
      {/* <div className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/20"
          aria-label="Предыдущий слайд"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/20"
          aria-label="Следующий слайд"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}

      {/* Современные индикаторы */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:scale-125 ${index === currentSlide
                ? 'w-8 h-2 bg-white rounded-full shadow-lg'
                : 'w-2 h-2 bg-white/60 rounded-full hover:bg-white/80'
              }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
