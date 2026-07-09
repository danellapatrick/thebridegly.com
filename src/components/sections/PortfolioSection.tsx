"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import PortfolioGallery from "@/components/PortfolioGallery";
import { fadeUp } from "@/lib/motion";

function PortfolioVectors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute -right-16 top-8 h-64 w-64 opacity-30"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" stroke="#54BD95" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="60" stroke="#48AD88" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="#54BD95" strokeWidth="0.5" />
        <path
          d="M100 20 L100 180 M20 100 L180 100"
          stroke="#54BD95"
          strokeWidth="0.5"
        />
      </svg>

      <svg
        className="absolute -left-12 bottom-12 h-48 w-48 opacity-20"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="20"
          y="20"
          width="120"
          height="120"
          rx="24"
          stroke="#2F7D62"
          strokeWidth="1.5"
          transform="rotate(15 80 80)"
        />
        <rect
          x="40"
          y="40"
          width="80"
          height="80"
          rx="16"
          stroke="#54BD95"
          strokeWidth="1"
          transform="rotate(-10 80 80)"
        />
      </svg>

      <svg
        className="absolute right-1/4 bottom-0 h-32 w-32 opacity-25"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <polygon
          points="60,10 110,90 10,90"
          stroke="#48AD88"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="60,30 90,85 30,85"
          stroke="#54BD95"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <SectionWrapper
      id="portfolio"
      background="lavender"
      label="Our Work"
      className="relative overflow-hidden"
    >
      <PortfolioVectors />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
          style={{ paddingBottom: "20px" }}
        >
          Portfolio{" "}
          <span className="text-gradient">Projects We&apos;ve Built</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-secondary text-lg"
        >
          Explore recent builds across AI, SaaS, and enterprise platforms — hover
          to preview, click to see the full case study.
        </motion.p>
      </div>

      <PortfolioGallery />
    </SectionWrapper>
  );
}
