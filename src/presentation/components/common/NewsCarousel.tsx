'use client';


import News from './News';

export default function NewsBlock() {
  return (
    <div className="w-full mx-auto py-10">
      <News
        items={[
          {
            id: 1,
            title: "Absen’s news",
            date: "2025-08-12",
            image: "/images/news/news.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
          {
            id: 2,
            title: "Absen’s news",
            date: "2025-05-29",
            image: "/images/news/news.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
          { 
            id: 3,
            title: "Absen’s news",
            date: "2025-08-20",
            image: "/images/news/news.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
        ]}
      />
    </div>
  );
}
