"use client";

import { useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
} from "@/lib/portfolio";

function PortfolioVideoCard({
  project,
  onSelect,
}: {
  project: PortfolioProject;
  onSelect: (project: PortfolioProject) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  return (
    <div
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      className="rounded-2xl overflow-hidden bg-[#161C28] border border-white/10 hover:border-[#54BD95]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-[220px] overflow-hidden bg-[#0d1117]">
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-[#54BD95]/90 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white ml-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col min-h-[150px]">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.industry.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] bg-[#48AD88]/20 text-[#48AD88]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-white text-lg font-semibold">
          {project.title}
        </h3>

        <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
          {project.tagline}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="mt-auto pt-5 text-[#54BD95] font-medium text-sm text-left"
        >
          View Project →
        </button>
      </div>
    </div>
  );
}

function ProjectDetailDrawer({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          duration: 0.35,
          type: "tween",
        }}
        className="fixed inset-x-0 bottom-0 z-50 h-[88vh] rounded-t-[34px] bg-[#161C28]"
      >
        <div className="h-full overflow-y-auto custom-scroll px-6 md:px-12 py-8 pb-28">

          <div className="relative flex justify-center items-center mb-8">
            <div className="w-14 h-1.5 rounded-full bg-white/20" />

            <button
              onClick={onClose}
              className="absolute right-0 h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.industry.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#48AD88]/20 text-[#48AD88] text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-2 text-[#48AD88]">
            {project.tagline}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {project.galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition duration-300"
              >
                <Image
                  src={src}
                  fill
                  alt={`${project.title} ${i}`}
                  className="object-cover"
                  sizes="(max-width:768px)50vw,25vw"
                />
              </div>
            ))}
          </div>

          {/* Project Overview */}

<section className="mt-10">
  <h3 className="text-xl font-semibold text-white mb-5">
    Project Overview
  </h3>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="text-neutral-300 leading-8">
      {project.overview}
    </p>
  </div>
</section>

{/* Services */}

<section className="mt-10">
  <h3 className="text-xl font-semibold text-white mb-5">
    Services Provided
  </h3>

  <div className="flex flex-wrap gap-3">
    {project.services.map((service) => (
      <span
        key={service}
        className="
          px-4
          py-2
          rounded-full
          border
          border-[#48AD88]/25
          bg-[#48AD88]/10
          text-[#54BD95]
          text-sm
        "
      >
        {service}
      </span>
    ))}
  </div>
</section>


{/* Services + Tech Stack */}

<div className="grid lg:grid-cols-2 gap-6 mt-8">

  {/* Services */}

  <section className="mt-12">
  <h3 className="text-xl font-semibold text-white mb-6">
    Services Provided
  </h3>

  <div className="grid sm:grid-cols-2 gap-3">
    {project.services.map((service) => (
      <div
        key={service}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-4
          py-3
        "
      >
        <div className="w-8 h-8 rounded-lg bg-[#54BD95]/15 flex items-center justify-center text-[#54BD95]">
          ✓
        </div>

        <span className="text-neutral-200 text-sm">
          {service}
        </span>
      </div>
    ))}
  </div>
</section>


 {/* Tech Stack */}

<section className="mt-12">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-white">
      Tech Stack
    </h3>

    <span className="text-sm text-neutral-500">
      {project.techStack.reduce(
        (total, group) => total + group.items.length,
        0
      )}{" "}
      technologies
    </span>
  </div>

  <div className="space-y-5">
    {project.techStack.map((group) => (
      <div
        key={group.category}
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-5
        "
      >
        <div className="flex flex-col md:flex-row md:items-start gap-5">
          {/* Category */}

          <div className="md:w-40 shrink-0">
            <p className="font-semibold text-[#54BD95]">
              {group.category}
            </p>
          </div>

          {/* Chips */}

          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="
                  px-3
                  py-1.5
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  text-sm
                  text-neutral-200
                  transition
                  hover:border-[#54BD95]/30
                  hover:bg-[#54BD95]/10
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

</div>


{/* Key Features */}

<section className="mt-12">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-white">
      Key Features
    </h3>

    <span className="text-sm text-neutral-500">
      {project.keyFeatures.length} Features
    </span>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    {project.keyFeatures.map((feature, index) => (
      <div
        key={feature}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-5
          transition-all
          duration-300
          hover:border-[#54BD95]/40
          hover:-translate-y-1
        "
      >
        <div className="flex gap-4">
          <div
            className="
              h-10
              w-10
              shrink-0
              rounded-xl
              bg-[#54BD95]/10
              border
              border-[#54BD95]/20
              flex
              items-center
              justify-center
              text-[#54BD95]
              font-semibold
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">
              {feature.split(" ").slice(0, 3).join(" ")}
            </h4>

            <p className="text-sm leading-6 text-neutral-400">
              {feature}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


{/* Outcome */}

<section className="mt-12">
  <div
    className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[#54BD95]/20
      bg-gradient-to-br
      from-[#54BD95]/10
      to-transparent
      p-8
    "
  >
    {/* Decorative glow */}
    <div
      className="
        absolute
        -top-20
        -right-20
        h-48
        w-48
        rounded-full
        bg-[#54BD95]/10
        blur-3xl
      "
    />

    <div className="relative z-10">
      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#54BD95]/30
          bg-[#54BD95]/15
          px-3
          py-1
          text-xs
          font-medium
          text-[#54BD95]
        "
      >
        PROJECT OUTCOME
      </span>

      <h3 className="mt-4 text-2xl font-semibold text-white">
        Delivered Successfully
      </h3>

      <p className="mt-5 max-w-3xl text-neutral-300 leading-8">
        {project.outcome}
      </p>
    </div>
  </div>
</section>

</div>
</motion.div>
</>
);
}

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  return (
    <>
      <div className="relative mt-10">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
            absolute left-2 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 rounded-full
            bg-[#54BD95]/90
            hover:bg-[#54BD95]
            transition
            flex items-center justify-center
            text-black
            font-bold
            shadow-lg shadow-[#54BD95]/20
          "
          aria-label="Previous project"
        >
          ‹
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
            absolute right-2 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 rounded-full
            bg-[#54BD95]/90
            hover:bg-[#54BD95]
            transition
            flex items-center justify-center
            text-black
            font-bold
            shadow-lg shadow-[#54BD95]/20
          "
          aria-label="Next project"
        >
          ›
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex cursor-grab active:cursor-grabbing">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="w-[300px] shrink-0 mr-4"
              >
                <PortfolioVideoCard
                  project={project}
                  onSelect={setSelectedProject}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailDrawer
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}