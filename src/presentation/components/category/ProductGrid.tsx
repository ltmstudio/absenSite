"use client";

import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../../domain/entities/Product';
import { useRouter } from 'next/navigation';

interface ProductGridProps {
  categoryId: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  // Определяем бейдж на основе категории или других факторов
  const getBadge = (product: Product): string | null => {
    if (product.id === 'hc-v3') return 'Хит продаж';
    if (product.id === 'outdoor-premium') return 'Популярное';
    if (product.id === 'rental-mobile') return 'Рекомендуем';
    if (product.id === 'micro-led-pro') return 'Новинка';
    return null;
  };

  const badge = getBadge(product);

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="product-image-container relative h-50 flex-shrink-0">
        <img
          src={product.heroImage}
          alt={product.name}
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
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
          {product.description}
        </p>
        
        <button
          onClick={handleClick}
          className="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}

export function ProductGrid({ categoryId }: ProductGridProps) {
  const { products, loading, error } = useProducts(categoryId);


  return (
    <div className="product-grid">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
