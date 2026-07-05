import { NextResponse } from "next/server";
import { sendLeadNotificationEmails } from "@/lib/email/send-lead-notifications";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import { LEAD_INTENT_VALUES, type LeadIntent } from "@/lib/constants";

export interface LeadPayload {
  name: string;
  email: string;
  company?: string;
  intent: LeadIntent;
  requirements?: string;
  message?: string;
}

function isLeadIntent(value: string): value is LeadIntent {
  return (LEAD_INTENT_VALUES as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, intent, requirements, message } =
    body as Record<string, unknown>;

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedIntent = typeof intent === "string" ? intent.trim() : "";

  if (!trimmedName || trimmedName.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!isLeadIntent(trimmedIntent)) {
    return NextResponse.json(
      { error: "Please select what you are looking for." },
      { status: 400 }
    );
  }

  const row = {
    name: trimmedName,
    email: trimmedEmail.toLowerCase(),
    company:
      typeof company === "string" && company.trim() ? company.trim() : null,
    intent: trimmedIntent,
    requirements:
      typeof requirements === "string" && requirements.trim()
        ? requirements.trim()
        : null,
    message:
      typeof message === "string" && message.trim() ? message.trim() : null,
  };

  try {
    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from("leads").insert(row);

    if (error) {
      console.error("[leads] Supabase insert error:", error.message);
      return NextResponse.json(
        { error: "Could not save your message. Please try again later." },
        { status: 500 }
      );
    }

    await sendLeadNotificationEmails(row);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[leads] Server error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error && err.message.includes("SUPABASE")
            ? "Lead capture is not configured yet. Please email hello@thebridgely.com."
            : "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
