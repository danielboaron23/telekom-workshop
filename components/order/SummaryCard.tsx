"use client";

/* Order Summary (wizard step 5) — Figma frames 2969:68198 (collapsed) and
   2958:207260 / 2969:70026 / 2969:71171 (sections expanded). */

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

function PriceCell({ price, suffix, strike, blue, subtext }: { price?: string; suffix?: string; strike?: string; blue?: boolean; subtext?: string }) {
  return (
    <div className="flex w-[148px] flex-col items-end gap-1 text-sm leading-5">
      {price && (
        <p className={`whitespace-nowrap ${blue ? "font-bold text-info" : "text-black/87"}`}>
          <span className="font-bold">{price}</span>
          {suffix && <span className="font-medium"> {suffix}</span>}
        </p>
      )}
      {strike && <p className="font-medium whitespace-nowrap text-secondary-text line-through">{strike}</p>}
      {subtext && <p className="font-medium whitespace-nowrap text-black/87">{subtext}</p>}
    </div>
  );
}

function ChargeRow({ label, labelBold = false, icon, monthly, children }: { label: string; labelBold?: boolean; icon?: string; monthly?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex items-center gap-2">
        <p className={`max-w-[504px] text-sm leading-5 text-black/87 ${labelBold ? "font-bold" : "font-medium"}`}>{label}</p>
        {icon && <Icon src={icon} />}
      </div>
      <div className="flex items-start gap-4">
        {monthly}
        {children}
      </div>
    </div>
  );
}

const vSep = <span className="h-5 w-px bg-black/12" />;
const bullet = (text: string) => (
  <span className="flex items-center gap-2 text-sm leading-5 font-medium text-black/87">
    <span className="pl-1">·</span>
    {text}
  </span>
);

