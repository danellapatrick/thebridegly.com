"use client";

import { motion } from "framer-motion";
import { COMPARISON_DATA } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";

export default function ComparisonTable() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12 overflow-hidden rounded-card border border-border bg-background shadow-card"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-border bg-gradient-to-r from-soft-mint to-emerald-50/80">
              <th className="px-6 py-4 font-display text-sm font-semibold text-primary">
                Role
              </th>
              <th className="px-6 py-4 font-display text-sm font-semibold text-primary">
                US/UK Cost
              </th>
              <th className="px-6 py-4 font-display text-sm font-semibold text-primary">
                Pakistan Cost
              </th>
              <th className="px-6 py-4 font-display text-sm font-semibold text-brand-dark">
                Savings
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, index) => (
              <tr
                key={row.role}
                className={
                  index % 2 === 0
                    ? "border-b border-border/60 bg-background"
                    : "border-b border-border/60 bg-soft-mint/40"
                }
              >
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  {row.role}
                </td>
                <td className="px-6 py-4 text-sm text-secondary">
                  {row.usCost}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-brand-dark">
                  {row.pkCost}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand-dark ring-1 ring-brand/25">
                    {row.savings}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
