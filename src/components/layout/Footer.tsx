import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon, GithubIcon } from '@/components/ui/Icons';

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  { name: 'Website Development', href: '#services' },
  { name: 'Web Applications', href: '#services' },
  { name: 'E-commerce', href: '#services' },
  { name: 'UI/UX Design', href: '#services' },
  { name: 'AI Solutions', href: '#services' },
  { name: 'Custom Digital Solutions', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info & Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="AVENIQ Official Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-950 font-sans">
                  AVENIQ
                </span>
              </div>
            </Link>

            {/* Exact Tagline */}
            <p className="text-sm font-medium text-slate-800 pt-1">
              &ldquo;Building smarter digital experiences.&rdquo;
            </p>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              AVENIQ is a modern web development studio focused on building professional websites, web applications and digital experiences for businesses that deserve a strong online presence.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950">
              Navigation
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-950">
              Contact & Social
            </h4>
            
            <div className="space-y-2.5">
              <a
                href="https://wa.me/917670863913"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-950 transition-colors shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-slate-500 font-mono block">WhatsApp</span>
                  <span className="font-semibold text-slate-900 font-mono">7670863913</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>

              <a
                href="https://instagram.com/aveniq.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-950 transition-colors shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-md bg-pink-50 text-pink-700 flex items-center justify-center">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-slate-500 font-mono block">Instagram</span>
                  <span className="font-semibold text-slate-900">@aveniq.tech</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>

              <a
                href="https://github.com/aveniq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-950 transition-colors shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-800 flex items-center justify-center">
                  <GithubIcon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-slate-500 font-mono block">GitHub</span>
                  <span className="font-semibold text-slate-900">aveniq</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 AVENIQ. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs">
            <span>Professional Web Studio</span>
            <span>•</span>
            <span>High Performance Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
