"use client";

import { CategoryModel } from '../../data/models/category_model';
import { CategoryFilter, ProductGrid } from '../components/category';

interface CategoryPageLayoutProps {
  category: CategoryModel;
}

export function CategoryPageLayout({ category }: CategoryPageLayoutProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Заголовок секции */}
      <section className="h-full category-page pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20 bg-white">
        <div>
          <div className="max-w-[80%] mx-auto text-center mb-8">
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
      <section className="h-full py-5 sm:py-5 md:py-16 lg:py-16 xl:py-16 ">
        <div className="max-w-[80%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] mx-auto">
          <ProductGrid categoryId={category.id} />
        </div>
      </section>
    </div>
  );
}
