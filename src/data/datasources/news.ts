// data/datasources/news.ts
export type BaseNewsItem = {
    id: number;
    date: string;
    image: string;
    translationKey: string; // "1", "2", "3" и т.п.
  };
  
  export const newsItems: BaseNewsItem[] = [
    {
      id: 1,
      date: '2024-08-12',
      image: '/images/news/news1.jpg',
      translationKey: '1',
    },
    {
      id: 2,
      date: '2025-05-29',
      image: '/images/news/news2.jpg',
      translationKey: '2',
    },
    {
      id: 3,
      date: '2025-08-20',
      image: '/images/news/news3.jpg',
      translationKey: '3',
    },
  ];
  