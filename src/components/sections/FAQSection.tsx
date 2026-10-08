'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '@/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#555555] max-w-xl mx-auto">
            Everything you need to know about partnering with AVENIQ on your next digital product.
          </p>
        </div>

        {/* Elegant Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#D9D8D3] rounded-xl bg-[#FFFFFF] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF9F6] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111111] pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDECE7] flex items-center justify-center text-[#111111] transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#F0EFEB]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
