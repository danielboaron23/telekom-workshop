import type { Meta, StoryObj } from "@storybook/react";
import { colors, gradients } from "@/lib/design-system/tokens";

const meta: Meta = { title: "Foundations/Colors", parameters: { layout: "fullscreen" } };
export default meta;

export const Palette: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-page p-10">
      <h1 className="mb-6 text-lg leading-6 font-bold text-ink">Colors</h1>
      <div className="grid max-w-5xl grid-cols-3 gap-4">
        {Object.entries(colors).map(([name, token]) => (
          <div key={name} className="flex items-center gap-4 rounded-card bg-paper p-4 shadow-card">
            <div
              className="size-14 shrink-0 rounded-lg border border-black/12"
              style={{ background: token.value }}
            />
            <div className="min-w-0">
              <p className="text-sm leading-5 font-bold text-ink">{name}</p>
              <p className="truncate font-mono text-xs leading-4 text-secondary-text">{token.value}</p>
              <p className="text-xs leading-4 font-medium text-secondary-text">{token.usage}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 mb-4 text-lg leading-6 font-bold text-ink">Gradients</h2>
      <div className="grid max-w-5xl grid-cols-3 gap-4">
        {Object.entries(gradients).map(([name, value]) => (
          <div key={name} className="flex items-center gap-4 rounded-card bg-paper p-4 shadow-card">
            <div className="size-14 shrink-0 rounded-lg" style={{ background: value }} />
            <div className="min-w-0">
              <p className="text-sm leading-5 font-bold text-ink">{name}</p>
              <p className="truncate font-mono text-xs leading-4 text-secondary-text">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
