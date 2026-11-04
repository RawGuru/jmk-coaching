"use client";

import { useState } from "react";

function paragraphs(text) {
  return text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

export function ReviewCard({ review, clamp = true }) {
  const paras = paragraphs(review.text);
  const long = review.text.length > 320;
  const [open, setOpen] = useState(!clamp || !long);
  const shown = open ? paras : paras.slice(0, 1);

  return (
    <figure className="review">
      <blockquote>
        {shown.map((p, i) => (
          <p key={i} className="body-text" style={{ marginBottom: i < shown.length - 1 ? "1rem" : 0 }}>
            {!open && i === shown.length - 1 && p.length > 300 ? p.slice(0, 300).trimEnd() + "..." : p}
          </p>
        ))}
      </blockquote>
      {long && clamp && (
        <button type="button" className="review-more" onClick={() => setOpen((v) => !v)}>
          {open ? "Show less" : "Read the full review"}
        </button>
      )}
      <figcaption className="review-by">
        {review.author}
        <span className="review-date"> &middot; {review.date}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials({ reviews, clamp = true }) {
  return (
    <div className="reviews">
      {reviews.map((r) => (
        <ReviewCard key={r.author + r.date} review={r} clamp={clamp} />
      ))}
    </div>
  );
}
