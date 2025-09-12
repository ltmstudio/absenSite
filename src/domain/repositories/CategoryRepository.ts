import { Category } from '../entities/Category';
import { Banner } from '../entities/Category';
import { CompanyInfo } from '../entities/Category';

// Интерфейс репозитория для работы с категориями
export interface CategoryRepository {
  getAll(): Promise<Category[]>;
  getById(id: string): Promise<Category | null>;
  create(category: Omit<Category, 'id'>): Promise<Category>;
  update(id: string, category: Partial<Category>): Promise<Category>;
  delete(id: string): Promise<void>;
}

// Интерфейс репозитория для работы с баннерами
export interface BannerRepository {
  getAll(): Promise<Banner[]>;
  getById(id: string): Promise<Banner | null>;
  getActive(): Promise<Banner[]>;
  create(banner: Omit<Banner, 'id'>): Promise<Banner>;
  update(id: string, banner: Partial<Banner>): Promise<Banner>;
  delete(id: string): Promise<void>;
}

// Интерфейс репозитория для работы с информацией о компании
export interface CompanyRepository {
  getCompanyInfo(): Promise<CompanyInfo>;
  updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo>;
}


