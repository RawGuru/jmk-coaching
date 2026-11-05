import Link from "next/link";
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
              These are past clients describing their own experience, in their own words,
              reproduced verbatim from Jon-Michael&rsquo;s public five-star reviews. They are
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
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.5rem" }}>
              Want this kind of attention on your goal?
            </h2>
            <p className="lead" style={{ marginBottom: "2rem" }}>
              Tell me what you want to be different and what is driving it. I read every application
              personally.
            </p>
            <Link href="/apply" className="btn">Apply</Link>
          </div>
        </section>
      </Fade>
    </>
  );
}
