// Доменная сущность - Категория продукции
export interface Category {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly backgroundImage: string;
  readonly href: string;
}

// Доменная сущность - Баннер
export interface Banner {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly buttonText: string;
  readonly buttonLink: string;
  readonly backgroundImage: string;
  readonly backgroundColor: string;
  readonly textColor: string;
}

// Доменная сущность - Статистика компании
export interface CompanyStat {
  readonly number: string;
  readonly label: string;
  readonly description: string;
}

// Доменная сущность - Услуга компании
export interface CompanyService {
  readonly title: string;
  readonly description: string;
}

// Доменная сущность - Информация о компании
export interface CompanyInfo {
  readonly stats: CompanyStat[];
  readonly services: CompanyService[];
}
