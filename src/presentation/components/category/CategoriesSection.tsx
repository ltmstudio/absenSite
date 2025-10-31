"use client";

import { CategoryModel } from '@/src/data/models/category_model';
import { useRouter } from 'next/navigation';
import { CategoryDataSource } from '@/src/data/datasources/category';

interface CategoryCardProps {
  category: CategoryModel;
}

function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(category.href);
  };

  return (
    <div 
      className="category-card cursor-pointer h-80"
      style={{ backgroundImage: `url(${category.backgroundImage})` }}
      onClick={handleClick}
    >
      <div className="category-card-overlay">
        <h3 className="text-card-title">{category.title}</h3>
        <p className="text-description">{category.description}</p>
        <button className="category-card-link" onClick={handleClick}>
          Изучить категорию →
        </button>
      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const categories = CategoryDataSource.getCategories();

  return (
    <section className="categories-section">
      <div className="w-full lg:max-w-[100%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4">
            Категории продукции
          </h2>
          <p className="text-description-large max-w-2xl mx-auto">
            Выберите подходящее решение для ваших задач из широкого ассортимента LED-дисплеев Absen
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
