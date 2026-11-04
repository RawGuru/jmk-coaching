// Marketing-source attribution. Captured once on first page load into
// sessionStorage (UTM params are usually lost after the first in-site click),
// then attached to every form submission so leads carry their source.

const KEY = "jmk_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"];

export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return; // first touch wins
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) data[k] = v;
    }
    data.landing_page = window.location.pathname;
    data.referrer = document.referrer || "";
    data.captured_at = new Date().toISOString();
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode, etc.) — skip silently.
  }
}

export function getAttribution() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
