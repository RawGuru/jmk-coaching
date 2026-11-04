import Fade from "../components/Fade";
import Testimonials from "../components/Testimonials";
import { reviews } from "../lib/reviews";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "What Clients Say | Jon-Michael Kerestes",
  description:
    "First-person accounts from people Jon-Michael has coached, in their own words.",
  path: "/reviews",
});

export default function Reviews() {
  return (
    <>
      <section className="section-first">
        <Fade>
          <div className="measure" style={{ marginBottom: "2.5rem" }}>
            <div className="eyebrow">In their own words</div>
            <h1 className="title serif" style={{ marginBottom: "1.5rem" }}>
              What people say after working with me.
            </h1>
            <p className="lead">
              These are past clients describing their own experience, in their own words. They are
              individual accounts, not a promise of what your own results will be.
            </p>
          </div>
        </Fade>
      </section>
      <Fade>
        <section className="section">
          <Testimonials reviews={reviews} />
        </section>
      </Fade>
    </>
  );
}
