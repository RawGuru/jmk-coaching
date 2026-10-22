// Reports a submitted application to Google Ads as a conversion.
// Does nothing until NEXT_PUBLIC_GOOGLE_ADS_CONVERSION (for example
// AW-123456789/AbCdEfGhIj, copied from the Google Ads conversion action)
// is set in Vercel and the site is redeployed.
const SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION;

export function reportConversion(program) {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || typeof window.gtag !== "function" || !SEND_TO) {
      resolve();
      return;
    }
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    window.gtag("event", "conversion", {
      send_to: SEND_TO,
      program,
      transport_type: "beacon",
      event_callback: finish,
    });
    // Never hold the visitor on the form longer than one second.
    setTimeout(finish, 1000);
  });
}
