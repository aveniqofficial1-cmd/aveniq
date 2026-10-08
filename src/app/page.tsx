import React from 'react';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import WhyAveniq from '@/components/sections/WhyAveniq';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import AboutSection from '@/components/sections/AboutSection';
import TechStack from '@/components/sections/TechStack';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTA from '@/components/sections/FinalCTA';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F7F6F2]">
      {/* 1. Hero Section with Editorial Composition & CTAs */}
      <Hero />

      {/* 2. Trust Statement & Philosophy */}
      <TrustStrip />

      {/* 3. Selected Work (Ricky Pickles, Graminum, Smart Expense, Bakery) */}
      <Portfolio />

      {/* 4. Services (What we do - 6 numbered editorial rows) */}
      <Services />

      {/* 5. Why AVENIQ (4 core principles) */}
      <WhyAveniq />

      {/* 6. 4-Step Process Timeline (Discover, Design, Build, Launch) */}
      <ProcessTimeline />

      {/* 7. About AVENIQ (Human & honest boutique studio positioning) */}
      <AboutSection />

      {/* 8. Modern Technology Stack (Compact typographic section) */}
      <TechStack />

      {/* 9. FAQ Accordion (8 questions) */}
      <FAQSection />

      {/* 10. Large Editorial Final CTA */}
      <FinalCTA />

      {/* 11. Professional Contact & Project Enquiry Form */}
      <ContactSection />
    </div>
  );
}
