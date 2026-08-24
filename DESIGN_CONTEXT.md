# Telekom Workshop — Design Context

1:1 clone of the Figma file **"Flow for Workshop with Daniel"**
(fileKey `dFg3nUfY5hqdsKZiLgPgfb`, section "Section 1" node `40000003:29317`),
plus a Storybook design system (built after the screens are done).

## Figma screens (Section 1)

| Screen | Node | Size | Status |
| --- | --- | --- | --- |
| Buy Internet — Agent dashboard | `2958:205590` | 1312×889 | ✅ built (`/`) |
| Workspace_Desktop (Find Customer) | `2960:223625` (base) / `2958:205695` (row-hover state) | 1312×1078 | ✅ built (`/find-customer`) |
| Summary — customer 360 | `2958:205890` | 1312×1295 | ✅ built (`/customers/sai-kumar`) |
| Browse Catalog | `2958:206096` (base) / `2958:208592` (Mobile-tab state) | 1312×1438 | ✅ built (`/catalog`) |
| Offer configuration | `2960:222429` (Plan) / `2958:207616` (Add-ons) / `2960:223002` (Select number) — one wizard, three step-states | 1287×1058 | ✅ built (`/offer`) |
| Order Items | `2958:206268` | 1287×1257 | ✅ built (`/order`) |
| Delivery Method | `2958:206479` (toggle) / `2958:206612` (form empty) / `2969:66848` (form filled) — one step, three states | 1287×1058 | ✅ built (`/delivery`) |
| ID Settings / Equipment IDs | `2958:206729` (empty) / `2969:67222` (filled) | 1287×1058 | ✅ built (`/equipment`) |
| Billing Details | `2958:206873` (existing, unselected) / `2969:67670` (selected) / `2958:207491` (New account form) | 1287×1058+ | ✅ built (`/billing`) |
| Summary (wizard step 5) | `2969:68198` (collapsed) / `2958:207260` / `2969:70026` / `2969:71171` (sections expanded) | 1287×1891+ | ✅ built (`/summary`) |
| Order placed confirmation | `2958:207186` | 1287×1058 | ✅ built (`/order-complete`) |
| Post-order Summary variants (customer 360 refresh etc.) | `2958:207953` / `2958:208183` / `2969:72324` / `2958:208338` | 1312×… | — |
| sizes_dialog / dialog overlays | `2958:207941` etc. | overlay | interactions, never static |

Daniel picks the next screen — build them one at a time, in his order.

## Layout contract (standing rules)

1. **Proportional zoom**: the whole app zooms uniformly from the **1312px**
   Figma frame — `.app-zoom` on `<body>`,
   `zoom: clamp(0.6, calc(100vw / 1312px), 10)`. Every screen looks
   identical-in-proportion on any monitor.
2. **Screen roots use `h-full` / `flex-1`, never `h-screen`** (vh isn't
   divided by zoom).
3. **Figma overlays = click interactions.** Dialogs/popovers drawn as frames
   (e.g. `sizes_dialog`) are wired to their triggers as interactive
   components — never rendered statically on the page.
4. **Verify with screenshots** before calling a screen done:
   `node scripts/shot.mjs http://localhost:3311/ out.png 1312 889`
   vs the Figma `get_screenshot` export (PIL pixel diff; mean diff < ~3 =
   match, remaining diff should be text antialiasing only). Also check
   1440 and 1280 widths for the zoom behavior.

## Tokens & stack

- Next.js 16 + Tailwind v4. Tokens live in `app/globals.css` `@theme`:
  `brand #f05c62`, `magenta #e50075`, `ink #131318`, `surface #f4f4f4`,
  `page #faf9f8`, `chrome #f0f0f0`, radius `btn 8 / card 12 / field 4`,
  `shadow-card 0 2px 8px rgba(34,33,46,.12)`,
  gradient tile `linear-gradient(-90deg,#f05c62,#e50075)`.
- **Font**: Montserrat (500, 700) via `next/font/google`
  (`--font-montserrat` → `--font-sans`). Type scale: body-2 12/16,
  body-1 14/20, subtitle 16/24, H6 18/24, H5 24/32.
- **Icons**: exported Figma SVGs committed under `public/icons/{topnav,ui,rail}`;
  banner under `public/images`. Never hand-draw SVG paths.
- Dev server: `npm run dev` (verification uses port 3311).

## Gotchas learned on screen 1

- `get_design_context` **dedupes instance assets/text** — all four
  quick-action buttons came back as "Browse Catalog" with the same icon.
  The Figma screenshot is ground truth for per-instance text/icons; export
  unnamed SVGs via `download_assets` and identify them visually
  (render on dark bg — the glyphs are white).
- The banner is **vertically centered** in its 344px carousel container
  (+12px), and quick-action card content is **horizontally centered** —
  both differ from the reference code's flex-start.
- Right rail "Calls"/"Teams" icons are Fabric MDL2 **font glyphs** in Figma —
  exported the whole 44px nodes as SVGs instead (`public/icons/rail`).
