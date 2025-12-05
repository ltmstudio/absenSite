"use client";

import { useState, useEffect } from "react";
import { StaticDataSource } from "../../../data/datasources/banner_data";
import { Button } from "../../../shared/ui";
import { useTranslations } from "next-intl";

export interface BannerSliderProps {
  autoSlide?: boolean;
  slideInterval?: number;
}

export function BannerSlider({ autoSlide = true, slideInterval = 5000 }: BannerSliderProps) {
  const t = useTranslations(); // работаем с полными ключами: banners.xxx.yyy
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = StaticDataSource.getBanners();

  useEffect(() => {
    if (!autoSlide || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, banners.length]);

  if (banners.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">
          {t("banners.empty")}
        </p>
      </div>
    );
  }

  const currentBanner = banners[currentSlide];

  return (
    <div
      className="
        min-h-[600px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[600px]
        banner-slider relative w-full flex items-center
        rounded-2xl overflow-hidden shadow-2xl
        bg-cover bg-center transition-all duration-700 ease-in-out
      "
      style={{ backgroundImage: `url(${currentBanner.backgroundImage})` }}
    >
      {/* оверлеи */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* контент */}
      <div className="relative z-10 w-full lg:max-w-[80%] mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="max-w-2xl space-y-4">
          {/* subtitle */}
          <p className="text-sm md:text-base font-medium text-white/80 tracking-wide uppercase">
            {t(currentBanner.subtitle)}
          </p>

          {/* title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow mb-2 md:mb-4">
            {t(currentBanner.title)}
          </h2>

          {/* description */}
          <p className="text-base md:text-lg text-white/90 max-w-xl mb-6 md:mb-8">
            {t(currentBanner.description)}
          </p>

          <Button
            variant="white"
            size="lg"
            className="shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {t(currentBanner.buttonText)}
          </Button>
        </div>
      </div>

      {/* индикаторы */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "w-8 h-2 bg-white rounded-full shadow-lg"
                : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/80"
            }`}
            aria-label={t("banners.gotoSlide", { index: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
}
