import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = portfolioProjects.findIndex((p) => p.id === id);
  const project = portfolioProjects[projectIndex];

  if (!project) {
    notFound();
  }

  // Next project navigation helper
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#F7F6F2] text-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] text-xs font-semibold uppercase tracking-wider text-[#111111] transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Title & Meta */}
        <div className="space-y-6 max-w-4xl pb-10 border-b border-[#D9D8D3]">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-editorial">
              Case Study {project.number}
            </span>
            <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              {project.categoryLabel} • {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.12]">
            {project.name}
          </h1>

          <p className="text-base sm:text-xl text-[#555555] leading-relaxed font-normal">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Quick Meta Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E4DE] text-xs">
            <div>
              <span className="font-mono text-[#888888] block mb-0.5 uppercase tracking-wider">Client</span>
              <span className="font-bold text-[#111111]">{project.client}</span>
            </div>
            <div>
              <span className="font-mono text-[#888888] block mb-0.5 uppercase tracking-wider">Category</span>
              <span className="font-bold text-[#111111]">{project.categoryLabel}</span>
            </div>
            <div>
              <span className="font-mono text-[#888888] block mb-0.5 uppercase tracking-wider">Timeline</span>
              <span className="font-bold text-[#111111]">3–4 Weeks</span>
            </div>
            <div>
              <span className="font-mono text-[#888888] block mb-0.5 uppercase tracking-wider">Services</span>
              <span className="font-bold text-[#111111]">Design &amp; Engineering</span>
            </div>
          </div>

        </div>

        {/* Hero Visual Preview Frame */}
        <div className="mt-10 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#D9D8D3] bg-[#FFFFFF] shadow-[0_20px_50px_-15px_rgba(17,17,17,0.08)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Quantitative Outcome Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-12 p-8 rounded-xl bg-[#FAF9F6] border border-[#D9D8D3] grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111] block">
                  {metric.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#18283B] block">
                  {metric.label}
                </span>
                <p className="text-xs text-[#666666] leading-tight">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          
          {/* Left Column: Core Narrative (Challenge, Approach, Solution, Features) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview & The Challenge */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
                01 / The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Understanding the Problem
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                {project.challenge || 'The existing market required a tailored solution that combined flawless performance, rapid checkout flows, and distinct brand storytelling without unnecessary dependencies.'}
              </p>
            </div>

            {/* 2. The Approach */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
                02 / The Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Deliberate Design &amp; Architecture
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                {project.approach || 'We stripped away boilerplate assumptions, interviewed end-users, and drafted an interactive prototype that aligned commercial conversion goals with frictionless usability.'}
              </p>
            </div>

            {/* 3. The Solution & Engineering */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
                03 / The Engineering Solution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Engineered for Reliability
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                {project.solution || 'Built on Next.js with edge caching, strict type safety, zero cumulative layout shift, and automated deployment pipelines for continuous stability.'}
              </p>
            </div>

            {/* 4. Design & Engineering Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                  Design Highlights
                </h3>
                <ul className="space-y-2 text-xs text-[#555555]">
                  {(project.designHighlights || [
                    'Tailored typography and warm natural color system',
                    'Mobile-first layout optimized for single-handed usage',
                    'High-resolution optimized asset compression',
                  ]).map((dh, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold">•</span>
                      <span>{dh}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                  Engineering Highlights
                </h3>
                <ul className="space-y-2 text-xs text-[#555555]">
                  {(project.engineeringHighlights || [
                    'Sub-second first contentful paint (FCP)',
                    'Edge-rendered static generation',
                    'Strict TypeScript coverage across all workflows',
                  ]).map((eh, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold">•</span>
                      <span>{eh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. Key Features Grid */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-[#111111]">
                  Key System Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-lg bg-[#FAF9F6] border border-[#E5E4DE] space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18283B]" />
                        <span className="text-xs font-bold text-[#111111]">{feat.title}</span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Project Sidebar Specifications & CTA */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] space-y-6">
              <h3 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider pb-3 border-b border-[#EFEFEA]">
                Technology &amp; Deliverables
              </h3>

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#777777] block">Stack &amp; Frameworks</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#FAF9F6] border border-[#D9D8D3] text-xs font-mono text-[#111111]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              {project.deliverables && (
                <div className="space-y-2 pt-2 border-t border-[#EFEFEA]">
                  <span className="text-xs font-semibold text-[#777777] block">Studio Deliverables</span>
                  <ul className="space-y-1.5 text-xs text-[#555555]">
                    {project.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Live links if available */}
              {project.liveUrl && (
                <div className="pt-4 border-t border-[#EFEFEA]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] transition-colors"
                  >
                    <span>View Live Demonstration</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Inquire CTA Box */}
            <div className="p-6 rounded-xl bg-[#18283B] text-white space-y-4">
              <span className="badge-editorial bg-white/10 border-white/20 text-white text-[10px]">
                Start Your Build
              </span>
              <h4 className="text-lg font-bold text-white">Need a similar product?</h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                We design and engineer bespoke web platforms customized around your business goals.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md text-xs font-bold text-[#111111] bg-white hover:bg-slate-100 transition-colors"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

        {/* Next Case Study Navigator */}
        <div className="mt-20 pt-10 border-t border-[#D9D8D3] flex items-center justify-between">
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wider text-[#777777] hover:text-[#111111] transition-colors"
          >
            ← All Case Studies
          </Link>
          
          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#555555] transition-colors group"
          >
            <span>Next: {nextProject.name}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
