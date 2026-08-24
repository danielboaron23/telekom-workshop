import type { Meta, StoryObj } from "@storybook/react";
import { spacing, radius, shadows } from "@/lib/design-system/tokens";

const meta: Meta = { title: "Foundations/Spacing & Radius & Shadows", parameters: { layout: "fullscreen" } };
export default meta;

export const Tokens: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-page p-10">
      <h1 className="mb-4 text-lg leading-6 font-bold text-ink">Spacing</h1>
      <div className="flex max-w-3xl flex-col gap-3 rounded-card bg-paper p-6 shadow-card">
        {spacing.map((s) => (
          <div key={s.name} className="flex items-center gap-4">
            <p className="w-24 text-sm leading-5 font-bold text-ink">spacing-{s.name}</p>
            <p className="w-14 text-xs leading-4 font-medium text-secondary-text">{s.value}px</p>
            <div className="h-4 rounded-sm bg-brand/60" style={{ width: s.value * 4 }} />
          </div>
        ))}
      </div>
      <h1 className="mt-10 mb-4 text-lg leading-6 font-bold text-ink">Radius</h1>
      <div className="flex max-w-3xl gap-4">
        {Object.entries(radius).map(([name, token]) => (
          <div key={name} className="flex flex-1 flex-col items-center gap-2 rounded-card bg-paper p-4 shadow-card">
            <div className="size-16 border-2 border-ink bg-surface" style={{ borderRadius: token.value }} />
            <p className="text-sm leading-5 font-bold text-ink">{name}</p>
            <p className="text-center text-xs leading-4 font-medium text-secondary-text">
              {token.value} — {token.usage}
            </p>
          </div>
        ))}
      </div>
      <h1 className="mt-10 mb-4 text-lg leading-6 font-bold text-ink">Shadows</h1>
      <div className="flex max-w-3xl gap-4">
        {Object.entries(shadows).map(([name, token]) => (
          <div key={name} className="flex flex-1 flex-col items-center gap-3 rounded-card bg-paper p-6">
            <div className="h-16 w-32 rounded-card bg-paper" style={{ boxShadow: token.value }} />
            <p className="text-sm leading-5 font-bold text-ink">{name}</p>
            <p className="text-center font-mono text-xs leading-4 text-secondary-text">{token.value}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
