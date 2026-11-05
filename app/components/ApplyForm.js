"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { FORMSPREE_ENDPOINT } from "../lib/meta";
import { reportConversion } from "../lib/conversion";
import { getAttribution } from "../lib/attribution";

// Each option carries an `interest` label (PREMIUM | SMALLER | NOT SURE). The
// label is for sorting and the email subject only — it is a service-interest
// tag, not a decision about who gets a call. `consent` is the price-fit
// acknowledgment the applicant ticks: an exact price where one is set, and an
// honest "scoped and priced before we begin" where none is published yet.
const PROGRAMS = [
  {
    value: "The private month",
    param: "private",
    interest: "PREMIUM",
    consent: "I understand the private month is $10,000, with the year of follow-up included.",
  },
  {
    value: "Self-defense from zero",
    param: "self-defense",
    interest: "PREMIUM",
    consent: "I understand the self-defense month is $15,000 plus travel.",
  },
  {
    value: "A single question, answered",
    param: "question",
    interest: "SMALLER",
    consent: "I understand this is individual coaching, scoped and priced for me before we begin.",
  },
  {
    value: "Ongoing remote guidance",
    param: "remote",
    interest: "SMALLER",
    consent: "I understand this is individual coaching, scoped and priced for me before we begin.",
  },
  {
    value: "Private virtual coaching",
    param: "virtual",
    interest: "SMALLER",
    consent: "I understand this is individual coaching, scoped and priced for me before we begin.",
  },
  {
    value: "Not sure yet",
    param: "not-sure",
    interest: "NOT SURE",
    consent: "I understand this is paid individual coaching, scoped before any price is set.",
  },
];

const QUESTIONS = [
  { id: "goal", label: "What do you want to be different, and by when?" },
  { id: "driving", label: "What is driving this right now?" },
];

const FORMATS = ["Remote", "In person", "Either"];

function programValue(param) {
  const match = PROGRAMS.find((p) => p.param === param);
  return match ? match.value : PROGRAMS[0].value;
}

// defaultProgram: a program param (e.g. "private", "self-defense", "virtual")
// resolved on the server from the ?program= query or passed directly (e.g. on
// /self-defense), so the correct program is selected on first paint. The page
// remounts this form when the param changes (via `key`), so no client-side
// re-sync is needed.
export default function ApplyForm({ defaultProgram } = {}) {
  const router = useRouter();
  const [form, setForm] = useState(() => ({
    name: "", email: "",
    program: programValue(defaultProgram),
    location: "", format: "", start: "",
    goal: "", driving: "",
    consent: false,
  }));
  const [status, setStatus] = useState("idle");

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
          _subject: `Application: ${current.value} [${current.interest}]`,
          name: form.name,
          email: form.email,
          program: form.program,
          interest: current.interest,
          location: form.location,
          format: form.format,
          start: form.start,
          goal: form.goal,
          driving: form.driving,
          consent: current.consent,
          ...getAttribution(),
        }),
      });
      if (res.ok) {
        track("application", { program: form.program, interest: current.interest });
        await reportConversion(form.program);
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

      {/* location + desired start */}
      <div className="two-input">
        <div className="field">
          <label className="field-label" htmlFor="location">Where are you?</label>
          <input className="input" id="location" name="location" type="text" placeholder="City, country"
            value={form.location} onChange={(e) => set("location", e.target.value)} required />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="start">When do you want to start?</label>
          <input className="input" id="start" name="start" type="text" placeholder="e.g. this month, in January, as soon as possible"
            value={form.start} onChange={(e) => set("start", e.target.value)} required />
        </div>
      </div>

      {/* remote / in person preference */}
      <fieldset className="field" style={{ border: 0 }}>
        <legend className="field-label" style={{ marginBottom: "0.5rem" }}>Remote, in person, or either?</legend>
        <div className="chips">
          {FORMATS.map((f) => (
            <label key={f} className={`chip${form.format === f ? " sel" : ""}`}>
              <input type="radio" name="format" value={f} className="visually-hidden"
                checked={form.format === f} onChange={(e) => set("format", e.target.value)} required />
              {f}
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
