"use client";

/* Billing details — Figma frames 2958:206873 (existing, none selected →
   Next Step disabled), 2969:67670 (row selected → enabled) and
   2958:207491 (New account form): states of order-wizard step 4. */

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon, IconButton } from "@/components/ui/Icon";
import { Toggle } from "@/components/ui/Toggle";

const accounts = [
  { id: "a", status: "Active" },
  { id: "b", status: "Closed" },
];

const columns = [
  { label: "Billing account ID", w: "w-[190px]" },
  { label: "Status", w: "w-[140px]" },
  { label: "Payment policy", w: "w-[139px]" },
  { label: "Account owner", w: "w-[186px]" },
  { label: "Account name", w: "w-[196px]" },
  { label: "Bill frequency", w: "w-[118px]" },
  { label: "Bill cycle close day", w: "min-w-0 flex-1" },
];

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex w-[266px] flex-col items-start gap-2">
      <div className="flex items-start gap-1 text-xs leading-4 font-medium">
        <p className="text-secondary-text">{label}</p>
        <p className="w-[5px] text-ink">*</p>
      </div>
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-full cursor-pointer appearance-none rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-2 right-3 flex">
          <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
        </span>
      </div>
    </div>
  );
}

function SegmentedToggle({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center rounded-lg border border-black/12 bg-black/5 p-px">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`flex h-8 cursor-pointer items-center gap-1 rounded-[7px] px-3 py-1 text-xs leading-4 font-medium text-black/87 ${
            value === option ? "border border-black/12 bg-paper drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]" : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function BillingCard() {
  const router = useRouter();
  const [tab, setTab] = useState<"Existing account" | "New account">("Existing account");
  const [selected, setSelected] = useState<string | null>(null);
  const [owner, setOwner] = useState("Brenda walsh");
  const [policy, setPolicy] = useState("Postpaid");
  const [frequency, setFrequency] = useState("Monthly");
  const [closeDay, setCloseDay] = useState("1st of the month");
  const [autoPay, setAutoPay] = useState(true);
  const [billMedia, setBillMedia] = useState("Email");
  const [defaultAddress, setDefaultAddress] = useState(true);

  const nextEnabled = tab === "New account" || selected !== null;

  return (
    <div className="flex min-h-[371px] w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      <div className="flex w-full flex-col items-start gap-6">
        <p className="text-sm leading-5 font-bold text-black/87">Billing details</p>
        <SegmentedToggle
          options={["Existing account", "New account"]}
          value={tab}
          onChange={(v) => setTab(v as typeof tab)}
        />
        <div className="h-px w-full bg-black/12" />
        {tab === "Existing account" ? (
          <div className="flex w-full flex-col items-start px-4">
            <div className="flex min-h-12 w-full items-center border-b border-black/12">
              <div className="w-10 shrink-0" />
              {columns.map((col, i) => (
                <div key={col.label} className={`flex min-h-12 items-center justify-between pl-2 ${col.w}`}>
                  <p className="truncate text-xs leading-4 font-bold text-black/87">{col.label}</p>
                  {i < columns.length - 1 && <div className="h-4 w-px bg-black/12" />}
                </div>
              ))}
            </div>
            {accounts.map((account) => (
              <button
                key={account.id}
                onClick={() => setSelected(account.id)}
                className="flex min-h-12 w-full cursor-pointer items-center border-b border-black/12 py-1 text-left hover:bg-[#fef2f3]"
              >
                <span className="flex w-10 shrink-0 items-center">
                  {selected === account.id ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-ink">
                      <span className="size-2 rounded-full bg-white" />
                    </span>
                  ) : (
                    <span className="size-5 rounded-full border border-gray-300" />
                  )}
                </span>
                <span className="flex w-[190px] flex-col pl-2 text-xs leading-4 font-medium text-info">
                  <span>BillingAccount_25829163</span>
                  <span>6154102119</span>
                </span>
                <span className="flex w-[140px] pl-2">
                  <span
                    className={`flex max-h-6 min-h-6 items-center rounded-full px-2 py-1 text-xs leading-4 font-medium text-black ${
                      account.status === "Active" ? "bg-chip-green" : "bg-black/10"
                    }`}
                  >
                    {account.status}
                  </span>
                </span>
                <span className="w-[139px] pl-2 text-sm leading-5 font-medium text-black/87">Postpaid</span>
                <span className="w-[186px] pl-2 text-sm leading-5 font-medium text-black/87">Brenda Walsh</span>
                <span className="w-[196px] pl-2 text-sm leading-5 font-medium text-black/87">Brenda Walsh</span>
                <span className="w-[118px] pl-2 text-sm leading-5 font-medium text-black/87">Monthly</span>
                <span className="min-w-0 flex-1 pl-2 text-sm leading-5 font-medium whitespace-nowrap text-black/87">
                  10th of every month
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-wrap content-start items-start gap-6">
              <SelectField
                label="Account owner"
                value={owner}
                options={["Brenda walsh", "Sai Kumar"]}
                onChange={setOwner}
              />
              <SelectField label="Payment Policy" value={policy} options={["Postpaid", "Prepaid"]} onChange={setPolicy} />
            </div>
            <div className="h-px w-full bg-black/12" />
            <p className="text-sm leading-5 font-bold text-black/87">Billing cycle</p>
            <div className="flex w-full flex-wrap content-start items-start gap-6">
              <SelectField
                label="Bill frequency"
                value={frequency}
                options={["Monthly", "Quarterly", "Yearly"]}
                onChange={setFrequency}
              />
              <SelectField
                label="Bill cycle close day"
                value={closeDay}
                options={["1st of the month", "10th of every month", "15th of the month"]}
                onChange={setCloseDay}
              />
            </div>
            <div className="h-px w-full bg-black/12" />
            <p className="text-sm leading-5 font-bold text-black/87">Payment method</p>
            <Toggle on={autoPay} onChange={setAutoPay} label="Set auto-payment" />
            {autoPay && (
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
                  <IconButton src="/icons/ui/menu-kebab.svg" label="Card menu" inset="inset-[12.5%_41.67%]" />
                </div>
              </div>
            )}
            <div className="h-px w-full bg-black/12" />
            <p className="text-sm leading-5 font-bold text-black/87">Bill delivery method</p>
            <div className="flex w-full min-w-[280px] flex-wrap content-start items-start gap-6">
              <div className="flex w-[200px] flex-col items-start gap-2">
                <p className="text-xs leading-4 font-medium text-secondary-text">Bill media</p>
                <SegmentedToggle options={["Email", "Post mail"]} value={billMedia} onChange={setBillMedia} />
              </div>
              <div className="flex min-w-[196px] flex-col items-start gap-2">
                <Toggle on={defaultAddress} onChange={setDefaultAddress} label="Default billing address" />
                {defaultAddress && (
                  <p className="text-sm leading-5 font-medium text-black/87">brendawalsh@gmail.com</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto flex w-full flex-col items-start pt-6">
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full items-start justify-between px-4 pt-3">
          <Link
            href="/equipment"
            className="flex h-8 min-w-20 cursor-pointer items-center gap-2 overflow-clip text-sm leading-5 font-medium whitespace-nowrap text-info"
          >
            Previous Step
          </Link>
          <button
            disabled={!nextEnabled}
            onClick={() => router.push("/summary")}
            className={`flex h-8 min-w-20 items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap ${
              nextEnabled ? "cursor-pointer bg-ink text-white hover:bg-black" : "cursor-default bg-black/10 text-black/40"
            }`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
