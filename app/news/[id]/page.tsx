import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { newsItems } from '@/src/data/datasources/news';
import { Navigation, Footer } from '@/src/shared/ui';

type PageProps = {
  params: { id: string };
};

export default function NewsDetailsPage({ params }: PageProps) {
  const tNews = useTranslations('news');
  const tItems = useTranslations('newsBlock.items');
  const tBreadcrumbs = useTranslations('breadcrumbs');

  const idNum = Number(params.id);
  const item = newsItems.find((n) => n.id === idNum);

  if (!item) return notFound();

  const title = tItems(`${item.translationKey}.title`);
  const tag = tItems(`${item.translationKey}.tag`);

  // Подзаголовки + абзацы (sections.1, sections.2, sections.3)
  const sections = [1, 2, 3].map((i) => ({
    heading: tItems(`${item.translationKey}.sections.${i}.heading`),
    text: tItems(`${item.translationKey}.sections.${i}.text`),
  }));

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDate();
    const month = tNews(`months.${d.getMonth() + 1}`);
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedDate = formatDate(item.date);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* HERO с большой картинкой и маршрут-плашкой поверх */}
      <section
        className="
          relative w-full
          h-[260px] md:h-[340px] lg:h-[400px]
          flex items-start justify-center
        "
      >
        {/* Фон (большое изображение) */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: "url('/images/news/news-header.jpg')",
          }}
        />

        {/* Лёгкий тёмный оверлей */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Контейнер с маршрут-плашкой */}
        <div className="relative w-full max-w-[80%] mx-auto pt-8">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-black/65
              px-4 md:px-5
              py-2
              text-xs md:text-sm
              text-white
              shadow-lg
            "
          >
            {/* Иконка локатора (svg) */}
            <span
              className="
                flex items-center justify-center
                w-7 h-7
                rounded-full
                mr-1
              "
              style={{ backgroundColor: '#F28C20' }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-white"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.418 4.5 9.5 5.593 10.709a1 1 0 0 0 1.414 0C13.5 17.5 18 12.418 18 8c0-3.314-2.686-6-6-6zm0 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6z"
                />
              </svg>
            </span>

            {/* Главная */}
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#F28C20]"
            >
              {tBreadcrumbs('home')}
            </Link>

            <span className="opacity-60">{'>'}</span>

            {/* Новости */}
            <span>{tBreadcrumbs('news')}</span>

            <span className="opacity-60">{'>'}</span>

            {/* Текущая страница */}
            <span className="opacity-90 line-clamp-1 max-w-[260px] md:max-w-[420px]">
              {title}
            </span>
          </div>
        </div>
      </section>

      {/* ОСНОВНОЙ КОНТЕНТ НОВОСТИ */}
      <main className="flex-1">
        <article className="w-full max-w-[80%] mx-auto py-10">
          <header className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {tag && (
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase text-white"
                  style={{ backgroundColor: '#F28C20' }}
                >
                  {tag}
                </span>
              )}
              <time className="text-sm text-gray-500">
                {formattedDate}
              </time>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h1>
          </header>

          {/* Основное изображение новости */}
          <div className="relative w-full aspect-[16/10] mb-8 overflow-hidden rounded-2xl">
            <Image
              src={item.image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Несколько подзаголовков и абзацев */}
          <div className="prose max-w-none text-gray-800">
            {sections.map((section, index) => (
              <section key={index} className={index > 0 ? 'mt-6' : ''}>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {section.heading}
                </h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
