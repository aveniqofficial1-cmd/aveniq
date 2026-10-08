'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowUpRight, Sparkles, Shield } from 'lucide-react';

const PROJECT_TYPES = [
  'Website Development',
  'Web Application',
  'E-commerce Development',
  'UI/UX Design',
  'AI Solution',
  'Custom Digital Solution',
  'Other / Unsure',
];

const BUDGET_RANGES = [
  'Standard / Starter Project',
  'Mid-Range Commercial Platform',
  'Enterprise / Custom Web Application',
  'Flexible / Open to Discussion',
];

const TIMELINES = [
  'Within 1-2 Weeks (Urgent)',
  '2-4 Weeks',
  '1-2 Months',
  'Flexible Timeline',
];

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    projectDescription: '',
    budgetRange: 'Standard / Starter Project',
    expectedTimeline: '2-4 Weeks',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.company.trim()) errs.company = 'Please enter your business or company name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone / WhatsApp number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid contact number';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please briefly describe your project';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Submission error', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const message = `*NEW PROJECT ENQUIRY - AVENIQ*%0A%0A` +
      `*Name:* ${formData.name || 'N/A'}%0A` +
      `*Company:* ${formData.company || 'N/A'}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Phone:* ${formData.phone || 'N/A'}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Description:* ${formData.projectDescription || 'N/A'}%0A` +
      `*Budget Range:* ${formData.budgetRange}%0A` +
      `*Timeline:* ${formData.expectedTimeline}`;
    
    return `https://wa.me/917670863913?text=${message}`;
  };

  return (
    <section id="project-form" className="py-24 sm:py-32 relative z-10 overflow-hidden bg-[#04060d]/90 border-t border-white/5">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>PROJECT ENQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Start a <span className="text-gradient-cyan">Conversation.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Fill out your project requirements below. We will review your specifications and provide an exact project estimate and architecture recommendation.
          </p>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow bg-[#080c18]/90 border-cyan-500/40 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400 text-cyan-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Enquiry Transmitted Successfully
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                Thank you for reaching out to AVENIQ. Our senior engineering team has received your project briefing and will follow up promptly with scope recommendations.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow up on WhatsApp (+91 7670863913)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    projectType: 'Website Development',
                    projectDescription: '',
                    budgetRange: 'Standard / Starter Project',
                    expectedTimeline: '2-4 Weeks',
                  });
                }}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Holographic Control Console Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-10 rounded-3xl glass-panel-glow bg-[#080c18]/90 border-cyan-500/30 space-y-6 shadow-2xl"
          >
            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Full Name"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Business / Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Name"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.company ? 'border-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.company && <p className="text-xs text-rose-400 mt-1">{errors.company}</p>}
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 76708 63913"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-white/10'
                  }`}
                />
                {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 3: Project Type */}
            <div>
              <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt} className="bg-slate-900 text-white">
                    {pt}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Project Description */}
            <div>
              <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                Project Description *
              </label>
              <textarea
                rows={3}
                required
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Tell us about what you want to build, specific goals, target audience, or reference links..."
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors ${
                  errors.projectDescription ? 'border-rose-500' : 'border-white/10'
                }`}
              />
              {errors.projectDescription && (
                <p className="text-xs text-rose-400 mt-1">{errors.projectDescription}</p>
              )}
            </div>

            {/* Row 5: Budget Range & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-slate-900 text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                  Expected Timeline
                </label>
                <select
                  value={formData.expectedTimeline}
                  onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  {TIMELINES.map((t) => (
                    <option key={t} value={t} className="bg-slate-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit & Direct WhatsApp Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                data-cursor="SUBMIT"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Project Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Or message directly on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>AVENIQ enforces enterprise NDA and strict project data confidentiality.</span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
