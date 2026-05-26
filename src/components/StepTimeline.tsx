"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stepColors = [
  "from-brand-dark to-brand",
  "from-[#3D9A78] to-brand",
  "from-brand to-brand-light",
  "from-brand-dark to-brand-light",
];

export default function StepTimeline() {
  return (
    <motion.div
      className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {HOW_IT_WORKS_STEPS.map((step, index) => (
        <motion.div key={step.step} variants={fadeUp} className="relative">
          {index < HOW_IT_WORKS_STEPS.length - 1 && (
            <div className="absolute left-8 top-16 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-brand/50 to-transparent lg:block" />
          )}
          <div className="flex flex-col">
            <span
              className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stepColors[index]} font-display text-lg font-bold text-white shadow-brand`}
            >
              {step.step}
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-primary">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-secondary">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
