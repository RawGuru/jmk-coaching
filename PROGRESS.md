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

## First-time-customer readiness pass (2026-11-05)

Focus: make the site complete, convincing, accurate, reliable for a stranger. Advertising untouched/paused.

**Objective defects fixed and deployed:**
1. **Apply preselection now correct before hydration.** `/apply` reads `?program=` on the server
   (`searchParams`) and passes it to `ApplyForm` (which remounts via `key`). The old post-hydration
   `useEffect` that caused the wrong program/price to flash first is gone. Verified by curling the
   prod build: `/apply?program=virtual|self-defense|not-sure|private` each render the correct chip
   selected AND the matching price acknowledgment in the raw SSR HTML.
2. **Content is visible before/without JS.** `Fade` previously set `opacity:0` until a post-hydration
   IntersectionObserver fired, hiding every page's content pre-hydration and with JS off. Now
   progressive enhancement: `.fade` is visible by default; an inline script sets `html.js` and only
   then does the fade-in apply (reduced-motion respected). Verified: no inline `opacity:0` in SSR.
3. **Application captures the missing facts.** Added **location**, **remote/in person/either**, and
   **desired start** fields to `ApplyForm`; all three are in the Formspree submission.
4. **Internal linking / dead-ends.** `/reviews` had no outbound path — added an Apply CTA. Homepage
   now links to `/services`. Footer now carries site-wide internal links (Services, Self-defense,
   In person, Reviews, Apply). Every substantive page is reachable.

**Clarity / credibility edits:**
- Six-item service menu rewritten so each card states a distinct benefit, what happens, what you
  receive, and the boundary. The two overlapping remote tiers are now clearly split: *Ongoing remote
  guidance* = async only, no live calls, no full plan; *Private virtual coaching* = full relationship
  with live calls + plan, over a longer timeline than the month. Prices unchanged.
- `$10,000` card leads with the value ("my daily attention for a month, then a year within reach")
  and enumerates the deliverables + scarcity (four at a time).
- `/reviews` now states the reviews are reproduced verbatim from the public five-star reviews (no star
  markup). All 7 authentic reviews kept; Scott W. and the other 5 remain OFF pending verbatim text.

**Verified here (prod build, local server, curl):** all 9 routes 200; service links preselect the
right program + acknowledgment in SSR (before hydration); new fields render; prices exact; menu CTAs
route correctly; `npm run build` clean. **Not done here:** live form submission (would create real
Formspree leads) and desktop/mobile visual + post-hydration interaction — these need a Vercel preview
URL with a mocked endpoint and the human pass in `JESS_TEST.md`.

### Owner decisions still required (pricing / scope / proof)
- **Prices for the 4 "Ask for a proposal" tiers** (single question, ongoing remote, private virtual,
  in-person). Until set they stay "Ask for a proposal". Suggested ladder: single question lowest,
  ongoing remote mid, private virtual just under the $10k month, in-person premium.
- **Consolidate the two remote tiers?** *Ongoing remote guidance* vs *Private virtual coaching* are
  now distinct but adjacent; decide whether both earn a place or they merge.
- **`/group` ($2,500) and `/self-run` ($400)** are noindex, unlinked orphan funnel pages carrying
  prices that are NOT in the approved set. Decide: approve + surface in the menu, change to "Ask for a
  proposal", or keep as private direct-link funnels. (Left as-is for now; flagged.)
- **Testimonials are all 2013–2014 personal-training reviews** — authentic but not aligned with the
  current $10k private-month / self-defense offer. Supplying newer, more-relevant verbatim reviews
  (and Scott W. May 2016 + the remaining 5) would materially strengthen proof. Must be verbatim.
- **Booking mechanism** for suitable applicants (prior stage): how times are sent; whether to set
  `NEXT_PUBLIC_BOOKING_URL` given the open-self-booking caveat.

---

## Controlled E2E + stranger evaluation (2026-11-05)

Owner decisions this round: keep `/group` + `/self-run` hidden/noindex; retain both remote tiers;
leave all unapproved prices unchanged. Advertising untouched/paused.

**Controlled end-to-end testing (no production leads).** Installed Playwright+Chromium locally (not
committed to the app). Made the Formspree endpoint env-overridable (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`,
falls back to the live form) and ran a local prod build pointed at a **mock** endpoint on :9999.
Drove the real browser on **desktop (1280)** and **mobile (iPhone 13)**, plus a **no-JS** context:
- All nav routes 200 (desktop + mobile).
- Service links preselect the right program + acknowledgment **before hydration** (no-JS: self-defense
  chip selected, $15k consent, form `opacity:1`) **and** after hydration (desktop + mobile: virtual
  chip selected).
- Full application submitted end to end on both viewports to the mock, redirecting to `/call`
  ("Your application is in."). The mock received every field including the new **location / format /
  start**, plus `interest`, the sortable `_subject`, and attribution.
- Self-defense preselect and the in-person request form both submit and reach `/call`.
- Screenshots reviewed on both viewports: forms, the 6-card menu, reviews, home all render cleanly.
  (A clean production build was confirmed to contain the real Formspree endpoint and no mock.)

**Objective problems fixed this round:**
- `/apply` intro still promised "reply with times to talk"; softened to "If it is a fit, I reply with
  a few times to talk," matching `/call` and `/self-defense`.
- Homepage featured reviews realigned for a premium buyer: Valentin N. (busy-professional
  transformation) + Rob M. (five-year client, "extremely knowledgeable in physiology and nutrition")
  instead of the two weight-loss stories. All reviews remain verbatim.

**Stranger-eye evaluation of the six offers — substantive weaknesses that need OWNER input:**
1. **No price anchor on the four "Ask for a proposal" tiers.** A cold buyer cannot tell if "A single
   question" is $50 or $5,000. This is the single biggest friction point for a stranger. Needs owner
   pricing (even a "from" figure or range). Left unchanged per instruction; isolated for approval.
2. **Testimonial relevance gap.** All seven verbatim reviews are 2013–2014 personal-training /
   weight-loss. There is no social proof for the $10k private month, private virtual, in-person, or
   self-defense specifically. Materially weakens credibility for the premium offers. Needs
   owner-supplied verbatim reviews. **Scott W. (May 2016) is ready to add the moment the screenshot is
   provided** (pipeline: `content/reviews-source.md` -> `app/lib/reviews.js`).
3. **No application receipt email.** The only confirmation a stranger gets is the `/call` page; there
   is no autoresponder. Turning on Formspree's autoresponse (dashboard setting) would close an obvious
   trust gap. Owner action.

Deliverables, "what happens," and boundaries now read clearly per offer; the two remote tiers are
distinct (async-only vs full relationship). No further objective copy defects found in the menu.

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
