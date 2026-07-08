"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { INSIGHTS_STATS, TECH_STACK_LOGOS } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import { pushGtmEvent } from "@/lib/analytics/gtm";

const CYCLE_MS = 3500;

/** Wide spread — subsampled grid + per-logo offset, no center clustering */
function buildSpreadPositions(count: number) {
  const cols = 9;
  const rows = 7;
  const padX = 1;
  const padY = 1;
  const cells: { x: number; y: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({
        x: padX + (c / (cols - 1)) * (100 - padX * 2),
        y: padY + (r / (rows - 1)) * (100 - padY * 2),
      });
    }
  }

  const step = cells.length / count;
  return Array.from({ length: count }, (_, i) => {
    const base = cells[Math.floor(i * step)];
    const jx = ((i * 13 + 7) % 11) - 5;
    const jy = ((i * 19 + 3) % 11) - 5;
    return {
      x: Math.min(98, Math.max(2, Math.round(base.x + jx))),
      y: Math.min(97, Math.max(3, Math.round(base.y + jy))),
    };
  });
}

const LOGO_POSITIONS = buildSpreadPositions(TECH_STACK_LOGOS.length);

type Logo = (typeof TECH_STACK_LOGOS)[number];

function LogoTile({ name, slug, color }: Logo) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:h-14 sm:w-14"
      title={name}
    >
      {failed ? (
        <span className="px-0.5 text-center text-[8px] font-bold leading-tight text-brand-dark sm:text-[9px]">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt={name}
          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function InsightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INSIGHTS_STATS.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  const stat = INSIGHTS_STATS[activeIndex];

  return (
    <SectionWrapper background="white" className="overflow-hidden !py-14 md:!py-20">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="section-label select-none">Platform Depth</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
          Built on the stacks{" "}
          <span className="text-gradient">your product runs on</span>
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-8 h-[480px] w-full max-w-[1400px] sm:mt-10 sm:h-[560px] lg:h-[640px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-brand-dark/8 blur-3xl" />
        </div>

        {TECH_STACK_LOGOS.map((logo, index) => {
          const pos = LOGO_POSITIONS[index % LOGO_POSITIONS.length];
          const driftX = 6 + (index % 6) * 2;
          const driftY = 8 + (index % 5) * 2;

          return (
            <motion.div
              key={logo.slug}
              className="absolute z-0 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -driftY, driftY * 0.4, 0],
                x: [0, index % 2 === 0 ? driftX : -driftX, index % 2 === 0 ? -driftX * 0.5 : driftX * 0.5, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: (index % 8) * 0.04 },
                scale: { duration: 0.4, delay: (index % 8) * 0.04 },
                y: {
                  duration: 5 + (index % 7) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 6 + (index % 5) * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <LogoTile {...logo} />
            </motion.div>
          );
        })}

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto relative w-[min(82vw,280px)] overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/20 via-white/[0.07] to-white/[0.02] px-6 py-5 text-center shadow-[0_8px_40px_rgba(84,189,149,0.12),inset_0_1px_0_rgba(255,255,255,0.85)] [backdrop-filter:blur(6px)_saturate(1.4)] sm:w-[300px]">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-60"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
              aria-hidden
            />
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm text-secondary drop-shadow-sm">{stat.prefix}</p>
                  <p className="mt-0.5 font-display text-4xl font-bold tracking-tight text-primary drop-shadow-sm sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-base font-medium text-secondary/90 drop-shadow-sm sm:text-lg">
                    {stat.suffix}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-3 flex justify-center gap-1.5">
                {INSIGHTS_STATS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      pushGtmEvent("insights_carousel_select", {
                        insight_index: index,
                        insight_value: INSIGHTS_STATS[index].value,
                      });
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-brand"
                        : "w-1.5 bg-white/60 hover:bg-brand/40"
                    }`}
                    aria-label={`Show insight ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
