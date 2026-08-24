import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Atoms/Chips", parameters: { layout: "centered" } };
export default meta;

const chip = "flex max-h-6 min-h-6 items-center gap-1 rounded-full px-2 py-1 text-xs leading-4 font-medium text-black";

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <span className={`${chip} bg-black/10`}>Postpaid</span>
      <span className={`${chip} bg-chip-green`}>Active</span>
      <span className={`${chip} bg-chip-green`}>Preferred</span>
      <span className={`${chip} bg-black/10`}>Closed</span>
      <span className="flex h-9 cursor-pointer items-center rounded-full border-2 border-ink bg-paper px-4 py-2 text-xs leading-4 font-bold text-black/87">
        Category (selected pill)
      </span>
      <span className="flex h-9 cursor-pointer items-center rounded-full border border-gray-300 bg-paper px-4 py-2 text-xs leading-4 font-medium text-black/87">
        Category
      </span>
    </div>
  ),
};
