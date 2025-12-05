'use client';

import { useLocale } from 'next-intl';
import BannerCarousel from './BannerCarousel';

export function HeroSection() {
  const locale = useLocale(); // ru | en

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <BannerCarousel
          images={[
            { src: `/images/hero/${locale}/slide-1.jpg`, alt: 'Banner 1' },
            { src: `/images/hero/${locale}/slide-2.jpg`, alt: 'Banner 2' },
            { src: `/images/hero/${locale}/slide-3.jpg`, alt: 'Banner 3' },
            { src: `/images/hero/${locale}/slide-4.jpg`, alt: 'Banner 4' },
          ]}
          intervalMs={5000}
        />
      </div>
    </section>
  );
}
