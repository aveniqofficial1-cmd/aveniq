'use client';

import React, { useState } from 'react';
import Architecture3D from '@/components/3d/Architecture3D';
import { Check, ArrowRight, Zap, Database, Globe, Server, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function StaticVsDynamic() {
  const [activeMode, setActiveMode] = useState<'static' | 'dynamic'>('static');

  return (
    <section id="architecture" className="py-24 sm:py-32 relative z-10 overflow-hidden bg-[#04060d]/90 border-y border-white/5">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Static vs Dynamic. <br />
            <span className="text-gradient-cyan">We Build What Your Business Needs.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Choose the right architecture for your goals. We help you make the right engineering decision.
          </p>

          {/* Mode Switcher Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1 rounded-full bg-slate-900 border border-white/10 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveMode('static')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeMode === 'static'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Static Website
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('dynamic')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeMode === 'dynamic'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Dynamic Website
              </button>
            </div>
          </div>
        </div>

        {/* 3D Architecture Visualizer */}
        <div className="mb-14 rounded-2xl glass-panel p-4 sm:p-6 bg-[#080b14]/70 border-cyan-500/20 shadow-2xl flex flex-col items-center">
          <div className="w-full max-w-4xl flex items-center justify-between text-xs font-mono px-4 text-slate-400 mb-2">
            <span className={activeMode === 'static' ? 'text-cyan-300 font-bold' : ''}>
              ◀ EDGE CDN / STATIC ARCHITECTURE
            </span>
            <span className={activeMode === 'dynamic' ? 'text-purple-300 font-bold' : ''}>
              DYNAMIC FULL-STACK CLOUD ▶
            </span>
          </div>
          <Architecture3D activeMode={activeMode} />
        </div>

        {/* Two Comparison Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Static Website Card */}
          <div
            onClick={() => setActiveMode('static')}
            className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeMode === 'static'
                ? 'glass-panel-glow border-cyan-400/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-[1.01]'
                : 'glass-panel border-white/10 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-xs font-mono font-bold text-cyan-300">
                  CDN • EDGE • PRE-RENDERED
                </span>
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Static Website</h3>
                <p className="text-xs font-mono text-cyan-300 mb-3">Fast. Simple. Cost-Effective.</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Delivers pre-built HTML, CSS, and assets directly via global Edge CDN caches with no database queries required at runtime.
                </p>
              </div>

              {/* Specs Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Sub-second page loading speeds across all global regions</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Ultra-low maintenance and zero backend vulnerability surface</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Extremely cost-effective hosting and CDN bandwidth</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Perfect for portfolios, marketing sites, and corporate presence</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="#project-form"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
              >
                <span>Choose Static Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dynamic Website Card */}
          <div
            onClick={() => setActiveMode('dynamic')}
            className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              activeMode === 'dynamic'
                ? 'glass-panel-glow border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-[1.01]'
                : 'glass-panel border-white/10 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold text-purple-300">
                  API • DATABASE • AUTH • REALTIME
                </span>
                <Database className="w-5 h-5 text-purple-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Dynamic Website</h3>
                <p className="text-xs font-mono text-purple-300 mb-3">Powerful. Flexible. Scalable.</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Interacts with real-time databases, authentication providers, and third-party APIs to deliver personalized, live interactive data.
                </p>
              </div>

              {/* Specs Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Real-time user authentication and role-based permissions</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Custom admin dashboards, content management, and reporting</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Payment gateways, e-commerce cart, and order workflows</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Ideal for web applications, SaaS, stores, and custom portals</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="#project-form"
                className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200"
              >
                <span>Choose Dynamic Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
