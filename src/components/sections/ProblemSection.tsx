"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import { PROBLEM_CARDS } from "@/lib/constants";
import { staggerContainer } from "@/lib/motion";

export default function ProblemSection() {
  return (
    <SectionWrapper background="peach">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Hiring Engineering Talent Is{" "}
          <span className="text-gradient">Slow, Expensive, and Risky</span>
        </h2>
      </div>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {PROBLEM_CARDS.map((card, index) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            colorIndex={index}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
