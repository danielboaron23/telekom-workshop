import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Design System/Welcome", parameters: { layout: "fullscreen" } };
export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-page p-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ui/tile-box-product.svg" alt="" className="size-7" />
          </div>
          <h1 className="text-2xl leading-8 font-bold text-ink">Telekom Workshop Design System</h1>
        </div>
        <p className="text-base leading-6 font-medium text-black/87">
          A 1:1 implementation of the Figma file <b>“Flow for Workshop with Daniel”</b> (Amdocs/Telekom CEP design
          system), extracted from the 11 built screens of the live app.
        </p>
        <div className="flex flex-col gap-3 rounded-card bg-paper p-6 shadow-card">
          <p className="text-sm leading-5 font-bold text-ink">How this library is organized</p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-5 font-medium text-black/87">
            <li>
              <b>Foundations</b> — colors, gradients, typography, spacing, radius, shadows, and the exported Figma icon
              set.
            </li>
            <li>
              <b>Atoms</b> — buttons, chips, toggles, inputs, radios/checkboxes, progress, tabs.
            </li>
            <li>
              <b>Molecules</b> — search fields, wizard stepper, session tabs, payment card.
            </li>
            <li>
              <b>Organisms</b> — app chrome, cards, tables, and the interactive wizards.
            </li>
            <li>
              <b>Screens</b> — the full pages exactly as they run in the app.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-card bg-paper p-6 shadow-card">
          <p className="text-sm leading-5 font-bold text-ink">Ground rules</p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-5 font-medium text-black/87">
            <li>Tokens live in <code>app/globals.css</code> (@theme) and are mirrored in <code>lib/design-system/tokens.ts</code>.</li>
            <li>Montserrat (500/600/700) everywhere; Segoe UI stack only in the Dynamics customer heading.</li>
            <li>Icons are exported Figma SVGs — never hand-drawn.</li>
            <li>Figma overlays and duplicate frames are interaction states — components implement them as real behavior.</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
