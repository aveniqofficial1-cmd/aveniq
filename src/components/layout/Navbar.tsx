'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'Approach', href: '/#approach' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F6F2]/90 backdrop-blur-md py-3.5 border-b border-[#D9D8D3] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#F7F6F2] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logotype */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] transition-opacity group-hover:opacity-80">
              AVENIQ
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest text-[#777777] border-l border-[#D9D8D3] pl-2.5 py-0.5">
              Studio
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#444444] hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] rounded-md transition-all shadow-sm hover:translate-y-[-1px]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#111111] rounded-md"
            >
              <span>Start</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#444444] focus:outline-none focus:ring-2 focus:ring-[#111111] rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-b border-[#D9D8D3] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#111111] hover:text-[#666666] py-2 border-b border-[#EBEAE5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#FFFFFF] bg-[#111111] rounded-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
