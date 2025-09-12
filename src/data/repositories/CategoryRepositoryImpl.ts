import { Category } from '../../domain/entities/Category';
import { Banner } from '../../domain/entities/Category';
import { CompanyInfo } from '../../domain/entities/Category';
import { CategoryRepository, BannerRepository, CompanyRepository } from '../../domain/repositories/CategoryRepository';
import { StaticDataSource } from '../datasources/StaticDataSource';

// Реализация репозитория категорий
export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<Category[]> {
    const categories = StaticDataSource.getCategories();
    return categories.map(this.mapToEntity);
  }

  async getById(id: string): Promise<Category | null> {
    const categories = StaticDataSource.getCategories();
    const category = categories.find(c => c.id === id);
    return category ? this.mapToEntity(category) : null;
  }

  async create(category: Omit<Category, 'id'>): Promise<Category> {
    // В реальном приложении здесь была бы логика создания
    throw new Error('Create operation not implemented for static data');
  }

  async update(id: string, category: Partial<Category>): Promise<Category> {
    // В реальном приложении здесь была бы логика обновления
    throw new Error('Update operation not implemented for static data');
  }

  async delete(id: string): Promise<void> {
    // В реальном приложении здесь была бы логика удаления
    throw new Error('Delete operation not implemented for static data');
  }

  private mapToEntity(model: any): Category {
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
  async getAll(): Promise<Banner[]> {
    const banners = StaticDataSource.getBanners();
    return banners.map(this.mapToEntity);
  }

  async getById(id: string): Promise<Banner | null> {
    const banners = StaticDataSource.getBanners();
    const banner = banners.find(b => b.id === id);
    return banner ? this.mapToEntity(banner) : null;
  }

  async getActive(): Promise<Banner[]> {
    // Все баннеры считаются активными
    return this.getAll();
  }

  async create(banner: Omit<Banner, 'id'>): Promise<Banner> {
    throw new Error('Create operation not implemented for static data');
  }

  async update(id: string, banner: Partial<Banner>): Promise<Banner> {
    throw new Error('Update operation not implemented for static data');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Delete operation not implemented for static data');
  }

  private mapToEntity(model: any): Banner {
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
  async getCompanyInfo(): Promise<CompanyInfo> {
    const info = StaticDataSource.getCompanyInfo();
    return {
      stats: info.stats.map(stat => ({
        number: stat.number,
        label: stat.label,
        description: stat.description
      })),
      services: info.services.map(service => ({
        title: service.title,
        description: service.description
      }))
    };
  }

  async updateCompanyInfo(info: Partial<CompanyInfo>): Promise<CompanyInfo> {
    throw new Error('Update operation not implemented for static data');
  }
}


