export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  heroImage: string;
  slogan: string;
  technicalSpecs: TechnicalSpecification[];
  advantages: ProductAdvantage[];
  applications: ProductApplication[];
  faqs: ProductFAQ[];
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
}

export interface ProductFAQ {
  id: string;
  question: string;
  answer: string;
}
