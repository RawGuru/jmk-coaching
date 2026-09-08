import "./globals.css";

const SITE_URL = "https://jmkerestes.com";
const DESCRIPTION =
  "Private coaching in movement, nourishment, and recovery. Three years at the Olympic Training Center, Air Force Academy graduate, ranked sixth nationally in judo, coaching since 2004. In person anywhere in the world or on video.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jon-Michael Kerestes | Physical Integration Coaching",
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Jon-Michael Kerestes | Physical Integration Coaching",
    description: DESCRIPTION,
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon-Michael Kerestes | Physical Integration Coaching",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jon-Michael Kerestes",
  jobTitle: "Coach",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  description: DESCRIPTION,
  knowsAbout: [
    "judo",
    "grappling",
    "movement",
    "strength training",
    "recovery",
    "nutrition",
    "breathing",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
