export type ProjectCategory = 'all' | 'ecommerce' | 'websites' | 'webapps' | 'ai';

export interface CaseStudySection {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface PortfolioProject {
  id: string;
  number: string;
  name: string;
  client: string;
  year: string;
  category: 'websites' | 'ecommerce' | 'webapps' | 'ai';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  
  // Rich Case Study Details
  challenge?: string;
  approach?: string;
  solution?: string;
  designHighlights?: string[];
  engineeringHighlights?: string[];
  deliverables?: string[];
  keyFeatures?: { title: string; description: string }[];
  metrics?: { label: string; value: string; description: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedParagraph: string;
  capabilities: string[];
  deliverables: string[];
  idealFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProjectInquiryData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  description: string;
}
