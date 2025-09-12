# Финальная чистая архитектура проекта Absen

## 🏗️ Структура проекта

```
absen/
├── app/                          # Next.js App Router (только роутинг)
│   ├── page.tsx                  # Главная страница
│   ├── layout.tsx                # Корневой layout
│   ├── globals.css               # Глобальные стили
│   ├── categories/               # Страницы категорий
│   │   ├── page.tsx             # Все категории
│   │   └── [categoryId]/page.tsx # Конкретная категория
│   └── products/                 # Страницы продуктов
│       └── [productId]/page.tsx  # Конкретный продукт
│
├── src/                          # Исходный код (Clean Architecture)
│   ├── domain/                   # 🎯 Доменный слой
│   │   ├── entities/            # Сущности бизнес-логики
│   │   │   ├── Category.ts      # Категория
│   │   │   └── Product.ts       # Продукт
│   │   ├── repositories/        # Интерфейсы репозиториев
│   │   │   ├── CategoryRepository.ts
│   │   │   └── ProductRepository.ts
│   │   └── usecases/            # Бизнес-логика
│   │       ├── GetCategoriesUseCase.ts
│   │       └── GetProductUseCase.ts
│   │
│   ├── data/                     # 📊 Слой данных
│   │   ├── datasources/         # Источники данных
│   │   │   └── StaticDataSource.ts
│   │   └── repositories/        # Реализации репозиториев
│   │       ├── CategoryRepositoryImpl.ts
│   │       └── ProductRepositoryImpl.ts
│   │
│   ├── presentation/             # 🎨 Слой представления
│   │   ├── hooks/               # React хуки
│   │   │   ├── useCategories.ts
│   │   │   └── useProduct.ts
│   │   ├── components/          # React компоненты
│   │   │   ├── category/        # Компоненты категорий
│   │   │   │   ├── CategoriesSection.tsx
│   │   │   │   ├── CategoryFilter.tsx
│   │   │   │   └── ProductGrid.tsx
│   │   │   ├── product/         # Компоненты продуктов
│   │   │   │   ├── ProductHero.tsx
│   │   │   │   ├── ProductAdvantages.tsx
│   │   │   │   ├── ProductSpecifications.tsx
│   │   │   │   ├── ProductApplications.tsx
│   │   │   │   ├── ProductCases.tsx
│   │   │   │   ├── ProductFAQ.tsx
│   │   │   │   └── ProductCTA.tsx
│   │   │   ├── common/          # Общие компоненты
│   │   │   │   ├── BannerSlider.tsx
│   │   │   │   ├── WhyAbsenBlock.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── AboutCompanyBlock.tsx
│   │   │   └── index.ts         # Экспорт всех компонентов
│   │   ├── pages/               # Layouts страниц
│   │   │   ├── HomePageLayout.tsx
│   │   │   ├── CategoryPageLayout.tsx
│   │   │   └── ProductPageLayout.tsx
│   │   └── index.ts             # Экспорт presentation слоя
│   │
│   ├── shared/                   # 🔧 Общие ресурсы
│   │   ├── ui/                  # UI компоненты
│   │   │   ├── components/      # Переиспользуемые UI компоненты
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── index.ts         # Экспорт UI
│   │   ├── theme/               # Тема и стили
│   │   └── utils/               # Утилиты
│   │
│   └── index.ts                  # Главный экспорт
│
├── lib/                          # 📚 Библиотеки и UI компоненты
│   ├── components/              # Базовые UI компоненты
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Heading.tsx
│   │   ├── Section.tsx
│   │   └── Text.tsx
│   ├── data/                    # Статические данные
│   │   ├── banners.ts
│   │   └── categories.ts
│   ├── theme.ts                 # Тема приложения
│   └── index.ts                 # Экспорт библиотеки
│
└── public/                       # 🌐 Статические файлы
    └── images/                  # Изображения
```

## 🎯 Принципы чистой архитектуры

