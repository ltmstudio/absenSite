import { Product } from '../../data/models/product';
import { ProductRepository } from '../repositories/ProductRepository';

export class GetProductsByCategoryUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(categoryId: string): Promise<Product[]> {
    if (!categoryId) {
      throw new Error('Category ID is required');
    }

    // Для случая 'all' используем метод getAll, для остальных - getByCategory
    if (categoryId === 'all') {
      return await this.productRepository.getAll();
    }

    return await this.productRepository.getByCategory(categoryId);
  }
}
