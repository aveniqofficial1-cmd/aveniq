import React from 'react';
import { Palette, ShieldCheck, Smartphone, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BENEFITS = [
  {
    title: 'Modern & Purposeful Design',
    description: 'Clean visual hierarchies, bespoke typography, and intuitive user experiences.',
    icon: Palette,
  },
  {
    title: 'Fast & Secure',
    description: 'Engineered for sub-second speeds, top Core Web Vitals, and strict code security.',
    icon: ShieldCheck,
  },
  {
    title: '100% Responsive',
    description: 'Pixel-perfect rendering across mobile phones, tablets, laptops, and wide monitors.',
    icon: Smartphone,
  },
  {
    title: 'Business-Focused',
    description: 'Built specifically around your conversion goals, customer journey, and operations.',
    icon: Target,
  },
];

export default function TrustStrip() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            About Our Approach
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Technology built around your business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From business websites to custom web applications, AVENIQ creates reliable digital experiences that are designed to look professional, perform well and scale with your needs.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
