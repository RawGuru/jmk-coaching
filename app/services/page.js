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
      "One expert answer, without committing to a program. Send one specific question, problem, or short video: a movement you want checked, a decision you are stuck on, a plan you want a second opinion on. I study it myself and send back a written answer with concrete next steps. One submission, one considered reply. It is a single exchange, not an ongoing conversation and not a built-from-scratch plan.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply?program=question",
  },
  {
    title: "Ongoing remote guidance.",
    body:
      "An expert in your corner on a set rhythm. You send training, technique, or a problem as it comes up through voice and video messages, and I respond on the cadence we agree, for example weekly. It is asynchronous by design: steady feedback and course-correction, without scheduled live calls and without a full plan built around you. For people already moving who want an experienced eye on the work.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply?program=remote",
  },
  {
    title: "Private virtual coaching.",
    body:
      "A full coaching relationship, entirely on video. We assess where you actually are, agree on a plan, talk live on a regular schedule, and I adjust the plan as your body and your life change. It is the depth of the private month, held over a longer, steadier timeline instead of one intensive month, from anywhere in the world. Open-ended and paced to you.",
    price: "Ask for a proposal",
    cta: "Ask for a proposal",
    href: "/apply?program=virtual",
  },
  {
    title: "The private month.",
    body:
      "My daily attention, for a month, then a year within reach. One hour on day one builds your plan from what you want and where you are. Every morning you send the two or three things that matter and get back what to keep, what to change, and what to watch. Live conversations twice a week, a written review every Friday, and on day thirty a written plan you can run yourself, with a year of follow-up included.",
    price: "$10,000 for the month, with the year of follow-up included.",
    cta: "Apply",
    href: "/apply?program=private",
  },
  {
    title: "In person, in your city.",
    body:
      "Me, with you, in the same room. Individual sessions, a single intensive day, or multi-day work, where you live or where we arrange to meet. Physical training, movement, practical skills, or direct coaching, handled hands-on. Scope, dates, and travel are agreed before anything is booked. Remote and in-person work use different resources and are priced differently.",
    price: "Ask for a proposal",
    cta: "Request your city",
    href: "/in-person",
  },
  {
    title: "Self-defense from zero.",
    body:
      "For adults who were never taught, and feel it. Three days in person to build real, usable skill from nothing, then a month of short daily drills I review on video, and a year of support after. The work is realistic about raising your preparedness and your confidence. It is not a promise of safety and not a martial-arts belt path.",
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
