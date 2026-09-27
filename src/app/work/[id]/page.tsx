import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
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
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Title & Meta */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>{project.categoryLabel}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Visual Preview */}
        <div className="mt-8 relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Two-Column Specification Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          
          {/* Left: Deep Dive Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-8 rounded-xl bg-white border border-slate-200 space-y-4 shadow-2xs">
              <h2 className="text-lg font-bold text-slate-950 tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-slate-700" />
                <span>Project Overview & Architecture</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered according to modern production standards, this solution leverages reusable component systems, lightning-fast edge delivery, and secure backend workflows to maximize commercial performance.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 space-y-4 shadow-2xs">
              <h3 className="text-base font-bold text-slate-950 tracking-tight">Key Delivery Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Mobile-first responsive viewport optimization',
                  'Clean semantic markup & strict type safety',
                  'Search engine optimization (SEO) metadata ready',
                  'Sub-second first contentful paint (FCP)',
                  'Custom inquiry & automated lead handling flows',
                  'Automated deployment pipeline & DNS configuration',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Metadata & CTAs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-5 shadow-2xs">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Project Specifications
              </h3>

              <div>
                <span className="text-xs font-semibold text-slate-700 block mb-2">TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Codebase</span>
                  </a>
                )}
              </div>
            </div>

            {/* Inquire CTA Card */}
            <div className="p-6 rounded-xl bg-slate-900 text-white space-y-3">
              <h4 className="text-base font-bold text-white">Need a similar solution?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We design and build bespoke digital experiences customized around your business goals.
              </p>
              <Link
                href="/#project-form"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors mt-2"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