function LabelValue({ label, value, className = "" }: { label: string; value: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-start justify-center gap-2 text-sm leading-5 font-medium ${className}`}>
      <p className="text-secondary-text">{label}</p>
      <div className="text-black/87">{value}</div>
    </div>
  );
}

function SummarySection({ icon, title, open, onToggle, children }: { icon: string; title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start">
      <div
        className={`flex w-full items-center gap-4 border border-black/12 bg-paper p-4 ${open ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <button onClick={onToggle} className="flex min-w-0 flex-1 cursor-pointer items-center gap-4 text-left">
          <Icon src="/icons/ui/chevron-big-up.svg" inset="inset-[8.33%_25%]" className={open ? "" : "rotate-180"} />
          <span className="flex items-center gap-2">
            <Icon src={icon} inset="inset-[8.33%]" />
            <span className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">{title}</span>
          </span>
        </button>
        <button className="cursor-pointer text-center text-sm leading-5 font-medium whitespace-nowrap text-info">
          Edit
        </button>
      </div>
      {open && (
        <div className="flex w-full flex-col items-start gap-3 rounded-b-lg border border-t-0 border-black/12 bg-paper p-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function SummaryCard() {
  const router = useRouter();
  const [itemOpen, setItemOpen] = useState(true);
  const [open, setOpen] = useState({ delivery: false, equipment: false, billing: false });
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  const startDraw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawing.current = true;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#131318";
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };
  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    setHasSignature(true);
  };
  const endDraw = () => {
    drawing.current = false;
  };
  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const submitEnabled = terms && privacy && hasSignature;

  const checkbox = (checked: boolean, toggle: () => void, label: string, link: string) => (
    <div className="flex items-center gap-1">
      <button onClick={toggle} className="flex cursor-pointer items-center gap-2 py-2">
        {checked ? (
          <span className="flex size-5 items-center justify-center rounded-field bg-ink p-1">
            <Icon src="/icons/ui/check-white.svg" className="!size-3" inset="inset-[8%]" />
          </span>
        ) : (
          <span className="size-5 rounded-field border border-gray-300" />
        )}
        <span className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">{label}</span>
      </button>
      <button className="cursor-pointer text-center text-sm leading-5 font-medium whitespace-nowrap text-info">
        {link}
      </button>
    </div>
  );

  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-6">
        {/* header */}
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full items-center justify-between pr-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center rounded-full p-2">
                <Icon src="/icons/ui/filter-configure.svg" inset="inset-[8.33%]" />
              </span>
              <p className="text-sm leading-5 font-bold text-black/87">Order summary</p>
            </div>
            <div className="flex gap-4 text-sm leading-5 font-medium text-black/87">
              <p className="w-[148px] text-right">Monthly charge</p>
              <p className="w-[148px] text-right">One time charge</p>
            </div>
          </div>
          <div className="h-px w-full bg-black/12" />
        </div>
        {/* order item accordion */}
        <div className="flex w-full flex-col items-start rounded-lg border border-black/12">
          <button onClick={() => setItemOpen((o) => !o)} className="flex w-full cursor-pointer items-start gap-4 p-4 text-left">
            <Icon src="/icons/ui/chevron-big-up.svg" inset="inset-[8.33%_25%]" className={`mt-2 ${itemOpen ? "" : "rotate-180"}`} />
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
          {itemOpen && (
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
              <ChargeRow label="Parental Control Add-on" labelBold monthly={<PriceCell price="$5.00" suffix="/mo." />}>
                <PriceCell />
              </ChargeRow>
              <div className="h-px w-full bg-black/12" />
              <ChargeRow label="SIM" labelBold monthly={<PriceCell />}>
                <PriceCell price="$5.00" />
              </ChargeRow>
            </div>
          )}
        </div>
        {/* delivery method */}
        <SummarySection
          icon="/icons/ui/van-red.svg"
          title="Delivery method"
          open={open.delivery}
          onToggle={() => setOpen((o) => ({ ...o, delivery: !o.delivery }))}
        >
          <p className="text-sm leading-5 font-bold text-black/87">Pickup items</p>
          <div className="flex flex-wrap content-center items-center gap-2">
            {bullet("SIM Card")}
            {vSep}
            <span className="text-sm leading-5 font-medium text-black/87">(888) 888 8888</span>
            {vSep}
            <span className="text-sm leading-5 font-medium text-black/87">Golden mobile offer</span>
          </div>
          <div className="my-1 h-px w-full bg-black/12" />
          <p className="text-sm leading-5 font-bold text-black/87">Shipped items</p>
          <div className="flex flex-wrap content-center items-center gap-2">
            {bullet("SIM card")}
            {vSep}
            <span className="text-sm leading-5 font-medium text-black/87">(888) 888 888</span>
            {vSep}
            <span className="text-sm leading-5 font-medium text-black/87">Golden Mobile Offer</span>
          </div>
          <div className="flex w-full items-start gap-6">
            <LabelValue
              className="min-w-0 flex-1"
              label="Recepient"
              value={
                <div className="flex flex-wrap items-center gap-2">
                  <span>Emma Kelly</span>
                  {vSep}
                  <span>(123) 456 789</span>
                  {vSep}
                  <span>emma.kelly.1987@gmail.com</span>
                </div>
              }
            />
            <LabelValue className="min-w-0 flex-1" label="Shipping address" value="123 Merry lane, Seattle, WA, 98101" />
          </div>
          <LabelValue className="w-full" label="Notes" value="Do not use the front door, use the other entrance." />
          <div className="my-1 h-px w-full bg-black/12" />
          <p className="text-sm leading-5 font-medium text-black/87">Standard shipping 5-7 business days</p>
          <p className="text-sm leading-5 text-black/87">
            <span className="font-medium">Shipping fee: </span>
            <span className="font-bold">$10.00</span>
          </p>
        </SummarySection>
        {/* equipment IDs */}
        <SummarySection
          icon="/icons/ui/settings-config-red.svg"
          title="Equipment IDs"
          open={open.equipment}
          onToggle={() => setOpen((o) => ({ ...o, equipment: !o.equipment }))}
        >
          <div className="flex flex-wrap content-center items-center gap-2 text-sm leading-5 font-bold text-black/87">
            <span>Related to mobile</span>
            {vSep}
            <span>(XXX) XXX XXXX</span>
            {vSep}
            <span>&lt;Offer name&gt;</span>
          </div>
          <div className="flex w-full items-start gap-6">
            <LabelValue className="w-[254px]" label="Serial number" value="BFJCDBVJDBJD921779Q" />
            <LabelValue className="w-[254px]" label="SIM Number" value="BFJCDBVJDBJD921779Q" />
          </div>
        </SummarySection>
        {/* billing details */}
        <SummarySection
          icon="/icons/ui/note-bill-paper-red.svg"
          title="Billing details"
          open={open.billing}
          onToggle={() => setOpen((o) => ({ ...o, billing: !o.billing }))}
        >
          <div className="flex w-full items-start gap-6">
            <LabelValue className="min-w-0 flex-1" label="Name on bill" value="Emma  Kelly" />
            <LabelValue className="min-w-0 flex-1" label="Bill cycle close day" value="1st of the month" />
            <LabelValue className="min-w-0 flex-1" label="Bill media" value="Post mail" />
            <LabelValue
              className="min-w-0 flex-1"
              label="Bill address"
              value="141 W Main St #APT 3 Cuba, long address NY 146433"
            />
          </div>
          <p className="pt-2 text-sm leading-5 font-bold text-black/87">Payment method</p>
          <div className="flex w-[358px] items-start gap-4 rounded-lg border border-black/12 bg-paper p-3">
            <span className="flex size-8 items-center justify-center overflow-clip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/ui/visa-badge.svg" alt="" className="block size-8" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <p className="text-xs leading-4 font-medium text-black/87">Visa **** 7683</p>
              <p className="text-xs leading-4 font-medium text-secondary-text">Exp: 08/24</p>
            </div>
          </div>
        </SummarySection>
        {/* totals */}
        <div className="flex w-full flex-col items-center justify-end gap-3 rounded-lg border border-black/12 bg-paper p-4">
          <div className="flex w-full items-start justify-center">
            <p className="min-w-0 flex-1 text-sm leading-5 font-medium text-secondary-text">Shipping</p>
            <div className="flex items-start justify-end gap-4">
              <PriceCell />
              <PriceCell price="$5,225.00" />
            </div>
          </div>
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
          <div className="flex w-full items-start justify-center">
            <p className="min-w-0 flex-1 text-sm leading-5 font-bold text-black/87">Total </p>
            <div className="flex items-start justify-end gap-4">
              <PriceCell price="$5,225.00" suffix="/mo." />
              <PriceCell price="$5,225.00" />
            </div>
          </div>
        </div>
        {/* pay now banner */}
        <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-black/12 bg-surface p-4">
          <div className="flex items-start gap-2">
            <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">Pay now: $80.00</p>
            <p className="text-sm leading-5 font-medium whitespace-nowrap text-secondary-text">(Tax included)</p>
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
        {/* customer acceptance */}
        <div className="flex w-full flex-col items-start gap-4 overflow-clip rounded-card border border-black/12 bg-paper p-4">
          <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">Customer acceptance</p>
          <div className="flex items-center gap-2">
            <Icon src="/icons/ui/doc-clipboard-blue.svg" />
            <button className="cursor-pointer text-sm leading-5 font-medium whitespace-nowrap text-info">
              Contract of Cynthia Lennon
            </button>
          </div>
          <div className="flex w-[534px] flex-col items-start gap-2">
            <canvas
              ref={canvasRef}
              width={534}
              height={150}
              onPointerDown={startDraw}
              onPointerMove={draw}
              onPointerUp={endDraw}
              onPointerLeave={endDraw}
              className="h-[150px] w-full cursor-crosshair touch-none rounded-field border border-black/12 bg-paper"
            />
            <div className="flex w-full items-start gap-2">
              <p className="min-w-0 flex-1 truncate text-xs leading-4 font-medium text-secondary-text">
                * Signature acknowledgement
              </p>
              <button onClick={clearSignature} className="flex cursor-pointer items-center gap-2">
                <Icon src="/icons/ui/trash-blue.svg" />
                <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-info">Clear</span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            {checkbox(terms, () => setTerms((v) => !v), "I hereby accept", "Terms and conditions")}
            {checkbox(
              privacy,
              () => setPrivacy((v) => !v),
              "I hereby accept that I have read and agree on ",
              "Privacy policy",
            )}
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-6 flex w-full flex-col items-start">
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full items-start justify-between px-4 pt-3">
          <Link
            href="/billing"
            className="flex h-8 min-w-20 cursor-pointer items-center gap-2 overflow-clip text-sm leading-5 font-medium whitespace-nowrap text-info"
          >
            Previous step
          </Link>
          <button
            disabled={!submitEnabled}
            onClick={() => router.push("/order-complete")}
            className={`flex h-8 min-w-20 items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap ${
              submitEnabled ? "cursor-pointer bg-ink text-white hover:bg-black" : "cursor-default bg-black/10 text-black/40"
            }`}
          >
            Submit order
          </button>
        </div>
      </div>
    </div>
  );
}
