"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import BentoGrid from "@/components/BentoGrid";
import { fadeUp } from "@/lib/motion";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" background="mint" label="What We Offer">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
        >
          Our <span className="text-gradient">Capabilities</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-lg text-secondary"
        >
          From individual specialists to fully embedded units — we scale with
          your product.
        </motion.p>
      </div>
      <BentoGrid />
    </SectionWrapper>
  );
}
