import type { LeadIntent, VETTED_TEAM } from "@/lib/constants";

export type VettedTeamMember = (typeof VETTED_TEAM)[number];

export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  details: readonly string[];
  initials: string;
  gradient: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  intent: LeadIntent | "";
  requirements: string;
  message: string;
}
