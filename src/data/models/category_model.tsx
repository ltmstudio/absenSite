import { CategoryDataSource } from '../datasources/category';
import { StaticDataSource } from '../datasources/company';
export interface CategoryModel {
    id: string;
    title: string;
    description: string;
    backgroundImage: string;
    href: string;
  }

// Используем данные из StaticDataSource для единообразия
export const categories: CategoryModel[] = CategoryDataSource.getCategories();

