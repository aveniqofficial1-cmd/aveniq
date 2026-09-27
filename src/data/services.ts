export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDescription: 'Professional, responsive websites designed to represent your business and convert visitors into customers.',
    icon: 'Globe',
    features: [
      'Custom design matching your business brand identity',
      'Mobile-first responsive layout for all viewports',
      'Sub-second page speeds & optimized Core Web Vitals',
      'Clean semantic code optimized for search engines (SEO)',
      'Secure lead capture and contact inquiry workflows',
    ],
    deliverables: ['Custom Web Platform', 'Responsive Breakpoints', 'Technical SEO Setup', 'Global CDN Deployment'],
    idealFor: 'Enterprises, service firms, consulting agencies, and professionals building trust and credibility.',
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'Web Applications',
    shortDescription: 'Custom web applications built around your business processes and requirements.',
    icon: 'LayoutGrid',
    features: [
      'Bespoke business logic modeled to your operations',
      'Role-based access control and user authentication',
      'Interactive dashboards, reporting, and data management',
      'Third-party API integrations (CRMs, payments, tools)',
      'Scalable cloud architecture designed for high availability',
    ],
    deliverables: ['Full-Stack Application', 'Role-Based Access Control', 'Database Schemas', 'API Endpoints'],
    idealFor: 'Startups, companies, and organizations automating workflows and managing operational data.',
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-commerce',
    shortDescription: 'Scalable online stores with product management, orders, payments and customer experiences.',
    icon: 'ShoppingCart',
    features: [
      'Dynamic product catalogs with search & filtering',
      'Secure cart, checkout, and coupon systems',
      'Encrypted payment gateway integration (Stripe, UPI, etc.)',
      'Customer order history and automated notifications',
      'Administrative inventory management and sales dashboard',
    ],
    deliverables: ['Storefront UI', 'Payment Gateway Setup', 'Catalog Architecture', 'Admin Dashboard'],
    idealFor: 'Direct-to-consumer brands, retail stores, and digital goods merchants looking to sell online.',
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design',
    shortDescription: 'Clean, intuitive interfaces designed around usability and business goals.',
    icon: 'Palette',
    features: [
      'User journey mapping, wireframing, and prototypes',
      'Modern, accessible visual design system & design tokens',
      'Clear typographic hierarchy and user navigation',
      'Responsive design specifications for all screen sizes',
      'Conversion-focused layout structuring',
    ],
    deliverables: ['Design System Tokens', 'Figma/Component Specs', 'Interactive Prototypes', 'Asset Package'],
    idealFor: 'Founders and businesses requiring a cohesive visual identity and frictionless user experience.',
  },
  {
    id: 'ai-solutions',
    number: '05',
    title: 'AI Solutions',
    shortDescription: 'Practical AI integrations that improve products, workflows and customer experiences.',
    icon: 'Sparkles',
    features: [
      'Custom LLM conversational copilots & assistance',
      'Document insight extraction and semantic search',
      'Automated customer support and lead qualification',
      'AI content tagging, analysis, and workflow automation',
      'Reliable streaming responses with API rate-limiting',
    ],
    deliverables: ['LLM & Prompt Integration', 'Retrieval Pipeline Setup', 'Chat & Assist Interface', 'API Guards'],
    idealFor: 'Modern businesses looking to automate tasks and provide intelligent digital experiences.',
  },
  {
    id: 'custom-digital-solutions',
    number: '06',
    title: 'Custom Digital Solutions',
    shortDescription: 'Tailored digital products built for specific business requirements.',
    icon: 'Database',
    features: [
      'Custom internal portals and client portals',
      'Bespoke calculation engines and workflow systems',
      'Data migration, ETL scripts, and database modeling',
      'Third-party software synchronization and webhooks',
      'Ongoing technical maintenance and architecture consulting',
    ],
    deliverables: ['Custom Codebase', 'API Documentation', 'Cloud Deployment', 'Maintenance Support'],
    idealFor: 'Companies with unique workflows requiring custom engineered software rather than off-the-shelf tools.',
  },
];
