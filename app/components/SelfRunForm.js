"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "../lib/meta";

export default function SelfRunForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, type: "waitlist" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="body-text measure" style={{ color: "var(--text)" }}>
        You&rsquo;re on the list. I&rsquo;ll email you when the self-run thirty days opens.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form" style={{ maxWidth: 420 }}>
      <input type="hidden" name="type" value="waitlist" />
      <label className="field">
        <span className="field-label">Email</span>
        <input className="input" name="email" type="email" placeholder="you@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <div>
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Join the waitlist"}
        </button>
        {status === "error" && (
          <p style={{ marginTop: "1rem", color: "var(--clay)", fontSize: "0.88rem" }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
