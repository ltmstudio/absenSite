'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type NewsItem = {
  id: string | number;
  title: string;
  date: string;
  image: string;
  href: string;   // сюда приходит путь типа "/news/1"
  tag?: string;
};

export default function News({ items }: { items: NewsItem[] }) {
  const t = useTranslations('news');

  const options = {
    type: 'slide',
    perMove: 1,
    gap: '24px',
    drag: true,
    autoWidth: true,
    pagination: false,
    arrows: false,
    speed: 600,
    easing: 'cubic-bezier(.22,.61,.36,1)',
  } as const;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDate();
    const month = t(`months.${d.getMonth() + 1}`);
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <section className="relative py-4 w-full lg:max-w-[100%] mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          {t('sectionTitle')}
        </h2>
      </div>

      <Splide options={options} aria-label={t('aria')}>
        {items.map((n) => (
          <SplideSlide key={n.id}>
            <article className="px-1 py-2 shrink-0 w-[350px] md:w-[600px] lg:w-[700px] overflow-hidden">
              <div
                className="
                  h-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 md:p-6 flex gap-4 md:gap-6
                  transition-all duration-200
                  hover:shadow-md hover:shadow-gray-300
                  hover:ring-2 
                  hover:-translate-y-1
                  cursor-pointer
                "
              >
                {/* Image */}
                <div className="relative w-[120px] md:w-[320px] aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 90vw, 260px"
                  />
                  {n.tag && (
                    <span
                      className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase text-white shadow-sm"
                      style={{ backgroundColor: 'rgb(242, 140, 32)' }}
                    >
                      {n.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
                      <Link href={n.href} className="hover:underline">
                        {n.title}
                      </Link>
                    </h3>

                    <time className="text-sm text-gray-500">
                      {formatDate(n.date)}
                    </time>
                  </div>

                  <Link
                    href={n.href}
                    className="inline-flex w-max rounded-full px-4 py-2 text-sm font-semibold text-white mt-4 hover:brightness-110"
                    style={{ backgroundColor: 'rgb(242, 140, 32)' }}
                  >
                    {t('readMore')}
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
