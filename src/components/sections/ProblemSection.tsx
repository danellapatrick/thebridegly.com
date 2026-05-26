"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import { PROBLEM_CARDS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  onBookCall: () => void;
}

export default function ProblemSection({ onBookCall }: HeroSectionProps) {
  return (
    <SectionWrapper background="peach">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE - HEADING + IMAGE */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              Hiring Engineering Talent Is{" "}
              <span className="text-gradient">
                Slow, Expensive, and Risky
              </span>
            </h2>


            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="primary" size="lg" onClick={onBookCall}>
                Book a Call Now
              </Button>

              <Button variant="secondary" size="lg" href="#team">
                Meet Our Team
              </Button>
            </motion.div>

          
  {/* BIG IMAGE BLOCK (TAKES VISUAL SPACE) */}
  <div className="mt-6 relative w-full h-[400px] lg:h-[350px]">
    <Image
      src="/images/hiring_images.png"
      alt="Hiring challenges illustration"
      fill
      className="object-contain"
    />
  </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <motion.div
            className="grid grid-cols-1 gap-4"
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
          
        </div>
      </div>
    </SectionWrapper>
  );
}