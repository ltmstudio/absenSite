// Доменная сущность - Пользователь
export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  CLIENT = 'client',
  GUEST = 'guest'
}

// Доменная сущность - Продукт
export interface Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly categoryId: string;
  readonly price?: number;
  readonly specifications: ProductSpecification[];
  readonly images: string[];
  readonly heroImage: string;
  readonly slogan: string;
  readonly advantages: ProductAdvantage[];
  readonly applications: ProductApplication[];
  readonly cases: ProductCase[];
  readonly faqs: ProductFAQ[];
  readonly catalogPdf?: string;
  readonly videoUrl?: string;
  readonly technicalSpecs: TechnicalSpecification[];
}

export interface ProductSpecification {
  readonly name: string;
  readonly value: string;
  readonly unit?: string;
}

export interface TechnicalSpecification {
  readonly name: string;
  readonly value: string;
  readonly unit?: string;
}

export interface ProductAdvantage {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly value: string;
}

export interface ProductApplication {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly examples: string[];
}

export interface ProductCase {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly location: string;
  readonly specifications: string[];
}

export interface ProductFAQ {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

// Доменная сущность - Заказ
export interface Order {
  readonly id: string;
  readonly userId: string;
  readonly products: OrderItem[];
  readonly status: OrderStatus;
  readonly createdAt: Date;
  readonly totalAmount: number;
}

export interface OrderItem {
  readonly productId: string;
  readonly quantity: number;
  readonly price: number;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

