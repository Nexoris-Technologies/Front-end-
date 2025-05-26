import { type Metric } from "web-vitals";

export function reportWebVitals(metric: Metric) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      value:
        metric.name === "CLS"
          ? Math.round(metric.value * 1000)
          : Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}
