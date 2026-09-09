import Link from "next/link";
import Fade from "./components/Fade";
import { pageMeta } from "./lib/meta";

export const metadata = pageMeta({
  title: "Jon-Michael Kerestes | Thirty Days. Your Body, Back Under Your Own Command.",
  description:
    "A thirty-day program that puts your health back in your own hands, read daily by a former Olympic Training Center resident athlete and Air Force Academy wrestler. Four people at a time. In person anywhere, or on video.",
  path: "/",
});

const PROOF =
  "Three years as a resident athlete at the Olympic Training Center. Ranked sixth in the country in judo. Wrestler at the Air Force Academy.";

export default function Home() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;

  return (
    <>
      {/* SECTION 1 — first screen */}
      <section className="section-first">
        <div className="hero-grid">
          <div className="measure">
            <Fade>
              <div className="eyebrow">Physical Integration</div>
            </Fade>
            <Fade delay={80}>
              <h1 className="title serif" style={{ marginBottom: "1.75rem" }}>
                Thirty days. Your body, back under your own command.
              </h1>
            </Fade>
            <Fade delay={140}>
              <p className="lead" style={{ marginBottom: "1.75rem" }}>
                You tell me what you want to be different and by when. Every morning for thirty days I
                read your numbers and tell you the one thing that changes today. You do it. By day
                thirty the scale, your blood pressure, your resting heart rate, and the mirror have
                moved, and you know why each one moved, so it stays yours after the month ends. I take
                four people at a time.
              </p>
            </Fade>
            <Fade delay={200}>
              <p className="proof" style={{ marginBottom: "2.25rem" }}>{PROOF}</p>
            </Fade>
            <Fade delay={260}>
              <Link href="/apply" className="btn">Apply for the thirty days</Link>
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

      {/* SECTION 3 — who this is for */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Who this is for.</h2>
          <p className="body-text measure">
            A wedding in eight weeks. A number from your doctor you did not expect. A body you no
            longer recognize after building a company. The wish to hand the whole thing to one
            person who knows what he is doing and simply do what he says. Different reasons, same
            month.
          </p>
        </section>
      </Fade>

      {/* SECTION 4 — what happens */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>What happens.</h2>
          <p className="body-text measure">
            Day one, we meet for an hour and I build your plan from what you want, your history, and
            your numbers. Every morning you send your weight, sleep, resting heart rate, and photos
            of what you ate, and every morning you get back exactly what changes today. Twice a week
            we talk for twenty-five minutes. Every Friday you get a written review of the week. Day
            thirty, we look at the numbers side by side and decide together whether you continue with
            me on a lighter footing.
          </p>
        </section>
      </Fade>

      {/* SECTION 5 — where this comes from */}
      <Fade>
        <section className="section">
          <div className="split">
            <img className="about-photo" src="/jon-michael.jpg" alt="Jon-Michael Kerestes" />
            <div>
              <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Where this comes from.</h2>
              <p className="body-text">
                I spent three years as a resident athlete at the Olympic Training Center in Colorado
                Springs and was ranked sixth in the country in judo. I wrestled at the Air Force
                Academy and served as an Air Force captain. I have coached since 2004. Since then I
                have trained several years of jiu-jitsu and kept studying strength, speed, nutrition,
                the mechanics of boxing and sprinting, and how people actually change. Everything I do
                with a client comes from having run a body at the highest level anyone runs one, and
                from twenty years of watching what makes a change hold.
              </p>
            </div>
          </div>
        </section>
      </Fade>

      {/* SECTION 6 — self-defense crosslink + button */}
      <Fade>
        <section className="section">
          <p className="crosslink" style={{ marginBottom: "2rem" }}>
            Also: <Link href="/self-defense">thirty days from nothing to able to protect yourself.</Link>
          </p>
          <Link href="/apply" className="btn">Apply for the thirty days</Link>
        </section>
      </Fade>
    </>
  );
}
