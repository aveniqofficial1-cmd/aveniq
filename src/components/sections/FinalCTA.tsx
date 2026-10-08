import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#18283B] text-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Studio Status Marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-xs font-mono font-medium text-[#E2E8F0]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently Accepting Selected New Projects</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-tight">
          Have something{' '}
          <span className="font-serif-display font-medium italic font-normal text-[#D1D5DB]">
            worth building?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#CBD5E1] max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us about your idea. We&apos;ll help turn it into a digital product that feels as good as it works.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#111111] bg-[#FFFFFF] hover:bg-[#F3F4F6] rounded-md transition-all shadow-lg hover:translate-y-[-1px]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/917670863913?text=Hi%20AVENIQ,%20I'd%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#FFFFFF] bg-transparent hover:bg-[#FFFFFF]/10 border border-[#FFFFFF]/30 rounded-md transition-all hover:translate-y-[-1px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct response time reassurance */}
        <div className="pt-6 border-t border-[#FFFFFF]/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8] font-mono">
          <span>// Direct founder review</span>
          <span>// Fixed proposal within 48 hours</span>
          <span>// Zero obligation consultation</span>
        </div>

      </div>
    </section>
  );
}
