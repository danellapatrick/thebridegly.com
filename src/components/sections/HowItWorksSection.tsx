"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import StepTimeline from "@/components/StepTimeline";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

interface HowItWorksSectionProps {
  onBookCall: () => void;
}

export default function HowItWorksSection({ onBookCall }: HowItWorksSectionProps) {
  return (
    <SectionWrapper id="how-it-works" background="soft" label="Process">
      
      {/* TITLE */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
        >
          How <span className="text-gradient">TheBridgely</span> Works
        </motion.h2>
      </div>

      {/* TIMELINE */}
      <StepTimeline />

      {/* CTA SECTION (NEW) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="primary" size="lg" onClick={onBookCall}>
          Book a Demo
        </Button>

        <Button variant="secondary" size="lg" href="#team">
          Meet Our Team
        </Button>
      </motion.div>

    </SectionWrapper>
  );
}