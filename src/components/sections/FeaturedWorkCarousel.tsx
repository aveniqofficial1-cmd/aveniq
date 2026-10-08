'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';
import BakeryWorkstation3D from '@/components/3d/BakeryWorkstation3D';
import { portfolioProjects } from '@/data/portfolio';

export default function FeaturedWorkCarousel() {
  const bakery = portfolioProjects[0];

  return (
    <section id="work" className="py-24 sm:py-32 relative z-10 overflow-hidden bg-[#04060d]/80 border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Real Projects. <br />
            <span className="text-gradient-cyan">Real Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Take a look at our live client work engineered for high conversions and fluid digital interactions.
          </p>
        </div>

        {/* Featured Case Study: 3D Workstation & Glass Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-10 glass-panel-glow bg-[#080c18]/90 border-cyan-500/30 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.2)]">
          
          {/* Left Column: 3D Cyber Workstation */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            <div className="w-full flex items-center justify-center">
              <BakeryWorkstation3D />
            </div>
            
            {/* Live Indicator Badge */}
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE PRODUCTION DEPLOYMENT</span>
            </div>
          </div>

          {/* Right Column: Case Study Glass Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-xs font-mono font-semibold text-cyan-300">
                E-Commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-xs font-mono font-semibold text-purple-300">
                Web Development
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                UI/UX
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                AVENIQ Bakery — E-Commerce
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A complete online bakery store with real-time cart, product catalog management, secure checkout, and order tracking.
              </p>
            </div>

            {/* Key Feature Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-cyan-300" />
                </div>
                <span>Modern and responsive artisanal storefront</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-cyan-300" />
                </div>
                <span>Encrypted payment gateway & instant checkout workflow</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-cyan-300" />
                </div>
                <span>Easy administrative product & inventory management</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-cyan-300" />
                </div>
                <span>Sub-second page load times with Next.js edge caching</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={bakery.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LIVE"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>See More Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
