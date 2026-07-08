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

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function pushGtmEvent(
  event: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || !GTM_ID) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
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
