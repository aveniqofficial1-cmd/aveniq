'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';
import { ProjectCategory } from '@/types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeFilter);

  const filterTabs: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects (3)', value: 'all' },
    { label: 'E-Commerce & Storefronts', value: 'ecommerce' },
    { label: 'Web Applications', value: 'webapps' },
  ];

  return (
    <section id="work" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 pb-6 border-b border-[#D9D8D3]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="badge-editorial bg-[#FFFFFF]">
                Production Deployments
              </span>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Online
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
              Selected Work
            </h2>
            <p className="text-base text-[#555555] font-normal">
              A selection of digital experiences and web platforms we&apos;ve designed and engineered.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeFilter === tab.value
                    ? 'bg-[#111111] text-[#FFFFFF] shadow-sm'
                    : 'bg-[#EDECE7] text-[#555555] hover:text-[#111111] hover:bg-[#E5E4DE]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#E5E4DE] last:border-b-0 last:pb-0"
            >
              
              {/* Left Column: Visual Mockup with Live Interactive Layer */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D9D8D3] bg-[#FFFFFF] shadow-[0_10px_35px_rgba(0,0,0,0.05)] group-hover:border-[#111111] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Top Live Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#D9D8D3] text-[10px] font-mono font-bold text-[#111111] shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE DEPLOYMENT
                    </span>
                  </div>

                  {/* Floating Action Overlay on Hover */}
                  {project.liveUrl && (
                    <div className="absolute bottom-4 right-4 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#111111] text-white text-xs font-semibold shadow-md hover:bg-[#262626] transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Project Story, Tech & Navigation */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Index & Category */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#111111] px-2.5 py-0.5 rounded bg-[#EDECE7]">
                    {project.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  <Link href={`/work/${project.id}`} className="hover:underline underline-offset-4">
                    {project.name}
                  </Link>
                </h3>

                {/* Short Narrative */}
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Metrics Ribbon */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 py-2 border-y border-[#EFEFEA]">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <span className="text-base font-bold text-[#111111] block">{m.value}</span>
                        <span className="text-[11px] text-[#777777] block">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech & Solution Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#FAF9F6] border border-[#D9D8D3] text-[11px] font-mono font-medium text-[#444444]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] rounded-md transition-all shadow-sm"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#111111] bg-[#FFFFFF] hover:bg-[#FAF9F6] border border-[#D9D8D3] hover:border-[#111111] rounded-md transition-all shadow-sm"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
