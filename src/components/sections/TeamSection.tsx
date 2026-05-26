"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import VettedTeamGallery from "@/components/VettedTeamGallery";
import { fadeUp } from "@/lib/motion";

export default function TeamSection() {
  return (
    <SectionWrapper id="team" background="white" label="Your Dedicated Engineering Unit">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-primary sm:text-4xl"
        >
          Meet Our <span className="text-gradient">Embedded Engineering Team</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-lg leading-relaxed text-secondary"
        >
          TheBridgely is powered by a real, working engineering team in Pakistan.
          Our developers, QA engineers, designers, and HR specialists already
          operate as a unified unit — ready to embed into your product.
        </motion.p>
      </div>

      <VettedTeamGallery />
    </SectionWrapper>
  );
}