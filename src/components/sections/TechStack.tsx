import React from 'react';

export default function TechStack() {
  const technologies = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Cloudinary', category: 'Media' },
    { name: 'AI Integrations', category: 'LLM & API' },
    { name: 'Cloud Infrastructure', category: 'Edge & DevOps' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF9F6] border-y border-[#D9D8D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Technical Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Built with modern technology.
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            We select reliable, battle-tested tools to guarantee longevity, security, and sub-second load times.
          </p>
        </div>

        {/* Clean Typographic Tech Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-colors duration-200 flex items-center gap-2 group cursor-default shadow-sm"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#18283B] transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-[#888888] bg-[#F7F6F2] px-1.5 py-0.5 rounded">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
