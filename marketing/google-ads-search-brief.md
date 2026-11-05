# Google Ads — Search campaign brief

**Advertiser:** Jon-Michael Kerestes — private coaching
**Site:** https://www.jmkerestes.com
**Landing page:** https://www.jmkerestes.com/self-defense
**Experiment:** one-time **$300 total** test · **Status: PAUSED** until the owner explicitly approves spending · **Ad spend billed by Google to the advertiser's card.**

> **Nothing is spent by setting this up.** The campaign is built paused. No budget is committed, and no money moves, until the owner reviews this brief, approves the $300, and un-pauses the campaign. Set the actual start and end dates at that moment.

---

## 1. Campaign settings

| Setting | Value |
|---|---|
| Type | Search only (no Display/Search partners) |
| Networks | Google Search only — **uncheck** "Search partners" and "Display Network" |
| Location | United States (set to *Presence: people in your targeted locations*, not "presence or interest") |
| Language | English |
| Budget | **$300 campaign total budget** (Google Ads "campaign total budget"), with a fixed start and end date set at activation. See the budget note below. |
| Bidding | **Maximize clicks** with a max CPC cap (~$6–8) for the whole run. Do not switch to a conversion-based strategy: at $300 there will not be enough conversions to train it. |
| Ad rotation | Optimize |
| Final URL | https://www.jmkerestes.com/self-defense |
| Status at import | **Paused** |

One campaign, one ad group ("Private self-defense — adults").

### Budget note — use a total budget, not a daily cap

A daily budget is **not** a hard cap. Google can spend up to twice the daily amount on any given day (balancing across the month), so a "$10/day" daily budget does **not** guarantee the run stops at $300.

- **Preferred:** set a **campaign total budget of $300** with a defined end date, if the Search campaign type offers it in the account. Google then paces spend to not exceed $300 across the window.
- **If the account does not offer a total budget for this campaign:** set a **$10/day** daily budget **and** a hard end date ~30 days out, then **monitor and pause manually at $300**. Treat $10/day as an average, not a ceiling.
- Set the **actual start and end dates** when the campaign is un-paused, and record them here.

---

## 2. Keywords (phrase match)

```
"private self defense lessons"
"private self defense training"
"one on one self defense training"
"self defense training for college students"
"self defense course for women"
"self defense intensive"
"learn self defense fast"
"executive self defense training"
```

**Note on intent tiers** (for search-term review, not a reason to omit at launch):
- **Best fit for a $15,000 in-person program:** `executive self defense training`, `private self defense training`, `private self defense lessons`, `one on one self defense training`.
- **Weaker fit (price-sensitive / younger skew):** `self defense course for women`, `self defense training for college students`, `learn self defense fast`. Watch these closely; pause fast if they pull tire-kickers.

---

## 3. Negative keywords

Advertiser's list:
```
free, near me, kids, children, gym, krav maga, youtube, video, online course
```

Recommended additions for a premium, in-person offer:
```
cheap, affordable, class, classes, certification, certificate, instructor,
become, job, jobs, app, pepper spray, keychain, gun, weapon, cheap, near
```
(Build an ongoing negative list from the search-terms report during the run.)

---

## 4. Responsive Search Ad

**Headlines** (≤30 chars each):
- Private Self-Defense Intensive
- You Feel Unsafe. I Fix That.
- Olympic Training Center Coach
- 3 Days In Person, Then a Year
- Adults Who Were Never Taught
- Apply for the Program

**Descriptions** (≤90 chars each):
- Three days in person with an Olympic-level judoka, then a month of coached drills.
- For adults who feel unsafe and were never taught. Assessed first, then guided fast.

> **Policy flag:** Google may disapprove ad copy that implies guaranteed personal safety.
> "You Feel Unsafe. I Fix That." risks this. The live landing page deliberately avoids
> guarantees ("You practice until you can…"). Have a softer backup headline ready, e.g.
> "You Feel Unsafe. Let's Change That." to swap in if the ad is disapproved.

---

## 5. Conversion tracking (already wired into the site — just needs IDs)

