"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-4 z-50 mx-auto flex max-h-[90vh] max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-8 md:inset-12"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-brand/20 bg-soft-mint/50 px-4 py-3 sm:px-6">
              <h3 className="font-display text-lg font-semibold text-primary">
                Book a Call with TheBridgely
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-secondary transition-colors hover:bg-soft-bg hover:text-primary"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <iframe
                src={CALENDLY_URL}
                title="Schedule a call with TheBridgely"
                className="h-full min-h-[500px] w-full"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
