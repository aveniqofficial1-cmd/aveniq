'use client';

import React, { useState } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Websites',
    budgetRange: '₹25,000 – ₹50,000',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Websites',
    'Web Applications',
    'E-Commerce',
    'Mobile Applications',
    'AI & Automation',
    'UI/UX Design',
    'Other / Custom',
  ];

  const budgetRanges = [
    '< ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000+',
    'Flexible / Open to Discussion',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          whatsappNumber: formData.phone,
          companyName: formData.company,
          websiteType: formData.projectType,
          budgetRange: formData.budgetRange,
          additionalRequirements: formData.description,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(resData.message || 'Something went wrong. Please reach out via WhatsApp or email.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or reach out on WhatsApp directly.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F6F2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 pb-8 border-b border-[#D9D8D3]">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#777777]">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111]">
            Let&apos;s build something great.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Fill out the project inquiry form below or connect directly through our studio channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Studio Channels & Ethos */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#111111]">
                Direct Studio Channels
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                We respect your time. When you reach out, a senior developer reviews your goals and responds with actionable feedback within 24 to 48 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:aveniqofficial1@gmail.com"
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-colors flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E5E4DE] text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#777777] block">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-[#111111]">
                    aveniqofficial1@gmail.com
                  </span>
                  <p className="text-xs text-[#888888] mt-0.5">For formal RFP &amp; detailed briefs</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917670863913?text=Hi%20AVENIQ,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-colors flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E5E4DE] text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#777777] block">
                    WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-[#111111]">
                    +91 7670863913
                  </span>
                  <p className="text-xs text-[#888888] mt-0.5">Instant messaging &amp; quick discovery</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/aveniq.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] hover:border-[#111111] transition-colors flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E5E4DE] text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#777777] block">
                    Instagram
                  </span>
                  <span className="text-sm font-semibold text-[#111111]">
                    @aveniq.tech
                  </span>
                  <p className="text-xs text-[#888888] mt-0.5">Behind-the-scenes &amp; design snippets</p>
                </div>
              </a>

              {/* Location */}
              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#D9D8D3] flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E5E4DE] text-[#111111]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#777777] block">
                    Studio Location
                  </span>
                  <span className="text-sm font-semibold text-[#111111]">
                    Hyderabad, India (Remote Global)
                  </span>
                  <p className="text-xs text-[#888888] mt-0.5">Collaborating across global time zones</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#D9D8D3] shadow-sm">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                    Thank you for sharing your project details. Our engineering lead will review your specifications and get in touch within 24 to 48 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          projectType: 'Websites',
                          budgetRange: '₹25,000 – ₹50,000',
                          description: '',
                        });
                      }}
                      className="text-xs font-semibold text-[#111111] underline underline-offset-4"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                        Company / Business
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or brand name"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all cursor-pointer"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#111111] block">
                      Project Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about what you want to build, current challenges, and any target deadlines..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D9D8D3] focus:border-[#111111] focus:bg-[#FFFFFF] text-sm text-[#111111] outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] disabled:opacity-50 rounded-md transition-all shadow-sm hover:translate-y-[-1px]"
                  >
                    <span>{status === 'loading' ? 'Submitting...' : 'Send Enquiry'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#777777] font-mono">
                    // We never share your contact details. Strict confidentiality assured.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
