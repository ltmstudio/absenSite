'use client';

import News from './News';
import { useTranslations } from 'next-intl';

export default function NewsBlock() {
  const t = useTranslations('newsBlock.items');

  const items = [
    {
      id: 1,
      title: t('1.title'),
      date: '2024-08-12',
      image: '/images/news/news1.jpg',
      href: '/news/1',
      tag: t('1.tag'),
    },
    {
      id: 2,
      title: t('2.title'),
      date: '2025-05-29',
      image: '/images/news/news2.jpg',
      href: '/news/2',
      tag: t('2.tag'),
    },
    {
      id: 3,
      title: t('3.title'),
      date: '2025-08-20',
      image: '/images/news/news3.jpg',
      href: '/news/3',
      tag: t('3.tag'),
    },
  ];

  return (
    <div className="w-full mx-auto py-10">
      <News items={items} />
    </div>
  );
}
