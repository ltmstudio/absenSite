"use client";

import { CategoryModel } from '../../data/datasources/StaticDataSource';
import { CategoryFilter, ProductGrid } from '../components/category';

interface CategoryPageLayoutProps {
  category: CategoryModel;
}

export function CategoryPageLayout({ category }: CategoryPageLayoutProps) {
  return (
    <div className="category-page">
      {/* Заголовок секции */}
      <section className="py-16 bg-white">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {category.id === 'all' ? 'Все продукты' : category.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {category.id === 'all' 
                ? 'Полный каталог LED-дисплеев Absen для любых задач и применений' 
                : category.description}
            </p>
          </div>
          
          {/* Фильтры категорий */}
          <CategoryFilter currentCategory={category.id} />
        </div>
      </section>

      {/* Сетка продуктов */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[80%] mx-auto">
          <ProductGrid categoryId={category.id} />
        </div>
      </section>
    </div>
  );
}
