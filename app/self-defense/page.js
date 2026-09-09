import Link from "next/link";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Self-Defense in Thirty Days | Jon-Michael Kerestes",
  description:
    "Thirty days from nothing to able to protect yourself: three days in person, then twenty-seven days of daily drills reviewed on video.",
  path: "/self-defense",
});

const PROOF =
  "Three years as a resident athlete at the Olympic Training Center. Ranked sixth in the country in judo. Wrestler at the Air Force Academy.";

export default function SelfDefense() {
  return (
    <>
      {/* first screen */}
      <section className="section-first">
        <div className="measure-wide">
          <Fade>
            <div className="eyebrow">Self-defense</div>
          </Fade>
          <Fade delay={80}>
            <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
              Thirty days. From nothing to able to protect yourself.
            </h1>
          </Fade>
          <Fade delay={140}>
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Three days with me in person, then twenty-seven days of daily drills that I review on
              video. You arrive never having been taught to stand, move, or hold your ground. You
              leave knowing how to keep your balance when someone grabs you, how to break a grip, how
              to get off the ground, how to control a person who is trying to control you, and how to
              hit. The same footwork and balance underneath wrestling, judo, and boxing, taught once
              and applied to all of them.
            </p>
          </Fade>
          <Fade delay={200}>
            <p className="proof">{PROOF}</p>
          </Fade>
        </div>
      </section>

      {/* who this is for */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Who this is for.</h2>
          <p className="body-text measure">
            A daughter leaving for college. Someone living alone for the first time in years. A
            family after a break-in. A person who travels. Anyone who has none of this and wants it
            fast.
          </p>
        </section>
      </Fade>

      {/* terms + apply */}
      <Fade>
        <section className="section">
          <p className="body-text measure" style={{ marginBottom: "2rem" }}>
            Three days in Pittsburgh or where you live. $15,000, travel inside the United States
            included. Families, ask.
          </p>
          <Link href="/apply?program=self-defense" className="btn">Apply</Link>
        </section>
      </Fade>
    </>
  );
}
