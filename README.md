# Telekom Workshop — CEP Customer Service Workspace

A pixel-faithful, **fully navigable** implementation of the Figma file
**“Flow for Workshop with Daniel”** (Amdocs/Telekom CEP design system) —
11 screens cloned 1:1 and wired together into a working product demo,
plus a complete Storybook design system.

Built with **Next.js 16 · React 19 · Tailwind CSS v4 · Storybook 10**.

![flow](public/images/banner-desktop.png)

## Quick start

```bash
npm install
npm run dev        # the app       → http://localhost:3000
npm run storybook  # design system → http://localhost:6006
```

## The demo journey

Everything is clickable, end to end:

1. **Agent Dashboard** (`/`) — type in “Search for a customer” and press **Enter**
2. **Find Customer** — 10 distinct mock customers; click any row
3. **Customer 360** (`/customers/[id]`) — that person’s contact card, products,
   allowance, balance and 12-month bills chart
4. **Shop / Browse Catalog** (`/catalog`) — category tabs really filter; click **Select**
5. **Offer wizard** (`/offer`) — commitment toggle → add-ons → phone number,
   with step summaries filling in as you continue
6. **Order wizard** — Order items → Delivery method (pickup/shipping form with
   validation) → Equipment IDs (scan buttons) → Billing details → **Summary**
7. **Sign the signature pad**, accept the terms, **Submit order** → 🎉 confirmation

Session tabs at the top (Agent Dashboard / Find Customer / customer / Order Flow)
navigate everywhere; × closes a tab back a step. The whole app zooms
proportionally from the 1312px design frame (resize the window).

## Verification

| Check | Command |
| --- | --- |
| End-to-end flow (61 checks, incl. drawing the signature) | `node scripts/flow-test.mjs` |
| Screenshot for pixel-diff vs Figma | `node scripts/shot.mjs <url> <out.png> [w] [h]` |
| Storybook smoke (all 44 stories render) | `node scripts/sb-smoke.mjs` |

Every screen was verified against its Figma frame with a Playwright
screenshot + PIL pixel diff during development; deviations (all
deliberate) are documented in [`DESIGN_CONTEXT.md`](DESIGN_CONTEXT.md).

## Design system

`npm run storybook` — 44 stories organized Atomic-style:

- **Foundations** — colors + gradients, type scale, spacing/radius/shadows,
  and the full exported Figma icon set (`public/icons/`)
- **Atoms** — buttons, chips, toggles, inputs, radios/checkboxes, tabs, progress
- **Molecules** — search fields, wizard stepper, session tabs, payment card
- **Organisms** — app chrome, all cards and the interactive wizards
- **Screens** — the 11 pages, pixel-identical to the app

Tokens live in `app/globals.css` (`@theme`), mirrored in
`lib/design-system/tokens.ts`.

## Project map

```
app/                  routes (dashboard, find-customer, customers/[id],
                      catalog, offer, order, delivery, equipment,
                      billing, summary, order-complete)
components/
  chrome/             AppShell, MainHeader, TabMenu, TabStrip, rail
  dashboard/ customer/ catalog/ offer/ order/ …
  ui/                 Icon, Toggle
lib/                  mock data (customers, catalog) + design tokens
public/icons/         exported Figma SVGs (never hand-drawn)
stories/              the Storybook design system
scripts/              shot.mjs · flow-test.mjs · sb-smoke.mjs
DESIGN_CONTEXT.md     screen↔node map, layout contract, gotchas log
```

## Key working rules (from `DESIGN_CONTEXT.md`)

- **Figma overlays & duplicate frames are interaction states** — they get
  built as real behavior (hover, wizard steps, validation), never as
  static pages.
- **Screenshot ground truth beats the node tree** — the Figma MCP dedupes
  instance text/icons and sometimes exports placeholder assets.
- **Figma strokes are inner** — CSS borders are absorbed into padding to
  keep boxes pixel-exact.
- Proportional zoom from the 1312px frame; screen roots use
  `h-full`/`flex-1`, never `h-screen`.

---

Workshop project by **Daniel Boaron** (Design AI) — built live with
Claude Code as a Figma → production-code demonstration.
