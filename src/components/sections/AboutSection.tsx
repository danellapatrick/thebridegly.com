"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/motion";

export default function AboutSection() {
  return (
    <SectionWrapper background="peach">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="section-label">
          About TheBridgely
        </p>
        <p className="mt-6 text-xl leading-relaxed text-secondary sm:text-2xl">
          Founded by builders and technology leaders passionate about connecting
          global companies with exceptional Pakistani engineering talent.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
