"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { LEAD_INTENTS, CONTACT_EMAIL } from "@/lib/constants";
import { fadeUp } from "@/lib/motion";
import type { LeadIntent } from "@/lib/constants";

const inputClass =
  "w-full rounded-xl border border-border bg-background/80 px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const intent = String(data.get("intent") ?? "");

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      intent: intent as LeadIntent,
      requirements: String(data.get("requirements") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        `Could not send your message. Please email us at ${CONTACT_EMAIL}.`
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center rounded-card border border-brand/30 bg-soft-mint/50 p-10 text-center shadow-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle2 className="mb-4 h-12 w-12 text-brand" />
        <h3 className="font-display text-xl font-semibold text-primary">
          Message Sent!
        </h3>
        <p className="mt-2 text-secondary">
          We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-card border border-border bg-background p-6 shadow-card md:p-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {error && (
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-rose/30 bg-rose/5 px-4 py-3 text-sm text-rose"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={inputClass}
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="intent" className="mb-1.5 block text-sm font-medium text-primary">
          What are you looking for?
        </label>
        <select
          id="intent"
          name="intent"
          required
          defaultValue=""
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {LEAD_INTENTS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="requirements"
          className="mb-1.5 block text-sm font-medium text-primary"
        >
          Requirements
        </label>
        <input
          id="requirements"
          name="requirements"
          type="text"
          className={inputClass}
          placeholder="e.g. Embedded team, 2 frontend engineers"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project and team needs..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </motion.form>
  );
}
