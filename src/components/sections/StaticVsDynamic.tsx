'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Database, 
  Check, 
  ArrowRight, 
  Layers, 
  Server, 
  FileText 
} from 'lucide-react';

export default function StaticVsDynamic() {
  return (
    <section id="solutions-comparison" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Architecture Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Static or Dynamic. We Build What Your Business Needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether your goal requires ultra-fast static efficiency or database-driven functionality, AVENIQ crafts the ideal technical architecture for your roadmap.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          
          {/* Static Website Card */}
          <div className="rounded-xl p-8 sm:p-10 bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Zap className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">Static Website</h3>
                    <p className="text-xs text-slate-500 font-medium">Fast, Secure & Cost-Effective</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium">
                  Instant Load
                </span>
              </div>

              {/* Quote & Pricing Statement */}
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase block">Investment Model</span>
                  <span className="text-base font-bold text-slate-950">Custom Project Quote</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">Transparent Deliverables</span>
              </div>

              {/* Best For Section */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Best For</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Small businesses',
                    'Corporate portfolios',
                    'Landing pages',
                    'Service firms',
                    'Consulting practices',
                    'Informational sites',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 text-xs text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                  Included Features
                </h4>
                <ul className="space-y-2.5">
                  {[
                    'Instant sub-second loading with global CDN caching',
                    'Fully responsive across mobile, tablet, and desktop',
                    'Professional typography and modern aesthetic',
                    'Multiple structured pages with semantic hierarchy',
                    'Integrated secure contact forms and lead capture',
                    'Technical SEO optimization for search engines',
                    'Reliable edge deployment with zero maintenance downtime',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <Check className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link
                href="#project-form"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors"
              >
                <span>Discuss a Static Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dynamic Website Card */}
          <div className="rounded-xl p-8 sm:p-10 bg-white border-2 border-slate-900 shadow-xs flex flex-col justify-between relative">
            
            {/* Badge */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[11px] font-semibold uppercase tracking-wider">
              Advanced Capability
            </div>

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">Dynamic Website</h3>
                    <p className="text-xs text-blue-700 font-medium">Database-Powered & Scalable</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                  Interactive
                </span>
              </div>

              {/* Quote & Pricing Statement */}
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase block">Investment Model</span>
                  <span className="text-base font-bold text-slate-950">Custom Project Quote</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">Scoped to Architecture</span>
              </div>

              {/* Best For Section */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-slate-500" />
                  <span>Best For</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Growing businesses',
                    'E-commerce stores',
                    'Web platforms & SaaS',
                    'Customer portals',
                    'Booking systems',
                    'Regular content updates',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 text-xs text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                  Included Features
                </h4>
                <ul className="space-y-2.5">
                  {[
                    'Database integration (PostgreSQL, Supabase, etc.)',
                    'Secure user authentication and session handling',
                    'Administrative control panel for content updates',
                    'Dynamic data filtering, search & structured catalogs',
                    'Custom business logic and automated workflows',
                    'Third-party API and webhook synchronization',
                    'Scalable cloud architecture ready for traffic growth',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link
                href="#project-form"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                <span>Discuss a Dynamic Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 shadow-2xs">
          “Every project is unique. Contact us with your requirements for a customized, transparent quote.”
        </div>

      </div>
    </section>
  );
}
