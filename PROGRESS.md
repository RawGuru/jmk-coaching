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

## Stage status

- [x] **Stage 1 — Audit.** No `City pages for the February in-person month` commit exists; no `lib/cities.ts`/`app/in` → build In-Person Availability from scratch. No CLAUDE.md. Vercel CLI not installed (cannot read/set env vars from here). Existing: Person JSON-LD, sitemap, robots, Vercel Analytics, env-gated Google tag + conversion (`app/lib/gtag.js`, `GoogleTag`, `CallConversion`), Formspree form, /apply + /self-defense (form now on both), /call /group /self-run funnel pages (noindex).
- [x] **Testimonial sourcing (gate for §3).** `content/reviews-source.md` written verbatim. 7 of 13 obtained: Alex S., Deborah M., Kayli K., Rob M., Dave H., Valentin N., Elena V. NOT obtained (static fetch didn't trigger Thumbtack pagination; no local screenshot): **Scott W. (May 30 2016)**, **Allison M.**, + 4 others. These stay OFF the site until supplied verbatim. → owner action.
- [ ] **Stage 2 — Correct the customer-facing offer.** Ways to Work Together menu; clarify premium month; testimonials component + placement; qualification/application improvements (location, remote/in-person, timing, price-fit, UTM attribution).
- [ ] **Stage 3 — Global availability mechanism.** In-Person Availability page + request flow + data file for open/confirmed windows.
- [ ] **Stage 4 — Technical acquisition infra.** UTM attribution capture, lead acknowledgement, conversion tracking verification, basic reporting notes.
- [ ] **Stage 5 — Prepare marketing campaigns (code/assets only, paused).** Google brief exists at `marketing/google-ads-search-brief.md`. Meta assets + channel recommendation pending.
- [ ] **Stage 6 — Test the whole system** (mobile/desktop nav, forms, attribution, availability).
- [ ] **Stage 7 — Deploy + final report.**
- [ ] **JESS_TEST.md** — tester steps (her steps only).
- [ ] **Video (§10)** — section stays hidden until `NEXT_PUBLIC_VIDEO_URL` set; recording script to be delivered in report.

## Owner decisions / access needed (batch)
- Verbatim text (or the screenshot) for Scott W. (May 30 2016), Allison M., and the other 4 Thumbtack reviews, to publish them.
- Prices for any new menu tiers (A Voice/Video Guidance, B Ongoing Remote, C Private Virtual, E In-Person intensives) — until approved they show "Ask for a proposal".
- Vercel env vars (no CLI/access here): `NEXT_PUBLIC_GOOGLE_TAG_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` (or `_CALL_` variant), `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_VIDEO_URL`.
- Google Ads / Meta Ads / Search Console access to configure/verify campaigns + indexing.
- Advertising budget (brief proposes $300 max initial test; nothing spent).

## Notes
- No cloud scheduled task covers coaching (per brief header #4). Recurring-ops prompt to be delivered in final report, not built.
