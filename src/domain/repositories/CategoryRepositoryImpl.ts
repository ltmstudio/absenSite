import { CategoryModel } from '../../data/models/category_model';
import { BannerModel } from '../../data/models/banner_model';
import { CompanyInfoModel } from '../../data/models/company_model';
import { CategoryRepository, BannerRepository, CompanyRepository } from './CategoryRepository';
import { CategoryDataSource } from '../../data/datasources/category';
import { StaticDataSource as BannerDataSource } from '../../data/datasources/banner_data';
import { StaticDataSource as CompanyDataSource } from '../../data/datasources/company';

// Реализация репозитория категорий
export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<CategoryModel[]> {
    const categories = CategoryDataSource.getCategories();
    return categories.map(this.mapToEntity);
  }

  async getById(id: string): Promise<CategoryModel | null> {
    const categories = CategoryDataSource.getCategories();
    const category = categories.find(c => c.id === id);
    return category ? this.mapToEntity(category) : null;
  }

  async create(_category: Omit<CategoryModel, 'id'>): Promise<CategoryModel> {
    // В реальном приложении здесь была бы логика создания
    throw new Error('Create operation not implemented for static data');
  }

  async update(_id: string, _category: Partial<CategoryModel>): Promise<CategoryModel> {
    // В реальном приложении здесь была бы логика обновления
    throw new Error('Update operation not implemented for static data');
  }

  async delete(_id: string): Promise<void> {
    // В реальном приложении здесь была бы логика удаления
    throw new Error('Delete operation not implemented for static data');
  }

  private mapToEntity(model: CategoryModel): CategoryModel {
    return {
      id: model.id,
      title: model.title,
      description: model.description,
      backgroundImage: model.backgroundImage,
      href: model.href
    };
  }
}

// Реализация репозитория баннеров
export class BannerRepositoryImpl implements BannerRepository {
  async getAll(): Promise<BannerModel[]> {
    const banners = BannerDataSource.getBanners();
    return banners.map(this.mapToEntity);
  }

  async getById(id: string): Promise<BannerModel | null> {
    const banners = BannerDataSource.getBanners();
    const banner = banners.find(b => b.id === id);
    return banner ? this.mapToEntity(banner) : null;
  }

  async getActive(): Promise<BannerModel[]> {
    // Все баннеры считаются активными
    return this.getAll();
  }

  async create(_banner: Omit<BannerModel, 'id'>): Promise<BannerModel> {
    throw new Error('Create operation not implemented for static data');
  }

  async update(_id: string, _banner: Partial<BannerModel>): Promise<BannerModel> {
    throw new Error('Update operation not implemented for static data');
  }

  async delete(_id: string): Promise<void> {
    throw new Error('Delete operation not implemented for static data');
  }

  private mapToEntity(model: BannerModel): BannerModel {
    return {
      id: model.id,
      title: model.title,
      subtitle: model.subtitle,
      description: model.description,
      buttonText: model.buttonText,
      buttonLink: model.buttonLink,
      backgroundImage: model.backgroundImage,
      backgroundColor: model.backgroundColor,
      textColor: model.textColor
    };
  }
}

// Реализация репозитория компании
export class CompanyRepositoryImpl implements CompanyRepository {
  async getCompanyInfo(): Promise<CompanyInfoModel> {
    const info = CompanyDataSource.getCompanyInfo();
    return {
      stats: info.stats.map(stat => ({
        number: stat.number,
        label: stat.label,
        description: stat.description,
        icon: stat.icon,
      })),
      services: info.services.map(service => ({
        title: service.title,
        description: service.description
      }))
    };
  }

  async updateCompanyInfo(_info: Partial<CompanyInfoModel>): Promise<CompanyInfoModel> {
    throw new Error('Update operation not implemented for static data');
  }
}


