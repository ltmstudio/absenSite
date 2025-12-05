// app/.../components/product/ProductGrid.tsx
"use client";

import { Product } from '../../../data/models/product';
import { useRouter } from 'next/navigation';
import { products } from '../../../data/datasources/products';
import { useTranslations } from 'next-intl';

interface ProductGridProps {
  categoryId: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const tGrid = useTranslations('productGrid');
  const tBadges = useTranslations('productBadges');
  const tProducts = useTranslations('products');

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  // возвращаем КЛЮЧ бейджа, а не текст
  const getBadgeKey = (product: Product): string | null => {
    if (product.id === 'hc-v3') return 'hc-v3';
    if (product.id === 'outdoor-premium') return 'outdoor-premium';
    if (product.id === 'rental-mobile') return 'rental-mobile';
    if (product.id === 'micro-led-pro') return 'micro-led-pro';
    return null;
  };

  const badgeKey = getBadgeKey(product);
  const badge = badgeKey ? tBadges(badgeKey) : null;

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="product-image-container relative h-50 flex-shrink-0">
        <img
          src={product.heroImage}
          alt={tProducts(product.name)}
          className="w-full h-full object-cover"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <span>🔥</span>
            {badge}
          </div>
        )}
      </div>

      <div className="product-content p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {tProducts(product.name)}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
          {tProducts(product.description)}
        </p>

        <button
          onClick={handleClick}
          className="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
        >
          {tGrid('detailsButton')}
        </button>
      </div>
    </div>
  );
}

export function ProductGrid({ categoryId }: ProductGridProps) {
  const tGrid = useTranslations('productGrid');

  const filteredProducts =
    categoryId === 'all'
      ? products
      : products.filter((product) => product.categoryId === categoryId);

  if (filteredProducts.length === 0) {
    return (
      <div className="product-grid">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {tGrid('emptyTitle')}
            </h3>
            <p className="text-gray-500">{tGrid('emptyText')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