The conversion is a **submitted application**. The site posts the application to Formspree, fires a
Vercel Analytics `application` event, and routes the applicant to `/call`. Google Ads conversion
firing is already built in and **inert until these environment variables are set** (in Vercel →
Project → Settings → Environment Variables, then redeploy):

| Env var | Purpose |
|---|---|
| `NEXT_PUBLIC_GOOGLE_TAG_ID` | The gtag ID — `AW-XXXXXXXXXX` (Google Ads) or `G-XXXXXXX` (GA4). Loads gtag.js site-wide. |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` | **Recommended.** Full `send_to`, e.g. `AW-XXXXXXXXXX/AbCdEfGhIj`. Fires on a **successful application submit** — the true buyer signal. |
| `NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION` | *Optional.* Fires on a **`/call` page load** (the "page load of /call = 1 conversion" spec). Use this **or** the submit label above, never both on the same conversion action, or you double-count. |

**Recommendation:** use `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` (submit-based). A raw `/call` page load
also counts direct visits, refreshes, and shared links, inflating the number. The submit event only
fires on a real application.

**Conversions fire only on the production deployment.** Preview deployments and local/test builds
never report to Google Ads, even if these env vars are set, and there is no URL parameter that can
turn production tracking on or off. Set the conversion env vars in the **Production** environment in
Vercel; test form behavior on a preview with a mocked endpoint (see `offline-conversion-template.md`
and the testing note below) so no synthetic conversions reach the account.

**Booking the call.** Under the current model a suitable applicant receives a few proposed times from
Jon-Michael directly; the site does not promise an open self-serve calendar to everyone who applies.
`NEXT_PUBLIC_BOOKING_URL` still embeds a scheduling widget on `/call` if set, but enabling it means
**anyone** who reaches `/call` can self-book regardless of fit, which conflicts with sending times
only to suitable applicants. Prefer leaving it unset and sending a private per-applicant scheduling
link, or use a booking tool that requires approval before a slot is confirmed.

---

## 6. Management cadence (while the $300 runs)

- Check the account **at least twice a week**.
- Pause search terms that are not buyers; add negatives.
- Watch spend against the **$300 ceiling**; if on a daily budget, pause manually before it is exceeded.
- **Every Friday**, one short message: spend, clicks, applications, cost per application.

---

## 7. Pass / fail (end of run, ~$300 spent)

- **Pass:** at least one genuine application **and** a held call, at a cost per application that the
  owner judges worth repeating.
- **Fail:** zero applications. The end-of-run note must state whether the **keywords** or the
  **landing page** is the more likely reason (search-terms report + landing-page click-through vs.
  application rate will show which).

### Honest risk to flag up front
$300 is a **signal test, not a statistically meaningful one.** With clicks likely $6–15+, $300 buys
roughly **20–50 clicks**, and with a `$15,000 plus travel` price on the landing page the expected
volume is roughly **0–3 applications**. A "fail" at this budget is at least as likely to mean "sample
too small" as "bad setup." The honest purpose of $300 is to confirm the plumbing works (ads serve,
clicks land, the form is reachable, a conversion registers) and to read the first search-terms data,
not to prove or disprove the offer. Decide whether to continue based on cost-per-click and search-term
quality, not only on application count. Consider shortening the paid path (ad to /self-defense to
/apply to /call is two clicks) by placing the application form directly on `/self-defense` for paid
traffic.

---

## 8. Spend governance

Nothing is spent by building this campaign. The $300 is the **only** amount proposed, and it is not
committed until the owner approves it and un-pauses the campaign. If the owner wants to continue after
the run, that is a separate, explicitly approved decision — this brief does not pre-authorize any
follow-on budget.

---

## 9. Not yet verified (owner/access blocker)

This brief has **not** been validated in Google Ads Editor, and this environment has no Google Ads
access. Before anyone calls the campaign "import-ready," the file must be built in Google Ads Editor
and pass its checks (headline/description character limits, final URL, keyword match types, negative
list, budget type). Treat everything above as the specification to build from, not a verified
importable file.
