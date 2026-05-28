"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyPakistanSection from "@/components/sections/WhyPakistanSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";

export default function Home() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const openCalendly = useCallback(() => setCalendlyOpen(true), []);
  const closeCalendly = useCallback(() => setCalendlyOpen(false), []);

  return (
    <>
      <Navbar onBookCall={openCalendly} />
      <main>
        <HeroSection onBookCall={openCalendly} />
        <TrustedBySection />
        <ProblemSection onBookCall={openCalendly} />
        <SolutionSection />
        <ServicesSection onBookCall={openCalendly} />
        <WhyPakistanSection />
        <HowItWorksSection onBookCall={openCalendly} />
        <TeamSection />
        <AboutSection />
        <CTASection onBookCall={openCalendly} />
      </main>
      <Footer />
      <CalendlyModal isOpen={calendlyOpen} onClose={closeCalendly} />
    </>
  );
}
