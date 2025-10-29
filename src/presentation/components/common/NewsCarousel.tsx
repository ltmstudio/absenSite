'use client';


import News from './News';

export default function NewsBlock() {
  return (
    <div className="max-w-[80%] mx-auto py-10">
      <News
        items={[
          {
            id: 1,
            title: "Absen’s H1 2024 Top 10 Benchmark Projects",
            date: "2024-08-12",
            image: "/images/news/news.jpg",
            href: "/news/bench",
            tag: "НОВОСТИ",
          },
          {
            id: 2,
            title: "Guinness World Record for Qatar Expo Illuminated by Absen LED Screens",
            date: "2024-05-29",
            image: "/images/news/news.jpg",
            href: "/news/qatar",
            tag: "НОВОСТИ",
          },
          {
            id: 3,
            title: "Top Credit Rating! Absen Passes the Customs AEO Advanced Certification",
            date: "2024-08-20",
            image: "/images/news/news.jpg",
            href: "/news/aeo",
            tag: "НОВОСТИ",
          },
        ]}
      />
    </div>
  );
}
