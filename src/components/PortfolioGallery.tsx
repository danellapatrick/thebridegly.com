"use client";

import { useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio";

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
      className="
        rounded-2xl
        bg-[#161C28]
        border border-white/10
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#54BD95]/40
      "
    >
      <div className="relative w-full h-[220px] overflow-hidden bg-[#0d1117]">
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-12 h-12 rounded-full bg-[#54BD95]/90 flex items-center justify-center">
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

      <div className="p-5 flex flex-col min-h-[140px]">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.industry.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded-full bg-[#48AD88]/20 text-[#48AD88]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className="text-neutral-400 text-sm mt-1 line-clamp-2 min-h-[2.5rem]">
          {project.tagline}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="mt-auto pt-4 text-[#54BD95] text-sm font-medium text-left"
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
        className="fixed inset-0 bg-black/60 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        className="fixed bottom-0 left-0 right-0 z-50 h-[85vh] rounded-t-[32px] bg-[#161C28] overflow-hidden"
      >
        <div className="h-full overflow-y-auto custom-scroll p-6 md:p-10 pb-24">
          <div className="relative flex items-center justify-center mb-6">
            <div className="h-1.5 w-12 rounded-full bg-white/20" />
            <button
              onClick={onClose}
              className="absolute right-0 h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Close project details"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.industry.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-[#48AD88]/20 text-[#48AD88]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl text-white font-bold">
            {project.title}
          </h2>
          <p className="text-[#48AD88] text-sm mt-1">{project.tagline}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {project.galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          <h3 className="text-white mt-8 font-semibold">Project Overview</h3>
          <p className="text-neutral-300 mt-3 leading-relaxed">
            {project.overview}
          </p>

          <h3 className="text-white mt-8 font-semibold">Services Provided</h3>
          <ul className="mt-3 space-y-2">
            {project.services.map((service) => (
              <li
                key={service}
                className="text-neutral-300 text-sm flex items-start gap-2"
              >
                <span className="text-[#54BD95] mt-0.5">•</span>
                {service}
              </li>
            ))}
          </ul>

          <h3 className="text-white mt-8 font-semibold">Tech Stack</h3>
          <div className="mt-3 space-y-4">
            {project.techStack.map((group) => (
              <div key={group.category}>
                <p className="text-[#48AD88] text-sm font-medium">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-white mt-8 font-semibold">Key Features</h3>
          <ul className="mt-3 space-y-2">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="text-neutral-300 text-sm flex items-start gap-2"
              >
                <span className="text-[#54BD95] mt-0.5">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="text-white mt-8 font-semibold">Outcome</h3>
          <p className="text-neutral-300 mt-3 leading-relaxed p-4 rounded-xl bg-[#48AD88]/10 border border-[#48AD88]/20">
            {project.outcome}
          </p>
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
            w-10 h-10 rounded-full
            bg-[#54BD95]/90 hover:bg-[#54BD95]
            text-black font-bold
            flex items-center justify-center
            transition shadow-lg shadow-[#54BD95]/20
          "
          aria-label="Previous project"
        >
          ‹
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
            absolute right-2 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full
            bg-[#54BD95]/90 hover:bg-[#54BD95]
            text-black font-bold
            flex items-center justify-center
            transition shadow-lg shadow-[#54BD95]/20
          "
          aria-label="Next project"
        >
          ›
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex cursor-grab active:cursor-grabbing">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div key={project.id} className="w-[300px] shrink-0 mr-4">
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
