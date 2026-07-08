"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, PanelBottom } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import Button from "@/components/ui/Button";
import { trackCtaClick, type OnBookCall } from "@/lib/analytics/gtm";

interface HeroSectionProps {
  onBookCall: OnBookCall;
}

export default function HeroSection({ onBookCall }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-32"
    style={{ paddingBottom: "15px" }}
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg bg-gradient-soft" />
      <div className="pointer-events-none absolute -right-32 top-16 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-dark/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-soft-mint/90 px-4 py-1.5 text-sm font-medium text-brand-dark shadow-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
              Premium Embedded Engineering Teams
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl"
            >
              Build Embedded Engineering Teams That{" "}
              <span className="text-gradient">Ship Faster</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-secondary"
            >
              TheBridgely connects global startups with a pre-built, vetted
              Pakistani engineering team including frontend, backend, QA, design,
              and HR support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="primary" size="lg" onClick={() => onBookCall("hero")}>
                Book a Call Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#team"
                onClick={() => trackCtaClick("hero", "view_team", "Meet Our Team")}
              >
                Meet Our Team
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6"
            >
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {badge}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative w-full min-w-0"
            initial={{ opacity: 0, x: 32, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <motion.div
              className="relative w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Image
                  src="/images/hero-banner.png"
                  alt="TheBridgely vetted engineering team — global talent marketplace"
                  width={801}
                  height={650}
                  priority
                  className="h-auto w-full max-w-none mix-blend-multiply"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
