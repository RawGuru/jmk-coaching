"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { FORMSPREE_ENDPOINT } from "../lib/meta";

const PROGRAMS = [
  { value: "Private coaching", param: "private", consent: "I understand the private month is $10,000." },
  { value: "Self-defense", param: "self-defense", consent: "I understand the self-defense month is $15,000 plus travel." },
];

const QUESTIONS = [
  { id: "goal", label: "What do you want to be different, and by when?" },
  { id: "driving", label: "What is driving this right now?" },
];

const empty = {
  name: "", email: "",
  program: PROGRAMS[0].value,
  goal: "", driving: "",
  consent: false,
};

export default function ApplyForm() {
  const router = useRouter();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");

  // Preselect program from ?program= query param.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("program");
    const match = PROGRAMS.find((p) => p.param === param);
    if (match) setForm((prev) => ({ ...prev, program: match.value }));
  }, []);

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));
  const current = PROGRAMS.find((p) => p.value === form.program) || PROGRAMS[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          program: form.program,
          goal: form.goal,
          driving: form.driving,
          consent: current.consent,
        }),
      });
      if (res.ok) {
        track("application", { program: form.program });
        router.push("/call");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" action={FORMSPREE_ENDPOINT} method="POST">
      {/* name + email */}
      <div className="two-input">
        <div className="field">
          <label className="field-label" htmlFor="name">Name</label>
          <input className="input" id="name" name="name" type="text" placeholder="Your name"
            value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={(e) => set("email", e.target.value)} required />
        </div>
      </div>

      {/* program */}
      <fieldset className="field" style={{ border: 0 }}>
        <legend className="field-label" style={{ marginBottom: "0.5rem" }}>Which program?</legend>
        <div className="chips">
          {PROGRAMS.map((p) => (
            <label key={p.value} className={`chip${form.program === p.value ? " sel" : ""}`}>
              <input type="radio" name="program" value={p.value} className="visually-hidden"
                checked={form.program === p.value} onChange={(e) => set("program", e.target.value)} required />
              {p.value}
            </label>
          ))}
        </div>
      </fieldset>

      {/* open questions */}
      {QUESTIONS.map((q) => (
        <div key={q.id} className="field">
          <label className="field-label" htmlFor={q.id}>{q.label}</label>
          <textarea className="input" id={q.id} name={q.id} rows={3} placeholder="Write here"
            value={form[q.id]} onChange={(e) => set(q.id, e.target.value)} required />
        </div>
      ))}

      {/* consent */}
      <div className="field">
        <label className="consent">
          <input type="checkbox" name="consent" value={current.consent}
            checked={form.consent} onChange={(e) => set("consent", e.target.checked)} required />
          <span>{current.consent}</span>
        </label>
      </div>

      <div style={{ paddingTop: "0.5rem" }}>
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit application"}
        </button>
        {status === "error" && (
          <p style={{ marginTop: "1rem", color: "var(--clay)", fontSize: "0.88rem" }}>
            Something went wrong. Please try again or reach out directly.
          </p>
        )}
        <p style={{ marginTop: "1.25rem", fontSize: "0.78rem", color: "var(--faint)" }}>
          I read every application personally.
        </p>
      </div>
    </form>
  );
}
