"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  UserX,
  Clock,
  TrendingDown,
  Users,
  ShieldCheck,
  ClipboardCheck,
  Plug,
  LucideIcon,
} from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  UserX,
  Clock,
  TrendingDown,
  Users,
  ShieldCheck,
  ClipboardCheck,
  Plug,
};

const iconColors = [
  "bg-soft-mint text-brand-dark",
  "bg-emerald-50 text-brand",
  "bg-teal-50 text-[#3D9A78]",
  "bg-green-50 text-brand-dark",
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  variant?: "default" | "accent";
  colorIndex?: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "default",
  colorIndex = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon] ?? Users;
  const colorClass = iconColors[colorIndex % iconColors.length];

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group rounded-card border border-border bg-background p-6 shadow-card transition-shadow hover:shadow-card-hover md:p-8",
        variant === "accent" &&
          "border-brand/25 bg-gradient-to-br from-soft-mint via-background to-white",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn(
          "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
          variant === "accent"
            ? "bg-gradient-accent text-white shadow-brand"
            : colorClass
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-secondary">{description}</p>
    </motion.div>
  );
}
