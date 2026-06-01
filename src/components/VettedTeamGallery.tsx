"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VETTED_TEAM } from "@/lib/constants";
import type { VettedTeamMember } from "@/types";
import { cn } from "@/lib/utils";
import TeamMemberModal from "@/components/TeamMemberModal";

const AUTO_SCROLL_SPEED = 0.45;

function useInfiniteMarquee(
  containerRef: React.RefObject<HTMLDivElement | null>,
  trackRef: React.RefObject<HTMLDivElement | null>,
  pausedRef: React.RefObject<boolean>,
  reverse = false
) {
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;
    let segmentWidth = 0;
    let position = 0;
    let ready = false;

    const wrap = (value: number) => {
      if (segmentWidth <= 0) return value;
      let next = value;
      while (next >= segmentWidth * 2) next -= segmentWidth;
      while (next < segmentWidth) next += segmentWidth;
      return next;
    };

    const apply = () => {
      track.style.transform = `translate3d(${-position}px, 0, 0)`;
    };

    const measure = () => {
      const width = track.scrollWidth / 3;
      if (width <= 0) return false;

      if (segmentWidth > 0 && Math.abs(width - segmentWidth) > 1) {
        position = wrap((position / segmentWidth) * width);
      }

      segmentWidth = width;

      if (!ready) {
        position = segmentWidth;
        ready = true;
        apply();
      }

      return true;
    };

    const ro = new ResizeObserver(() => {
      measure();
      position = wrap(position);
      apply();
    });
    ro.observe(track);

    const onWheel = (event: WheelEvent) => {
      const isHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!isHorizontal && !event.shiftKey) return;

      if (!ready) return;

      const delta = isHorizontal ? event.deltaX : event.deltaY;
      position += delta;
      position = wrap(position);
      apply();
      event.preventDefault();
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    const tick = () => {
      if (ready && !pausedRef.current && !reducedMotion) {
        position += reverse ? -AUTO_SCROLL_SPEED : AUTO_SCROLL_SPEED;
        position = wrap(position);
        apply();
      } else if (!ready) {
        measure();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      container.removeEventListener("wheel", onWheel);
    };
  }, [containerRef, trackRef, pausedRef, reverse]);
}

interface MarqueeCardProps {
  member: VettedTeamMember;
  isHighlighted: boolean;
  onHoverStart: (member: VettedTeamMember) => void;
  onHoverEnd: () => void;
  onOpen: (member: VettedTeamMember) => void;
}

function MarqueeCard({
  member,
  isHighlighted,
  onHoverStart,
  onHoverEnd,
  onOpen,
}: MarqueeCardProps) {
  return (
    <button
      type="button"
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-2xl border bg-white text-left shadow-card transition-all duration-300 ease-out",
        "h-[280px] w-[190px] sm:h-[320px] sm:w-[210px]",
        isHighlighted
          ? "z-10 scale-[1.04] border-brand/40 shadow-card-hover ring-2 ring-brand/20"
          : "border-border/70 hover:border-brand/30 hover:shadow-card-hover"
      )}
      onMouseEnter={() => onHoverStart(member)}
      onMouseLeave={onHoverEnd}
      onFocus={() => onHoverStart(member)}
      onBlur={onHoverEnd}
      onClick={() => onOpen(member)}
      aria-label={`View profile for ${member.name}, ${member.role}`}
    >
      <Image
        src={member.image}
        alt=""
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="210px"
        draggable={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-light">
          {member.role}
        </p>
        <p className="font-display text-base font-semibold text-white">
          {member.name}
        </p>
      </div>

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-brand/15 opacity-0 transition-opacity duration-300",
          isHighlighted && "opacity-100"
        )}
      >
        <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-brand-dark shadow-md">
          View profile
        </span>
      </div>
    </button>
  );
}

interface MarqueeRowProps {
  members: readonly VettedTeamMember[];
  reverse?: boolean;
  rowOffset?: boolean;
  pausedRef: React.RefObject<boolean>;
  highlightedId: string | null;
  onHoverStart: (member: VettedTeamMember) => void;
  onHoverEnd: () => void;
  onOpen: (member: VettedTeamMember) => void;
}

function MarqueeRow({
  members,
  reverse = false,
  rowOffset = false,
  pausedRef,
  highlightedId,
  onHoverStart,
  onHoverEnd,
  onOpen,
}: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const looped = [...members, ...members, ...members];

  useInfiniteMarquee(containerRef, trackRef, pausedRef, reverse);

  return (
    <div
      ref={containerRef}
      className={cn(
        "team-marquee-mask w-full overflow-hidden px-3 sm:px-4",
        rowOffset && "mt-5"
      )}
      style={{ touchAction: "pan-x" }}
    >
      <div
        ref={trackRef}
        className="flex w-max flex-nowrap gap-5 will-change-transform sm:gap-6"
      >
        {looped.map((member, index) => (
          <MarqueeCard
            key={`${member.id}-${index}`}
            member={member}
            isHighlighted={highlightedId === member.id}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default function VettedTeamGallery() {
  const pausedRef = useRef(false);

  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<VettedTeamMember | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rowTwo = [...VETTED_TEAM].reverse();

  useEffect(() => {
    pausedRef.current = isModalOpen;
  }, [isModalOpen]);

  const handleHoverStart = useCallback((member: VettedTeamMember) => {
    setHighlightedId(member.id);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHighlightedId(null);
  }, []);

  const handleOpen = useCallback((member: VettedTeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    setHighlightedId(member.id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedMember(null);
    setHighlightedId(null);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleCloseModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen, handleCloseModal]);

  const rowProps = {
    pausedRef,
    highlightedId,
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
    onOpen: handleOpen,
  };

  return (
    <>
      <div className="relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <MarqueeRow members={VETTED_TEAM} {...rowProps} />
        <MarqueeRow members={rowTwo} reverse rowOffset {...rowProps} />

        <p className="mt-6 text-center text-sm text-secondary">
          Always scrolling · Swipe trackpad either way to browse · Click for full
          profile
        </p>
      </div>

      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
