"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Github, Sparkles } from "lucide-react";
import type { VettedTeamMember } from "@/types";

interface TeamMemberModalProps {
  member: VettedTeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamMemberModal({
  member,
  isOpen,
  onClose,
}: TeamMemberModalProps) {
  return (
    <AnimatePresence>
      {isOpen && member && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-primary/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-member-name"
              className="pointer-events-auto flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-br from-soft-mint to-soft-bg sm:h-60">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 512px) 100vw, 512px"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent px-5 pb-4 pt-20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                    {member.role}
                  </p>
                  <h3
                    id="team-member-name"
                    className="font-display text-xl font-bold text-white sm:text-2xl"
                  >
                    {member.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-primary shadow-md transition-colors hover:bg-white"
                  aria-label="Close profile"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">
                <p className="text-base leading-relaxed text-secondary">
                  {member.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-soft-mint px-3 py-1 text-xs font-medium text-brand-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-xl border border-brand/20 bg-soft-mint/60 p-4">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <p className="text-sm font-medium text-brand-dark">
                    {member.highlight}
                  </p>
                </div>

                <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm">
                  {"linkedin" in member && member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-medium text-secondary transition-colors hover:text-brand-dark"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {"github" in member && member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-medium text-secondary transition-colors hover:text-brand-dark"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
