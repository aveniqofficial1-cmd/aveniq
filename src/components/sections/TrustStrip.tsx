import React from 'react';

export default function TrustStrip() {
  return (
    <section className="py-20 md:py-28 border-y border-[#D9D8D3] bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Editorial Subtitle */}
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
          Our Philosophy
        </span>

        {/* Short Statement */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-display font-medium text-[#111111] leading-tight">
          &ldquo;Technology is only useful when it solves the right problem.&rdquo;
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-3xl mx-auto font-normal">
          We combine thoughtful design, modern engineering and a clear understanding of your business to create digital products that people actually enjoy using.
        </p>

        {/* 3 Simple Editorial Markers */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto border-t border-[#E5E4DE]">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#111111] block">No Gimmicks</span>
            <p className="text-xs text-[#666666]">Built for speed, clarity, and genuine client utility.</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#111111] block">Direct Communication</span>
            <p className="text-xs text-[#666666]">Talk directly with the senior engineers building your site.</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#111111] block">Transparent Process</span>
            <p className="text-xs text-[#666666]">Clear milestones, fixed quotes, and honest timelines.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
