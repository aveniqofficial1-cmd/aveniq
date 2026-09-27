import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Layout, Sliders, HeartHandshake, Check } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Engineered Quality',
    description: 'Disciplined software craftsmanship with clean semantic structure and maintainable code.',
    icon: ShieldCheck,
  },
  {
    title: 'High Performance',
    description: 'Blazing-fast page loads, sub-second responses, and optimal Core Web Vitals scores.',
    icon: Zap,
  },
  {
    title: 'Purposeful Design',
    description: 'Clean aesthetics and intuitive interfaces designed around usability and business goals.',
    icon: Layout,
  },
  {
    title: 'Direct Collaboration',
    description: 'Transparent communication, reliable turnaround timelines, and dedicated post-launch support.',
    icon: HeartHandshake,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              About AVENIQ
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              Technology with purpose.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              AVENIQ is a modern web development studio focused on building professional websites, web applications and digital experiences for businesses and ideas that deserve a strong online presence.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We operate with high technical standards: no bloated page builders, no cookie-cutter shortcuts, and no unverified claims. Every digital product we ship is designed from the foundation up to provide exceptional user engagement, reliable security, and long-term business value.
            </p>

            {/* 4 Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-md bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Official Logo Showcase Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-4">
              
              {/* Exact Logo Visual in crisp container */}
              <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-2">
                <Image
                  src="/logo.jpg"
                  alt="Official AVENIQ Brand Logo"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950">AVENIQ</h3>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Building smarter digital experiences.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 w-full flex items-center justify-center gap-4 text-xs text-slate-600">
                <span>Web Development</span>
                <span>•</span>
                <span>Web Apps</span>
                <span>•</span>
                <span>UI/UX</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
