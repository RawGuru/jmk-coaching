# PROGRESS — jmk-coaching brief execution

Resume point for `claude --continue`. Source brief: `~/Downloads/jmk-coaching-brief.md`.
Repo: RawGuru/jmk-coaching · Next.js app router · Vercel auto-deploys on push to main · live https://www.jmkerestes.com.

**Governing rules (from brief header):**
- Ship in stages (brief §13). After each stage: `npm run build`, commit, push, curl-verify live. Update this file every commit.
- Testimonials: VERBATIM or not at all. Only text in `content/reviews-source.md` may be published. (done: 7 of 13 captured verbatim; see below.)
- No em dashes in site copy. Headlines lead with the visitor's situation, never "thirty days". No gendered lead. Client chooses the goal. No promised outcomes. Credential line stays as the homepage eyebrow.
- Prices are exact: "$10,000 for the month, with the year of follow-up included." and self-defense "$15,000 plus travel. Families, ask." Every NEW menu item shows "Ask for a proposal" until the owner approves a price.
- Spend no money. Where access is missing, finish the code and name the exact access needed.

---

## Corrections applied (2026-11-05)

These override earlier conflicting instructions. All deployed to main; advertising still paused.

1. **Service-interest labels, not qualification gates.** `/apply` is now service-aware across all
   tiers: PREMIUM (private month $10k, self-defense $15k), SMALLER (single question, ongoing remote,
   private virtual — all "scoped and priced before we begin", no fabricated price), NOT SURE. Each
   submission carries an `interest` field and a sortable Formspree `_subject`
   (`Application: <tier> [PREMIUM|SMALLER|NOT SURE]`). In-person and waitlist got sortable subjects
   too. `/services` CTAs now route to `/apply?program=…` so the tier preselects. Price-fit
   acknowledgment kept on every option.
2. **`/call` no longer promises everyone a call.** Reworded to confirm receipt and say *suitable*
   applicants receive a few proposed times ("if it is a fit"). Same softening on `/self-defense`
   apply copy. No open self-serve promise.
3. **Conversions fire on production only.** `next.config.mjs` exposes `NEXT_PUBLIC_VERCEL_ENV`;
   `conversion.js` requires it to equal `production`. Previews/tests never report, even with the
   conversion env vars set. No URL parameter can toggle this.
4. **Google Ads brief → $300 fixed total.** `marketing/google-ads-search-brief.md` now specifies a
   $300 campaign total budget (with the daily-cap caveat: a daily budget is not a hard cap), paused,
   approval + actual start/end dates required at activation, and a §9 blocker: **not validated in
   Google Ads Editor** (no access here). Removed the old $900/$600 figures.
5. **Offline conversion template added** (`marketing/offline-conversion-template.md`) — a template,
   explicitly not an operating import system. Documents conversion actions, gclid, timestamps,
   consent, and the real-events-only manual loop. No synthetic uploads.
6. **Recurring ops reframed** (`marketing/recurring-ops-task.md`) — it is now a *reporting spec* to
   fold into the existing daily Coaching Execution Loop (which runs outside this environment and is
   inaccessible here). No duplicate scheduled task created.

**Verification:** `npm run build` passes (15 routes). Forms were **not** submitted against the live
Formspree endpoint and no conversions were fired, to avoid fake production leads. End-to-end form
testing still needs a preview deploy with a mocked endpoint (see blockers).

---

## Stage status

