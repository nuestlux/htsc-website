---
title: Career Quick Apply Form Refresh
date: 2026-07-09 14:16
status: implemented
type: brainstorm-report
---

# Career Quick Apply Form Refresh

## Summary

User approved direction 2: turn the current quick-apply form into a stronger apply card, not a full sitewide form-system rewrite.

## Findings

- Current form lives in `career-detail.html` and is generated from `generate-site.js`.
- Styling comes mostly from shared form rules in `assets/css/style.css`.
- Current block is usable but visually flat: weak hierarchy, low trust signaling, cramped CTA, no supporting copy.
- Repo is static HTML/CSS/JS, so safest path is markup + CSS refresh while preserving current validation hooks.

## Recommendation

Refresh only the `Nop ho so nhanh` block on the career detail page.

Target design:

- Add a compact eyebrow or badge above the title.
- Add one short support line under the title explaining low-friction apply flow.
- Turn the form wrapper into a premium card with layered background, stronger border contrast, softer depth, and clearer spacing rhythm.
- Keep fields short and familiar: name, email, phone, note.
- Make CTA full width and visually dominant.
- Add one trust note below CTA, e.g. response-time or recruiter follow-up expectation.

## Implementation Considerations

Touchpoints:

- `career-detail.html`
- `generate-site.js`
- `assets/css/style.css`

Behavior to preserve:

- Existing `data-validate` form handling
- Existing field IDs
- Existing submit message area
- Current mobile compatibility

## Acceptance Criteria

- Form reads as a standalone premium apply card, not a default sidebar box.
- Visual hierarchy is obvious in this order: badge/title, support copy, fields, CTA, trust note.
- CTA feels primary and spans full card width.
- Inputs have better spacing, more confident focus states, and cleaner label rhythm.
- Desktop and mobile both remain clean without overflow or awkward stacking.
- No drift between rendered HTML and `generate-site.js` template.

## Risks

- If only `career-detail.html` is edited, future generation from `generate-site.js` will overwrite it.
- If shared `.form-panel` rules are changed too broadly, other forms may shift unintentionally.

## Implementation Update

Implemented the quick-apply card with a form-specific modifier class, localized markup hooks, translated validation feedback, relative local asset paths for GitHub Pages compatibility, and mobile overflow safeguards.

## Remaining Boundary

The site is still static. Real application delivery requires choosing a receiving endpoint or service before the form can submit data outside the browser.
