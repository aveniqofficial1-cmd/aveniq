import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const serifFont = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

export const viewport: Viewport = {
  themeColor: '#F7F6F2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aveniqdev.com'),
  title: {
    default: 'AVENIQ — Software Development Studio',
    template: '%s | AVENIQ',
  },
  description:
    'AVENIQ builds premium websites, web applications, e-commerce platforms and digital experiences for ambitious businesses.',
  keywords: [
    'AVENIQ',
    'Software Development Studio',
    'Web Development Studio',
    'Custom Web Applications',
    'E-commerce Storefronts',
    'UI/UX Design Agency',
    'Bespoke Software Studio',
    'Next.js Studio',
    'Digital Agency',
  ],
  authors: [{ name: 'AVENIQ' }],
  creator: 'AVENIQ',
  publisher: 'AVENIQ',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aveniqdev.com',
    siteName: 'AVENIQ',
    title: 'AVENIQ — Software Development Studio',
    description:
      'AVENIQ builds premium websites, web applications, e-commerce platforms and digital experiences for ambitious businesses.',
    images: [
      {
        url: '/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'AVENIQ — Software Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVENIQ — Software Development Studio',
    description:
      'AVENIQ builds premium websites, web applications, e-commerce platforms and digital experiences for ambitious businesses.',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AVENIQ',
    image: 'https://www.aveniqdev.com/logo.jpg',
    url: 'https://www.aveniqdev.com',
    telephone: '+917670863913',
    priceRange: '$$',
    description:
      'AVENIQ is a premium software development studio building digital products, websites, e-commerce platforms and applications for ambitious businesses.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://instagram.com/aveniq.tech',
      'https://github.com/aveniq',
      'https://linkedin.com/company/aveniq'
    ],
    knowsAbout: [
      'Website Development',
      'Web Applications',
      'E-commerce Storefronts',
      'Mobile Applications',
      'UI/UX Design',
      'AI & Automation',
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F6F2] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F7F6F2] flex flex-col relative overflow-x-hidden">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
