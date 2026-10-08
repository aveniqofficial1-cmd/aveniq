import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
              About the Studio
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              We&apos;re AVENIQ.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#555555] leading-relaxed">
              <p>
                We&apos;re a small, ambitious software studio building digital experiences for businesses, founders and teams that want to do things properly.
              </p>
              <p>
                We care about the details — from the first idea to the final pixel and the code behind it.
              </p>
            </div>

            {/* Small-Team Advantage Callout */}
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#D9D8D3] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#18283B]">
                The Boutique Advantage
              </span>
              <p className="text-base sm:text-lg font-serif-display font-medium text-[#111111] italic">
                &ldquo;Small team. Direct communication. Serious attention to detail.&rdquo;
              </p>
              <p className="text-xs text-[#666666] leading-relaxed">
                When you partner with AVENIQ, you don&apos;t get passed between junior account managers or offshore sub-contractors. You work directly with experienced software builders focused entirely on your product.
              </p>
            </div>

            {/* Studio Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-[#E5E4DE] bg-[#FFFFFF]">
                <span className="text-xl font-bold text-[#111111] block">Direct</span>
                <span className="text-xs text-[#666666]">Partner communication</span>
              </div>
              <div className="p-4 rounded-lg border border-[#E5E4DE] bg-[#FFFFFF]">
                <span className="text-xl font-bold text-[#111111] block">Handcrafted</span>
                <span className="text-xs text-[#666666]">No bloated themes</span>
              </div>
              <div className="p-4 rounded-lg border border-[#E5E4DE] bg-[#FFFFFF]">
                <span className="text-xl font-bold text-[#111111] block">Global</span>
                <span className="text-xs text-[#666666]">Serving ambitious clients</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                <span>Work with our team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Tasteful Studio & Brand Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#D9D8D3] shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-[#EFEFEA]">
                <div>
                  <h3 className="text-lg font-bold text-[#111111]">AVENIQ Studio</h3>
                  <span className="text-xs font-mono text-[#777777]">Hyderabad & Remote Global</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold text-lg font-serif-display">
                  AQ
                </div>
              </div>

              {/* Manifest points */}
              <div className="space-y-4 text-xs text-[#555555]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#18283B] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#111111]">Honest commitments:</strong> We only take on 2–3 client projects at a time to maintain high craft standards.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#18283B] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#111111]">Modern stack:</strong> Built exclusively on modern React, Next.js, and TypeScript ecosystems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#18283B] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#111111]">Long-term ownership:</strong> Full code ownership transferred to you upon delivery with complete documentation.
                  </p>
                </div>
              </div>

              {/* Status pill */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E4DE] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-[#111111]">Studio Capacity</span>
                </div>
                <span className="text-xs font-mono text-[#666666]">Accepting Q2 Projects</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
