"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { TeamMember } from "@/types";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="relative h-full min-h-[220px] cursor-pointer"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive((prev) => !prev)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-card border border-border bg-background p-6 shadow-card transition-shadow",
          isActive && "border-brand/40 shadow-card-hover"
        )}
      >
        <div
          className={cn(
            "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold text-white",
            member.gradient
          )}
        >
          {member.initials}
        </div>

        <h3 className="font-display text-lg font-semibold text-primary">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-dark">{member.role}</p>
        <p className="mt-2 text-sm text-secondary">{member.tag}</p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 flex flex-col justify-end rounded-card bg-gradient-to-t from-primary via-[#2D2640] to-[#3D3550] p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-orange-300">
                Expertise
              </p>
              <ul className="space-y-2">
                {member.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-stone-200"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
