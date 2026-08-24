import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/ui/Icon";

const meta: Meta = { title: "Atoms/Buttons", parameters: { layout: "centered" } };
export default meta;

const base =
  "flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap";

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex items-center gap-4">
        <button className={`${base} bg-ink text-white hover:bg-black`}>Contained (ink)</button>
        <button className={`${base} border border-outlined-border text-ink hover:bg-black/5`}>Outlined</button>
        <button className={`${base} text-info hover:bg-black/5`}>Text (info)</button>
        <button className={`${base} cursor-default bg-black/10 text-black/40`}>Disabled</button>
      </div>
      <div className="flex items-center gap-4">
        <button className={`${base} bg-paper text-brand`}>
          <Icon src="/icons/ui/home.svg" inset="inset-[8.33%_4.16%]" />
          Home (brand text)
        </button>
        <button className={`${base} border border-outlined-border text-ink hover:bg-black/5`}>
          <Icon src="/icons/ui/email.svg" inset="inset-[12.5%_4.17%]" />
          With icon
        </button>
        <div className="rounded-lg bg-[linear-gradient(90deg,#f05c62,#e50075)] p-3">
          <button className={`${base} border border-outlined-border-on-dark text-white hover:bg-white/10`}>
            Outlined on dark
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5">
          <Icon src="/icons/ui/menu-hamburger.svg" inset="inset-[16.67%_8.33%]" />
        </button>
        <button className="flex cursor-pointer items-center rounded-full bg-paper p-1 drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]">
          <Icon src="/icons/ui/arrow-line-left.svg" inset="inset-[12.5%_8.33%]" />
        </button>
        <p className="text-xs leading-4 font-medium text-secondary-text">Icon button · tiny utility button</p>
      </div>
    </div>
  ),
};
