// Экспорт доменных сущностей
export * from './domain/entities/Category';
export * from './domain/entities/Product';

// Экспорт интерфейсов репозиториев
export * from './domain/repositories/CategoryRepository';
export * from './domain/repositories/ProductRepository';

// Экспорт сценариев использования
export * from './domain/usecases/GetCategoriesUseCase';
export * from './domain/usecases/GetProductUseCase';

// Экспорт реализаций репозиториев
export * from './data/repositories/CategoryRepositoryImpl';
export * from './data/repositories/ProductRepositoryImpl';

// Экспорт хуков
export * from './presentation/hooks/useCategories';
export * from './presentation/hooks/useProduct';

// Экспорт компонентов
// export * from './presentation/components';

// Экспорт страниц
export { CategoryPageLayout } from './presentation/pages/CategoryPageLayout';
export { ProductPageLayout } from './presentation/pages/ProductPageLayout';
export { HomePageLayout } from './presentation/pages/HomePageLayout';
export { AboutPageLayout } from './presentation/pages/AboutPageLayout';
export { ContactsPageLayout } from './presentation/pages/ContactsPageLayout';
export { LocalizedAboutPageLayout } from './presentation/pages/LocalizedAboutPageLayout';

// Экспорт UI компонентов
export * from './shared/ui';