'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Layers, Laptop, Smartphone } from 'lucide-react';

export default function DeviceMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Subtle border container mimicking a clean browser frame */}
      <div className="relative rounded-xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
        
        {/* Browser Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <div className="w-3 h-3 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-slate-200 text-slate-500 text-xs font-mono max-w-md w-full justify-center shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-700 font-medium">https://aveniq.tech</span>
            <span className="text-emerald-700 text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 border border-emerald-200 font-sans font-medium">
              Verified
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <Layers className="w-4 h-4" />
          </div>
        </div>

        {/* Clean Application Workspace Preview */}
        <div className="p-6 sm:p-10 bg-slate-50/50 min-h-[360px] flex flex-col justify-between">
          
          {/* Top Bar inside app */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden relative border border-slate-200 bg-white shadow-2xs">
                <Image src="/logo.jpg" alt="AVENIQ Logo" fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-950 font-sans leading-none">
                  AVENIQ Production Suite
                </h4>
                <span className="text-xs text-slate-500">Commercial Web Application & Platform Architecture</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Production
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-medium">
                v2.4 LTS
              </span>
            </div>
          </div>

          {/* Main Dashboard Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6">
            
            {/* Left Column: Business Overview */}
            <div className="md:col-span-8 space-y-4">
              <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Engineered For Business Growth
                  </span>
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    Next.js & TypeScript
                  </span>
                </div>
                <h5 className="text-xl font-bold text-slate-950">
                  High-Performance Web Architecture
                </h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clean semantic structure, sub-second page delivery, integrated enquiry workflows, and robust security designed to move modern businesses forward.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                  <div>
                    <div className="text-lg font-bold text-slate-900">0.2s</div>
                    <div className="text-[11px] text-slate-500">First Paint</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">100%</div>
                    <div className="text-[11px] text-slate-500">Responsive</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">Enterprise</div>
                    <div className="text-[11px] text-slate-500">Standard Code</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Metrics */}
            <div className="md:col-span-4 space-y-3">
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                  <span className="font-medium text-slate-700">Performance Index</span>
                  <span className="font-semibold text-emerald-700 font-mono">100 / 100</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-600 h-full w-full rounded-full" />
                </div>
                <span className="text-[11px] text-slate-500 mt-2 block">Optimal Core Web Vitals rating</span>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-xs font-semibold text-slate-700 block">Core Capabilities</span>
                <div className="space-y-1.5">
                  {[
                    'Custom Web Development',
                    'Dynamic API Integration',
                    'SSL & Security Hardening',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Specifications Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="font-medium text-slate-700">Supported Devices:</span>
              <span className="inline-flex items-center gap-1"><Laptop className="w-3.5 h-3.5" /> Desktop & Laptop</span>
              <span className="inline-flex items-center gap-1"><Smartphone className="w-3.5 h-3.5" /> Mobile & Tablet</span>
            </div>
            <div className="font-mono text-slate-400 text-[11px]">
              ENGINEERED BY AVENIQ
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
