# AdSense privacy and content checklist

Last reviewed: 2026-07-28

This repository includes the code-side pieces needed for Google Privacy & Messaging:

- the standard AdSense tag is loaded sitewide when `ADSENSE_CODE` or the admin `adsense_code` setting is present;
- the privacy policy explicitly discloses cookies, identifiers, web beacons, Google and third-party advertising providers;
- the footer includes a **Privacy & cookie settings** control that reopens the Google consent message through `googlefc.showRevocationMessage()`;
- the sitemap includes line-specific and practice-specific content pages.

A Google-certified CMP is not fully active until the message is created and published in the AdSense account. Complete the following account-side steps after deployment.

## 1. Publish the European regulations message

1. Sign in to Google AdSense.
2. Open **Privacy & messaging**.
3. Open **European regulations** and create a message.
4. Select `metrotyping.org` and confirm the site's privacy-policy URL.
5. Enable a choice set that lets users consent, refuse, or manage options.
6. Include the languages used by the site, at minimum Korean and English.
7. Enable Google Consent Mode in the Privacy & messaging settings when available.
8. Publish the message.

Google's CMP is certified and integrates with the IAB Transparency and Consent Framework. Publishing the message is required for the sitewide AdSense tag to deploy it to applicable visitors.

## 2. Protect pages that should not contain ads

The sitewide Google tag is needed for consent messaging, but actual advertising placement must remain controlled.

In **Ads > By site > metrotyping.org**, review Auto ads and add page exclusions for pages where ads would create policy or experience risk, including:

- `/privacy-policy`
- `/terms-of-service`
- `/contact`
- the homepage if Auto ads overlap or appear inside/around the embedded game

Do not place manual ad units inside the iframe, over gameplay controls, next to buttons in a way that could cause accidental clicks, or on pages without meaningful publisher content.

## 3. Test the CMP

After publishing and deploying:

1. Open an incognito window.
2. Visit a page containing the sitewide AdSense tag.
3. Add `?fc=alwaysshow` to the URL to preview a published Google message.
4. Confirm the message offers the intended consent choices.
5. Accept or reject, then use the footer's **Privacy & cookie settings** control to reopen the message.
6. In DevTools, confirm the Google Privacy & Messaging API is available (`window.googlefc`) and that an IAB TCF API is present for applicable European testing (`window.__tcfapi`).
7. Recheck in an EEA/UK/Switzerland test environment because the normal message is region-dependent.

## 4. Content-quality checks

The sitemap should contain at least:

- 10 trust and core pages;
- 6 or more editorial blog posts;
- 10 line-specific guides under `/lines/`;
- 10 practice guides under `/practice/`.

Before requesting another review:

- verify every guide returns HTTP 200 and has a unique title, description, H1, and canonical URL;
- confirm the line and practice guides are linked from `/supported-lines` and `/tips`;
- inspect rendered HTML to ensure header and footer navigation are represented by semantic `<nav>` elements;
- check that no navigation text is accidentally rendered inside the article body;
- avoid publishing large batches of near-duplicate pages with only station names changed.

## 5. Privacy-policy checks

Verify the deployed `/privacy-policy` page visibly contains all of the following concepts in Korean and English:

- cookies and similar technologies;
- advertising and analytics identifiers;
- third-party advertisers, including Google;
- cookies being placed or read by third parties;
- web beacons, IP addresses, and device/browser identifiers;
- contextual and personalized advertising purposes;
- consent for EEA, UK, and Switzerland where required;
- a way to change or withdraw consent;
- the separate privacy responsibility of the embedded original game.
