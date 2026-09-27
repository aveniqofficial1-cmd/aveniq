import React from 'react';
import { 
  Smartphone, 
  Palette, 
  Zap, 
  Search, 
  ShieldCheck, 
  Database, 
  Lock, 
  LayoutDashboard, 
  Network, 
  Sparkles, 
  Server, 
  Headphones,
  Check
} from 'lucide-react';

const FEATURES_LIST = [
  { name: 'Mobile Responsive', description: 'Flawless viewports on every smartphone, tablet & monitor.', icon: Smartphone },
  { name: 'Modern UI/UX', description: 'Clean, intuitive visual hierarchy designed for user retention.', icon: Palette },
  { name: 'Fast Performance', description: 'Engineered for sub-second loading and top Lighthouse scores.', icon: Zap },
  { name: 'SEO Friendly', description: 'Semantic HTML, automated metadata & structured rich snippets.', icon: Search },
  { name: 'Secure Development', description: 'HTTPS encryption, sanitization, and vulnerability hardening.', icon: ShieldCheck },
  { name: 'Database Integration', description: 'Robust relational schemas powered by PostgreSQL & Supabase.', icon: Database },
  { name: 'Authentication', description: 'Encrypted sessions, OAuth logins, and user role separation.', icon: Lock },
  { name: 'Admin Dashboards', description: 'Intuitive control centers to manage orders, content and leads.', icon: LayoutDashboard },
  { name: 'API Integration', description: 'Seamless webhooks, payment gateways, CRMs, and analytics.', icon: Network },
  { name: 'AI Integration', description: 'Intelligent copilot features, data insight parsing & chatbots.', icon: Sparkles },
  { name: 'Domain & Hosting Assistance', description: 'Complete DNS setup, SSL deployment & CDN configuration.', icon: Server },
  { name: 'Post-Launch Support', description: 'Ongoing reliability, technical guidance & maintenance help.', icon: Headphones },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Standard Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Built For Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every digital product created by AVENIQ incorporates industry-standard engineering, uncompromising security, and modern design precision.
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
          {FEATURES_LIST.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.name}
                className="p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="text-sm font-bold text-slate-950 mt-4 tracking-tight">
                  {feat.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
