// Доменные сущности закомментированы - используем модели из data/models

// Репозитории и use cases оставлены для совместимости, но не используются
// export * from './domain/repositories/CategoryRepository';
// export * from './domain/repositories/ProductRepository';
// export * from './domain/usecases/GetCategoriesUseCase';
// export * from './domain/usecases/GetProductUseCase';
// export * from './domain/repositories/CategoryRepositoryImpl';
// export * from './domain/repositories/ProductRepositoryImpl';

// Хуки удалены - используем прямые импорты статичных данных

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