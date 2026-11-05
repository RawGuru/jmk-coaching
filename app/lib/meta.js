export const SITE_URL = "https://www.jmkerestes.com";
// Defaults to the live Formspree form. Overridable via env so controlled tests
// can point submissions at a local mock instead of the production inbox.
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xeergpqw";

// Build a consistent per-page metadata object.
export function pageMeta({ title, description, path = "/", index = true }) {
  const url = path === "/" ? SITE_URL : SITE_URL + path;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: index },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
