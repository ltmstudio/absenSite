"use client";

import { TechnicalSpecification, ProductAdvantage, ProductApplication } from '../../../data/models/product';

interface ProductSpecificationsProps {
  specifications: TechnicalSpecification[];
  advantages: ProductAdvantage[];
  applications: ProductApplication[];
}

export function ProductSpecifications({ specifications, advantages, applications }: ProductSpecificationsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Технические характеристики
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Подробные технические параметры продукта
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Таблица характеристик */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Основные параметры
            </h3>
            
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-700 font-medium">
                    {spec.name}
                  </span>
                  <span className="text-gray-900 font-bold">
                    {spec.value} {spec.unit && <span className="text-gray-500">{spec.unit}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Преимущества и сферы применения */}
          <div className="space-y-8">
            {/* Ключевые преимущества */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ключевые преимущества
              </h3>
              <div className="space-y-3">
                {advantages.slice(0, 3).map((advantage) => (
                  <div key={advantage.id} className="flex items-center gap-3">
                    <div className="text-orange-500 text-lg">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {advantage.value} {advantage.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {advantage.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Сферы применения */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Сферы применения
              </h3>
              <div className="space-y-3">
                {applications.slice(0, 3).map((application) => (
                  <div key={application.id} className="flex items-center gap-3">
                    <div className="text-blue-500 text-lg">
                      {application.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {application.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {application.description}
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
