'use client';

import BannerCarousel from './BannerCarousel';

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* full-bleed: выходим за пределы контейнера */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <BannerCarousel
          images={[
            { src: '/images/hero/slide-1.jpg', alt: 'Absen indoor' },
            { src: '/images/hero/slide-2.jpg', alt: 'Absen outdoor' },
            { src: '/images/hero/slide-3.jpg', alt: 'Stage & rental' },
            { src: '/images/hero/slide-4.jpg', alt: 'Creative LED' },
          ]}
          intervalMs={5000}
        />
      </div>
    </section>
  );
}
