import ApplyForm from "../components/ApplyForm";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Apply | Jon-Michael Kerestes",
  description:
    "Apply to work with Jon-Michael, from a single question to the private month, self-defense, or in-person work. He reads every application personally.",
  path: "/apply",
});

// searchParams makes the correct program preselect on the server, so the right
// service and price acknowledgment render on first paint (before hydration)
// when a visitor follows a service link such as /apply?program=virtual.
export default function Apply({ searchParams }) {
  const program = typeof searchParams?.program === "string" ? searchParams.program : undefined;
  return (
    <section className="section-first">
      <Fade>
        <div className="measure" style={{ marginBottom: "2.5rem" }}>
          <div className="eyebrow">Apply</div>
          <h1 className="title serif" style={{ marginBottom: "1.5rem" }}>
            Apply to work with me.
          </h1>
          <p className="lead">
            Tell me what you want to be different and what is driving it. I read every application
            personally and reply with times to talk.
          </p>
        </div>
      </Fade>
      <Fade delay={120}>
        <ApplyForm key={program || "default"} defaultProgram={program} />
      </Fade>
    </section>
  );
}
