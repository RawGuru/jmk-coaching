/** @type {import('next').NextConfig} */
const nextConfig = {
  // Surface Vercel's deployment environment to the client so ad conversions can
  // be fired only on production builds. Set automatically by Vercel at build
  // time (production | preview | development); empty on a local build. This is
  // the only switch that disables conversions in previews/tests — it cannot be
  // toggled by a URL parameter.
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV || "",
  },
};

export default nextConfig;
