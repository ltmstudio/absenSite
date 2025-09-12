import { notFound } from 'next/navigation';
import { ProductRepositoryImpl } from '../../../src/data/repositories/ProductRepositoryImpl';
import { GetProductUseCase } from '../../../src/domain/usecases/GetProductUseCase';
import { ProductPageLayout } from '../../../src';
import { Navigation, Footer } from '../../../src/shared/ui';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  
  // Получаем продукт
  const productRepository = new ProductRepositoryImpl();
  const getProductUseCase = new GetProductUseCase(productRepository);
  const product = await getProductUseCase.execute(productId);
  
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
  const productRepository = new ProductRepositoryImpl();
  const products = await productRepository.getAll();
  
  return products.map((product) => ({
    productId: product.id,
  }));
}
