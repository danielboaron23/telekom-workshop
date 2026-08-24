"use client";

/* Order items table + totals + pay-now banner — Figma node 2958:206268 */

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

function PriceCell({
  price,
  suffix,
  strike,
  blue,
  subtext,
  bold = true,
}: {
  price?: string;
  suffix?: string;
  strike?: string;
  blue?: boolean;
  subtext?: string;
  bold?: boolean;
}) {
  return (
    <div className="flex w-[148px] flex-col items-end gap-1 text-sm leading-5">
      {price && (
        <p className={`whitespace-nowrap ${blue ? "font-bold text-info" : "text-black/87"}`}>
          <span className={bold ? "font-bold" : "font-medium"}>{price}</span>
          {suffix && <span className="font-medium"> {suffix}</span>}
        </p>
      )}
      {strike && <p className="font-medium whitespace-nowrap text-secondary-text line-through">{strike}</p>}
      {subtext && <p className="font-medium whitespace-nowrap text-black/87">{subtext}</p>}
    </div>
  );
}

function ChargeRow({
  label,
  labelBold = false,
  icon,
  monthly,
  children,
}: {
  label: string;
  labelBold?: boolean;
  icon?: string;
  monthly?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex items-center gap-2">
        <p className={`max-w-[504px] text-sm leading-5 text-black/87 ${labelBold ? "font-bold" : "font-medium"}`}>
          {label}
        </p>
        {icon && <Icon src={icon} />}
      </div>
      <div className="flex items-start gap-4">
        {monthly}
        {children}
      </div>
    </div>
  );
}

export function OrderItemsCard() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex w-full flex-col items-start gap-6 overflow-clip rounded-card bg-paper p-4 shadow-card">
      <div className="flex w-full flex-col items-start justify-center">
        <div className="flex w-full items-center justify-between pr-4 pb-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center rounded-full p-2">
              <Icon src="/icons/ui/filter-configure.svg" inset="inset-[8.33%]" />
            </span>
            <p className="text-sm leading-5 font-bold text-black/87">Order items</p>
          </div>
          <div className="flex gap-4 text-sm leading-5 font-medium text-black/87">
            <p className="w-[148px] text-right">Monthly charge</p>
            <p className="w-[148px] text-right">One time charge</p>
          </div>
        </div>
        <div className="h-px w-full bg-black/12" />
      </div>
      <div className="flex w-full flex-col items-start rounded-lg border border-black/12">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex w-full cursor-pointer items-start gap-4 p-4 text-left"
        >
          <Icon
            src="/icons/ui/chevron-big-up.svg"
            inset="inset-[8.33%_25%]"
            className={`mt-2 ${expanded ? "" : "rotate-180"}`}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="flex h-8 w-full items-start justify-between">
              <div className="flex max-w-[680px] items-center gap-2">
                <span className="relative size-8 shrink-0 rounded-lg border border-black/20 bg-paper">
                  <span className="absolute top-2 left-2 size-4">
                    <span className="absolute inset-[8.33%_25%]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/icons/ui/mobile-phone-red.svg" alt="" className="block size-full" />
                    </span>
                  </span>
                </span>
                <p className="max-w-[600px] truncate text-sm leading-5 font-bold text-black/87">
                  Mobile (888) 888 8888&nbsp; Mobile offer name
                </p>
                <span className="cursor-pointer text-sm leading-5 font-medium whitespace-nowrap text-info">Edit</span>
              </div>
              <div className="flex h-full items-center justify-end">
                <div className="flex items-start gap-4">
                  <PriceCell price="$5,225.00" suffix="/mo." />
                  <PriceCell price="$5,225.00" />
                </div>
              </div>
            </div>
            <p className="text-sm leading-5 text-black/87">
              <span className="font-medium">12 mo. commitment: </span>
              <span className="font-bold">11 Nov 2020 - 10 Nov 2021</span>
            </p>
          </div>
        </button>
        {expanded && (
          <div className="flex w-full flex-col items-start gap-3 p-4 pt-0">
            <div className="h-px w-full bg-black/12" />
            <ChargeRow label="Single offer" labelBold monthly={<PriceCell price="$5,225.00" suffix="/mo." />}>
              <PriceCell price="$5,225.00" />
            </ChargeRow>
            <div className="h-px w-full bg-black/12" />
            <ChargeRow label="Plan name" labelBold />
            <ChargeRow
              label="Standard Mobile Charge"
              icon="/icons/ui/discount-offer-dark.svg"
              monthly={<PriceCell price="$5,225.00" suffix="/mo." strike="$5,225.00  /mo." />}
            >
              <PriceCell price="$2,251.00" blue />
            </ChargeRow>
            <ChargeRow label="Activation Fee" monthly={<PriceCell price="$5,225.00" suffix="/mo." />}>
              <PriceCell price="$2,251.00" blue subtext="Pay now" />
            </ChargeRow>
            <div className="h-px w-full bg-black/12" />
            <div className="w-full pb-6">
              <ChargeRow label="Parental Control Add-on" labelBold monthly={<PriceCell price="$5.00" suffix="/mo." />}>
                <PriceCell />
              </ChargeRow>
            </div>
            <div className="h-px w-full bg-black/12" />
            <ChargeRow label="SIM" labelBold monthly={<PriceCell />}>
              <PriceCell price="$5.00" />
            </ChargeRow>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-center justify-end gap-3 rounded-lg border border-black/12 bg-paper p-4">
        <div className="flex w-full items-start justify-center">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="text-sm leading-5 font-medium text-secondary-text">Total </p>
            <p className="text-[11px] leading-4 font-medium text-secondary-text">Excl. tax</p>
          </div>
          <div className="flex items-start justify-end gap-4">
            <PriceCell price="$5,225.00" suffix="/mo." />
            <PriceCell price="$5,225.00" />
          </div>
        </div>
        <div className="flex w-full items-start justify-center">
          <p className="min-w-0 flex-1 text-sm leading-5 font-medium text-secondary-text">Tax</p>
          <div className="flex items-start justify-end gap-4">
            <PriceCell price="$5,225.00" suffix="/mo." />
            <PriceCell price="$5,225.00" />
          </div>
        </div>
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-start justify-center">
            <p className="min-w-0 flex-1 text-sm leading-5 font-bold text-black/87">Total </p>
            <div className="flex items-start justify-end gap-4">
              <PriceCell price="$5,225.00" suffix="/mo." />
              <PriceCell price="$5,225.00" />
            </div>
          </div>
          <p className="text-[11px] leading-4 font-medium text-secondary-text">
            *Shipment and delivery charges may apply
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-black/12 bg-surface p-4">
        <div className="flex items-start gap-2">
          <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">Pay now: $80.00</p>
          <p className="text-sm leading-5 font-medium whitespace-nowrap text-secondary-text">(Tax included)</p>
          <button className="cursor-pointer text-sm leading-5 font-medium whitespace-nowrap text-info">Details</button>
        </div>
        <div className="flex flex-wrap content-start items-center gap-1">
          <Icon src="/icons/ui/discount-offer-red.svg" />
          <p className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">In this order, you saved:</p>
          <p className="text-sm leading-5 whitespace-nowrap text-black/87">
            <span className="font-bold">$5,825.00</span>
            <span className="font-medium"> /mo.</span>
          </p>
          <p className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">and</p>
          <p className="text-sm leading-5 whitespace-nowrap text-black/87">
            <span className="font-bold">$5,825.00</span>
            <span className="font-medium"> one time</span>
          </p>
        </div>
      </div>
    </div>
  );
}
