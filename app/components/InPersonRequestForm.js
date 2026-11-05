"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { FORMSPREE_ENDPOINT } from "../lib/meta";
import { getAttribution } from "../lib/attribution";

const SERVICES = [
  "In-person intensive",
  "Private in-person sessions",
  "Self-defense from zero",
];

const empty = { name: "", email: "", city: "", dates: "", service: SERVICES[0], goal: "" };

export default function InPersonRequestForm() {
  const router = useRouter();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `In-person request: ${form.service} [IN-PERSON]`,
          type: "in-person-request",
          ...form,
          ...getAttribution(),
        }),
      });
      if (res.ok) {
        track("in_person_request", { city: form.city, service: form.service });
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
      <input type="hidden" name="type" value="in-person-request" />
      <div className="two-input">
        <div className="field">
          <label className="field-label" htmlFor="ip-name">Name</label>
          <input className="input" id="ip-name" name="name" type="text" placeholder="Your name"
            value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="ip-email">Email</label>
          <input className="input" id="ip-email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={(e) => set("email", e.target.value)} required />
        </div>
      </div>
      <div className="two-input">
        <div className="field">
          <label className="field-label" htmlFor="ip-city">Your city</label>
          <input className="input" id="ip-city" name="city" type="text" placeholder="City, country"
            value={form.city} onChange={(e) => set("city", e.target.value)} required />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="ip-dates">Preferred dates</label>
          <input className="input" id="ip-dates" name="dates" type="text" placeholder="A window that works for you"
            value={form.dates} onChange={(e) => set("dates", e.target.value)} required />
        </div>
      </div>
      <fieldset className="field" style={{ border: 0 }}>
        <legend className="field-label" style={{ marginBottom: "0.5rem" }}>Which work?</legend>
        <div className="chips">
          {SERVICES.map((s) => (
            <label key={s} className={`chip${form.service === s ? " sel" : ""}`}>
              <input type="radio" name="service" value={s} className="visually-hidden"
                checked={form.service === s} onChange={(e) => set("service", e.target.value)} required />
              {s}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label className="field-label" htmlFor="ip-goal">What do you want to work on?</label>
        <textarea className="input" id="ip-goal" name="goal" rows={3} placeholder="Write here"
          value={form.goal} onChange={(e) => set("goal", e.target.value)} required />
      </div>
      <div style={{ paddingTop: "0.5rem" }}>
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Request in-person work"}
        </button>
        {status === "error" && (
          <p style={{ marginTop: "1rem", color: "var(--clay)", fontSize: "0.88rem" }}>
            Something went wrong. Please try again or reach out directly.
          </p>
        )}
        <p style={{ marginTop: "1.25rem", fontSize: "0.78rem", color: "var(--faint)" }}>
          A request is not a confirmed booking. I reply personally about whether it works.
        </p>
      </div>
    </form>
  );
}
