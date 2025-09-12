import { CategoryModel } from '../../data/models/category_model';
import { BannerModel } from '../../data/models/banner_model';
import { CompanyInfoModel } from '../../data/models/company_model';

// Интерфейс репозитория для работы с категориями
export interface CategoryRepository {
  getAll(): Promise<CategoryModel[]>;
  getById(id: string): Promise<CategoryModel | null>;
  create(category: Omit<CategoryModel, 'id'>): Promise<CategoryModel>;
  update(id: string, category: Partial<CategoryModel>): Promise<CategoryModel>;
  delete(id: string): Promise<void>;
}

// Интерфейс репозитория для работы с баннерами
export interface BannerRepository {
  getAll(): Promise<BannerModel[]>;
  getById(id: string): Promise<BannerModel | null>;
  getActive(): Promise<BannerModel[]>;
  create(banner: Omit<BannerModel, 'id'>): Promise<BannerModel>;
  update(id: string, banner: Partial<BannerModel>): Promise<BannerModel>;
  delete(id: string): Promise<void>;
}

// Интерфейс репозитория для работы с информацией о компании
export interface CompanyRepository {
  getCompanyInfo(): Promise<CompanyInfoModel>;
  updateCompanyInfo(info: Partial<CompanyInfoModel>): Promise<CompanyInfoModel>;
}


