import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aveniq.tech'),
  title: {
    default: 'AVENIQ — Building Smarter Digital Experiences',
    template: '%s | AVENIQ',
  },
  description:
    'AVENIQ builds professional websites, web applications, e-commerce platforms and digital solutions for modern businesses.',
  keywords: [
    'AVENIQ',
    'Website Development',
    'Web Applications',
    'E-commerce Development',
    'UI/UX Design',
    'AI Solutions',
    'Custom Digital Solutions',
    'Professional Web Studio',
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
    url: 'https://aveniq.tech',
    siteName: 'AVENIQ',
    title: 'AVENIQ — Building Smarter Digital Experiences',
    description:
      'AVENIQ builds professional websites, web applications, e-commerce platforms and digital solutions for modern businesses.',
    images: [
      {
        url: '/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'AVENIQ - Building smarter digital experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVENIQ — Building Smarter Digital Experiences',
    description:
      'AVENIQ builds professional websites, web applications, e-commerce platforms and digital solutions for modern businesses.',
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
    image: 'https://aveniq.tech/logo.jpg',
    url: 'https://aveniq.tech',
    telephone: '+917670863913',
    priceRange: '$$',
    description:
      'AVENIQ is a modern web development studio focused on building professional websites, web applications and digital experiences for businesses and ideas that deserve a strong online presence.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: ['https://instagram.com/aveniq.tech'],
    knowsAbout: [
      'Website Development',
      'Web Applications',
      'E-commerce Development',
      'UI/UX Design',
      'AI Solutions',
      'Custom Digital Solutions',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
