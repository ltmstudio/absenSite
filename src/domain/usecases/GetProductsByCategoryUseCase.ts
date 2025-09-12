import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class GetProductsByCategoryUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(categoryId: string): Promise<Product[]> {
    if (!categoryId) {
      throw new Error('Category ID is required');
    }

    return await this.productRepository.getByCategory(categoryId);
  }
}
