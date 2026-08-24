"use client";

/* Offer configuration header — Figma node inside 2960:222429 */

import { useRouter } from "next/navigation";
import { Icon, IconButton } from "@/components/ui/Icon";

export function OfferHeader() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper shadow-card">
      <div className="flex w-full items-start gap-2 px-6 py-2">
        <button
          aria-label="Back"
          onClick={() => router.push("/catalog")}
          className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5"
        >
          <span className="relative size-4">
            <span className="absolute inset-[12.5%_8.33%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/ui/arrow-line-left.svg" alt="" className="block size-full" />
            </span>
          </span>
        </button>
      </div>
      <div className="h-px w-full bg-black/12" />
      <div className="flex w-full items-center gap-4 px-6 py-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="flex items-start">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2">
              <Icon src="/icons/ui/tile-box-product.svg" inset="inset-[8.33%]" />
            </div>
          </div>
          <div className="flex min-h-8 flex-col items-start justify-center gap-1">
            <div className="flex items-center gap-2">
              <p className="text-lg leading-6 font-bold whitespace-nowrap text-black/87">&lt;Root offer name&gt;</p>
              <IconButton src="/icons/ui/menu-kebab.svg" label="Offer menu" inset="inset-[12.5%_41.67%]" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">Offer configuration</p>
              <div className="h-4 w-px bg-black/12" />
              <button className="flex cursor-pointer items-center justify-center gap-2 overflow-clip">
                <Icon src="/icons/ui/discount-offer-blue.svg" />
                <span className="text-center text-xs leading-4 font-medium whitespace-nowrap text-info">Promotion</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-start justify-end gap-4">
          <div className="flex w-[88px] flex-wrap content-center items-center gap-2">
            <p className="text-xs leading-4 font-bold whitespace-nowrap text-black/87">$10.00</p>
            <p className="text-xs leading-4 font-medium whitespace-nowrap text-black/87">Mo. (excl. tax)</p>
          </div>
          <div className="w-px self-stretch bg-black/12" />
          <div className="flex w-[115px] flex-wrap content-center items-center gap-2">
            <p className="text-xs leading-4 font-bold whitespace-nowrap text-black/87">$300.00</p>
            <p className="text-xs leading-4 font-medium whitespace-nowrap text-black/87">One time (excl. Tax)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
