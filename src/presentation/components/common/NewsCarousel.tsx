'use client';


import News from './News';

export default function NewsBlock() {
  return (
    <div className="w-full mx-auto py-10">
      <News
        items={[
          {
            id: 1,
            title: "Топ-10 Эталонных Проектов Absen За Первую Половину 2024 Года.",
            date: "2024-08-12",
            image: "/images/news/news1.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
          {
            id: 2,
            title: "Мировой Рекорд Гиннесса На Qatar Expo, Освещённый LED-Экранами Absen.",
            date: "2025-05-29",
            image: "/images/news/news2.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
          { 
            id: 3,
            title: "Высший Кредитный Рейтинг! Absen Снова Успешно Прошла Аудит Расширенной Сертификации Таможенного AEO.",
            date: "2025-08-20",
            image: "/images/news/news3.jpg",
            href: "",
            tag: "НОВОСТИ",
          },
        ]}
      />
    </div>
  );
}
