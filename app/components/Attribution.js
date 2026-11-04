"use client";

import { useEffect } from "react";
import { captureAttribution } from "../lib/attribution";

// Captures marketing-source attribution on first load. Renders nothing.
export default function Attribution() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
