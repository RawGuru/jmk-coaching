import Link from "next/link";
import Fade from "./components/Fade";
import Testimonials from "./components/Testimonials";
import { reviews } from "./lib/reviews";
import { pageMeta } from "./lib/meta";

export const metadata = pageMeta({
  title: "Jon-Michael Kerestes | Private Coaching",
  description:
    "Get a former Olympic Training Center athlete on your team. Private coaching for strength, movement, food, and physical skill, in person or on video from anywhere.",
  path: "/",
});

const CREDENTIALS =
  "Ranked sixth in the country in judo · Air Force Academy wrestler · Coaching since 2004";

export default function Home() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;

  return (
    <>
      {/* SECTION 1 — first screen */}
      <section className="section-first">
        <div className="hero-grid">
          <div className="measure">
            <Fade>
              <div className="eyebrow" style={{ letterSpacing: "0.12em", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                {CREDENTIALS}
              </div>
            </Fade>
            <Fade delay={80}>
              <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
                Get a former Olympic Training Center athlete on your team.
              </h1>
            </Fade>
            <Fade delay={140}>
              <p className="lead" style={{ marginBottom: "2.25rem" }}>
                For strength, movement, food, and physical skill, in person or on video from anywhere.
                You say what you want to work on, and every morning you get back what to keep, what to
                change, and what to watch.
              </p>
            </Fade>
            <Fade delay={260}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center" }}>
                <Link href="/apply?program=private" className="btn">Apply</Link>
                <Link href="/services" className="crosslink">
                  <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>
                    Ways to work together
                  </span>
                </Link>
              </div>
            </Fade>
          </div>
          <img className="hero-photo" src="/jon-michael.jpg" alt="Jon-Michael Kerestes" />
        </div>
      </section>

      {/* SECTION 2 — video, only when configured */}
      {videoUrl && (
        <Fade>
          <section className="section">
            <h2 className="h2 serif measure">Watch how I think about one person&rsquo;s problem.</h2>
            <div className="embed">
              <iframe
                src={videoUrl}
                title="Watch how I think about one person's problem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        </Fade>
      )}

      {/* SECTION 3 — the month */}
      <Fade>
        <section className="section" id="the-month">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>What the month looks like.</h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              One hour on day one builds your plan from what you want and where you are. Every morning
              you send the two or three things that matter and get back what to keep, what to change,
              and what to watch. We talk live twice a week, you get a written review every Friday, and
              on day thirty you get a written plan you can run yourself, with a year of follow-up from me.
            </p>
            <p className="body-text" style={{ marginBottom: "2.25rem" }}>
              $10,000 for the month, with the year of follow-up included.
            </p>
            <Link href="/apply?program=private" className="btn">Apply</Link>
          </div>
        </section>
      </Fade>

      {/* SECTION 4 — other ways */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Other ways to work with me.</h2>
            <p className="body-text">
              In person in your city, for a day or several.{" "}
              <Link href="/in-person" className="crosslink">
                <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>Request your city.</span>
              </Link>{" "}
              Self-defense from zero: three days in person, a month of coached drills, and a year of
              support.{" "}
              <Link href="/self-defense" className="crosslink">
                <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>See self-defense.</span>
              </Link>{" "}
              Smaller remote options, from a single answered question to ongoing guidance.{" "}
              <Link href="/services" className="crosslink">
                <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>See all of them.</span>
              </Link>
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 4b — testimonials */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "2rem" }}>What clients say.</h2>
          <Testimonials reviews={["Rob M.", "Kayli K."].map((a) => reviews.find((r) => r.author === a))} clamp={false} />
          <p style={{ marginTop: "2rem" }}>
            <Link href="/reviews" className="crosslink">
              <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>
                Read more of what clients say.
              </span>
            </Link>
          </p>
        </section>
      </Fade>

      {/* SECTION 5 — who I am */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Who I am.</h2>
            <p className="body-text">
              I spent three years training judo as a resident athlete at the Olympic Training Center,
              was ranked sixth in the United States, wrestled at the Air Force Academy, and served as
              an Air Force captain. I&rsquo;ve coached since 2004. That experience has given me
              practical tools for teaching physical skill and an enduring interest in how individual
              people learn, make choices, build habits, and discover what they enjoy doing.
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 6 — close */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "2.25rem" }}>
              Tell me what you want to be different.
            </h2>
            <Link href="/apply?program=private" className="btn">Apply</Link>
            <p className="crosslink" style={{ marginTop: "2rem" }}>
              Also: <Link href="/self-defense">self-defense, from zero.</Link>
            </p>
          </div>
        </section>
      </Fade>
    </>
  );
}
