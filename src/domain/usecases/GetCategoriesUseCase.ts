import { CategoryModel } from '../../data/models/category_model';
import { BannerModel } from '../../data/models/banner_model';
import { CompanyInfoModel } from '../../data/models/company_model';
import { CategoryRepository, BannerRepository, CompanyRepository } from '../repositories/CategoryRepository';

// Сценарий использования - Получение всех категорий
export class GetCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(): Promise<CategoryModel[]> {
    return await this.categoryRepository.getAll();
  }
}

// Сценарий использования - Получение категории по ID
export class GetCategoryByIdUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<CategoryModel | null> {
    return await this.categoryRepository.getById(id);
  }
}

// Сценарий использования - Получение всех баннеров
export class GetBannersUseCase {
  constructor(private bannerRepository: BannerRepository) {}

  async execute(): Promise<BannerModel[]> {
    return await this.bannerRepository.getAll();
  }
}

// Сценарий использования - Получение активных баннеров
export class GetActiveBannersUseCase {
  constructor(private bannerRepository: BannerRepository) {}

  async execute(): Promise<BannerModel[]> {
    return await this.bannerRepository.getActive();
  }
}

// Сценарий использования - Получение информации о компании
export class GetCompanyInfoUseCase {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(): Promise<CompanyInfoModel> {
    return await this.companyRepository.getCompanyInfo();
  }
}


