import Link from "next/link";
import Fade from "../components/Fade";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "Self-Defense From Zero | Jon-Michael Kerestes",
  description:
    "For adults who feel unsafe and were never taught anything. Three days in person with a former Olympic Training Center athlete and Air Force Academy wrestler, then a month of coached drills and a year of support.",
  path: "/self-defense",
});

const CREDENTIALS =
  "Olympic Training Center resident athlete · Ranked sixth in the country in judo · Air Force Academy wrestler · Coaching since 2004";

export default function SelfDefense() {
  return (
    <>
      {/* first screen */}
      <section className="section-first">
        <div className="measure-wide">
          <Fade>
            <div className="eyebrow" style={{ letterSpacing: "0.12em", lineHeight: 1.6, marginBottom: "1.75rem" }}>
              {CREDENTIALS}
            </div>
          </Fade>
          <Fade delay={80}>
            <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
              You feel unsafe. I know exactly how to change that.
            </h1>
          </Fade>
          <Fade delay={140}>
            <p className="lead">
              I start by finding out where you actually are: your body, your health, what you are
              afraid of, and what you would do today if someone grabbed you. Then I guide you,
              quickly, to use your body in ways you never have, until being in public stops feeling
              like a risk. The people who come to me for this are adults who were never taught
              anything, are more afraid than they admit, and are not in the shape they want to be.
              That is the starting point I know best.
            </p>
          </Fade>
        </div>
      </section>

      {/* who this is for */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Who this is for.</h2>
          <p className="body-text measure">
            Adults who were never taught anything. Someone who travels alone. Someone living alone for
            the first time in years. A family after a break-in. Anyone who wants this handled.
          </p>
        </section>
      </Fade>

      {/* what happens */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>What happens.</h2>
          <p className="body-text measure">
            The first day I assess what your body can do now and what you do when you are grabbed,
            pushed, or put on the ground. By the end of the three days you know what to do in the
            moments you have been afraid of: the grab, the shove, being on the ground, someone in your
            space who will not leave. Over the month we make it automatic with short daily drills, and
            you get stronger and steadier along the way. After that, I am a video away for the rest of
            the year.
          </p>
        </section>
      </Fade>

      {/* structure + apply */}
      <Fade>
        <section className="section">
          <p className="body-text measure" style={{ marginBottom: "2rem" }}>
            Three days together in person, where you live or in Pittsburgh. Then I stay with you:
            daily drills I review on video through the first month, and for the rest of the year you
            send me a video whenever something feels uncertain and I answer within a day. $15,000 plus
            travel. Families, ask.
          </p>
          <Link href="/apply?program=self-defense" className="btn">Apply</Link>
        </section>
      </Fade>
    </>
  );
}
