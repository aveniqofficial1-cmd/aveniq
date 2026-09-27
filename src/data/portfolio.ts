import { PortfolioProject } from '@/types';

/**
 * ============================================================================
 * AVENIQ PORTFOLIO REGISTRY - LIVE PRODUCTION CLIENT WORK
 * ============================================================================
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'aveniq-bakery',
    name: 'AVENIQ Bakery & Patisserie',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Digital Storefront',
    shortDescription: 'Full-featured online bakery storefront with real-time cart, interactive menu categorization, custom order workflows, and order tracking.',
    fullDescription: 'Crafted and engineered as a high-conversion artisanal food and patisserie platform. Features an interactive product catalog with instant filtering across cakes, pastries, sourdoughs, and bespoke celebration cakes, integrated cart management, customer reviews, express delivery tracking, and administrative capabilities.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vercel'],
    image: '/projects/bakery-preview.svg',
    liveUrl: 'https://aveniq-bakery.vercel.app/',
    githubUrl: 'https://github.com/aveniq',
    isPlaceholder: false,
    featured: true,
  },
];
