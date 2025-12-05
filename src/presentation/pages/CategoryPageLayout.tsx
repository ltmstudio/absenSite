"use client";

import { CategoryModel } from "../../data/models/category_model";
import { CategoryFilter, ProductGrid } from "../components/category";
import { useTranslations } from "next-intl";

interface CategoryPageLayoutProps {
  category: CategoryModel;
}

export function CategoryPageLayout({ category }: CategoryPageLayoutProps) {
  const tCats = useTranslations("categoriesData");   // title/description категорий
  const tPage = useTranslations("categoryPage");     // тексты для "все продукты" и общие

  const isAll = category.id === "all";

  const title = isAll
    ? tPage("allTitle")
    : tCats(`${category.id}.title`);

  const subtitle = isAll
    ? tPage("allSubtitle")
    : tCats(`${category.id}.description`);

  return (
    <div className="h-full flex flex-col">
      {/* Заголовок секции */}
      <section className="h-full category-page pt-20 bg-white">
        <div>
          <div className="max-w-[80%] mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Фильтры категорий */}
          <CategoryFilter currentCategory={category.id} />
        </div>
      </section>

      {/* Сетка продуктов */}
      <section className="h-full py-5 md:py-16">
        <div className="max-w-[80%] md:max-w-[60%] mx-auto">
          <ProductGrid categoryId={category.id} />
        </div>
      </section>
    </div>
  );
}
