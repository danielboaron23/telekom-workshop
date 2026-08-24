"use client";

/* Order creation header — Figma node inside 2958:206268 */

import { useRouter } from "next/navigation";
import { Icon, IconButton } from "@/components/ui/Icon";

export function OrderHeader({ showRefresh = true, backHref = "/offer" }: { showRefresh?: boolean; backHref?: string }) {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper shadow-card">
      <div className="flex w-full items-center gap-3 px-6 py-2">
        <button
          aria-label="Back"
          onClick={() => router.push(backHref)}
          className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5"
        >
          <span className="relative size-4">
            <span className="absolute inset-[12.5%_8.33%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/ui/arrow-line-left.svg" alt="" className="block size-full" />
            </span>
          </span>
        </button>
        <div className="h-6 w-px bg-black/12" />
        {showRefresh && (
          <button className="flex h-8 w-24 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 hover:bg-black/5">
            <Icon src="/icons/ui/refresh.svg" inset="inset-[4.17%_8.33%]" />
            <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-black/87">Refresh</span>
          </button>
        )}
      </div>
      <div className="h-px w-full bg-black/12" />
      <div className="flex w-full items-center gap-4 px-6 py-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="flex items-start">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2">
              <Icon src="/icons/ui/note-bill-paper.svg" inset="inset-[4.17%_12.5%]" />
            </div>
          </div>
          <div className="flex min-h-8 flex-col items-start justify-center gap-1">
            <div className="flex items-center gap-2">
              <p className="text-lg leading-6 font-bold whitespace-nowrap text-black/87">Order 1234567890</p>
              <IconButton src="/icons/ui/menu-kebab.svg" label="Order menu" inset="inset-[12.5%_41.67%]" />
            </div>
            <p className="text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">Order Creation</p>
          </div>
        </div>
        <div className="flex shrink-0 items-start justify-end gap-4">
          <div className="flex w-[88px] flex-wrap content-center items-center gap-2">
            <p className="text-xs leading-4 font-bold whitespace-nowrap text-black/87">$30.00</p>
            <p className="text-xs leading-4 whitespace-nowrap text-black/87">
              <span className="font-bold">Mo.</span>
              <span className="font-medium text-secondary-text"> (excl. tax)</span>
            </p>
          </div>
          <div className="w-px self-stretch bg-black/12" />
          <div className="flex w-[130px] flex-wrap content-center items-center gap-2">
            <p className="text-xs leading-4 font-bold whitespace-nowrap text-black/87">$900.00</p>
            <p className="text-xs leading-4 whitespace-nowrap text-black/87">
              <span className="font-bold">One time</span>
              <span className="font-medium text-secondary-text"> (excl. tax)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
