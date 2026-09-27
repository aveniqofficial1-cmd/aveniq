import React from 'react';
import { Compass, FileText, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your business, goals and requirements.',
    detail: 'We analyze your commercial objectives, target audience, and functional specifications to establish a clear roadmap.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define the structure, technology and user experience.',
    detail: 'Wireframing, information architecture, technology stack selection, and milestone scheduling.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design and develop the solution.',
    detail: 'Writing clean, type-safe code, crafting responsive layouts, implementing APIs, and conducting rigorous code reviews.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Test, deploy and support the final product.',
    detail: 'Comprehensive cross-browser testing, SEO optimization, DNS mapping, global edge deployment, and ongoing support.',
    icon: Rocket,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Our 4-Step Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent and structured development process ensuring timely delivery, high quality, and clear communication.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-400">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Main Description */}
                  <p className="text-sm font-semibold text-slate-800 mt-2 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detailed Explanation */}
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Phase {step.step} Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
