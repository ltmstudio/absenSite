import { notFound } from 'next/navigation';
import { StaticDataSource } from '../../../src/data/datasources/StaticDataSource';
import { CategoryPageLayout } from '../../../src';
import { Navigation, Footer } from '../../../src/shared/ui';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  
  // Обрабатываем случай "all" - все продукты
  if (categoryId === 'all') {
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
  
  // Получаем все категории для проверки существования
  const categories = StaticDataSource.getCategories();
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        <CategoryPageLayout category={category} />
      </main>
      <Footer />
    </div>
  );
}

// Генерируем статические параметры для всех категорий
export async function generateStaticParams() {
  const categories = StaticDataSource.getCategories();
  
  return [
    { categoryId: 'all' },
    ...categories.map((category) => ({
      categoryId: category.id,
    }))
  ];
}
