"use client";

import { useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { GetProductsByCategoryUseCase } from '../../domain/usecases/GetProductsByCategoryUseCase';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';

export function useProducts(categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const productRepository = new ProductRepositoryImpl();
        const getProductsByCategoryUseCase = new GetProductsByCategoryUseCase(productRepository);
        const productsData = await getProductsByCategoryUseCase.execute(categoryId);
        
        setProducts(productsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки продуктов');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  return { products, loading, error };
}
