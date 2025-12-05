// app/.../components/product/ProductCTA.tsx
"use client";

import { Product } from '../../../data/models/product';
import { Button } from '../../../shared/theme';
import { useTranslations } from 'next-intl';

interface ProductCTAProps {
  product: Product;
}

export function ProductCTA({ product }: ProductCTAProps) {
  const tCTA = useTranslations('productCTA');
  const tProducts = useTranslations('products');

  const productName = tProducts(product.name);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="max-w-[80%] mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {tCTA('title', { name: productName })}
        </h2>

        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          {tCTA('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            variant="white"
            size="lg"
            className="px-8 py-4 text-lg"
          >
            {tCTA('primaryButton')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
          >
            {tCTA('secondaryButton')}
          </Button>
        </div>
      </div>
    </section>
  );
}
