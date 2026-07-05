"use client";

import { motion } from "framer-motion";
import { TRUSTED_BY_TEXT } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function TrustedBySection() {
  return (
    <section className="bg-soft-mint/40 py-14 md:py-16">
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
      >
        <p className="section-label">About TheBridgely</p>
        <p className="mt-6 text-xl leading-relaxed text-secondary sm:text-2xl">
          Founded by builders and technology leaders passionate about connecting
          global companies with exceptional Pakistani engineering talent.
        </p>
      </motion.div>
    </section>
  );
}
