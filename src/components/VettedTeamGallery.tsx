"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronUp, Linkedin, Github } from "lucide-react";
import { VETTED_TEAM } from "@/lib/constants";

const LOOPED_TEAM = [...VETTED_TEAM, ...VETTED_TEAM];

export default function VettedTeamGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const activeMember = VETTED_TEAM[activeIndex % VETTED_TEAM.length];

  // ---------------------------
  // CENTER DETECTION
  // ---------------------------
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.children) as HTMLElement[];

      const center = container.scrollLeft + container.offsetWidth / 2;

      let closest = 0;
      let dist = Infinity;

      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const d = Math.abs(center - childCenter);

        if (d < dist) {
          dist = d;
          closest = i;
        }
      });

      setActiveIndex(closest % VETTED_TEAM.length);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------
  // ARROW NAVIGATION
  // ---------------------------
  const move = (dir: "left" | "right") => {
    const next =
      dir === "left"
        ? (activeIndex - 1 + VETTED_TEAM.length) % VETTED_TEAM.length
        : (activeIndex + 1) % VETTED_TEAM.length;

    setActiveIndex(next);

    const container = scrollRef.current;
    const child = container?.children[next] as HTMLElement;

    child?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* ========================= */}
      {/* LEFT: CAROUSEL + ARROWS */}
      {/* ========================= */}
      <div className="relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => move("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => move("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight size={18} />
        </button>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="
            flex gap-5 overflow-x-auto
            px-8 pb-6 scrollbar-hide
            scroll-smooth cursor-grab active:cursor-grabbing
          "
        >
          {LOOPED_TEAM.map((member, index) => {
            const realIndex = index % VETTED_TEAM.length;
            const isActive = realIndex === activeIndex;

            return (
              <motion.div
                key={index}
                className="shrink-0"
                animate={{
                  scale: isActive ? 1.15 : 0.9,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <div className="relative w-[160px] h-[180px] sm:w-[190px] sm:h-[210px] rounded-2xl overflow-hidden shadow-md border border-gray-200">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-xs font-semibold">{member.name}</p>
                    <p className="text-[10px] text-white/80">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================= */}
      {/* RIGHT PANEL */}
      {/* ========================= */}
      <div className="relative flex justify-center">

        <motion.div
          key={activeMember.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-md"
        >

          <Image
            src={activeMember.image}
            alt={activeMember.name}
            width={600}
            height={500}
            className="w-full h-[380px] object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-5">

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  {activeMember.name}
                </h3>
                <p className="text-xs opacity-80">
                  {activeMember.role}
                </p>
              </div>

              <button
                onClick={() => setExpanded((p) => !p)}
                className="p-2 bg-white text-black rounded-full"
              >
                <ChevronUp
                  size={16}
                  className={`transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <p className="mt-2 text-sm">{activeMember.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {activeMember.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-white/20 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {expanded && (
              <div className="mt-4 border-t border-white/20 pt-4">
                <p className="text-xs text-brand font-medium mb-3">
                  {activeMember.highlight}
                </p>

                <div className="flex gap-4 text-xs">
                  <a className="flex items-center gap-1 hover:underline">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a className="flex items-center gap-1 hover:underline">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}