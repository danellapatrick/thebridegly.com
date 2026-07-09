"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyPakistanSection from "@/components/sections/WhyPakistanSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import InsightsSection from "@/components/sections/InsightsSection";
import { pushGtmEvent, type BookCallSource } from "@/lib/analytics/gtm";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Home() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const openCalendly = useCallback((source: BookCallSource) => {
    pushGtmEvent("book_call_click", { section: source });
    setCalendlyOpen(true);
    pushGtmEvent("calendly_modal_open", { section: source });
  }, []);

  const closeCalendly = useCallback(() => {
    setCalendlyOpen(false);
  }, []);

  return (
    <>
      <Navbar onBookCall={openCalendly} />
      <main>
        <HeroSection onBookCall={openCalendly} />
        <AboutSection />
        <TeamSection />
        <ServicesSection onBookCall={openCalendly} />
        <WhyPakistanSection />
        <ProblemSection onBookCall={openCalendly} />
        <HowItWorksSection />
        <PortfolioSection />
        <InsightsSection />
        <CTASection onBookCall={openCalendly} />
      </main>
      <Footer />
      <CalendlyModal isOpen={calendlyOpen} onClose={closeCalendly} />
    </>
  );
}
