"use client";

import { useState, useEffect, useRef } from "react";

// Progressive enhancement: content is visible by default (see globals.css
// `.fade`). Only when JavaScript is running (the inline script in layout adds
// `js` to <html>) does the content start hidden and fade in as it scrolls into
// view. This guarantees the correct content is visible before hydration and
// with JavaScript disabled, while keeping the entrance animation for everyone
// else.
export default function Fade({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`fade${visible ? " fade-in" : ""}${className ? " " + className : ""}`}
      style={{ "--fade-delay": `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
