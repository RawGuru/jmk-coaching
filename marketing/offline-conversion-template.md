# Offline conversion import — template (not an operating system)

**Status: TEMPLATE ONLY.** This document describes how genuine held calls and paid clients could be
reported back to Google Ads as offline conversions. It is **not** a running import, and nothing here
uploads anything. No conversions, real or synthetic, are uploaded by preparing this file. Do not
upload test or placeholder rows: Google Ads offline conversions must correspond to **real** events
(a call that actually happened, a payment that actually cleared), or the account's conversion data
and any automated bidding become wrong.

The point of offline conversions: the site's instant signal is a **submitted application**. The
events that actually matter to the business — a **qualified call held** and a **client who paid** —
happen days or weeks later, off the website. Offline conversion import is how those later, real
outcomes get attributed back to the ad click that started them.

---

## 1. Conversion actions to create in Google Ads

Create these in **Google Ads → Goals → Conversions → New conversion action → Import → Manual import
(via API or file upload)**. Keep them separate from the website "submitted application" action.

| Conversion action | When it counts | Count | Suggested value |
|---|---|---|---|
| **Qualified call held** | A proposed-times call actually took place and the person was a real fit | One per application | Leave 0, or a nominal pipeline value |
| **Client signed / paid** | A client paid ($10,000 / $15,000, etc.) | One | The actual amount paid |

Both are **offline / imported** actions. Mark "Client signed / paid" as the primary conversion once
there is enough volume; at the $300 test scale there will not be.

---

## 2. What each uploaded row needs

A row ties a **real** later outcome to the **original ad click**. For each genuine event:

1. **Click identifier.** One of:
   - **GCLID** — the Google click id. The site already captures `gclid` on first touch and attaches
     it to every submission (`app/lib/attribution.js`). This is the primary path.
   - **GBRAID / WBRAID** — iOS app/web click ids, captured the same way if present.
   - If no click id is available but you have the person's email/phone, use **Enhanced conversions
     for leads** instead (hashed email/phone) rather than a GCLID upload.
2. **Conversion action name** — exactly as created in step 1.
3. **Conversion time** — the timestamp of the real event (call held / payment cleared), **not** the
   application time. Use a format Google accepts, e.g. `2026-01-15 14:30:00-05:00` (include the
   timezone offset) or `MM/dd/yyyy HH:mm:ss` with an explicit account time zone. The event time must
   be **after** the click time and within the conversion action's click-through window.
4. **Conversion value + currency** (for the paid action) — the real amount, e.g. `10000` / `USD`.
5. **Consent signals** (see §4) where required.

---

## 3. CSV column template (for file upload)

```
Parameters:TimeZone=-0500
Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency
<real gclid>,Qualified call held,2026-01-15 14:30:00,0,USD
<real gclid>,Client signed / paid,2026-01-29 09:05:00,10000,USD
```

The example rows are **illustrative only** — do not upload them. Replace with real gclids and real
event times, or delete them. An upload with placeholder/invented gclids will either be rejected or,
worse, silently corrupt the account's data.

---

## 4. Consent requirements

- For users in the **EEA/UK/Switzerland**, Google requires **Consent Mode** signals
  (`ad_user_data`, `ad_personalization`). Only import conversions for which the user granted consent,
  and pass the consent fields on the row where applicable.
- Keep a record of **when and how** consent was obtained (the cookie/consent banner event, or an
  explicit opt-in). The site does not currently run a consent banner; if paid traffic from these
  regions is ever enabled, a consent mechanism must be added before importing their conversions.
- US-only targeting (the current plan, §1 of the Search brief) sidesteps most of this, but the
  conversion record should still note consent basis.

---

## 5. How genuine held calls and payments get recorded (manual loop, for now)

Until there is a real system, this is a manual, honest loop the owner (or the existing daily
Coaching Execution Loop) can run:

1. **At application:** the lead arrives in the Formspree inbox already carrying `gclid` (and the other
   attribution fields) from `app/lib/attribution.js`. Keep the gclid with the lead record.
2. **When a call is actually held:** record the lead's gclid + the real call date/time against the
   "Qualified call held" action.
3. **When a client actually pays:** record the gclid + the real payment date/time + amount against the
   "Client signed / paid" action.
4. **Upload** the real rows (file upload or Google Ads API). Never upload rows for calls that did not
   happen or payments that did not clear.

> This manual loop is the template. Turning it into an **operating import system** (a stored
> gclid→outcome ledger, scheduled uploads, de-duplication, consent capture) is a separate build and
> is **not** done here. Until it is built, treat offline conversions as hand-recorded, real-only, and
> low-volume.

---

## 6. Hard rules

- **Real events only.** No synthetic, test, or placeholder conversions — ever — in the real account.
- **Template ≠ system.** This file documents the format and the loop; it does not import anything.
- **Production only.** Website conversion events already fire only on the production deployment
  (see `app/lib/conversion.js`); offline imports should likewise reflect only real production
  outcomes.
