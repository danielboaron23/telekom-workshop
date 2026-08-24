import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Icons", parameters: { layout: "fullscreen" } };
export default meta;

const ui = [
  "add-document", "add-plus", "arrow-line-left", "arrow-line-right", "book-library-filled", "box-product",
  "cat-bag", "cat-box", "cat-headphones", "cat-sim", "chevron-big-left", "chevron-big-right", "chevron-big-up",
  "chevron-mini-down", "check-white", "checkmark-mini", "cross-close-mini", "delete-trash-bin",
  "discount-offer", "discount-offer-blue", "discount-offer-dark", "discount-offer-red", "doc-clipboard-blue",
  "email", "email-white", "error-alert", "filter", "filter-configure", "filter-simple", "hashtag-red", "home",
  "info", "internet-globe-data", "location", "menu-gridview-red", "menu-hamburger", "menu-kebab",
  "mobile-phone", "mobile-phone-red", "note-bill-paper", "note-bill-paper-dark", "note-bill-paper-red",
  "note-document", "note-document-file", "note-mobile-phone", "person-avatar-add", "person-avatar-circle",
  "person-avatar-dark", "puzzle", "puzzle-red", "refresh", "scan", "search-16", "settings-config-red",
  "shopping-bag", "sim-filled", "tile-box-product", "tile-call-phone", "tile-internet-globe",
  "tile-mobile-phone-filled", "tile-puzzle-filled", "tile-tv-filled", "trash-blue", "van-red", "visa-badge",
  "wallet-money", "zoom-in", "zoom-plus-white",
];

function Cell({ dir, name, dark }: { dir: string; name: string; dark?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex size-12 items-center justify-center rounded-lg border border-black/12 ${
          dark ? "bg-ink-card" : "bg-paper"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/icons/${dir}/${name}.svg`} alt={name} className="max-h-6 max-w-6" />
      </div>
      <p className="max-w-16 truncate text-center text-[10px] leading-3 font-medium text-secondary-text">{name}</p>
    </div>
  );
}

export const IconSet: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-page p-10">
      <h1 className="mb-2 text-lg leading-6 font-bold text-ink">Icons</h1>
      <p className="mb-6 text-sm leading-5 font-medium text-secondary-text">
        Exported Figma SVGs from <code>public/icons/</code>. White glyphs shown on the dark card color.
      </p>
      <h2 className="mb-3 text-sm leading-5 font-bold text-ink">UI</h2>
      <div className="grid max-w-5xl grid-cols-12 gap-3">
        {ui.map((name) => (
          <Cell
            key={name}
            dir="ui"
            name={name}
            dark={name.includes("white") || name.startsWith("tile-") || ["note-bill-paper", "sim-filled", "discount-offer", "email-white", "wallet-money", "note-document", "note-mobile-phone", "location", "note-document-file", "cat-bag", "cat-box", "cat-headphones", "cat-sim", "home"].includes(name)}
          />
        ))}
      </div>
      <h2 className="mt-8 mb-3 text-sm leading-5 font-bold text-ink">Top navigation (white on black)</h2>
      <div className="grid max-w-5xl grid-cols-12 gap-3">
        {["search", "lab-experiment", "bulb", "add-plus", "filter-simple", "settings", "help-info", "person-avatar"].map(
          (name) => (
            <Cell key={name} dir="topnav" name={name} dark />
          ),
        )}
      </div>
      <h2 className="mt-8 mb-3 text-sm leading-5 font-bold text-ink">Productivity rail</h2>
      <div className="grid max-w-5xl grid-cols-12 gap-3">
        {["copilot", "sms", "calls", "teams"].map((name) => (
          <Cell key={name} dir="rail" name={name} />
        ))}
      </div>
    </div>
  ),
};
