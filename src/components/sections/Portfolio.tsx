'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export default function Portfolio() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Live Projects & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore active web applications and digital storefronts built with modern production standards.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-4xl mx-auto gap-8 mt-14">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-2xs hover:shadow-xs grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Preview Left */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 min-h-[300px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Live Production
                  </span>
                </div>
              </div>

              {/* Project Details Right */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    {project.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Core Delivery Points */}
                  <div className="space-y-1.5 pt-2">
                    {[
                      'Interactive product catalog with faceted search',
                      'Integrated shopping cart & express delivery tracking',
                      '100% responsive, mobile-optimized checkout',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-medium text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study Details</span>
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
