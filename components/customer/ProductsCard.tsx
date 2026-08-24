/* Products + Allowance card — Figma nodes 2958:205993 / 2958:206001 */

import { Icon, IconButton } from "@/components/ui/Icon";

function OfferItemCard({
  icon,
  inset,
  title,
  subtitle,
}: {
  icon: string;
  inset: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-black/12 p-[15px]">
      <div className="flex w-full items-start justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="flex items-center justify-center rounded-lg border border-black/20 p-[7px]">
            <Icon src={icon} inset={inset} />
          </span>
          <p className="text-sm leading-5 font-medium text-black/87">{title}</p>
        </div>
        <IconButton src="/icons/ui/menu-kebab.svg" label={`${title} menu`} inset="inset-[12.5%_41.67%]" />
      </div>
      {subtitle && <p className="text-xs leading-4 font-medium text-black/87">{subtitle}</p>}
    </div>
  );
}

function AllowanceItem() {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="flex w-full items-center gap-2">
        <Icon src="/icons/ui/internet-globe-data.svg" />
        <p className="min-w-0 flex-1 text-sm leading-5 font-bold whitespace-nowrap text-black/87">
          Offer name can be very long
        </p>
      </div>
      <p className="text-sm leading-5 whitespace-nowrap text-black/87">
        <span className="font-bold">5.5/10 </span>
        <span className="font-medium">GB</span>
      </p>
      <div className="flex h-1.5 w-full flex-col items-start justify-center overflow-clip rounded-field bg-black/10">
        <div className="h-full w-[70%] rounded-field bg-ink" />
      </div>
      <p className="text-sm leading-5 font-medium text-black/87">Expires 30/08/2024</p>
    </div>
  );
}

export function ProductsCard() {
  return (
    <div className="flex w-full flex-col items-start gap-4 overflow-clip rounded-card bg-paper p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-4 overflow-clip">
        <div className="flex w-full flex-col items-end justify-center">
          <div className="flex w-full items-center justify-between py-3 pr-3">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <p className="truncate text-sm leading-5 font-bold text-ink">Products</p>
              <IconButton src="/icons/ui/filter.svg" label="Filter products" inset="inset-[12.5%]" />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-info hover:bg-black/5">
                Add new
              </button>
              <IconButton src="/icons/ui/menu-kebab.svg" label="Products menu" inset="inset-[12.5%_41.67%]" />
            </div>
          </div>
          <div className="h-px w-full bg-black/12" />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full items-center justify-between">
            <button
              aria-label="Previous product type"
              className="flex cursor-pointer items-center rounded-full p-1 hover:bg-black/5"
            >
              <Icon src="/icons/ui/chevron-big-left.svg" inset="inset-[8.33%_29.17%_8.33%_25%]" />
            </button>
            <div className="flex max-h-8 min-h-8 items-center gap-2 border-b-2 border-brand px-4 py-2">
              <div className="flex items-center gap-1">
                <Icon src="/icons/ui/mobile-phone.svg" inset="inset-[8.33%_25%]" />
                <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">Mobile (3)</p>
              </div>
            </div>
            <div className="flex max-h-8 min-h-8 items-center justify-center gap-2 px-4 py-2">
              <div className="flex items-center gap-1">
                <Icon src="/icons/ui/internet-globe-data.svg" />
                <p className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">Internet (1)</p>
              </div>
            </div>
            <button
              aria-label="Next product type"
              className="flex cursor-pointer items-center rounded-full p-1 hover:bg-black/5"
            >
              <Icon src="/icons/ui/chevron-big-right.svg" inset="inset-[8.33%_25%_8.33%_29.17%]" />
            </button>
          </div>
          <div className="h-px w-full bg-black/12" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center">
            <div className="flex min-w-0 flex-1 items-center gap-1">
              <button className="cursor-pointer text-base font-bold whitespace-nowrap text-black/87 underline decoration-solid decoration-from-font">
                (569) 273 1882 Sai Kumar
              </button>
              <Icon src="/icons/ui/chevron-mini-down.svg" size={24} inset="inset-x-1/4 inset-y-1/3" />
            </div>
            <IconButton src="/icons/ui/menu-kebab.svg" label="Line menu" inset="inset-[12.5%_41.67%]" />
          </div>
          <div className="flex w-full items-center gap-2">
            <span className="flex max-h-6 min-h-6 items-center rounded-full bg-chip-green px-2 py-1">
              <span className="text-center text-xs leading-4 font-medium text-black">Active</span>
            </span>
            <p className="min-w-0 flex-1 text-right text-sm leading-5 whitespace-nowrap text-black/87">
              <span className="font-bold">$40.00</span>
              <span className="font-medium"> /mo.</span>
            </p>
          </div>
          <div className="flex w-full items-center gap-1">
            <p className="text-xs leading-4 font-medium whitespace-nowrap text-black/87">Part of</p>
            <button className="cursor-pointer text-center text-xs leading-4 font-medium whitespace-nowrap text-info">
              Bundle/family offer name
            </button>
          </div>
        </div>
        <OfferItemCard icon="/icons/ui/box-product.svg" inset="inset-[8.33%]" title="Offer name" subtitle="Postpaid" />
        <OfferItemCard icon="/icons/ui/mobile-phone.svg" inset="inset-[8.33%_25%]" title="Device name" />
        <OfferItemCard icon="/icons/ui/puzzle.svg" inset="inset-[8.33%]" title="Add ons (3)" />
      </div>
      <div className="h-px w-full bg-black/12" />
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between pt-3.5 pb-[31px]">
          <p className="truncate text-sm leading-5 font-bold text-ink">Allowance</p>
        </div>
        <div className="flex w-full flex-col gap-8">
          <AllowanceItem />
          <AllowanceItem />
          <AllowanceItem />
        </div>
      </div>
    </div>
  );
}
