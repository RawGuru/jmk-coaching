import Link from "next/link";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Ways to Work Together | Jon-Michael Kerestes",
  description:
    "From a single question to a private month or in-person work in your city. Choose how much of Jon-Michael's individual attention you want.",
  path: "/services",
});

const SERVICES = [
  {
    title: "A single question, answered.",
    body:
      "Send me one specific question, problem, or short video, for example a movement you want checked, a training question, or a place you keep getting stuck. I review it personally and send back a considered response with concrete next steps. One submission, one reply.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply",
  },
  {
    title: "Ongoing remote guidance.",
    body:
      "A continuing relationship with agreed access to me through voice messages, video submissions, and questions. You send technique, training changes, or an emerging problem on a rhythm we set, and I respond. A defined cadence, not unlimited instant access.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply",
  },
  {
    title: "Private virtual coaching.",
    body:
      "A substantial individualized relationship: assessment, live conversations, a plan, continued feedback, and real adjustments as you progress. More than occasional guidance. We work your actual situation over time, on video from anywhere.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply",
  },
  {
    title: "The private month.",
    body:
      "We start with an hour that builds your plan from what you want and where you actually are. Each morning you send the few things that matter for your goal and get back what to keep, what to change, and what to watch. Live conversations through the week, a written review each Friday, and at the end a written plan you can run yourself, with the rest of the year within reach.",
    price: "$10,000 for the month, with the year of follow-up included.",
    cta: "Apply",
    href: "/apply?program=private",
  },
  {
    title: "In person, in your city.",
    body:
      "Individual sessions, intensive days, or multi-day work, where you live or where we arrange to meet. Physical training, movement, practical skills, or direct coaching, handled in person. Remote and in-person work use different resources and are priced differently.",
    price: "Ask for a proposal",
    cta: "Request your city",
    href: "/in-person",
  },
  {
    title: "Self-defense from zero.",
    body:
      "Three days in person, then a month of coached daily drills I review on video, and support across the year. For adults who were never taught and want to build real, practical capability. Realistic about increasing your preparedness, not a promise of safety.",
    price: "$15,000 plus travel. Families, ask.",
    cta: "See self-defense",
    href: "/self-defense",
  },
];

export default function Services() {
  return (
    <>
      <section className="section-first">
        <Fade>
          <div className="measure" style={{ marginBottom: "2.5rem" }}>
            <div className="eyebrow">Ways to work together</div>
            <h1 className="title serif" style={{ marginBottom: "1.5rem" }}>
              From one question to a private month, you choose how much of my attention you want.
            </h1>
            <p className="lead">
              You bring the goal. I bring the judgment, the teaching, and the attention. Here are the
              ways to buy that attention, in rising order of involvement.
            </p>
          </div>
        </Fade>
      </section>

      <Fade>
        <section className="section">
          <div className="menu-grid">
            {SERVICES.map((s) => {
              const ask = s.price === "Ask for a proposal";
              return (
                <div className="menu-card" key={s.title}>
                  <h2 className="h2 serif">{s.title}</h2>
                  <p className="body-text menu-body">{s.body}</p>
                  <p className={`menu-price${ask ? " ask" : ""}`}>{s.price}</p>
                  <Link href={s.href} className="btn" style={{ alignSelf: "flex-start" }}>
                    {s.cta}
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="proof" style={{ marginTop: "2rem" }}>
            Prices shown are set. Everything marked &ldquo;Ask for a proposal&rdquo; is scoped to you
            before any number is quoted.
          </p>
        </section>
      </Fade>
    </>
  );
}
