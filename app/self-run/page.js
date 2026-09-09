import SelfRunForm from "../components/SelfRunForm";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "The Thirty Days, On Your Own Schedule | Jon-Michael Kerestes",
  description: "Every day's plan and every explanation, recorded. Opening after the first group finishes.",
  path: "/self-run",
  index: false,
});

export default function SelfRun() {
  return (
    <section className="section-first">
      <Fade>
        <div className="measure">
          <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
            The thirty days, on your own schedule.
          </h1>
          <p className="lead" style={{ marginBottom: "2.25rem" }}>
            Every day&rsquo;s plan and every explanation, recorded. $400. Opening after the first
            group finishes.
          </p>
        </div>
      </Fade>
      <Fade delay={120}>
        <SelfRunForm />
      </Fade>
    </section>
  );
}
