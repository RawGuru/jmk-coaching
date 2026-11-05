import Fade from "../components/Fade";
import CallConversion from "../components/CallConversion";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Your Application Is In | Jon-Michael Kerestes",
  description: "I read every application the day it arrives. If it is a fit, I reply with a few proposed times.",
  path: "/call",
  index: false,
});

export default function Call() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  return (
    <section className="section-first">
      <CallConversion />
      <Fade>
        <div className="measure">
          <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
            Your application is in.
          </h1>
          <p className="lead">
            I read every application personally, the day it arrives. If it is a fit, I reply with a
            few proposed times for a short call: what you want, whether this format fits, and whether
            I am the right person. If it is not the right fit, I will tell you that too. The plan is
            built after you decide, not on the call.
          </p>
        </div>
      </Fade>
      {bookingUrl && (
        <Fade delay={120}>
          <div className="embed">
            <iframe src={bookingUrl} title="Book a call" allow="fullscreen" />
          </div>
        </Fade>
      )}
    </section>
  );
}
