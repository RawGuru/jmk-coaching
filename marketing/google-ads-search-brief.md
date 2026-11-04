# Google Ads — Search campaign brief

**Advertiser:** Jon-Michael Kerestes — private coaching
**Site:** https://www.jmkerestes.com
**Landing page:** https://www.jmkerestes.com/self-defense
**Test window:** 30 days · **Budget:** $30/day (~$900 total) · **Ad spend billed by Google to the advertiser's card.**

---

## 1. Campaign settings

| Setting | Value |
|---|---|
| Type | Search only (no Display/Search partners) |
| Networks | Google Search only — **uncheck** "Search partners" and "Display Network" |
| Location | United States (set to *Presence: people in your targeted locations*, not "presence or interest") |
| Language | English |
| Budget | $30/day |
| Bidding | Start **Maximize clicks** with a max CPC cap (~$6–8) for the first ~7 days to gather data, then switch to **Maximize conversions / Target CPA $150** once conversions are tracking |
| Ad rotation | Optimize |
| Final URL | https://www.jmkerestes.com/self-defense |

One campaign, one ad group ("Private self-defense — adults").

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

**Before launch, also set `NEXT_PUBLIC_BOOKING_URL`** (Calendly / SavvyCal / Cal.com link). The
`/call` page only shows a booking widget when this is set — without it, the pass criterion
"at least one call booked" cannot happen through the site.

---

## 6. Management cadence (30 days)

- Check the account **at least twice a week**.
- Pause search terms that are not buyers; add negatives.
- Adjust bids toward the $150 CPA target.
- **Every Friday**, one short message: spend, clicks, applications, cost per application.

---

## 7. Pass / fail (day 30, ~$900 spent)

- **Pass:** cost per application **under $150** AND **at least one call booked**.
- **Fail:** zero applications. Day-30 note must state whether the **keywords** or the **landing page**
  is the reason (search-terms report + landing-page click-through vs. application rate will show which).

### Honest risk to flag up front
At $900 with clicks likely $6–15+ and a `$15,000 plus travel` price revealed on the landing page,
expected volume is roughly **0–5 applications**. The test may read as "fail: landing page" when the
real cause is small sample size or price shock rather than a bad setup. Consider whether the
landing-to-application path (ad → /self-defense → /apply → /call, two clicks) should be shortened for
paid traffic, e.g. the application form placed directly on `/self-defense`.

---

## 8. Engagement terms (as stated)

Fixed price **$600** for build + 30 days management + day-30 report. Ad spend separate, billed by
Google. If it passes, budget doubles and the engagement continues month to month.
