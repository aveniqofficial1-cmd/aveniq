import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF9F6] border-y border-[#D9D8D3] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 pb-8 border-b border-[#D9D8D3]">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
            What we do
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            From the first idea to the final launch, we design and build digital products around your business.
          </p>
        </div>

        {/* Numbered Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D9D8D3] border border-[#D9D8D3] rounded-xl overflow-hidden shadow-sm">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#FAF9F6] transition-colors duration-200 group"
            >
              
              {/* Top Service Number & Title */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#777777] group-hover:text-[#111111] transition-colors">
                    {service.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D9D8D3] group-hover:bg-[#111111] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Specific Bullet Points */}
              <div className="pt-8 mt-8 border-t border-[#EFEFEA] space-y-2.5">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#888888] block mb-2">
                  Key Capabilities
                </span>
                {service.capabilities.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#444444]">
                    <Check className="w-3.5 h-3.5 text-[#18283B] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Section Footer Callout */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 bg-[#FFFFFF] border border-[#D9D8D3] rounded-xl gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#111111]">
              Need a bespoke scope or technical consultation?
            </h4>
            <p className="text-xs text-[#666666]">
              We offer direct architectural reviews and feasibility planning before any code is written.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] rounded-md transition-colors flex-shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
