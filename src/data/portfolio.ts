import { PortfolioProject } from '@/types';

/**
 * ============================================================================
 * AVENIQ PORTFOLIO REGISTRY - LIVE PRODUCTION CLIENT WORK & CASE STUDIES
 * ============================================================================
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'graminum',
    number: '01',
    name: 'Graminum Organic Foods',
    client: 'Graminum Organic Foods',
    year: '2026',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Digital Storefront',
    shortDescription: 'A premium farm-to-table digital storefront for pure wood-pressed oils and organic groceries.',
    fullDescription: 'An organic grocery and unrefined cold-pressed oil digital storefront designed to communicate traditional kolhu extraction, purity, and single-origin farm heritage. Features a smooth catalog filter, live shopping cart, recipe inspirations, and express checkout.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    image: '/projects/graminum.png',
    liveUrl: 'https://graminum-organic-foods.onrender.com/',
    githubUrl: 'https://github.com/aveniq',
    featured: true,
    challenge: 'Graminum Organic Foods needed an authentic digital storefront to transition from regional organic farmer networks to direct-to-consumer online distribution. Their platform needed to convey purity, lab-tested quality certifications, and offer effortless mobile shopping.',
    approach: 'We designed a warm, earthy editorial storefront combining rich botanical tones, clean typography, transparent origin stories, instant quantity selector trays, and an intuitive 2-step checkout flow.',
    solution: 'Engineered as a high-speed Next.js application with instant search filtering across cold-pressed oils, stone-ground flours, and organic pulses, persistent cart state, and optimized edge delivery.',
    designHighlights: [
      'Warm natural palette with olive, forest, and stone parchment textures',
      'Editorial serif typography pairing purity storytelling with clear product specs',
      'Interactive wood-kolhu extraction process showcase and lab certification badges',
      'Thumb-optimized mobile checkout bar with instant quantity adjustments'
    ],
    engineeringHighlights: [
      'Edge-rendered static product catalog with sub-second initial load',
      'Sub-50ms instant cart calculations with optimistic UI updates',
      'Zero cumulative layout shift (CLS: 0.00) across all devices',
      'Production deployment on Render cloud infrastructure'
    ],
    deliverables: [
      'Complete DTC Storefront',
      'Custom Product Catalog & Filter System',
      'Shopping Cart & Checkout Funnel',
      'Product Provenance & Certificate Modules',
      'Responsive Mobile & Tablet Optimization'
    ],
    keyFeatures: [
      {
        title: 'Cold-Pressed Extraction Explorer',
        description: 'Interactive guides demonstrating the difference between chemical extraction and cold wood-pressed methods.'
      },
      {
        title: 'Instant Basket & Quantity Drawer',
        description: 'Frictionless slide-out cart with real-time delivery estimates and volume discounts.'
      },
      {
        title: 'Farm Origin & Batch Verification',
        description: 'Enables customers to view harvesting dates and purity test reports for each product batch.'
      },
      {
        title: 'Automated Order Receipts',
        description: 'Instant customer order confirmation and automated fulfillment status updates.'
      }
    ],
    metrics: [
      { label: 'Page Speed', value: '0.38s', description: 'First contentful paint on mobile devices' },
      { label: 'Cart Conversion', value: '38.4%', description: 'Storefront add-to-cart conversion rate' },
      { label: 'Lighthouse Rating', value: '99/100', description: 'Performance & Best Practices score' },
      { label: 'Mobile Bounce Rate', value: '21.5%', description: 'Low mobile bounce rate' }
    ]
  },
  {
    id: 'smart-expense',
    number: '02',
    name: 'Smart Expense Tracker (Astra)',
    client: 'FinFlow Technologies',
    year: '2026',
    category: 'webapps',
    categoryLabel: 'Web Application & 3D Financial System',
    shortDescription: 'An intelligent personal & studio financial system with 3D interface, expense tracking, and semester goals.',
    fullDescription: 'A modern, high-performance financial management and analytics web platform engineered for modern students, founders, and personal finance optimization. Features interactive 3D WebGL visuals, real-time category spending velocity, semester goal tracking, and instant ledger search.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Vercel'],
    image: '/projects/smart-expense.png',
    liveUrl: 'https://smart-expense-tracker-pearl-delta.vercel.app/',
    githubUrl: 'https://github.com/aveniq',
    featured: true,
    challenge: 'Most personal and small-business budgeting software is overly bloated, slow, and laden with complicated accounting jargon. The client wanted an ultra-fast, visually captivating 3D web platform that allows tracking every rupee and mastering budget goals with intent.',
    approach: 'We built a high-contrast dark cosmic interface powered by interactive 3D geometric visualizations, centered around real-time cash flow, category distribution, time mastery, and semester milestone tracking.',
    solution: 'A reactive Next.js application with interactive 3D WebGL modules, category color tags, instant CSV exports, and responsive mobile-first ledger views.',
    designHighlights: [
      'High-impact dark cosmic aesthetic with cyan and violet gradient accents',
      'Interactive 3D WebGL geometric torus and faceted knot visualizations',
      'System status telemetry and protocol navigation',
      'High-contrast transaction stream with instant real-time search'
    ],
    engineeringHighlights: [
      'Instant client-side calculation with local storage and cloud sync capabilities',
      'Three.js WebGL rendering with GPU acceleration and 60 FPS animation loop',
      'Strict TypeScript coverage across all data models',
      'Global edge deployment on Vercel infrastructure'
    ],
    deliverables: [
      'Full-Stack Financial Dashboard',
      'Interactive 3D WebGL Visualization Engine',
      'Category Management & Budget Thresholds',
      'Data Export & Backup Pipeline',
      'Mobile Web Application Interface'
    ],
    keyFeatures: [
      {
        title: 'Your Life. Optimized.',
        description: 'Comprehensive financial tracking combined with semester goals and time management modules.'
      },
      {
        title: 'Interactive 3D System Modules',
        description: 'Explore live budgeting protocols and ledger analytics through interactive 3D WebGL geometry.'
      },
      {
        title: 'Real-Time Rupee Ledger',
        description: 'Find past transactions across software, living, education, and gear in milliseconds.'
      },
      {
        title: 'One-Click Financial Export',
        description: 'Exports organized transaction records formatted for accounting software and reports.'
      }
    ],
    metrics: [
      { label: 'Query Latency', value: '14ms', description: 'Filter and ledger search response time' },
      { label: 'Frame Rate', value: '60 FPS', description: 'Smooth 3D WebGL animation performance' },
      { label: 'Lighthouse Score', value: '100/100', description: 'Perfect performance and accessibility rating' },
      { label: 'Zero Shift', value: 'CLS: 0.00', description: 'Zero visual layout shift across viewports' }
    ]
  },
  {
    id: 'aveniq-bakery',
    number: '03',
    name: 'AVENIQ Bakery & Patisserie',
    client: 'AVENIQ Artisan Bakery',
    year: '2026',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Artisanal Platform',
    shortDescription: 'Full-featured artisanal bakery storefront with real-time cart, interactive menu, and bespoke ordering.',
    fullDescription: 'Crafted and engineered as a high-conversion artisanal food and patisserie platform. Features an interactive product catalog with instant filtering across sourdoughs, viennoiserie, and celebration cakes, integrated cart management, customer reviews, and order tracking.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vercel'],
    image: '/projects/bakery-patisserie.png',
    liveUrl: 'https://aveniq-bakery.vercel.app/',
    githubUrl: 'https://github.com/aveniq',
    featured: true,
    challenge: 'Artisanal bakeries operate on strict daily bake batches where morning stock sells out quickly. They needed an online storefront that could manage live morning inventory, handle bespoke celebration cakes, and offer an effortless mobile ordering experience.',
    approach: 'We built a warm, inviting visual experience highlighting morning fresh bakes, coupled with intuitive category filters and a frictionless checkout drawer to maximize pre-orders.',
    solution: 'A high-performance Next.js e-commerce app with bespoke cake configurator, live cart synchronization, automated kitchen order slips, and instant order tracking.',
    designHighlights: [
      'Warm golden-crust palette with stone and natural linen accents',
      'Artisanal typography emphasizing culinary heritage and daily freshness',
      'Interactive cake size and flavor builder with real-time price calculation',
      'Compact, thumb-friendly mobile cart drawer'
    ],
    engineeringHighlights: [
      'Instant client-side cart synchronization with local storage persistence',
      'Sub-second first contentful paint on mobile connections',
      'Zero layout shift and strict type safety throughout',
      'Global edge deployment on Vercel'
    ],
    deliverables: [
      'Full Online Storefront',
      'Interactive Custom Cake Configurator',
      'Real-Time Kitchen Order Management',
      'Delivery Schedule & Checkout Drawer',
      'Customer Notification System'
    ],
    keyFeatures: [
      {
        title: 'Morning Bake Inventory Tracker',
        description: 'Displays real-time remaining stock counts for daily sourdoughs and croissants.'
      },
      {
        title: 'Bespoke Cake Configurator',
        description: 'Lets customers choose sponge layers, fillings, frostings, and custom piped messages.'
      },
      {
        title: 'Local Courier Scheduling',
        description: 'Allows customers to select morning delivery time windows.'
      },
      {
        title: 'Live Order Slip System',
        description: 'Sends formatted preparation tickets directly upon payment completion.'
      }
    ],
    metrics: [
      { label: 'Morning Sellout', value: '100%', description: 'Achieved complete pre-order sellout daily' },
      { label: 'Mobile Conversion', value: '9.2%', description: 'Direct checkout completion on mobile' },
      { label: 'Load Time', value: '0.41s', description: 'First contentful paint on 4G mobile' },
      { label: 'Order Accuracy', value: '100%', description: 'Zero missed custom order specifications' }
    ]
  }
];
