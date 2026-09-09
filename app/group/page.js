import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "The Thirty Days, in a Group of Ten | Jon-Michael Kerestes",
  description: "The same daily plan and daily adjustments in a group of ten, one live hour with me each week.",
  path: "/group",
  index: false,
});

export default function Group() {
  const paymentUrl = process.env.NEXT_PUBLIC_GROUP_PAYMENT_URL;
  return (
    <section className="section-first">
      <Fade>
        <div className="measure">
          <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
            The same thirty days, in a group of ten.
          </h1>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            The same daily plan and daily adjustments, one live hour with me each week, the
            group&rsquo;s questions answered together. Ten seats per month. $2,500.
          </p>
          {paymentUrl ? (
            <a href={paymentUrl} className="btn" target="_blank" rel="noopener noreferrer">
              Take a seat
            </a>
          ) : (
            <p className="body-text">
              Your application is in. You will hear from me within a day with your seat.
            </p>
          )}
        </div>
      </Fade>
    </section>
  );
}
