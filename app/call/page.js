import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Let's Talk | Jon-Michael Kerestes",
  description: "Book a twenty-minute call. I read every application the day it arrives.",
  path: "/call",
  index: false,
});

export default function Call() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  return (
    <section className="section-first">
      <Fade>
        <div className="measure">
          <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
            Let&rsquo;s talk for twenty minutes.
          </h1>
          <p className="lead">
            I read every application the day it arrives and reply with three times. I will have read
            yours before we speak.
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
