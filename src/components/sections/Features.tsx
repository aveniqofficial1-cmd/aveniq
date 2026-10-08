'use client';

import React from 'react';
import Capabilities3D from '@/components/3d/Capabilities3D';
import {
  Smartphone,
  Palette,
  Zap,
  Search,
  ShieldCheck,
  Database,
  Lock,
  LayoutDashboard,
  Cpu,
  Sparkles,
  Cloud,
  Headphones,
} from 'lucide-react';

const CAPABILITIES_LIST = [
  { icon: Smartphone, title: 'Responsive Design', desc: 'Seamless across mobile, tablet, and ultra-wide desktops.' },
  { icon: Palette, title: 'Modern UI/UX', desc: 'Futuristic visual aesthetics designed for maximum engagement.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Sub-second speeds with optimized asset delivery pipelines.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Structured metadata and semantic markup for search visibility.' },
  { icon: ShieldCheck, title: 'Secure Architecture', desc: 'Enterprise data safety, SSL encryption, and strict headers.' },
  { icon: Database, title: 'Database Integration', desc: 'High-performance PostgreSQL, Supabase, and SQL/NoSQL stores.' },
  { icon: Lock, title: 'Authentication Systems', desc: 'Role-based access control, OAuth, and encrypted sessions.' },
  { icon: LayoutDashboard, title: 'Admin Dashboards', desc: 'Operational control centers for content and customer data.' },
  { icon: Cpu, title: 'API Integration', desc: 'Custom RESTful, GraphQL, and third-party webhook protocols.' },
  { icon: Sparkles, title: 'AI Integration', desc: 'Contextual copilots, semantic retrieval, and smart workflows.' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'Automated CI/CD with Vercel, AWS, and Cloudflare edge.' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Dedicated engineering maintenance and scaling assistance.' },
];

export default function Features() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Built For Your Business. <br />
            <span className="text-gradient-cyan">Everything you need to launch, grow and scale.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A complete suite of modern engineering and design capabilities delivered with uncompromising quality.
          </p>
        </div>

        {/* Two Columns: 12 Capabilities Grid on Left + 3D Holographic Pyramid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Capabilities 12-Node Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {CAPABILITIES_LIST.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  data-cursor="NODE"
                  className="p-4 rounded-xl glass-panel bg-[#080b14]/70 border-white/5 hover:border-cyan-400/40 hover:bg-[#0c1222]/90 transition-all duration-200 group hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Holographic Pyramid & Constellation on Right */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 rounded-2xl glass-panel-glow bg-[#080c18]/80 border-cyan-500/30 relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                SYSTEM ARCHITECTURE MATRIX
              </span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Capabilities3D />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
