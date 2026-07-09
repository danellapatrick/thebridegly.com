export type BookCallSource =
  | "navbar"
  | "navbar_mobile"
  | "hero"
  | "services"
  | "problem"
  | "contact";

export type OnBookCall = (source: BookCallSource) => void;

export type NavClickLocation = "navbar" | "navbar_mobile" | "footer";

export type OutboundLinkType = "email" | "social" | "calendly" | "external";

/** GTM Custom Event trigger name — all site events use this single envelope. */
export const GTM_TRIGGER_EVENT = "analytics" as const;

/**
 * Event names sent as `event_name` in the dataLayer.
 * New events only require a code change — no GTM dashboard updates.
 */
export const ANALYTICS_EVENTS = [
  "page_view",
  "section_view",
  "book_call_click",
  "calendly_modal_open",
  "calendly_modal_close",
  "nav_click",
  "outbound_click",
  "cta_click",
  "generate_lead",
  "lead_form_error",
  "insights_carousel_select",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[number];

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function pushGtmEvent(
  eventName: AnalyticsEventName | string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || !GTM_ID) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: GTM_TRIGGER_EVENT,
    event_name: eventName,
    ...params,
  });
}

export function trackNavClick(
  linkLabel: string,
  linkHref: string,
  location: NavClickLocation
): void {
  pushGtmEvent("nav_click", {
    link_label: linkLabel,
    link_href: linkHref,
    location,
  });
}

export function trackOutboundClick(
  linkUrl: string,
  linkType: OutboundLinkType,
  location: string
): void {
  pushGtmEvent("outbound_click", {
    link_url: linkUrl,
    link_type: linkType,
    location,
  });
}

export function trackCtaClick(
  section: string,
  ctaType: string,
  ctaLabel?: string
): void {
  pushGtmEvent("cta_click", {
    section,
    cta_type: ctaType,
    ...(ctaLabel ? { cta_label: ctaLabel } : {}),
  });
}

export function trackSectionView(sectionId: string, sectionLabel?: string): void {
  pushGtmEvent("section_view", {
    section_id: sectionId,
    ...(sectionLabel ? { section_label: sectionLabel } : {}),
  });
}
