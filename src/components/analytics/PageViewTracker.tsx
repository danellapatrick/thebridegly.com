"use client";

import { useEffect } from "react";
import { pushGtmEvent } from "@/lib/analytics/gtm";

export default function PageViewTracker() {
  useEffect(() => {
    pushGtmEvent("page_view", {
      page_path: window.location.pathname + window.location.hash,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  return null;
}