- Next dev badge polluted screenshots → `devIndicators: false` in
  `next.config.ts`.

## Live-app wiring (screen 2 onward)

This is a **navigable product, not static pages**. `AppShell` renders the
shared chrome; each route passes its session-tab config to `TabStrip`.
Current nav graph:

- `/` (Agent Dashboard): search field Enter → `/find-customer`.
- `/find-customer`: back arrow, "Agent Dashboard" tab, tab close ×, and
  Home all → `/`. Table rows hover `#fef2f3` (that's Figma frame
  `2958:205695` — a state, not a separate screen). Row click →
  `/customers/sai-kumar`.
- `/customers/[id]` (Summary / customer 360): **dynamic** — every row in
  Find Customer opens that person's 360 with their own mock data
  (contact, products, allowance, orders/cases, balance, bills chart).
  Mock store: `lib/customers.ts` (10 people; `sai-kumar` keeps the exact
  Figma values so the Figma pixel diff still holds; the other 9 are
  invented but internally consistent). Third session tab shows the
  person's name; closing it → `/find-customer`. Unknown id → 404.
- `/catalog` (Browse Catalog / "Order Flow" session tab): reached from
  the dashboard quick actions + banner "Shop now" + Find Customer's
  "Shop". Category tabs (Top offers/Mobile/Internet/Bundles) really
  filter the offer grid (`lib/catalog.ts`); the dropdown mirrors the
  active tab. Back arrow / tab close → `/customers/sai-kumar`.
- `/offer` (Offer configuration wizard): reached from any catalog card's
  "Select". Accordion state machine — Plan settings (commitment toggle)
  → Continue → Add-ons (category pills, Select↔Remove cards) →
  Continue → Select number (tabs, radios, number chips). Collapsed
  sections show summaries only after their step is completed (matches
  the three Figma frames). Back → `/catalog`, close tab → customer.
  Sticky "Continue to order" bar reserved for the Order Items screen.
- `/order` (Order Items — step 1 of the 5-step order wizard): reached
  from the offer page's "Continue to order". Collapsible item accordion,
  totals card, pay-now banner, sticky Back/Next Step footer (Back →
  `/offer`; Next Step reserved for Delivery Method).
- `/delivery` (Delivery Method — order wizard step 2): reached from
  Order Items "Next Step". Live states: Store pick up ↔ Shipping toggle
  per item; choosing Shipping swaps the card to the shipping-details
  form ("Edit" returns to the toggle). Next step is disabled until
  name/phone/email/method are filled — exactly the B→C Figma states.
  Previous steps / back arrow → `/order`. Stepper shows step 1 with a
  checkmark. Next step reserved for Equipment IDs.
- `/equipment` (Equipment IDs — order wizard step 3): reached from
  Delivery Method's "Next step". Serial + SIM number fields with scan
  icon-buttons (clicking a scan button fills the Figma sample value);
  Next Step disabled until both are filled — the two Figma frames are
  the empty/filled states. Previous Step / back arrow → `/delivery`.
  Next Step reserved for Billing details.
- `/billing` (Billing details — order wizard step 4): reached from
  Equipment IDs' "Next Step". Existing account tab = billing-accounts
  table with radio selection (gates Next Step); New account tab = full
  form with defaults (owner/policy/cycle selects, Set auto-payment
  toggle showing the saved Visa card, Email/Post mail bill media,
  Default billing address toggle). Previous Step / back → `/equipment`.
  Next Step reserved for Summary. Header keeps the app's $30/$900 order
  totals (these frames show $10/$300 — Figma mock inconsistency).
- `/summary` (Summary — order wizard step 5): reached from Billing
  details' "Next Step". Order-summary accordion + collapsible
  Delivery/Equipment/Billing sections (expanded contents from the
  taller state frames), totals with Shipping row, pay-now banner, and
  Customer acceptance: a REAL drawable signature canvas (+ Clear) and
  two checkboxes — Submit order enables only with signature + both
  checks. Submit → `/order-complete`.
- `/order-complete` (order placed): celebration photo, order id,
  "Go to customer 360" → `/customers/sai-kumar`, "Continue shopping" →
  `/catalog`.
- `scripts/flow-test.mjs` — Playwright nav+data test (61 checks incl.
  drawing the signature); run after wiring each new screen.
- Note: the Find Customer table intentionally deviates from the Figma
  (which repeats "Sarah Pulman" ×9) — Daniel asked for distinct people
  so the demo behaves like a real product.

## Gotchas learned on screen 2

- Duplicate frames of a screen are usually **states** (hover/selected),
  not new screens — compare screenshots before building a second route.
- Figma reference code lied about table paddings: body cells are px-16
  except Name (px-12); header row is 52px tall (double py-8); body rows
  48px **including** the 1px border (Tailwind border-box → use `h-12`,
  not `py-2`).
