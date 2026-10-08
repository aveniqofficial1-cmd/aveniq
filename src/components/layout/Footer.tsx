import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'Approach', href: '/#approach' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/aveniq.tech' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/aveniq' },
    { label: 'GitHub', href: 'https://github.com/aveniq' },
  ];

  return (
    <footer className="bg-[#F7F6F2] border-t border-[#D9D8D3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E4DE]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-[#111111]">
                AVENIQ
              </span>
            </Link>
            <p className="text-base text-[#555555] font-serif-display italic max-w-sm">
              &ldquo;Digital products, thoughtfully built.&rdquo;
            </p>
            <p className="text-xs text-[#777777] max-w-md leading-relaxed">
              A software development studio creating high-quality websites, web applications, and digital systems for ambitious businesses worldwide.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#111111]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#555555] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#111111]">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#555555] hover:text-[#111111] transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#111111] transition-colors" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:contact@aveniq.tech"
                  className="text-xs font-mono text-[#555555] hover:text-[#111111] underline underline-offset-4"
                >
                  contact@aveniq.tech
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 AVENIQ. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#111111] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#111111] cursor-pointer transition-colors">Terms of Service</span>
            <span className="font-mono text-[11px] text-[#888888]">Direct Studio Access</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
