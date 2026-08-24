import type { Meta, StoryObj } from "@storybook/react";
import { SearchFields } from "@/components/search/SearchFields";
import { OrderStepper } from "@/components/order/OrderStepper";
import { TabStrip } from "@/components/chrome/TabStrip";
import { Icon } from "@/components/ui/Icon";

const meta: Meta = { title: "Molecules/Overview", parameters: { layout: "fullscreen", nextjs: { appDirectory: true } } };
export default meta;

export const SearchFieldsRow: StoryObj = {
  name: "Search fields (dropdown + search)",
  render: () => (
    <div className="bg-page p-8">
      <div className="rounded-card bg-paper p-6 shadow-card">
        <SearchFields placeholder="Type here and press ‘Enter’ for search" />
      </div>
    </div>
  ),
};

export const WizardStepper: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6 bg-page p-8">
      <OrderStepper active={0} />
      <OrderStepper active={2} />
      <OrderStepper active={4} />
    </div>
  ),
};

export const SessionTabs: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2 bg-page py-4">
      <TabStrip
        tabs={[
          { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "#", active: true, closable: true },
        ]}
      />
      <TabStrip
        tabs={[
          { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "#" },
          { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "#" },
          { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "#" },
          { label: "Order Flow", icon: "/icons/ui/note-bill-paper-dark.svg", href: "#", active: true, closable: true },
        ]}
      />
    </div>
  ),
};

export const PaymentCard: StoryObj = {
  render: () => (
    <div className="bg-page p-8">
      <div className="flex w-[511px] items-start gap-4 rounded-lg border border-black/12 bg-paper p-4">
        <span className="flex size-8 items-center justify-center overflow-clip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/ui/visa-badge.svg" alt="" className="block size-8" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <p className="text-xs leading-4 font-medium text-black/87">Visa **** 7683</p>
          <p className="text-xs leading-4 font-medium text-secondary-text">Exp: 08/24</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex max-h-6 min-h-6 items-center rounded-full bg-chip-green px-2 py-1 text-xs leading-4 font-medium text-black">
            Preferred
          </span>
        </div>
      </div>
    </div>
  ),
};

export const GradientTiles: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6 bg-page p-8">
      <div className="flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2">
        <Icon src="/icons/ui/zoom-plus-white.svg" className="!size-[22px]" />
      </div>
      <div className="flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)]">
        <Icon src="/icons/ui/wallet-money.svg" size={24} inset="inset-[12.5%_8.33%]" />
      </div>
      <span className="flex items-center justify-center rounded-btn bg-[linear-gradient(-90deg,#fe7a7f_0%,#f05c62_100%)] p-2">
        <Icon src="/icons/ui/tile-puzzle-filled.svg" inset="inset-[8.33%]" />
      </span>
      <span className="relative size-8 rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] shadow-card">
        <span className="absolute top-2 left-2 size-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/ui/cat-sim.svg" alt="" className="block size-full" />
        </span>
      </span>
      <p className="text-xs leading-4 font-medium text-secondary-text">Category / balance / offer / quick-action tiles</p>
    </div>
  ),
};
