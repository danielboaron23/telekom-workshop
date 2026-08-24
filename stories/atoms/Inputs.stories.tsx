import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/ui/Icon";

const meta: Meta = { title: "Atoms/Inputs", parameters: { layout: "centered" } };
export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-8 p-8">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-start gap-1 text-xs leading-4 font-medium">
          <p className="text-secondary-text">Recipient name</p>
          <p className="w-[5px] text-ink">*</p>
        </div>
        <input
          defaultValue="Sai Kumar"
          className="h-8 w-full rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-xs leading-4 font-medium text-secondary-text">Search</p>
        <div className="flex h-8 w-full items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
          <Icon src="/icons/ui/search-16.svg" />
          <input
            placeholder="Search"
            className="h-4 min-w-0 flex-1 bg-transparent text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-start gap-1 text-xs leading-4 font-medium">
          <p className="text-secondary-text">Shipping method</p>
          <p className="w-[5px] text-ink">*</p>
        </div>
        <div className="relative w-full">
          <select
            defaultValue="Regular"
            className="h-8 w-full cursor-pointer appearance-none rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none"
          >
            <option>Regular</option>
            <option>Express</option>
            <option>Overnight</option>
          </select>
          <span className="pointer-events-none absolute top-2 right-3 flex">
            <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-xs leading-4 font-medium text-secondary-text">Note to delivery person</p>
        <textarea
          placeholder="e.g. Do not use the front door, use the other entrance at the side of the house."
          className="h-12 w-full resize-none rounded-field border border-black/12 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
        />
        <div className="flex w-full items-start gap-2 text-xs leading-4 font-medium text-secondary-text">
          <p className="min-w-0 flex-1 truncate">This is an helper text</p>
          <p>0/100</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <p className="text-xs leading-4 font-medium text-secondary-text">Field with scanner</p>
        <div className="flex w-[262px] items-end gap-2">
          <input className="h-8 min-w-[180px] flex-1 rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none" />
          <button className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5">
            <Icon src="/icons/ui/scan.svg" inset="inset-[8.33%]" />
          </button>
        </div>
      </div>
    </div>
  ),
};
