import React from 'react';

export default function ProcessTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Strategy & Requirements',
      description: 'Understand the business, audience, goals and requirements.',
      details: [
        'Stakeholder alignment & target audience discovery',
        'Competitive landscape & positioning analysis',
        'Technical scope definition & project timeline',
      ],
    },
    {
      step: '02',
      title: 'Design',
      tagline: 'UI/UX & Art Direction',
      description: 'Define the structure, experience and visual direction.',
      details: [
        'Information architecture & wireframe flows',
        'Editorial typographic and visual design system',
        'Interactive prototype reviews with your team',
      ],
    },
    {
      step: '03',
      title: 'Build',
      tagline: 'Engineering & Integration',
      description: 'Develop the product using modern, reliable technology.',
      details: [
        'Clean Next.js, React & TypeScript codebase',
        'Sub-second performance & SEO metadata tuning',
        'Database schemas, APIs & webhook integrations',
      ],
    },
    {
      step: '04',
      title: 'Launch',
      tagline: 'Deployment & Support',
      description: 'Deploy, test, refine and help the product go live.',
      details: [
        'Cross-device responsive & accessibility QA',
        'DNS, SSL & edge CDN infrastructure configuration',
        'Post-launch monitoring & documentation handoff',
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#FAF9F6] border-y border-[#D9D8D3] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 pb-8 border-b border-[#D9D8D3]">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
            From idea to launch.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            A structured, transparent workflow engineered to ensure high quality and zero surprises.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="p-8 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-all flex flex-col justify-between space-y-6 relative group shadow-sm"
            >
              {/* Step indicator top line */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif-display font-medium text-[#111111] group-hover:text-[#18283B] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                    Phase {idx + 1}
                  </span>
                </div>

                <div className="border-t border-[#EFEFEA] pt-4">
                  <h3 className="text-lg font-bold text-[#111111] mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[#777777] block mb-3">
                    {item.tagline}
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Sub-bullets */}
              <div className="pt-4 border-t border-[#EFEFEA] space-y-2">
                {item.details.map((bullet, bIdx) => (
                  <div key={bIdx} className="text-[11px] text-[#666666] flex items-start gap-1.5 leading-tight">
                    <span className="text-[#111111] font-bold">•</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
