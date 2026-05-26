"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "soft" | "mint" | "peach" | "lavender";
  label?: string;
}

const bgMap = {
  white: "bg-background",
  soft: "bg-soft-bg",
  mint: "bg-soft-mint",
  peach: "bg-soft-peach",
  lavender: "bg-soft-lavender",
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  background = "white",
  label,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", bgMap[background], className)}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        {label && <p className="section-label mb-3">{label}</p>}
        {children}
      </motion.div>
    </section>
  );
}
