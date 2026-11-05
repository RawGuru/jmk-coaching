// Reports Google Ads conversions. Everything here is inert until the matching
// env var is set in Vercel and the site is redeployed.
//
// NEXT_PUBLIC_GOOGLE_ADS_CONVERSION       send_to for a submitted application
//                                         (fired from the form, the real buyer
//                                         signal), e.g. AW-123456789/AbCdEfGhIj
// NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION   optional. send_to fired on a /call
//                                         page load (the "page load of /call =
//                                         1 conversion" spec). Use EITHER this OR
//                                         the submit var above for the same
//                                         conversion action, never both, or you
//                                         will double-count.
const SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION;
const CALL_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION;

// Conversions fire only on a production deployment. Preview deployments and
// local/test builds never report to Google Ads, even if the conversion env
// vars are present. This is driven by the build environment (see
// next.config.mjs), not by any request-time or URL input, so it cannot be
// turned on or off from a link.
const IS_PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

function send(sendTo, params) {
  return new Promise((resolve) => {
    if (
      typeof window === "undefined" ||
      typeof window.gtag !== "function" ||
      !sendTo ||
      !IS_PRODUCTION
    ) {
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
      send_to: sendTo,
      transport_type: "beacon",
      event_callback: finish,
      ...params,
    });
    // Never hold the visitor longer than one second.
    setTimeout(finish, 1000);
  });
}

// Fired on a successful application submit.
export function reportConversion(program) {
  return send(SEND_TO, { program });
}

// Fired on a /call page load (optional alternative spec).
export function reportCallConversion() {
  return send(CALL_SEND_TO, {});
}
