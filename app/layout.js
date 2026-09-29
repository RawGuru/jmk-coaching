import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/meta";

const DESCRIPTION =
  "Private coaching from a former Olympic Training Center resident athlete, ranked sixth in the country in judo. Tell him what you want to change and by when; each morning he reads the few numbers that matter and tells you what to keep, change, and watch. Four people at a time.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jon-Michael Kerestes | Private Coaching. You Know What You Want Your Body to Be.",
  description: DESCRIPTION,
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
        <div className="container">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
