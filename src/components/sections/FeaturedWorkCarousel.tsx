'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink,
  CheckCircle2,
  ShoppingCart,
  Zap,
  Globe
} from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export default function FeaturedWorkCarousel() {
  const currentProject = portfolioProjects[0];

  if (!currentProject) return null;

  return (
    <section id="featured-work" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Live Production Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              An active production platform designed and engineered by AVENIQ for rapid performance, e-commerce transactions, and high customer conversion.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Launch Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Featured Showcase Stage */}
        <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm p-6 sm:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image Preview with Click to Live Site */}
            <div className="lg:col-span-7 relative">
              <a 
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200 group/img shadow-2xs"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover/img:scale-102"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-md bg-white/95 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
                    {currentProject.categoryLabel}
                  </span>
                </div>

                {/* Live Status Pill */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Website
                  </span>
                </div>
              </a>
            </div>

            {/* Right Column: Information & CTAs */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  {currentProject.categoryLabel}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                  {currentProject.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentProject.shortDescription}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-1">
                  {[
                    'Instant interactive menu & category filtering',
                    'Dynamic real-time cart with coupon engine',
                    'Express 45-min delivery tracking & custom cake inquiry flow',
                    'Sub-second first contentful paint on mobile viewports',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Technologies Employed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href={`/work/${currentProject.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
