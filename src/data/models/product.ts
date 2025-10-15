export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  heroImage: string;
  slogan: string;
  images?: string[];
  technicalSpecs: TechnicalSpecification[];
  advantages: ProductAdvantage[];
  applications: ProductApplication[];
  faqs: ProductFAQ[];
  cases?: ProductCase[];
  specifications?: TechnicalSpecification[];
  catalogPdf?: string;
}

export interface TechnicalSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductAdvantage {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface ProductApplication {
  id: string;
  icon: string;
  title: string;
  description: string;
  examples?: string[];
}

export interface ProductFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProductCase {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  specifications: string[];
}
