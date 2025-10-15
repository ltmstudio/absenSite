import { Product } from '../../data/models/product';

// Интерфейс репозитория для работы с продуктами
export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  getByCategory(categoryId: string): Promise<Product[]>;
  create(product: Omit<Product, 'id'>): Promise<Product>;
  update(id: string, product: Partial<Product>): Promise<Product>;
  delete(id: string): Promise<void>;
  search(query: string): Promise<Product[]>;
}


