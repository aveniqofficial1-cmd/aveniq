'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import DeviceMockup from '@/components/ui/DeviceMockup';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Subtle Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              AVENIQ • Modern Web Development Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.15]">
            Building Digital Experiences That Move Businesses Forward.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            AVENIQ builds professional websites, web applications and digital solutions designed around your business goals.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="https://aveniq-bakery.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shadow-2xs"
            >
              <span>View Our Work (Live Demo)</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>

            <Link
              href="#project-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          {/* Value Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-700" />
              <span>Tailored Business Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-700" />
              <span>Sub-Second Performance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-700" />
              <span>Direct WhatsApp Communication</span>
            </div>
          </div>

        </div>

        {/* Restrained Interface Preview */}
        <div className="mt-14 sm:mt-16">
          <DeviceMockup />
        </div>

      </div>
    </section>
  );
}
