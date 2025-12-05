"use client";

import { CategoryModel } from "@/src/data/models/category_model";
import { useRouter } from "next/navigation";
import { CategoryDataSource } from "@/src/data/datasources/category";
import { useTranslations } from "next-intl";

interface CategoryCardProps {
  category: CategoryModel;
}

function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();
  const tCats = useTranslations("categoriesData");     // title + description
  const tSection = useTranslations("categoriesSection"); // button text

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

        {/* Заголовок категории */}
        <h3 className="text-card-title">
          {tCats(`${category.id}.title`)}
        </h3>

        {/* Описание категории */}
        <p className="text-description">
          {tCats(`${category.id}.description`)}
        </p>

        {/* Кнопка */}
        <button className="category-card-link" onClick={handleClick}>
          {tSection("button")}
        </button>

      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const categories = CategoryDataSource.getCategories();
  const tSection = useTranslations("categoriesSection");

  return (
    <section className="categories-section">
      <div className="w-full lg:max-w-[100%] mx-auto">

        {/* Заголовок блока */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4">
            {tSection("title")}
          </h2>

          <p className="text-description-large max-w-2xl mx-auto">
            {tSection("subtitle")}
          </p>
        </div>

        {/* Сетка категорий */}
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
