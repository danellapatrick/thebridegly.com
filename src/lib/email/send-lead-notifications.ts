import { Resend } from "resend";
import {
  LEAD_INTENTS,
  LEAD_PRIMARY_NOTIFICATION_EMAIL,
  type LeadIntent,
} from "@/lib/constants";

export interface LeadNotificationData {
  name: string;
  email: string;
  company: string | null;
  intent: LeadIntent;
  requirements: string | null;
  message: string | null;
}

function getIntentLabel(intent: LeadIntent): string {
  return LEAD_INTENTS.find((item) => item.value === intent)?.label ?? intent;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildLeadEmailContent(lead: LeadNotificationData) {
  const intentLabel = getIntentLabel(lead.intent);
  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : null,
    `Looking for: ${intentLabel}`,
    lead.requirements ? `Requirements: ${lead.requirements}` : null,
    lead.message ? `Message: ${lead.message}` : null,
  ].filter((line): line is string => Boolean(line));

  return {
    subject: `New lead from ${lead.name} — TheBridgely`,
    text: lines.join("\n"),
    html: `<h2>New website lead</h2>${lines
      .map((line) => `<p>${escapeHtml(line)}</p>`)
      .join("")}`,
  };
}

async function sendLeadEmail(
  to: string,
  lead: LeadNotificationData
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL.");
  }

  const resend = new Resend(apiKey);
  const content = buildLeadEmailContent(lead);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: content.subject,
    text: content.text,
    html: content.html,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function getSecondaryNotificationEmails(): string[] {
  const raw = process.env.LEAD_NOTIFICATION_EMAIL_SECONDARY?.trim();

  if (!raw) {
    return ["team-placeholder@example.com"];
  }

  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function sendLeadNotificationEmails(
  lead: LeadNotificationData
): Promise<void> {
  try {
    await sendLeadEmail(LEAD_PRIMARY_NOTIFICATION_EMAIL, lead);
  } catch (err) {
    console.error("[leads] Primary notification email failed:", err);
  }

  for (const email of getSecondaryNotificationEmails()) {
    try {
      await sendLeadEmail(email, lead);
    } catch (err) {
      console.error(`[leads] Secondary notification email failed (${email}):`, err);
    }
  }
}
