# Recurring coaching-operations task (ready to paste)

No cloud scheduled task currently covers coaching. When the owner wants recurring operations,
paste the prompt below into a new scheduled Claude task. Suggested cadence: **twice weekly**
(e.g., Monday and Thursday) while any paid campaign is live, otherwise **weekly (Friday)**.

---

## Paste this as the scheduled task prompt

> You are running weekly operations for Jon-Michael Kerestes's coaching business
> (repo RawGuru/jmk-coaching, site https://www.jmkerestes.com). Do only what is listed; make no
> site changes unless explicitly asked in a separate task.
>
> **Read:**
> 1. Formspree submissions for the application endpoint (applications, in-person requests with
>    `type=in-person-request`, and waitlist with `type=waitlist`). Each lead carries attribution
>    fields (utm_source/medium/campaign, gclid/fbclid, landing_page, referrer).
> 2. Vercel Analytics custom events: `application`, `in_person_request` (and `conversion` in Google
>    Ads if a campaign is live).
> 3. If a paid campaign is live and access is granted: Google Ads spend, clicks, and conversions.
>
> **Check:**
> - Every new lead since the last run was acknowledged (owner replied or an autoresponder fired).
>   Flag any lead with no acknowledgement within one business day.
> - Which leads reached the call step (/call) and whether a call was booked.
> - Any lead older than 2 business days with no next step (stale; flag for follow-up).
>
> **Report (one short message):**
> - New leads since last run, grouped by source (from the attribution fields).
> - Applications, in-person requests, waitlist signups, calls booked.
> - If a campaign is live: spend, clicks, applications, cost per application.
> - A short list of leads needing follow-up, with why.
>
> Keep it to the numbers and the follow-up list. Do not draft marketing copy or change the site.

---

**Access this task will need:** the Formspree account (or submissions forwarded to an inbox the task
can read), Vercel Analytics, and — only if a campaign is live — Google Ads read access.
