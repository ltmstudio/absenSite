import { CategoryPageLayout } from '../../src';
import { Navigation, Footer } from '../../src/shared/ui';

export default function CategoriesPage() {
  // Создаем объект для вкладки "Все"
  const allCategory = {
    id: 'all',
    title: 'Все продукты',
    description: 'Полный каталог LED-дисплеев Absen для любых задач и применений',
    backgroundImage: '/images/banners/led.png',
    href: '/categories/all'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        <CategoryPageLayout category={allCategory} />
      </main>
      <Footer />
    </div>
  );
}
