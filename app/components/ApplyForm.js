"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FORMSPREE_ENDPOINT } from "../lib/meta";

const PROGRAMS = ["Thirty days, my body", "Thirty days, self-defense"];
const BUDGETS = ["Under $500", "$500 to $3,000", "$3,000 to $10,000", "Whatever it takes"];

const QUESTIONS = [
  { id: "goal", label: "What do you want to be different thirty days from now?", required: true },
  { id: "driving", label: "What is driving this right now?", required: true },
  { id: "tried", label: "What have you already tried?", required: true },
  { id: "date", label: "Is there a date that matters?", required: false },
];

function destination(program, budget) {
  if (program === "Thirty days, self-defense") return "/call";
  if (budget === "$3,000 to $10,000" || budget === "Whatever it takes") return "/call";
  if (budget === "$500 to $3,000") return "/group";
  if (budget === "Under $500") return "/self-run";
  return "/call";
}

const empty = {
  name: "", email: "", phone: "",
  program: PROGRAMS[0],
  goal: "", driving: "", tried: "", date: "",
  budget: "",
};

export default function ApplyForm() {
  const router = useRouter();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");

  // Preselect program from ?program= query param (self-defense).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("program") === "self-defense") {
      setForm((prev) => ({ ...prev, program: "Thirty days, self-defense" }));
    }
  }, []);

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));
  const handleChange = (e) => set(e.target.name, e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push(destination(form.program, form.budget));
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* name + email */}
      <div className="two-input">
        <label className="field">
          <span className="field-label">Name</span>
          <input className="input" name="name" type="text" placeholder="Your name"
            value={form.name} onChange={handleChange} required />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input className="input" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required />
        </label>
      </div>

      {/* phone */}
      <label className="field">
        <span className="field-label">Phone</span>
        <input className="input" name="phone" type="tel" placeholder="Your phone number"
          value={form.phone} onChange={handleChange} required />
      </label>

      {/* program */}
      <div className="field">
        <span className="field-label">Which program?</span>
        <div className="chips">
          {PROGRAMS.map((p) => (
            <label key={p} className={`chip${form.program === p ? " sel" : ""}`}>
              <input type="radio" name="program" value={p}
                checked={form.program === p} onChange={handleChange} required
                style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
              {p}
            </label>
          ))}
        </div>
      </div>

      {/* open questions */}
      {QUESTIONS.map((q) => (
        <div key={q.id} className="field">
          <label className="field-label">
            {q.label}{!q.required && <span style={{ color: "var(--faint)" }}> (optional)</span>}
          </label>
          <textarea className="input" name={q.id} rows={3} placeholder="Write here"
            value={form[q.id]} onChange={handleChange} required={q.required} />
        </div>
      ))}

      {/* budget */}
      <div className="field">
        <span className="field-label">What are you prepared to invest to solve this in the next thirty days?</span>
        <div className="chips">
          {BUDGETS.map((b) => (
            <label key={b} className={`chip${form.budget === b ? " sel" : ""}`}>
              <input type="radio" name="budget" value={b}
                checked={form.budget === b} onChange={handleChange} required
                style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
              {b}
            </label>
          ))}
        </div>
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
