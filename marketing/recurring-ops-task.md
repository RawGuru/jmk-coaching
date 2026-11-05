# Coaching operations — reporting specification

**There is already a daily Coaching Execution Loop running outside this environment.** It is treated
here as existing but inaccessible: this session cannot read it, edit it, or trigger it, and it must
**not** create a second scheduled task that duplicates it. This file is the **reporting
specification** to fold into that existing loop — not an instruction to stand up a new cron.

Do not paste this as a new scheduled task. Hand it to whoever maintains the existing daily loop so the
loop's reporting step reflects what the site now captures.

---

## Reporting spec to add to the existing daily loop

> As part of the existing daily coaching loop (repo RawGuru/jmk-coaching, site
> https://www.jmkerestes.com), include an operations read. Make no site changes from the loop.
>
> **Read:**
> 1. Formspree submissions for the application endpoint. Each submission now carries:
>    - an **`interest`** label — `PREMIUM`, `SMALLER`, or `NOT SURE` (also encoded in the email
>      **subject**, e.g. `Application: The private month [PREMIUM]`), for sorting only. The label is a
>      service-interest tag, **not** a decision about who gets a call.
>    - `type=in-person-request` (subject `In-person request: … [IN-PERSON]`) and `type=waitlist`
>      (subject `Self-run waitlist [WAITLIST]`).
>    - attribution fields: `utm_source/medium/campaign/term/content`, `gclid`/`fbclid`/`msclkid`,
>      `landing_page`, `referrer`, `captured_at`.
> 2. Vercel Analytics custom events: `application` (now tagged with `program` and `interest`),
>    `in_person_request`, and — only on production, only if a campaign is live — Google Ads
>    `conversion`.
> 3. If the paused $300 Search test has been approved and un-paused, and access is granted: Google Ads
>    spend, clicks, and conversions.
>
> **Check:**
> - Every new lead since the last run was acknowledged within one business day (owner reply or
>   autoresponder). Flag any that were not.
> - For each lead, apply judgment before any personal consultation: price-fit acknowledged, plus the
>   goal, seriousness, timing, and practical compatibility. A `PREMIUM` label does **not** by itself
>   mean the person is invited to a call.
> - Which leads reached `/call` and whether a call was actually held.
> - Any lead older than 2 business days with no next step (stale; flag for follow-up).
> - If offline conversions are being recorded: whether any newly held calls or cleared payments need a
>   real row prepared per `marketing/offline-conversion-template.md`. Real events only.
>
> **Report (one short message):**
> - New leads since last run, grouped by **source** (attribution) and by **interest label**.
> - Counts: applications (by interest), in-person requests, waitlist signups, calls held.
> - If the campaign is live: spend, clicks, applications, cost per application.
> - A short list of leads needing follow-up, with why.
>
> Keep it to the numbers and the follow-up list. Do not draft marketing copy or change the site.

---

**Access the loop needs for this report:** the Formspree account (or submissions forwarded to a
readable inbox), Vercel Analytics, and — only if the campaign is live — Google Ads read access.
