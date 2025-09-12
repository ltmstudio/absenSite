"use client";

import { StaticDataSource } from '../../../data/datasources/StaticDataSource';
import { useRouter } from 'next/navigation';

interface CategoryFilterProps {
  currentCategory: string;
}

export function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const categories = StaticDataSource.getCategories();
  
  // Основные категории для фильтра
  const mainCategories = [
    { id: 'all', title: 'Все', href: '/categories' },
    { id: 'indoor-displays', title: 'В помещении', href: '/categories/indoor-displays' },
    { id: 'outdoor-displays', title: 'На улице', href: '/categories/outdoor-displays' },
    { id: 'rental-displays', title: 'Аренда и сцена', href: '/categories/rental-displays' },
    { id: 'fine-pitch', title: 'МикроLED', href: '/categories/fine-pitch' },
    { id: 'transparent-displays', title: 'Экран «все-в-одном»', href: '/categories/transparent-displays' }
  ];

  const creativeCategory = { id: 'creative-displays', title: 'Креативный светодиодный дисплей', href: '/categories/creative-displays' };

  const handleCategoryClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="category-filters">
      {/* Основные фильтры */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {mainCategories.map((category) => (
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
      
      {/* Креативный дисплей - отдельная кнопка */}
      <div className="flex justify-center">
        <button
          onClick={() => handleCategoryClick(creativeCategory.href)}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
            currentCategory === creativeCategory.id
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {creativeCategory.title}
        </button>
      </div>
    </div>
  );
}
