"use client";

import { useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { GetProductUseCase } from '../../domain/usecases/GetProductUseCase';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';

export function useProduct(productId: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const productRepository = new ProductRepositoryImpl();
        const getProductUseCase = new GetProductUseCase(productRepository);
        const productData = await getProductUseCase.execute(productId);
        
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка загрузки продукта');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return { product, loading, error };
}
