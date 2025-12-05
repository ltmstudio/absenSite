// app/.../components/product/ProductCases.tsx
"use client";

import { useTranslations } from 'next-intl';

interface ProductCase {
  id: string;
  title: string;          // сам текст или i18n-ключ — по желанию
  description: string;    // сам текст или i18n-ключ
  image: string;
  location: string;       // можно тоже сделать ключом
  specifications: string[]; // можно текстом, можно ключами
}

interface ProductCasesProps {
  cases: ProductCase[];
}

export function ProductCases({ cases }: ProductCasesProps) {
  const t = useTranslations('productCases');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium opacity-90">
                    📍 {caseItem.location}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {caseItem.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t('characteristicsTitle')}
                  </h4>
                  {caseItem.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