### 1. **Разделение ответственности**
- **Domain**: Бизнес-логика и правила
- **Data**: Источники данных и их реализация
- **Presentation**: UI компоненты и хуки
- **Shared**: Переиспользуемые ресурсы

### 2. **Инверсия зависимостей**
- Интерфейсы в domain слое
- Реализации в data слое
- Компоненты зависят только от интерфейсов

### 3. **Единая точка входа**
- Все экспорты через `src/index.ts`
- Четкая структура импортов
- Отсутствие циклических зависимостей

## 📦 Структура компонентов

### UI компоненты (`src/shared/ui/`)
**Переиспользуемые компоненты интерфейса:**
- `Navigation` - навигация сайта
- `Footer` - подвал сайта

### Бизнес-компоненты (`src/presentation/components/`)

#### Категории (`category/`)
- `CategoriesSection` - секция категорий на главной
- `CategoryFilter` - фильтр категорий
- `ProductGrid` - сетка продуктов

#### Продукты (`product/`)
- `ProductHero` - hero-блок продукта
- `ProductAdvantages` - ключевые преимущества
- `ProductSpecifications` - технические характеристики
- `ProductApplications` - сферы применения
- `ProductCases` - кейсы и проекты
- `ProductFAQ` - часто задаваемые вопросы
- `ProductCTA` - призыв к действию

#### Общие (`common/`)
- `BannerSlider` - слайдер баннеров
- `WhyAbsenBlock` - блок "Почему Absen"
- `ContactForm` - форма обратной связи
- `AboutCompanyBlock` - блок о компании

## 🔄 Поток данных

```
User Action → Page Component → Use Case → Repository → Data Source
     ↓              ↓              ↓           ↓           ↓
   Event      Presentation    Business    Data      Static/API
```

### Пример потока:
1. **Пользователь** нажимает на категорию
2. **Page Component** получает `categoryId` из URL
3. **Use Case** вызывает `GetCategoriesUseCase`
4. **Repository** обращается к `CategoryRepositoryImpl`
5. **Data Source** возвращает данные из `StaticDataSource`

## 📝 Правила импортов

### ✅ Правильно:
```typescript
// В page компонентах
import { Navigation, Footer } from '../src/shared/ui';
import { CategoryPageLayout } from '../src';

// В бизнес-компонентах
import { Product } from '../../domain/entities/Product';
import { useProduct } from '../../hooks/useProduct';

// В use cases
import { ProductRepository } from '../../domain/repositories/ProductRepository';
```

### ❌ Неправильно:
```typescript
// Прямые импорты из data слоя в presentation
import { StaticDataSource } from '../../data/datasources/StaticDataSource';

// Импорты из presentation в domain
import { ProductGrid } from '../../presentation/components/ProductGrid';
```

## 🎨 Преимущества новой архитектуры

### 1. **Читаемость**
- Четкое разделение слоев
- Понятная структура папок
- Логичная организация компонентов

### 2. **Масштабируемость**
- Легко добавлять новые компоненты
- Простое расширение функциональности
- Независимые модули

### 3. **Тестируемость**
- Изолированные компоненты
- Моки через интерфейсы
- Четкие границы зависимостей

### 4. **Поддерживаемость**
- Единая точка изменений
- Отсутствие дублирования
- Консистентная структура

## 🚀 Следующие шаги

1. **Добавление новых продуктов** - только в `ProductRepositoryImpl`
2. **Новые компоненты** - в соответствующие папки по функциональности
3. **API интеграция** - через новые репозитории в data слое
4. **Тестирование** - изолированное тестирование каждого слоя

## 📋 Checklist архитектуры

- ✅ Domain слой изолирован
- ✅ Data слой реализует интерфейсы
- ✅ Presentation слой зависит только от domain
- ✅ Нет циклических зависимостей
- ✅ Единая точка экспорта
- ✅ Четкое разделение UI и бизнес-компонентов
- ✅ Отсутствие дублирования
- ✅ Консистентная структура папок
