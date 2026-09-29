import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/meta";

const DESCRIPTION =
  "Thirty days of private coaching. You choose what to change and by when; each morning he reads the few numbers that matter for your goal and tells you what to keep, change, and watch. Former Olympic Training Center resident athlete, ranked sixth in the country in judo. Four people at a time. In person anywhere, or on video.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jon-Michael Kerestes | Thirty-Day Private Coaching. You Choose the Result.",
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
