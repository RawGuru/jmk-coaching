import Link from "next/link";
import Fade from "./components/Fade";
import Testimonials from "./components/Testimonials";
import { reviews, featuredAuthors } from "./lib/reviews";
import { pageMeta } from "./lib/meta";

export const metadata = pageMeta({
  title: "Jon-Michael Kerestes | Personal Coaching on Movement, Habits, and Skill",
  description:
    "Personal coaching on movement, food habits, physical skill, and self-defense with a former Olympic Training Center judoka and Air Force Academy wrestler. The approach follows your actual situation, not a predetermined program.",
  path: "/",
});

const CREDENTIALS =
  "Olympic Training Center resident athlete · Ranked sixth in the country in judo · Air Force Academy wrestler · Coaching since 2004";

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
                If a plan only works when you force yourself to follow it, what exactly has it solved?
              </h1>
            </Fade>
            <Fade delay={140}>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                Wanting a result and wanting the life that produces it are different things. Someone
                can sincerely want to be stronger and dread every workout. Someone can want to eat
                differently and experience every meal as another set of rules. Someone else may simply
                want an experienced person to take charge of decisions for a while. These are different
                situations, and they deserve different approaches.
              </p>
            </Fade>
            <Fade delay={200}>
              <p className="body-text" style={{ marginBottom: "2.25rem" }}>
                I work personally with people on movement, food habits, physical skill, self-defense,
                and the ways their days actually feel. Sometimes the useful work is discipline and
                direction. Sometimes it is discovering how an activity can become something worth
                returning to. The question is what matters for the person in front of me, and what we
                learn by trying.
              </p>
            </Fade>
            <Fade delay={260}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center" }}>
                <a href="#useful-question" className="btn">A useful question</a>
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

      {/* SECTION 3 — a useful question */}
      <Fade>
        <section className="section" id="useful-question">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>
              Before demanding more willpower, examine what you are asking it to overcome.
            </h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              Choose one thing you intend to do but keep resisting. Ask what, exactly, you resist: the
              activity, its intensity, the time, the place, the company, or the feeling that you are
              being graded? Those are different problems. Change one condition and notice whether you
              want to return tomorrow. You have tested something more useful than whether you can force
              yourself through another day.
            </p>
            <p className="body-text">
              Some valuable things remain difficult, and some commitments need discipline. But before
              prescribing more of it, find out whether the struggle is necessary. Keep the distinction
              even if we never meet.
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 4 — what working together can look like */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>
              What working together can look like.
            </h2>
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              It may be one considered response to a question, a continuing exchange of voice or video
              messages, regular private conversations, or concentrated work together in person. If you
              want me to set the structure and make the next decisions, we can work that way. If you
              want to investigate and choose together, we can work that way too. The form of the
              relationship follows what we discover about your situation.
            </p>
            <p className="body-text">
              That can mean practical self-defense from the beginning, hands-on physical instruction,
              remote work by voice and video from anywhere, or private engagements arranged in your own
              city.{" "}
              <Link href="/services" className="crosslink">
                <span style={{ borderBottom: "1px solid var(--clay)", color: "var(--clay)" }}>
                  See the ways to work together.
                </span>
              </Link>
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 4b — testimonials */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "2rem" }}>What clients say.</h2>
          <Testimonials reviews={reviews.filter((r) => featuredAuthors.includes(r.author))} />
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
            <p className="body-text" style={{ marginBottom: "1.5rem" }}>
              I spent three years training judo as a resident athlete at the Olympic Training Center,
              was ranked sixth in the United States, wrestled at the Air Force Academy, and served as
              an Air Force captain. I&rsquo;ve coached since 2004. That experience has given me
              practical tools for teaching physical skill and an enduring interest in how individual
              people learn, make choices, build habits, and discover what they enjoy doing.
            </p>
            <p className="body-text">
              I don&rsquo;t assume I know what matters to you before we speak. I can bring attention,
              experience, observation, instruction, and direct guidance. We find out what those can
              contribute by engaging with your actual situation.
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 6 — a conversation can be the beginning */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>
              A conversation can be the beginning.
            </h2>
            <p className="lead" style={{ marginBottom: "2.25rem" }}>
              Tell me what you&rsquo;re curious about, working toward, or trying to understand. If
              working together looks promising, we&rsquo;ll find a useful way to begin.
            </p>
            <Link href="/apply?program=not-sure" className="btn">Tell me what brings you here</Link>
            <p className="crosslink" style={{ marginTop: "2rem" }}>
              Also: <Link href="/self-defense">self-defense, from zero.</Link>
            </p>
          </div>
        </section>
      </Fade>
    </>
  );
}
