import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/meta";

const DESCRIPTION =
  "A thirty-day personal health and body transformation run daily by a former Olympic Training Center resident athlete and Air Force Academy wrestler. In person anywhere, or on video.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jon-Michael Kerestes | Thirty Days. I Take Charge of Your Body.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
