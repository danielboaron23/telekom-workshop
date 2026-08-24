import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Atoms/Progress", parameters: { layout: "centered" } };
export default meta;

export const LinearBar: StoryObj = {
  render: () => (
    <div className="flex w-96 flex-col gap-6 p-8">
      {[70, 45, 92].map((pct) => (
        <div key={pct} className="flex flex-col gap-2">
          <p className="text-sm leading-5 text-black/87">
            <span className="font-bold">{(pct / 10).toFixed(1)}/10 </span>
            <span className="font-medium">GB</span>
          </p>
          <div className="flex h-1.5 w-full flex-col items-start justify-center overflow-clip rounded-field bg-black/10">
            <div className="h-full rounded-field bg-ink" style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  ),
};
