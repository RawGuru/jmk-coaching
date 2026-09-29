import Link from "next/link";
import Fade from "./components/Fade";
import { pageMeta } from "./lib/meta";

export const metadata = pageMeta({
  title: "Jon-Michael Kerestes | Private Coaching. You Know What You Want Your Body to Be.",
  description:
    "Private coaching from a former Olympic Training Center resident athlete, ranked sixth in the country in judo. Tell him what you want to change and by when; each morning he reads the few numbers that matter and tells you what to keep, change, and watch. Four people at a time.",
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
                You know what you want your body to be. Getting it there is what I do.
              </h1>
            </Fade>
            <Fade delay={140}>
              <p className="lead" style={{ marginBottom: "1.75rem" }}>
                Tell me what you want to change and by when. Each morning you send me the two or three
                things we agreed matter for your goal, which takes about two minutes. I read them and
                tell you what to keep, what to change, and what to watch next. The next morning we
                adjust from what your body actually did. The first month is daily. After that I stay
                reachable for the rest of the year. I take four people at a time.
              </p>
            </Fade>
            <Fade delay={200}>
              <p className="body-text" style={{ marginBottom: "2.25rem" }}>
                $10,000 for the month, with the year of follow-up included.
              </p>
            </Fade>
            <Fade delay={260}>
              <Link href="/apply" className="btn">Apply</Link>
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
            longer recognize after building a company. The wish to hand the daily decisions to one
            person who knows what he is doing, and keep the goal. Different reasons, same month.
          </p>
        </section>
      </Fade>

      {/* SECTION 4 — what happens */}
      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>What happens.</h2>
          <p className="body-text measure">
            Day one, we meet for an hour and choose the two or three things worth measuring for what
            you want. Every morning you send them and every morning you get back what to keep, what to
            change, and what to watch. Twice a week we talk for twenty-five minutes. Every Friday you
            get a written review of the week. Day thirty, we put the evidence side by side and you
            leave with a written plan you can run yourself. For the rest of the year, you send me a
            message or a video whenever something feels off and I answer within a day. Continuing with
            me afterward is a separate decision, never automatic.
          </p>
        </section>
      </Fade>

      {/* SECTION 5 — who I am */}
      <Fade>
        <section className="section">
          <div className="measure">
            <h2 className="h2 serif" style={{ marginBottom: "1.75rem" }}>Who I am.</h2>
            <p className="body-text">
              I spent three years as a resident athlete at the Olympic Training Center in Colorado
              Springs and was ranked sixth in the country in judo. I wrestled at the Air Force Academy
              and served as an Air Force captain. I have coached since 2004. Since then I have trained
              several years of jiu-jitsu and kept studying strength, speed, nutrition, the mechanics
              of boxing and sprinting, and how people actually change. Everything I do with a client
              comes from having run a body at the highest level anyone runs one, and from twenty years
              of watching what makes a change hold.
            </p>
          </div>
        </section>
      </Fade>

      {/* SECTION 6 — self-defense crosslink + button */}
      <Fade>
        <section className="section">
          <p className="crosslink" style={{ marginBottom: "2rem" }}>
            Also: <Link href="/self-defense">self-defense, from zero.</Link>
          </p>
          <Link href="/apply" className="btn">Apply</Link>
        </section>
      </Fade>
    </>
  );
}
