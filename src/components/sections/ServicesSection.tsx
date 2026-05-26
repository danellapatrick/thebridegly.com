"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

import {
  Users,
  User,
  ClipboardList,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Embedded Engineering Teams",
    desc: "Full cross-functional teams (Frontend, Backend, QA, Design) integrated into your product.",
    icon: Users,
  },
  {
    title: "Individual Talent",
    desc: "Hire vetted engineers on-demand to plug into your existing team.",
    icon: User,
  },
  {
    title: "Managed Hiring & Screening",
    desc: "We handle sourcing, vetting, onboarding so you don’t waste time.",
    icon: ClipboardList,
  },
  {
    title: "Flexible Scaling",
    desc: "Scale teams up or down instantly based on product needs.",
    icon: TrendingUp,
  },
];

export default function ServicesSection({ onBookCall }: any) {
  return (
    <SectionWrapper id="services" background="mint" label="What We Offer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-24 h-fit">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="font-display text-3xl font-bold text-primary sm:text-4xl"
            >
              Embedded Engineering Services That{" "}
              <span className="text-gradient">Scale With You</span>
            </motion.h2>

            <motion.p className="mt-4 text-lg text-secondary">
              We provide fully managed engineering services — from individual
              talent to complete embedded product teams that integrate directly
              into your workflow.
            </motion.p>

            {/* CTA */}
            <motion.div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" onClick={onBookCall}>
                Book a Call
              </Button>

              <Button variant="secondary" size="lg" href="#team">
                Meet Our Team
              </Button>
            </motion.div>

          </div>

          {/* RIGHT SIDE - SCROLL CARDS */}
          <div className="space-y-20">

            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="max-w-xl w-full p-10 rounded-2xl border bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    {/* ICON + TITLE */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-secondary leading-relaxed">
                      {service.desc}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}