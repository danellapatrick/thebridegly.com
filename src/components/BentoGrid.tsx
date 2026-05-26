"use client";

import { motion } from "framer-motion";
import { UserPlus, Layers, Briefcase, LucideIcon } from "lucide-react";
import { BENTO_SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  UserPlus,
  Layers,
  Briefcase,
};

const bentoStyles = {
  individual: "from-soft-mint to-background border-brand/15",
  embedded: "from-soft-mint via-background to-emerald-50/50 border-brand/30",
  recruitment: "from-emerald-50/80 to-background border-brand/15",
};

export default function BentoGrid() {
  return (
    <motion.div
      className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {BENTO_SERVICES.map((service) => {
        const Icon = iconMap[service.icon] ?? Layers;
        const styleKey = service.id as keyof typeof bentoStyles;

        return (
          <motion.div
            key={service.id}
            variants={fadeUp}
            className={cn(
              "group relative overflow-hidden rounded-card border bg-gradient-to-br p-6 shadow-card transition-all hover:shadow-card-hover md:p-8",
              bentoStyles[styleKey],
              service.span
            )}
            whileHover={{ y: -4 }}
          >
            {"badge" in service && service.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-brand">
                {service.badge}
              </span>
            )}
            <div
              className={cn(
                "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                service.featured
                  ? "bg-gradient-accent text-white shadow-brand"
                  : "bg-soft-mint text-brand-dark"
              )}
            >
              <Icon className={cn("h-6 w-6", service.featured && "h-7 w-7")} />
            </div>
            <h3
              className={cn(
                "font-display font-semibold text-primary",
                service.featured ? "text-2xl" : "text-lg"
              )}
            >
              {service.title}
            </h3>
            <p
              className={cn(
                "mt-3 leading-relaxed text-secondary",
                service.featured ? "max-w-md text-base" : "text-sm"
              )}
            >
              {service.description}
            </p>
            {service.featured && (
              <>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-brand/15 blur-2xl" />
                <div className="pointer-events-none absolute -top-4 right-1/3 h-24 w-24 rounded-full bg-brand-light/25 blur-xl" />
              </>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
