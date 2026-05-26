"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ComparisonTable from "@/components/ComparisonTable";
import { fadeUp } from "@/lib/motion";

export default function WhyPakistanSection() {
  return (
    <SectionWrapper id="why-pakistan">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
        >
          Why Global Companies Choose{" "}
          <span className="text-gradient">Pakistan Talent</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-lg text-secondary"
        >
          Build high-performing engineering teams at significantly lower cost
          without compromising quality.
        </motion.p>
      </div>
      <ComparisonTable />
    </SectionWrapper>
  );
}
