'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

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
    <section id="project-form" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Project Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Start a Conversation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Fill out your project requirements below. We will review your specifications and provide an exact project estimate and architecture recommendation.
          </p>
        </div>

        {/* Success Confirmation */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-950">
                Enquiry Received
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you for reaching out. We have received your project details and will get back to you shortly.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Follow up on WhatsApp (7670863913)</span>
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
                className="w-full sm:w-auto px-5 py-3 rounded-md text-sm font-medium text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-8 sm:p-10 rounded-xl bg-slate-50 border border-slate-200 space-y-6 shadow-2xs"
          >
            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Business / Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Name"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors ${
                    errors.company ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.company && <p className="text-xs text-rose-600 mt-1">{errors.company}</p>}
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 76708 63913"
                  className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 3: Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                {PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </div>

            {/* Row 4: Project Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Project Description *
              </label>
              <textarea
                rows={3}
                required
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder="Tell us about what you want to build, specific goals, target audience, or reference links..."
                className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-colors ${
                  errors.projectDescription ? 'border-rose-500' : 'border-slate-300'
                }`}
              />
              {errors.projectDescription && (
                <p className="text-xs text-rose-600 mt-1">{errors.projectDescription}</p>
              )}
            </div>

            {/* Row 5: Budget Range & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Expected Timeline
                </label>
                <select
                  value={formData.expectedTimeline}
                  onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Or message directly on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-slate-500">
              AVENIQ will treat your project information with strict confidentiality.
            </p>
          </form>
        )}

      </div>
    </section>
  );
}
