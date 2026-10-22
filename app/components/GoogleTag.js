import Script from "next/script";

// Google tag for the ad test. Renders nothing until NEXT_PUBLIC_GOOGLE_TAG_ID
// (for example AW-123456789) is set in Vercel and the site is redeployed.
const TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

export default function GoogleTag() {
  if (!TAG_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${TAG_ID}');`}
      </Script>
    </>
  );
}
