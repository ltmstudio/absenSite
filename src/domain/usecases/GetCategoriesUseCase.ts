import { Category } from '../entities/Category';
import { Banner } from '../entities/Category';
import { CompanyInfo } from '../entities/Category';
import { CategoryRepository, BannerRepository, CompanyRepository } from '../repositories/CategoryRepository';

// Сценарий использования - Получение всех категорий
export class GetCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }
}

// Сценарий использования - Получение категории по ID
export class GetCategoryByIdUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<Category | null> {
    return await this.categoryRepository.getById(id);
  }
}

// Сценарий использования - Получение всех баннеров
export class GetBannersUseCase {
  constructor(private bannerRepository: BannerRepository) {}

  async execute(): Promise<Banner[]> {
    return await this.bannerRepository.getAll();
  }
}

// Сценарий использования - Получение активных баннеров
export class GetActiveBannersUseCase {
  constructor(private bannerRepository: BannerRepository) {}

  async execute(): Promise<Banner[]> {
    return await this.bannerRepository.getActive();
  }
}

// Сценарий использования - Получение информации о компании
export class GetCompanyInfoUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(): Promise<CompanyInfo> {
    return await this.companyRepository.getCompanyInfo();
  }
}


