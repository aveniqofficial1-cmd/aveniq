import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites',
    shortDescription: 'High-quality websites designed around your brand, audience and business goals.',
    detailedParagraph: 'We build bespoke digital flagship websites that elevate brand perception, establish trust instantly, and guide visitors toward clear business actions. Every site is engineered from scratch with clean semantic code, sub-second loading speeds, and responsive layouts tailored across all devices.',
    capabilities: [
      'Bespoke brand and editorial web design',
      'Mobile-first responsive architecture',
      'Technical SEO and metadata optimization',
      'Fast global CDN edge deployment',
      'Content management system (CMS) integration',
      'Lead capture and automated CRM workflows'
    ],
    deliverables: [
      'Production-Ready Website',
      'Custom Component System',
      'Technical SEO Setup',
      'Performance Optimization Report',
      'Admin Training & Documentation'
    ],
    idealFor: 'Growing businesses, boutique consultancies, service firms, and brand founders seeking a credible online presence.'
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'Web Applications',
    shortDescription: 'Custom platforms, dashboards and internal business systems.',
    detailedParagraph: 'When off-the-shelf software falls short, we engineer custom web applications that mirror your exact business processes. From multi-tenant SaaS products to internal operations dashboards and client portals, we build scalable platforms designed for longevity and ease of maintenance.',
    capabilities: [
      'Custom workflow automation and logic',
      'Role-based access control and secure authentication',
      'Interactive data visualization and real-time dashboards',
      'Third-party API and webhook integrations',
      'Relational and document database modeling',
      'High-availability cloud infrastructure'
    ],
    deliverables: [
      'Full-Stack Web Application',
      'Database Architecture & Migrations',
      'Secure User Management System',
      'REST & GraphQL API Endpoints',
      'Automated Testing Suite'
    ],
    idealFor: 'Startups, scaling companies, and operational teams replacing clunky spreadsheets with purpose-built software.'
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-Commerce',
    shortDescription: 'Modern online stores designed to create better shopping experiences and increase conversions.',
    detailedParagraph: 'We create high-converting online stores that make discovery delightful and buying effortless. By focusing on lightning-fast product pages, frictionless mobile checkouts, and seamless inventory management, we help brands sell more with less operational friction.',
    capabilities: [
      'Custom product catalog architecture & filtering',
      'Optimized 1-step and 2-step checkout funnels',
      'Encrypted payment gateway integration (Stripe, Apple Pay, PayPal)',
      'Automated customer order receipts and SMS notifications',
      'Subscription engines and recurring customer billing',
      'Backoffice inventory and fulfillment integration'
    ],
    deliverables: [
      'Custom E-Commerce Storefront',
      'Payment & Tax Gateway Integration',
      'Inventory Management Workflows',
      'Cart & Abandonment Recovery Setup',
      'Post-Launch Conversion Analytics'
    ],
    idealFor: 'Direct-to-consumer (DTC) brands, specialty food & beverage, luxury goods, and boutique retail businesses.'
  },
  {
    id: 'mobile-applications',
    number: '04',
    title: 'Mobile Applications',
    shortDescription: 'Thoughtful mobile experiences for Android and iOS.',
    detailedParagraph: 'We engineer intuitive mobile applications that fit seamlessly into your users’ daily routines. Whether building native experiences or high-performance cross-platform apps, we prioritize smooth gesture navigation, offline reliability, and platform-consistent aesthetics.',
    capabilities: [
      'Cross-platform iOS and Android engineering (React Native / Flutter)',
      'Offline caching and resilient background synchronization',
      'Push notification systems and localized user messaging',
      'Biometric authentication and secure local storage',
      'Native device hardware integration (camera, location, sensors)',
      'App Store and Google Play deployment management'
    ],
    deliverables: [
      'iOS & Android Application Binaries',
      'App Store Submission Preparation',
      'Push Notification Infrastructure',
      'API Backend Integration',
      'Ongoing Maintenance Strategy'
    ],
    idealFor: 'Businesses looking to provide loyal customers or internal field teams with dedicated on-the-go access.'
  },
  {
    id: 'ai-automation',
    number: '05',
    title: 'AI & Automation',
    shortDescription: 'Practical AI-powered tools and automation that help businesses work smarter.',
    detailedParagraph: 'We avoid frivolous AI gimmicks and focus strictly on practical tools that save your team hours of manual work or create genuinely useful customer experiences. From intelligent document processing to customer support copilots, we build dependable automation into your existing stack.',
    capabilities: [
      'Custom LLM integrations and conversational copilots',
      'Retrieval-Augmented Generation (RAG) on company knowledge',
      'Automated customer inquiry classification and routing',
      'Smart document extraction and automated data entry',
      'Workflow triggers connecting CRMs, email, and databases',
      'Rate-limiting, latency optimization, and API security guards'
    ],
    deliverables: [
      'Custom AI Integration Module',
      'Retrieval Pipeline & Vector Embeddings',
      'Prompt Optimization & Safety Guardrails',
      'Automated Workflow Triggers',
      'API Usage Monitoring Setup'
    ],
    idealFor: 'Modern teams looking to automate repetitive operations, reduce customer wait times, and unlock proprietary data.'
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    shortDescription: 'Interfaces that are simple, useful and memorable.',
    detailedParagraph: 'Great digital products are rooted in empathy for the user and clarity of purpose. We craft design systems, user journeys, and interactive prototypes that make complex workflows feel effortless, eliminating confusion and maximizing user retention.',
    capabilities: [
      'User journey mapping and information architecture',
      'Interactive wireframing and clickable Figma prototypes',
      'Comprehensive design systems and component libraries',
      'Typography, color theory, and accessibility (WCAG) standards',
      'Micro-interactions and subtle transitional choreography',
      'Developer handoff specifications and design QA'
    ],
    deliverables: [
      'Complete Figma Design File',
      'Design Token & Style Guide',
      'Interactive Prototype',
      'Production-Ready SVG & Icon Assets',
      'Design Handoff Documentation'
    ],
    idealFor: 'Founders building a product from scratch, or existing platforms undergoing an intentional redesign.'
  }
];
