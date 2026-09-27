'use client';

import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Contact Channels
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out through your preferred channel. We are responsive and ready to help discuss your next digital project.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Fastest Response
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-950">WhatsApp</h3>
              <p className="text-xs text-slate-600 mt-1">
                Direct messaging for quick discussions and project scopes.
              </p>

              <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Direct Number</span>
                <span className="text-base font-bold font-mono text-slate-900">
                  7670863913
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://wa.me/917670863913?text=Hi%20AVENIQ,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-700">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-pink-700 bg-pink-50 px-2 py-0.5 rounded border border-pink-100">
                  Social & Showcase
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-950">Instagram</h3>
              <p className="text-xs text-slate-600 mt-1">
                Follow recent project highlights, design previews, and studio updates.
              </p>

              <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Official Handle</span>
                <span className="text-base font-bold font-mono text-slate-900">
                  @aveniq.tech
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://instagram.com/aveniq.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Consultation Card */}
          <div className="rounded-xl p-6 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Custom Quote
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-950">Project Scope</h3>
              <p className="text-xs text-slate-600 mt-1">
                Submit an inquiry form with detailed project deliverables.
              </p>

              <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Online Inquiry</span>
                <span className="text-sm font-semibold text-slate-900">
                  Structured Review
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="#project-form"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Go to Enquiry Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
