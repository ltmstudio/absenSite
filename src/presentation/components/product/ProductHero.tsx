// app/.../components/product/ProductHero.tsx
"use client";

import { Product } from '../../../data/models/product';
import { Button } from '../../../shared/theme';
import { useTranslations } from 'next-intl';

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const tProducts = useTranslations('products');
  const tHero = useTranslations('productHero');

  return (
    <section className="relative h-[80vh] bg-gradient-to-br from-gray-900 to-gray-700">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${product.heroImage})` }}
      />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Контент */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[80%] mx-auto px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              {tProducts(product.name)}
            </h1>

            <p className="text-xl text-gray-200 mb-4">
              {tProducts(product.slogan)}
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {tProducts(product.description)}
            </p>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="white"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                {tHero('requestPrice')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                {tHero('getConsultation')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
