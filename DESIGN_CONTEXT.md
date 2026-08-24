# Telekom Workshop — Design Context

1:1 clone of the Figma file **"Flow for Workshop with Daniel"**
(fileKey `dFg3nUfY5hqdsKZiLgPgfb`, section "Section 1" node `40000003:29317`),
plus a Storybook design system (built after the screens are done).

## Figma screens (Section 1)

| Screen | Node | Size | Status |
| --- | --- | --- | --- |
| Buy Internet — Agent dashboard | `2958:205590` | 1312×889 | ✅ built (`/`) |
| Workspace_Desktop | `2960:223625` / `2958:205695` | 1312×1078 | — |
| Summary (first) | `2958:205890` | 1312×1295 | — |
| Browse Catalog | `2958:206096` / `2958:208592` | 1312×1438 | — |
| Offer | `2960:222429` / `2958:207616` / `2960:223002` | 1287×1058 | — |
| Order Items | `2958:206268` | 1287×1257 | — |
| Delivery Method | `2958:206479` / `2958:206612` | 1287×1058 | — |
| ID Settings | `2958:206729` | 1287×1058 | — |
| Billing Details | `2958:206873` / `2958:207491` | 1287×1058+ | — |
| Summary variants | `2969:68198` … `2958:208338` | various | — |
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
