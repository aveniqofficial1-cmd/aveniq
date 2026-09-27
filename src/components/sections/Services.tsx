'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  ShoppingCart, 
  Database, 
  LayoutGrid, 
  Sparkles, 
  Palette, 
  ArrowRight, 
  Check, 
  X
} from 'lucide-react';
import { servicesData, ServiceDetail } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Database,
  LayoutGrid,
  Sparkles,
  Palette,
};

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From business websites to custom web applications, AVENIQ creates reliable digital experiences designed to look professional, perform well and scale with your needs.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="group relative rounded-xl p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                      <IconComponent className="w-6 h-6 text-slate-800" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Micro features list */}
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModal(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href="#project-form"
                    className="text-xs font-medium text-slate-700 hover:text-slate-950 px-2.5 py-1.5 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-950">
              Have a unique specification or custom requirement?
            </h4>
            <p className="text-sm text-slate-600">
              We design and architect bespoke digital solutions tailored to your specific workflow.
            </p>
          </div>
          <Link
            href="#project-form"
            className="px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex-shrink-0"
          >
            Discuss Custom Requirements →
          </Link>
        </div>

      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-md bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  {React.createElement(iconMap[activeModal.icon] || Globe, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{activeModal.title}</h3>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Service Capability</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModal.shortDescription}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                  Key Capabilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-md bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-xs font-semibold text-slate-800 block mb-1">BEST SUITED FOR:</span>
                <p className="text-xs text-slate-600">{activeModal.idealFor}</p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
                <Link
                  href="#project-form"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
