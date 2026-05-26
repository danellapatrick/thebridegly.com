"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/motion";

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
          <span className="text-gradient">
            Engineering Team
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 text-lg text-secondary leading-relaxed"
        >
          Instead of spending months hiring, overpaying, or relying on unreliable freelancers —
          we give you a fully embedded engineering team that plugs directly into your product from day one.
        </motion.p>

        {/* KEY VALUE POINTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-4 sm:grid-cols-2 text-left"
        >
          <div className="p-5 rounded-xl bg-white border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Pre-Built Teams</h3>
            <p className="text-sm text-secondary mt-2">
              Frontend, backend, QA, design, and HR already structured and ready to deploy.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Faster Delivery</h3>
            <p className="text-sm text-secondary mt-2">
              Start shipping in days, not months — without hiring bottlenecks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Fully Managed</h3>
            <p className="text-sm text-secondary mt-2">
              We handle screening, coordination, and team performance.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-border shadow-sm">
            <h3 className="font-semibold text-primary">Flexible Scaling</h3>
            <p className="text-sm text-secondary mt-2">
              Scale from 1 engineer to full product teams as your startup grows.
            </p>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}