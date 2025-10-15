"use client";

import { CategoryDataSource } from '@/src/data/datasources/category';
import { useRouter } from 'next/navigation';

interface CategoryFilterProps {
  currentCategory: string;
}

export function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const categories = CategoryDataSource.getCategories();
  
  // Добавляем "Все" в начало списка
  const allCategories = [
    { id: 'all', title: 'Все', href: '/categories' },
    ...categories.map(cat => ({
      id: cat.id,
      title: cat.title,
      href: cat.href
    }))
  ];

  const handleCategoryClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="category-filters">
      {/* Десктопная версия - центрированные табы */}
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {allCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.href)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
              currentCategory === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Мобильная версия - горизонтально скроллируемые табы */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto gap-3 pb-2 px-1 scrollbar-hide">
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.href)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                currentCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
