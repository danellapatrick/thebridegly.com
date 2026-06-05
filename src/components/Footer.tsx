"use client";

import { Linkedin, Twitter, Mail } from "lucide-react";
import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
  CONTACT_EMAIL,
} from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex" aria-label="TheBridgely home">
              <Logo size={44} showWordmark variant="light" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              Premium embedded engineering teams from Pakistan — helping global
              startups build and scale products faster.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-light"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Connect</h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-stone-700 bg-stone-800/50 p-2 text-stone-400 transition-colors hover:border-brand/50 hover:text-brand"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-stone-700 bg-stone-800/50 p-2 text-stone-400 transition-colors hover:border-brand/50 hover:text-brand"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-sm text-stone-500">
            © {currentYear} TheBridgely. All rights reserved.
          </p>
          <p className="text-sm font-medium text-brand">
            Embedded engineering teams · Pakistan → Global
          </p>
        </div>
      </div>
    </footer>
  );
}
