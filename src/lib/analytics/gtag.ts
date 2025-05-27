export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Ensure gtag is defined on window
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Track pageviews
export function pageview(url: string): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Track custom events
interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export function event({ action, category, label, value }: GTagEvent): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
