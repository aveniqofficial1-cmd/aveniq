'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Gradient & Editorial Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#EAE8E0] to-transparent rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Studio Availability Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="badge-editorial bg-[#FFFFFF] border-[#D9D8D3] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Software Development Studio
          </span>
          <span className="text-xs font-mono text-[#777777] hidden sm:inline-block">
            // Accepting Q2–Q3 Client Projects
          </span>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.12]">
            We build digital products that make businesses{' '}
            <span className="font-serif-display font-medium italic font-normal text-[#18283B]">
              look better, work smarter,
            </span>{' '}
            and grow.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#555555] leading-relaxed max-w-3xl font-normal">
            AVENIQ is a software development studio creating high-quality websites, web applications, e-commerce platforms and digital experiences for ambitious businesses.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] rounded-md transition-all shadow-md hover:translate-y-[-1px]"
            >
              <span>View Live Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] bg-[#FFFFFF] hover:bg-[#FAF9F6] border border-[#D9D8D3] hover:border-[#111111] rounded-md transition-all hover:translate-y-[-1px] shadow-sm"
            >
              <span>Start a Project</span>
            </Link>
          </div>
        </div>

        {/* Editorial Live Production Showcase Grid */}
        <div className="mt-14 lg:mt-20">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D9D8D3] shadow-[0_20px_50px_-15px_rgba(17,17,17,0.06)] space-y-6">
            
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EFEFEA] gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
                  Live Production Deployments
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#777777] font-mono">
                <span>Direct Studio Craft</span>
                <span>•</span>
                <span>Sub-Second Edge Speeds</span>
              </div>
            </div>

            {/* 3 Live Project Cards Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group/card rounded-xl border border-[#D9D8D3] bg-[#FAF9F6] hover:bg-[#FFFFFF] hover:border-[#111111] transition-all duration-300 p-4 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
                >
                  <div className="space-y-3">
                    {/* Thumbnail Image Container */}
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#D9D8D3] bg-[#FFFFFF]">
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EDECE7] text-[#111111]">
                        {proj.number}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#777777]">
                        {proj.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111111] group-hover/card:text-[#18283B] transition-colors">
                      {proj.name}
                    </h3>

                    <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#EAE8E0] flex items-center justify-between">
                    <Link
                      href={`/work/${proj.id}`}
                      className="text-xs font-semibold text-[#111111] hover:underline underline-offset-4"
                    >
                      Case Study →
                    </Link>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#555555] hover:text-[#111111]"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Studio Pillars Ribbon */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D9D8D3]">
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E4DE] space-y-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] block mb-1">
              01 • Design &amp; Craft
            </span>
            <p className="text-xs text-[#666666] leading-relaxed">
              Clean typography, generous whitespace, and interfaces customers actually enjoy using.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E4DE] space-y-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] block mb-1">
              02 • Modern Engineering
            </span>
            <p className="text-xs text-[#666666] leading-relaxed">
              Full-stack Next.js, React, and TypeScript systems built for sub-second speeds and zero bloat.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E4DE] space-y-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111] block mb-1">
              03 • Business Results
            </span>
            <p className="text-xs text-[#666666] leading-relaxed">
              Engineered to convert visitors, streamline transactions, and establish immediate trust.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
