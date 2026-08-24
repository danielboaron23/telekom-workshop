import type { Meta, StoryObj } from "@storybook/react";
import { typography } from "@/lib/design-system/tokens";

const meta: Meta = { title: "Foundations/Typography", parameters: { layout: "fullscreen" } };
export default meta;

export const TypeScale: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-page p-10">
      <h1 className="mb-2 text-lg leading-6 font-bold text-ink">Typography</h1>
      <p className="mb-6 text-sm leading-5 font-medium text-secondary-text">
        Montserrat via next/font — weights 500 (Medium), 600 (SemiBold), 700 (Bold).
      </p>
      <div className="flex max-w-3xl flex-col divide-y divide-black/12 rounded-card bg-paper px-6 shadow-card">
        {typography.map((style) => (
          <div key={style.name} className="flex items-baseline gap-8 py-5">
            <div className="w-36 shrink-0">
              <p className="text-sm leading-5 font-bold text-ink">{style.name}</p>
              <p className="text-xs leading-4 font-medium text-secondary-text">{style.spec}</p>
            </div>
            <p className={`${style.className} text-black/87`}>Get a WiFi only plan</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
