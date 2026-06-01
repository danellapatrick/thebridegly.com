"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import StepTimeline from "@/components/StepTimeline";
import { fadeUp } from "@/lib/motion";
import { ReactElement } from "react";

export default function HowItWorksSection(): ReactElement {
  return (
    <SectionWrapper id="how-it-works" background="soft" label="Process">
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

      <StepTimeline />
    </SectionWrapper>
  );
}
