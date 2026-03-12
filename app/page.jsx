"use client";

"use client";

import { useState, useEffect, useRef } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, style = {} }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const recognitionLines = [
  "You have tried things that helped for a while but did not hold.",
  "You want to feel stronger and more capable without it taking over your life.",
  "You want someone who understands how all of it connects.",
  "You want an approach you can actually keep.",
];

// required: true = required field, false = optional
const formFields = [
  { id: "brought", label: "What brought you here right now?",                              required: true  },
  { id: "off",     label: "What feels most off in your body or life?",                     required: true  },
  { id: "hoping",  label: "What are you hoping changes over the next 3 to 12 months?",     required: true  },
  { id: "tried",   label: "What have you already tried?",                                  required: false },
  { id: "format",  label: "Are you looking for in person, virtual, or either?",            required: false },
  { id: "why",     label: "Why do you think I may be the right person to help?",           required: true  },
];

const emptyForm = {
  name: "", email: "", phone: "",
  ...Object.fromEntries(formFields.map(f => [f.id, ""]))
};

export default function JMKLanding() {
  const [form, setForm]     = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Source+Sans+3:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #F5F1E8; --bg-card: #EDE5D4; --text: #1F1F1B;
          --muted: #5B584F; --faint: #6B685F; --olive: #6E7462;
          --clay: #A56A43; --border: #DDD6C8; --border-input: #C4BAA8;
        }
        html { font-size: 18px; scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Source Sans 3', sans-serif; -webkit-font-smoothing: antialiased; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        a { color: inherit; text-decoration: none; }
        input, textarea { font-family: 'Source Sans 3', sans-serif; font-size: 1rem; }
        @media (max-width: 820px) {
          .two-col   { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .two-input { grid-template-columns: 1fr !important; }
          .site-nav  { gap: 1.5rem !important; }
          .apply-pad { padding: 2.5rem 1.75rem !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>

        {/* NAV */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.75rem 0", borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text)", fontWeight: 500 }}>
            Jon-Michael Kerestes
          </div>
          <nav className="site-nav" style={{ display: "flex", gap: "2.5rem", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
            {[["#about", "About"], ["#apply", "Apply"]].map(([href, label]) => (
              <a key={href} href={href}
                onMouseEnter={e => e.target.style.color = "var(--text)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}
                style={{ transition: "color 0.2s" }}
              >{label}</a>
            ))}
          </nav>
        </header>

        {/* HERO */}
        <section style={{ padding: "5rem 0 6rem", maxWidth: 700 }}>
          <Fade>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--olive)", marginBottom: "2rem" }}>
              Physical Integration
            </div>
          </Fade>
          <Fade delay={80}>
            <h1 className="serif" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1.1, fontWeight: 300, letterSpacing: "-0.01em", marginBottom: "2rem", maxWidth: 620 }}>
              I help people feel better in their body and keep it that way.
            </h1>
          </Fade>
          <Fade delay={160}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "var(--muted)", maxWidth: 500, marginBottom: "2.5rem" }}>
              I work privately with people who want to think more clearly about movement, nourishment, recovery, and capability. Together, we sort out what is actually going on and build a physical foundation that holds up in real life.
            </p>
          </Fade>
          <Fade delay={240}>
            <a href="#apply" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "var(--text)", color: "var(--bg)",
              padding: "0.8rem 1.6rem", fontSize: "0.82rem", letterSpacing: "0.07em",
              border: "1px solid var(--text)", borderRadius: "6px", transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Apply to work with me</a>
          </Fade>
        </section>

        {/* PERSPECTIVE */}
        <Fade>
          <section style={{ borderTop: "1px solid var(--border)", padding: "6rem 0", maxWidth: 620 }}>
            <p className="serif" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", lineHeight: 1.35, fontWeight: 300, marginBottom: "2.25rem" }}>
              Most approaches to health do not account for how you actually live. They give you a plan that works on paper and falls apart in practice.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: 540 }}>
              I start with what is real for you right now. Your energy, your pain, your schedule, your history, what you have already tried. Then we find what matters most and build from there.
            </p>
          </section>
        </Fade>

        {/* RECOGNITION */}
        <section style={{ padding: "1rem 0 6rem", maxWidth: 640 }}>
          {recognitionLines.map((line, i) => (
            <Fade key={line} delay={i * 50}>
              <p className="serif" style={{
                fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)", lineHeight: 1.3, fontWeight: 300,
                color: "#2A2820", padding: "1.6rem 0", borderBottom: "1px solid var(--border)",
              }}>{line}</p>
            </Fade>
          ))}
        </section>

        {/* ORIENTATION */}
        <Fade>
          <section style={{ padding: "1rem 0 5rem", maxWidth: 580 }}>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              What we work on depends on you. It might be movement, nourishment, recovery, pain, stress, or practical capability. The goal is something useful, sustainable, and grounded in real life. Most people I work with reach a point where they do not need me in the same way anymore. That is the point.
            </p>
            <p style={{ color: "var(--faint)", fontSize: "0.9rem", lineHeight: 1.8 }}>
              I am based in Pittsburgh and work with people in person, virtually, and elsewhere depending on the situation.
            </p>
          </section>
        </Fade>

        {/* APPLY */}
        <Fade>
          <section id="apply" style={{ padding: "0 0 7rem" }}>
            <div className="apply-pad" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "4rem 3.5rem" }}>
              <div style={{ maxWidth: 540, marginBottom: "3rem" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--olive)", marginBottom: "1.25rem" }}>
                  Apply to work with me
                </div>
                <h2 className="serif" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.2, fontWeight: 300 }}>
                  If this feels relevant, fill this out and I will review it personally.
                </h2>
              </div>

              {status === "success" ? (
                <div style={{ maxWidth: 480 }}>
                  <p className="serif" style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: "1rem" }}>Application received.</p>
                  <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>I will review it and be in touch personally.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: 660 }}>

                  {/* name + email */}
                  <div className="two-input" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    {[["name","Name","Your name","text",true],["email","Email","you@example.com","email",true]].map(([id,label,ph,type,req]) => (
                      <label key={id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.04em" }}>{label}</span>
                        <input name={id} type={type} placeholder={ph} value={form[id]} onChange={handleChange} required={req}
                          style={{ background: "#FAF7F0", border: "1px solid var(--border-input)", borderRadius: "4px", padding: "0.75rem 1rem", color: "var(--text)", outline: "none", width: "100%" }} />
                      </label>
                    ))}
                  </div>

                  {/* phone */}
                  <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
                      Phone <span style={{ color: "var(--faint)" }}>(optional)</span>
                    </span>
                    <input name="phone" type="tel" placeholder="Your number" value={form.phone} onChange={handleChange}
                      style={{ background: "#FAF7F0", border: "1px solid var(--border-input)", borderRadius: "4px", padding: "0.75rem 1rem", color: "var(--text)", outline: "none", maxWidth: 300 }} />
                  </label>

                  {/* open-ended fields */}
                  {formFields.map(field => (
                    <label key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
                        {field.label}
                        {!field.required && <span style={{ color: "var(--faint)" }}> (optional)</span>}
                      </span>
                      <textarea name={field.id} rows={3} placeholder="Write here"
                        value={form[field.id]} onChange={handleChange}
                        required={field.required}
                        style={{ background: "#FAF7F0", border: "1px solid var(--border-input)", borderRadius: "4px", padding: "0.75rem 1rem", color: "var(--text)", outline: "none", resize: "vertical", width: "100%" }} />
                    </label>
                  ))}

                  <div style={{ paddingTop: "0.5rem" }}>
                    <button type="submit" disabled={status === "sending"}
                      style={{
                        background: "var(--text)", color: "var(--bg)", border: "1px solid var(--text)", borderRadius: "6px",
                        padding: "0.85rem 1.75rem", fontSize: "0.82rem", letterSpacing: "0.07em",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        opacity: status === "sending" ? 0.6 : 1, transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.opacity = "0.8"; }}
                      onMouseLeave={e => { if (status !== "sending") e.currentTarget.style.opacity = "1"; }}
                    >{status === "sending" ? "Sending..." : "Submit application"}</button>
                    {status === "error" && (
                      <p style={{ marginTop: "1rem", color: "var(--clay)", fontSize: "0.88rem" }}>Something went wrong. Please try again or reach out directly.</p>
                    )}
                    <p style={{ marginTop: "1.25rem", fontSize: "0.78rem", color: "var(--faint)" }}>I work with a limited number of people and respond personally.</p>
                  </div>
                </form>
              )}
            </div>
          </section>
        </Fade>

        {/* ABOUT */}
        <Fade>
          <section id="about" style={{ borderTop: "1px solid var(--border)", padding: "6rem 0 8rem" }}>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--olive)", marginBottom: "1.75rem" }}>About</div>
                {/*
                  PHOTO: replace this block with:
                  <img
                    src="/your-photo.jpg"
                    alt="Jon-Michael Kerestes"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "8px", display: "block" }}
                  />
                */}
                <div style={{ width: "100%", aspectRatio: "3/4", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.72rem", color: "var(--faint)", lineHeight: 1.6 }}>Photo here. In your space. Not posing.</p>
                </div>
              </div>
              <div style={{ maxWidth: 520 }}>
                <p className="serif" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)", lineHeight: 1.45, fontWeight: 300, marginBottom: "2rem" }}>
                  I spent three years as a resident athlete at the Olympic Training Center, graduated from the Air Force Academy, and was ranked sixth nationally in judo. I served as an Air Force Captain. I have been coaching since 2004 and studying how people actually change the entire time.
                </p>
                <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                  That background gave me a specific lens. The body is not a separate project from your life. It is the infrastructure your life runs on.
                </p>
                <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  I am less interested in forcing people into systems than in helping them find forms of care that are effective, enjoyable, and sustainable.
                </p>
              </div>
            </div>
          </section>
        </Fade>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "2.25rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--faint)" }}>Jon-Michael Kerestes</div>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--faint)" }}>Physical Integration</div>
        </footer>

      </div>
    </>
  );
}
