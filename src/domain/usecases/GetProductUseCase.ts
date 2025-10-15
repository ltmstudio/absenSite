import { Product } from '../../data/models/product';
import { ProductRepository } from '../repositories/ProductRepository';

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string): Promise<Product | null> {
    return await this.productRepository.getById(productId);
  }
}