- [x] **Stage 1 — Audit.** No `City pages for the February in-person month` commit exists; no `lib/cities.ts`/`app/in` → build In-Person Availability from scratch. No CLAUDE.md. Vercel CLI not installed (cannot read/set env vars from here). Existing: Person JSON-LD, sitemap, robots, Vercel Analytics, env-gated Google tag + conversion (`app/components/GoogleTag.js`, `app/lib/conversion.js` [reconciled with a parallel session's commit 3eb3f86], `CallConversion`), Formspree form, /apply + /self-defense (form now on both), /call /group /self-run funnel pages (noindex).
- [x] **Testimonial sourcing (gate for §3).** `content/reviews-source.md` written verbatim. 7 of 13 obtained: Alex S., Deborah M., Kayli K., Rob M., Dave H., Valentin N., Elena V. NOT obtained (static fetch didn't trigger Thumbtack pagination; no local screenshot): **Scott W. (May 30 2016)**, **Allison M.**, + 4 others. These stay OFF the site until supplied verbatim. → owner action.
- [x] **Stage 2 — Correct the customer-facing offer.** DONE (partial): `/services` (Ways to work together) with 6 tiers; $10k and $15k exact, all new tiers "Ask for a proposal". Testimonials: `app/lib/reviews.js` (7 verbatim), `Testimonials` component, featured on homepage, full set on `/reviews` (with non-guarantee note, no star markup). Nav now Services / Self-defense / Apply. CLOSED 2026-11-05: application is now service-aware with PREMIUM/SMALLER/NOT SURE interest labels; /services CTAs route to /apply?program=… (see Corrections #1).
- [x] **Stage 3 — Global availability mechanism.** DONE: `/in-person` page + `app/lib/availability.js` (open/confirmed windows; all currently "open/by arrangement", no fabricated confirmed trips) + `InPersonRequestForm` (city, dates, service, goal → Formspree type=in-person-request → /call). Owner edits availability.js to confirm a city.
- [~] **Stage 4 — Technical acquisition infra.** DONE: marketing attribution (`app/lib/attribution.js` + `Attribution` in layout) captures UTM/gclid/fbclid/referrer/landing on first load and attaches to ALL form submissions (apply, self-defense, in-person, self-run waitlist). Conversion tracking: env-gated (see conversion.js). STILL OPEN (needs owner access, not code): Formspree auto-acknowledgement/autoreply is a Formspree dashboard setting; lead classification + follow-up reminders would need a light automation (recurring task) — see recurring-ops prompt in final report.
- [~] **Stage 5 — Prepare marketing campaigns (code/assets only, paused).** Google Ads brief at `marketing/google-ads-search-brief.md`. Recommendation: Google Search, self-defense category, premium high-intent terms, $300 test, paused until budget approved. Meta creative concepts in brief/report; NEEDS Google Ads + Meta Ads access to build the paused campaigns.
- [x] **Stage 6 — Test the whole system (automated portion).** All 9 routes return 200 live; build passes; one h1/page; zero em dashes; prices exact; 3 forms post + redirect to /call. Human device/UX testing delegated to Jess (`JESS_TEST.md`).
- [x] **Stage 7 — Deploy.** All work pushed to main and live; report delivered in chat; this file is the durable tracker.
- [x] **JESS_TEST.md** — written (her steps only).
- [x] **Video (§10)** — script at `marketing/video-script.md`. Section hidden until `NEXT_PUBLIC_VIDEO_URL` set.
- [x] **Recurring ops (header #4)** — ready-to-paste scheduled-task prompt at `marketing/recurring-ops-task.md` (not built; owner pastes it).

## Owner decisions / access needed (batch)
- Verbatim text (or the screenshot) for Scott W. (May 30 2016), Allison M., and the other 4 Thumbtack reviews, to publish them.
- Prices for any new menu tiers (A Voice/Video Guidance, B Ongoing Remote, C Private Virtual, E In-Person intensives) — until approved they show "Ask for a proposal".
- Vercel env vars (no CLI/access here): `NEXT_PUBLIC_GOOGLE_TAG_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` (or `_CALL_` variant), `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_VIDEO_URL`.
- Google Ads / Meta Ads / Search Console access to configure/verify campaigns + indexing. The Search
  campaign is NOT yet validated in Google Ads Editor (no access here) — must be built + checked there
  before it is "import-ready" (brief §9).
- Advertising budget: $300 fixed total experiment, PAUSED; nothing spent; explicit owner approval +
  actual start/end dates required before un-pausing.
- Preview-env form/tracking testing with a mocked Formspree endpoint (no Vercel CLI here). Forms were
  not exercised against the live endpoint to avoid fake production leads.

## Notes
- A daily Coaching Execution Loop already runs outside this environment (inaccessible here). The
  recurring-ops file is now a reporting spec to fold into it, NOT a new scheduled task. No duplicate
  task was created (correction #5).
