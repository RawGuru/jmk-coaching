import ApplyForm from "../components/ApplyForm";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Apply for the Thirty Days | Jon-Michael Kerestes",
  description:
    "Apply for the thirty-day body transformation or the thirty-day self-defense program. I read every application personally.",
  path: "/apply",
});

export default function Apply() {
  return (
    <section className="section-first">
      <Fade>
        <div className="measure" style={{ marginBottom: "2.5rem" }}>
          <div className="eyebrow">Apply</div>
          <h1 className="title serif" style={{ marginBottom: "1.5rem" }}>
            Apply for the thirty days.
          </h1>
          <p className="lead">
            Tell me what you want to be different and what is driving it. I read every application
            personally and reply with times to talk.
          </p>
        </div>
      </Fade>
      <Fade delay={120}>
        <ApplyForm />
      </Fade>
    </section>
  );
}
