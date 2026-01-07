
export type ServiceType = 'LOGO' | 'WEB' | 'PACKAGE';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceType;
  industry: string;
  keywords: string[];
  thumbnail: string;
  images: string[];
  description: string;
  problem: string;
  solution: string;
  clientComment?: string;
}

export interface PackageInfo {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommendation?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  industry: string;
  service: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