- Red dashed marks at row right-edges in Figma renders are **annotation
  artifacts** — don't reproduce. Same for the stray `#971c1c` rect
  (node `2960:223718`) which doesn't render.
- The top bar's "Refresh" strip in the Figma layer tree does **not**
  render — screenshot ground truth wins over the node tree.
- Row 1's "Owners name" cell renders at 14px vs 12px elsewhere —
  deliberate quirk, kept (`bigOwner`).

## Gotchas learned on screen 3 (customer 360)

- Figma strokes are **inner**; CSS borders add to the box. For bordered
  elements sized by content, subtract the border from the padding
  (`p-[15px]`/`p-[7px]`) or heights inflate 2px per element and drift
  accumulates down the column.
- The customer heading bar uses **Segoe UI** (Dynamics chrome) — built
  with `--font-segoe` system stack; glyphs differ slightly on macOS.
- Montserrat SemiBold (600) needed for the $120.00 balance — added to
  the next/font weights.
- The tab strip x-positions wobble ±7px between Figma screens (designer
  inconsistency); standardized on screen 3's spacing (px-12/gap-12)
  across all routes.
- Recent-bills chart: 12 bars exist in Figma (only ~3 visible, clipped);
  built as `overflow-x-auto` with hidden scrollbar + Figma's decorative
  scroll pill. Bar heights/values copied verbatim from the mock.
- Allowance items: "5.5/10 GB" wraps to its own line (min-width forces
  it); no divider under the "Allowance" header; progress fill is 70%.
- Dark-card icons need the white SVG exports (topnav versions or
  dedicated white assets like `email-white.svg`) — a 404'd icon renders
  as a broken-image box that's easy to misread as a style bug.

## Gotchas learned on screen 4 (Browse Catalog)

- Offer-card header: title→chip gap is 16 and header→body gap is 16
  (not the component's declared 8/24) — net height matches but the chip
  sits 8px lower. Image cards' media block is 108px (matches the
  80×108 Product Image), not the visual ~150px impression.
- Figma raster fills sometimes export as a white-rect "SVG"
  (`Rectangle 6`) — the real bitmap comes from `download_assets`
  `rawImages` (router photo, Netflix logo). A fully-transparent PNG is
  the same failure in disguise — check averages, not just file size.
- Section spacing around the category tabs: header card→tabs 16,
  tabs→results card 24 — group header+tabs in a gap-4 wrapper inside
  the page's gap-6 column.
- Offer tile gradients use the light coral pair (#fe7a7f→#f05c62),
  not the brand tile gradient.

## Gotchas learned on screen 5 (Offer wizard)

- Multiple same-named frames in a row can be a **wizard**: diff their
  screenshots pairwise — each frame expands a different accordion step.
- Figma toggle/summary states contradict each other across frames
  (A selects 24 months, B/C say 12) — live app picks one coherent
  default and derives summaries from real state.
- Accordion: header 52px (py-15px + border), keeps its bottom border
  when open; body px-24 py-16; sections gap-16; footer bar 64px.
- Some instance icons export in the wrong color — recolor the SVG fill
  (`tile-puzzle-filled` → white, `discount-offer-blue` → #0070c9)
  rather than hand-drawing.
- Figma shows all accordion chevrons pointing up regardless of state;
  the build rotates them closed — deliberate live-app deviation.

## Gotchas learned on screen 6 (Order Items)

- The 1287-wide frames use a 1152px content column (right gap 48) vs
  1200 on the 1312 frames — the app keeps its consistent 24px padding,
  so price columns sit ~25px right of these frames. Frame-width
  artifact, documented deviation.
- The order stepper row is exactly 24px tall (no extra padding) and the
  page column gap on this screen is 24, not 28.
- Item sub-rows sit at the box padding (no indent under the chevron);
  the "Parental Control Add-on" section carries 24px of extra bottom
  space before its divider.
- First "Total"/"Tax" labels in the totals card are secondary gray;
  only the final Total is ink.

## Gotchas learned on screen 7 (Delivery Method)

- Three same-screen frames were interaction states again: toggle view,
  empty form (Next step disabled), filled form (enabled) — build the
  validation, not three pages.
- The order header's "Refresh" is visible on Order Items but absent on
  Delivery Method — parameterized (`showRefresh`).
- The Icon component collapses to 0×0 inside a non-flex absolute
  wrapper (inline spans don't take size) — give such wrappers `flex`.
- Frame wobble again: this frame's card sits 7px higher than Order
  Items' — accepted, in-card spacing verified instead.

## Gotchas learned on screen 10 (Summary + confirmation)

- The five Summary frames are one screen: the taller ones just have
  more accordions expanded. The 1058-tall "Summary" (2958:207186) is
  actually the order-placed confirmation.
- Signature is a mock image in Figma — built as a real canvas pad
  (pointer events) since it's an interaction, per the overlay rule.
- Section icons export in wrong colors again; van/settings came red,
  billing icon recolored from note-bill-paper.
