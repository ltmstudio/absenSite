// app/.../components/product/ProductSpecifications.tsx
"use client";

import {
  TechnicalSpecification,
  ProductAdvantage,
  ProductApplication,
} from '../../../data/models/product';
import { useTranslations } from 'next-intl';

interface ProductSpecificationsProps {
  specifications: TechnicalSpecification[];
  advantages: ProductAdvantage[];
  applications: ProductApplication[];
}

export function ProductSpecifications({
  specifications,
  advantages,
  applications,
}: ProductSpecificationsProps) {
  const t = useTranslations('productSpecifications');
  const tProducts = useTranslations('products');

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
          {/* Таблица характеристик */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('mainParams')}
            </h3>

            <div className="space-y-4">
              {specifications.map((spec, index) => {
                const baseKey = spec.name; // e.g. "hc-v3.technicalSpecs.pixelPitch"
                const label = tProducts(`${baseKey}.label`);
                const unit = spec.unit
                  ? tProducts(`${baseKey}.unit`)
                  : '';

                return (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {label}
                    </span>
                    <span className="text-gray-900 font-bold">
                      {spec.value}{' '}
                      {unit && (
                        <span className="text-gray-500">
                          {unit}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Преимущества и сферы применения */}
          <div className="space-y-8">
            {/* Ключевые преимущества */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('advantages')}
              </h3>
              <div className="space-y-3">
                {advantages.slice(0, 3).map((advantage) => (
                  <div
                    key={advantage.id}
                    className="flex items-center gap-3"
                  >
                    <div className="text-orange-500 text-lg">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {advantage.value &&
                          `${advantage.value} `}
                        {tProducts(advantage.title)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tProducts(advantage.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Сферы применения */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('applications')}
              </h3>
              <div className="space-y-3">
                {applications.slice(0, 3).map((application) => (
                  <div
                    key={application.id}
                    className="flex items-center gap-3"
                  >
                    <div className="text-blue-500 text-lg">
                      {application.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {tProducts(application.title)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tProducts(application.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
