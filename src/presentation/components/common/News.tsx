'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // базовые стили Splide
import Image from 'next/image';
import Link from 'next/link';

type NewsItem = {
  id: string | number;
  title: string;
  date: string;   // ISO или любой формат
  image: string;  // /public/... или remote
  href: string;
  tag?: string;
};

export default function News({ items }: { items: NewsItem[] }) {
  const options = {
    type: 'slide',
    perMove: 1,            // листать по одной карточке
    gap: '24px',           // расстояние между слайдами
    drag: true,
    autoWidth: true,       // ширина берётся из класса карточки (w-[...])
    pagination: false,
    arrows: false,
    speed: 600,
    easing: 'cubic-bezier(.22,.61,.36,1)', // плавность
    // при желании:
    // autoplay: true, interval: 5000, pauseOnHover: true,
  } as const;

  return (
    <section className="relative py-4 w-full lg:max-w-[100%] mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">События & Новости</h2>
      </div>

      <Splide options={options} aria-label="Новости">
        {items.map((n) => (
          <SplideSlide key={n.id}>
            {/* ШИРИНА КАРТОЧКИ УПРАВЛЯЕТСЯ ЗДЕСЬ */}
            <article className="px-1 py-2 shrink-0 w-[350px] md:w-[600px] lg:w-[700px] overflow-hidden ">
              <div className="h-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 md:p-6 flex gap-4 md:gap-6">
                {/* Картинка слева */}
                <div className="relative w-[120px] md:w-[320px] aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 90vw, 260px"
                    priority={false}
                  />
                  {n.tag && (
                    <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-semibold uppercase text-white shadow-sm">
                      {n.tag}
                    </span>
                  )}
                </div>

                {/* Контент справа */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
                      <Link href={n.href} className="hover:underline">
                        {n.title}
                      </Link>
                    </h3>
                    <time className="text-sm text-gray-500">
                      {new Date(n.date).toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <Link
                    href={n.href}
                    className="inline-flex w-max rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 mt-4"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </article>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
