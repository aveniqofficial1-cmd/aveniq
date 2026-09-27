import React from 'react';
import { Target, Palette, Cpu, Smartphone, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    number: '01',
    title: 'Business-focused approach',
    description: 'Every project begins with understanding your commercial objectives, target audience, and conversion requirements.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Clean and purposeful design',
    description: 'Thoughtful visual hierarchies, comfortable typography, and accessible interfaces that build immediate customer trust.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Modern, maintainable technology',
    description: 'Built with industry standards like Next.js, React, and TypeScript for long-term reliability and effortless scalability.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Responsive and performance-focused development',
    description: 'Sub-second page speeds, optimized media, and pixel-perfect responsiveness across all screen sizes.',
    icon: Smartphone,
  },
];

export default function WhyAveniq() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Why businesses choose AVENIQ
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on technical excellence, honest collaboration, and tangible business results for every project we undertake.
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AVENIQ Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
