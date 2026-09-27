import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Sparkles, 
  Layers, 
  Globe, 
  Server, 
  Terminal, 
  Workflow, 
  GitBranch,
  Cloud
} from 'lucide-react';

const TECHNOLOGIES = [
  { name: 'Next.js', category: 'Full-Stack Framework', desc: 'Server components, edge routing & SEO optimization', icon: Globe },
  { name: 'React', category: 'UI Library', desc: 'Composable, component-driven user interfaces', icon: Cpu },
  { name: 'TypeScript', category: 'Type Safety', desc: 'Strict typing for bug prevention and maintainability', icon: Code2 },
  { name: 'JavaScript', category: 'Core Web Language', desc: 'Modern ES6+ interactive logic and async workflows', icon: Terminal },
  { name: 'Tailwind CSS', category: 'Design System', desc: 'Responsive, bespoke design system utility architecture', icon: Layers },
  { name: 'Node.js', category: 'Runtime Environment', desc: 'High-performance backend services and APIs', icon: Server },
  { name: 'Supabase', category: 'Backend as a Service', desc: 'Relational data persistence, auth, and realtime events', icon: Database },
  { name: 'PostgreSQL', category: 'Relational Database', desc: 'ACID-compliant storage for robust business data', icon: Database },
  { name: 'REST APIs', category: 'Integration Layer', desc: 'Secure data ingestion, webhooks, and third-party tools', icon: Workflow },
  { name: 'AI APIs', category: 'Intelligent Features', desc: 'Context-aware LLM endpoints and search pipelines', icon: Sparkles },
  { name: 'Git', category: 'Version Control', desc: 'Collaborative codebase branching and history', icon: GitBranch },
  { name: 'Vercel', category: 'Edge Deployment', desc: 'Global CDN distribution, auto-scaling and SSL', icon: Cloud },
];

export default function TechStack() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Modern, Maintainable Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We use proven, battle-tested technologies chosen specifically for speed, reliability, search engine performance, and long-term security.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {TECHNOLOGIES.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-blue-700 font-medium mt-0.5">
                    {tech.category}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {tech.desc}
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
