import React from 'react';

export default function WhyAveniq() {
  const principles = [
    {
      number: '01',
      title: 'Built around your business',
      tagline: 'Custom Architecture',
      description: "We don't believe in one-size-fits-all digital products.",
      elaboration: 'Every brand has distinct operational requirements and commercial goals. We tailor each interface, database, and workflow around how your business actually runs.',
    },
    {
      number: '02',
      title: 'Design before development',
      tagline: 'User-First Clarity',
      description: 'Every project begins with understanding the people who will use it.',
      elaboration: 'Before writing code, we structure clear information hierarchies, test interactive prototypes, and refine typography so the end result feels intuitive and effortless.',
    },
    {
      number: '03',
      title: 'Modern engineering',
      tagline: 'Speed & Longevity',
      description: 'We build fast, scalable and maintainable digital products.',
      elaboration: 'Using modern frameworks like Next.js and TypeScript, our solutions achieve sub-second page loads, strict type-safety, and zero unnecessary script bloat.',
    },
    {
      number: '04',
      title: 'From idea to launch',
      tagline: 'Single Accountable Partner',
      description: 'Design, development, deployment and support — handled by one focused team.',
      elaboration: 'No fragmented handoffs or lost context between agencies. You collaborate directly with the senior craftsmen responsible for your product from day one.',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 pb-8 border-b border-[#D9D8D3]">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
            Why AVENIQ
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Our guiding principles for delivering digital work that stands the test of time.
          </p>
        </div>

        {/* 4 Editorial Principle Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {principles.map((p) => (
            <div
              key={p.number}
              className="p-8 sm:p-10 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEFEA]">
                  <span className="text-sm font-mono font-bold text-[#111111] px-2.5 py-1 rounded bg-[#EDECE7]">
                    {p.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                    {p.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  {p.title}
                </h3>

                <p className="text-base font-serif-display italic text-[#18283B] font-medium leading-snug">
                  &ldquo;{p.description}&rdquo;
                </p>

                <p className="text-sm text-[#666666] leading-relaxed">
                  {p.elaboration}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EFEB] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18283B]" />
                <span className="text-[11px] font-mono uppercase text-[#777777]">
                  Verified Studio Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
