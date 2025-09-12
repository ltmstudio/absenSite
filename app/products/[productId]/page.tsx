import { notFound } from 'next/navigation';
import { ProductPageLayout } from '../../../src';
import { Navigation, Footer } from '../../../src/shared/ui';
import { products } from '../../../src/data/datasources/products';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  
  // Получаем продукт из статичных данных
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        <ProductPageLayout product={product} />
      </main>
      <Footer />
    </div>
  );
}

// Генерируем статические параметры для всех продуктов
export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}
