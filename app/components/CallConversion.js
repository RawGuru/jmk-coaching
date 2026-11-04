"use client";

import { useEffect } from "react";
import { reportCallConversion } from "../lib/conversion";

// Optional: fires a conversion on a /call page load, matching the
// "page load of /call = 1 conversion" spec. Inert unless
// NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION is set. Prefer the submit-based
// conversion in ApplyForm instead; do not set both to the same action.
export default function CallConversion() {
  useEffect(() => {
    reportCallConversion();
  }, []);
  return null;
}
