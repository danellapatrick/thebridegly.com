"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import VettedTeamGallery from "@/components/VettedTeamGallery";
import { fadeUp } from "@/lib/motion";

export default function TeamSection() {
  return (
    <SectionWrapper
      id="team"
      background="white"
      label="Your Dedicated Engineering Unit"
    >
      {/* ── Heading ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
          style={{ paddingBottom: "20px" }}

        >
          Meet Our{" "}
          <span className="text-gradient">Embedded Engineering Team</span>
        </motion.h2>
      </div>

      {/* ── Gallery (filter + cards + view more + modal) ─────────────────── */}
      <VettedTeamGallery />
    </SectionWrapper>
  );
}