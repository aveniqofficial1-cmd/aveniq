import React from 'react';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Services from '@/components/sections/Services';
import StaticVsDynamic from '@/components/sections/StaticVsDynamic';
import Features from '@/components/sections/Features';
import FeaturedWorkCarousel from '@/components/sections/FeaturedWorkCarousel';
import Portfolio from '@/components/sections/Portfolio';
import WhyAveniq from '@/components/sections/WhyAveniq';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import AboutSection from '@/components/sections/AboutSection';
import TechStack from '@/components/sections/TechStack';
import ProjectInquiryForm from '@/components/sections/ProjectInquiryForm';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section with Mockup and CTAs */}
      <Hero />

      {/* 2. Trust & Introduction */}
      <TrustStrip />

      {/* 3. Services (What We Build) */}
      <Services />

      {/* 4. Static vs Dynamic Comparison Matrix */}
      <StaticVsDynamic />

      {/* 5. Standard Capabilities & Features */}
      <Features />

      {/* 6. Featured Work Spotlight */}
      <FeaturedWorkCarousel />

      {/* 7. Selected Work Portfolio (Filterable & Modular) */}
      <Portfolio />

      {/* 8. Why businesses choose AVENIQ (4 core pillars) */}
      <WhyAveniq />

      {/* 9. 4-Step Process Timeline (Discover, Plan, Build, Launch) */}
      <ProcessTimeline />

      {/* 10. About AVENIQ (Technology with purpose) */}
      <AboutSection />

      {/* 11. Modern Technology Stack */}
      <TechStack />

      {/* 12. Project Inquiry Form */}
      <ProjectInquiryForm />

      {/* 13. FAQ Accordion */}
      <FAQSection />

      {/* 14. Contact Channels (WhatsApp & Instagram) */}
      <ContactSection />

      {/* 15. Full-Width Final Conversion CTA */}
      <FinalCTA />
    </div>
  );
}
