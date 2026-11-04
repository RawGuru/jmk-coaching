import Fade from "../components/Fade";
import InPersonRequestForm from "../components/InPersonRequestForm";
import { windows, availabilityNote } from "../lib/availability";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta({
  title: "In-Person, In Your City | Jon-Michael Kerestes",
  description:
    "Private in-person coaching and intensives by arrangement in cities worldwide. Request your city and dates; engagements are confirmed once scope, travel, and payment are agreed.",
  path: "/in-person",
});

export default function InPerson() {
  const confirmed = windows.filter((w) => w.status === "confirmed");
  const open = windows.filter((w) => w.status !== "confirmed");

  return (
    <>
      <section className="section-first">
        <Fade>
          <div className="measure-wide" style={{ marginBottom: "2.5rem" }}>
            <div className="eyebrow">In person, worldwide</div>
            <h1 className="title serif" style={{ marginBottom: "1.5rem" }}>
              You want me there in person. Tell me your city.
            </h1>
            <p className="lead">{availabilityNote}</p>
          </div>
        </Fade>
      </section>

      {confirmed.length > 0 && (
        <Fade>
          <section className="section">
            <h2 className="h2 serif" style={{ marginBottom: "1.5rem" }}>Confirmed dates.</h2>
            <ul className="city-list">
              {confirmed.map((w) => (
                <li key={w.city}>
                  <span className="city-name">{w.city}</span>
                  <span className="city-when">{w.when}</span>
                  {w.note && <span className="city-note">{w.note}</span>}
                </li>
              ))}
            </ul>
          </section>
        </Fade>
      )}

      <Fade>
        <section className="section">
          <h2 className="h2 serif" style={{ marginBottom: "1.5rem" }}>Accepting requests.</h2>
          <ul className="city-list">
            {open.map((w) => (
              <li key={w.city}>
                <span className="city-name">{w.city}</span>
                <span className="city-when">{w.when}</span>
                {w.note && <span className="city-note">{w.note}</span>}
              </li>
            ))}
          </ul>
          <p className="proof" style={{ marginTop: "1.5rem" }}>
            Your city not listed? Request it below. In-person work is priced separately from remote
            work and is scoped to you before any number is quoted.
          </p>
        </section>
      </Fade>

      <Fade>
        <section className="section" id="request">
          <div className="measure" style={{ marginBottom: "2.5rem" }}>
            <h2 className="h2 serif" style={{ marginBottom: "1.5rem" }}>Request your city.</h2>
            <p className="lead">
              Tell me where you are, a window that works, and what you want to work on. I reply
              personally about whether the engagement makes sense.
            </p>
          </div>
          <InPersonRequestForm />
        </section>
      </Fade>
    </>
  );
}
