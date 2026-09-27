export type ProjectCategory = 'all' | 'websites' | 'ecommerce' | 'webapps' | 'ai';

export interface PortfolioProject {
  id: string;
  name: string;
  category: 'websites' | 'ecommerce' | 'webapps' | 'ai';
  categoryLabel: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder: boolean;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedPoints: string[];
  iconName: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  whatsappNumber: string;
  businessType: string;
  websiteType: string;
  requiredFeatures: string[];
  budgetRange: string;
  expectedDeadline: string;
  referenceWebsite: string;
  additionalRequirements: string;
}
