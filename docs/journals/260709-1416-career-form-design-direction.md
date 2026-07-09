---
title: Career Form Design Direction
date: 2026-07-09 14:16
type: journal
---

# Career Form Design Direction

## Context

User flagged the quick-apply form as visually weak and asked for outside references before redesign.

## What Happened

- Scanned repo and found form in `career-detail.html` plus source template in `generate-site.js`.
- Reviewed current shared form styling in `assets/css/style.css`.
- Checked modern recruiting form patterns from Greenhouse and Ashby.
- Compared three scopes and aligned on direction 2: elevate this form into a stronger apply card.

## Decisions

- Scope stays local to the career detail form for now.
- Keep the form short to reduce friction.
- Improve hierarchy, trust, CTA emphasis, and card treatment.
- Preserve validation hooks and existing field structure.

## Implementation Follow-up

The approved direction was implemented on the career detail quick-apply card. The implementation kept scope local to the career form, preserved existing validation hooks, added bilingual text hooks, and regenerated the static HTML from `generate-site.js`.

## Remaining Boundary

Because the project is a static site, real application delivery still needs a selected endpoint or form service.
