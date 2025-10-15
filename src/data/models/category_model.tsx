import { CategoryDataSource } from '../datasources/category';

export interface CategoryModel {
    id: string;
    title: string;
    description: string;
    backgroundImage: string;
    href: string;
  }

// Используем данные из StaticDataSource для единообразия
export const categories: CategoryModel[] = CategoryDataSource.getCategories();

