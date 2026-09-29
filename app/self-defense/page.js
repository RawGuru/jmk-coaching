import Link from "next/link";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Jon-Michael Kerestes | Thirty Days. Self-Defense from Zero.",
  description:
    "Thirty days of self-defense from zero: three days in person, then twenty-seven days of drills reviewed on video. $15,000 plus travel.",
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
              Thirty days. Self-defense from zero.
            </h1>
          </Fade>
          <Fade delay={140}>
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Three days with me in person, then twenty-seven days of daily drills that I review on
              video. You arrive never having been taught to stand, move, or hold your ground. You
              practice until you can keep your balance when someone grabs you, break a grip, get off
              the ground, control a person who is trying to control you, and hit. The same footwork
              and balance underneath wrestling, judo, and boxing, taught once and applied to all of
              them.
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
            Three days in person, where you live or in Pittsburgh, then twenty-seven days of drills I
            review on video. $15,000 plus travel. Families, ask.
          </p>
          <Link href="/apply?program=self-defense" className="btn">Apply</Link>
        </section>
      </Fade>
    </>
  );
}
