"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";
import { fadeUp } from "@/lib/motion";
import { CONTACT_EMAIL } from "@/lib/constants";
import { trackOutboundClick, trackSectionView, type OnBookCall } from "@/lib/analytics/gtm";

interface CTASectionProps {
  onBookCall: OnBookCall;
}

export default function CTASection({ onBookCall }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedView.current) {
          hasTrackedView.current = true;
          trackSectionView("contact", "Contact");
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg bg-gradient-to-b from-soft-mint via-background to-white" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Ready to Build Your{" "}
            <span className="text-gradient">Embedded Engineering Team?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary">
            Book a discovery call or send us your requirements — we&apos;ll
            respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" onClick={() => onBookCall("contact")}>
              Book a Call Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() =>
                trackOutboundClick(`mailto:${CONTACT_EMAIL}`, "email", "contact")
              }
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-card border border-brand/20 bg-gradient-to-br from-soft-mint to-background p-8 shadow-card"
          >
            <h3 className="font-display text-xl font-semibold text-primary">
              Why start with a call?
            </h3>
            <ul className="mt-6 space-y-4 text-secondary">
              {[
                "Understand your product, stack, and team structure",
                "Match you with our embedded unit or individual talent",
                "Get a tailored onboarding plan within 48 hours",
              ].map((text, i) => (
                <li key={text} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
