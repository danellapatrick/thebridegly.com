"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import { SOLUTION_FEATURES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function SolutionSection() {
  return (
    <SectionWrapper background="lavender">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
        >
          A Better Way to Build Your{" "}
          <span className="text-gradient">Engineering Team</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-lg text-secondary"
        >
          We already have a pre-built engineering team in Pakistan ready to
          integrate directly into your product.
        </motion.p>
      </div>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {SOLUTION_FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            variant={index === 0 ? "accent" : "default"}
            colorIndex={index + 1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
