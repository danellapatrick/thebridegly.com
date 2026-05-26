"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { VETTED_TEAM } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function VettedTeamGallery() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const next =
      dir === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(VETTED_TEAM.length - 1, activeIndex + 1);
    setActiveIndex(next);
    scrollRef.current?.children[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">
          Meet our vetted team
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:border-brand hover:text-brand"
            aria-label="Previous team member"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:border-brand hover:text-brand"
            aria-label="Next team member"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex items-end gap-3 overflow-x-auto pb-4 scrollbar-hide md:gap-4 lg:justify-center lg:overflow-visible"
      >
        {VETTED_TEAM.map((member, index) => {
          const isActive = activeIndex === index;
          const isFeatured = "featured" in member && member.featured;
          const isExpanded = expandedId === member.id;

          return (
            <motion.div
              key={member.id}
              layout
              className={cn(
                "relative shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-brand transition-all duration-500",
                isActive || isFeatured
                  ? "h-[420px] w-[200px] sm:h-[480px] sm:w-[220px] md:w-[240px]"
                  : "h-[320px] w-[140px] sm:h-[360px] sm:w-[160px] md:w-[180px]",
                isExpanded && "ring-2 ring-white/80"
              )}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: isActive ? 1 : 1.02 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 180px, 240px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-display text-sm font-bold leading-tight sm:text-base">
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs text-white/85 sm:text-sm">
                  {member.role}
                </p>
              </div>

              {isFeatured && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(member.id);
                  }}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary shadow-lg transition-transform hover:scale-105"
                  aria-label={isExpanded ? "Close details" : "View full profile"}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>
              )}

              <AnimatePresence>
                {isFeatured && isExpanded && (
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary via-primary/95 to-primary/70 p-5 pt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-display text-lg font-bold text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-brand-light">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-200">
                      {member.summary}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {member.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-xs text-stone-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-brand" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 rounded-lg bg-brand/20 px-3 py-2 text-xs font-medium text-brand-light">
                      {member.highlight}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
