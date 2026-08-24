"use client";

/* Delivery method — Figma frames 2958:206479 (pickup/shipping toggle),
   2958:206612 (shipping form, empty → Next step disabled) and
   2969:66848 (form filled → enabled): three states of one step. */

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex min-w-0 max-w-[400px] flex-1 flex-col items-start gap-2">
      <div className="flex items-start gap-1 text-xs leading-4 font-medium">
        <p className="text-secondary-text">{label}</p>
        <p className="w-[5px] text-ink">*</p>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none"
      />
    </div>
  );
}

export function DeliveryCard() {
  const [mode, setMode] = useState<"pickup" | "shipping">("pickup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("");
  const [note, setNote] = useState("");

  const formValid = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && method !== "";
  const nextEnabled = mode === "pickup" || formValid;

  return (
    <div className="flex min-h-[390px] w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      {mode === "pickup" ? (
        <>
          <div className="flex w-full flex-col items-start gap-6">
            <p className="text-sm leading-5 font-bold text-black/87">Delivery method</p>
            <p className="text-xs leading-4 font-bold text-black/87">Items you can pick up or get those delivered</p>
          </div>
          <div className="mt-4 flex w-full flex-col gap-3">
            <div className="h-px w-full bg-black/12" />
            <div className="flex w-full items-center gap-6">
              <p className="max-w-[340px] truncate text-sm leading-5 font-medium text-black/87">
                Sim card&nbsp; long long long name long long long name
              </p>
              <div className="flex h-5 max-h-5 w-[357px] items-start gap-2">
                <p className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">(888) 888 888</p>
                <div className="h-5 w-px bg-black/12" />
                <p className="min-w-0 truncate text-sm leading-5 font-medium text-black/87">
                  Golden mobile offer long long long name long long long name
                </p>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-end">
                <div className="flex items-center rounded-lg border border-black/12 bg-black/5 p-px">
                  {(
                    [
                      { key: "pickup", label: "Store pick up" },
                      { key: "shipping", label: "Shipping" },
                    ] as const
                  ).map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setMode(option.key)}
                      className={`flex h-8 cursor-pointer items-center gap-1 rounded-[7px] px-3 py-1 text-xs leading-4 font-medium text-black/87 ${
                        mode === option.key
                          ? "border border-black/12 bg-paper drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]"
                          : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full items-center justify-between">
            <p className="text-sm leading-5 font-bold text-black/87">Delivery method</p>
            <button
              onClick={() => setMode("pickup")}
              className="cursor-pointer text-sm leading-5 font-medium whitespace-nowrap text-info"
            >
              Edit
            </button>
          </div>
          <div className="mt-3 h-px w-full bg-black/12" />
          <div className="mt-6 flex w-full flex-col items-start gap-6">
            <p className="text-sm leading-5 font-bold text-black/87">Shipping details</p>
            <div className="flex w-full flex-col items-start gap-3">
              <p className="text-xs leading-4 font-bold text-black/87">Items to be shipped</p>
              <div className="flex items-center gap-2">
                <span className="text-sm leading-5 font-medium text-black/87">·&nbsp; SIM card</span>
                <div className="h-5 w-px bg-black/12" />
                <span className="text-sm leading-5 font-medium text-black/87">Mobile offer</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-black/12 bg-surface px-4 py-3">
              <p className="text-sm leading-5 font-medium text-black/87">
                Shipping address: 123 Merry lane, Seattle, WA, 98101
              </p>
              <button className="cursor-pointer text-sm leading-5 font-medium whitespace-nowrap text-info">
                Change
              </button>
            </div>
            <div className="flex w-full items-start gap-6">
              <Field label="Recipient name" value={name} onChange={setName} />
              <Field label="Recipient phone" value={phone} onChange={setPhone} />
              <Field label="Recipient email" value={email} onChange={setEmail} type="email" />
            </div>
            <div className="flex w-full items-start gap-6">
              <div className="flex min-w-0 max-w-[400px] flex-1 flex-col items-start gap-2">
                <div className="flex items-start gap-1 text-xs leading-4 font-medium">
                  <p className="text-secondary-text">Shipping method</p>
                  <p className="w-[5px] text-ink">*</p>
                </div>
                <div className="relative w-full">
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className={`h-8 w-full cursor-pointer appearance-none rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium outline-none ${
                      method ? "text-ink" : "text-secondary-text"
                    }`}
                  >
                    <option value="" disabled>
                      Value
                    </option>
                    <option value="Regular">Regular</option>
                    <option value="Express">Express</option>
                    <option value="Overnight">Overnight</option>
                  </select>
                  <span className="pointer-events-none absolute top-2 right-3 flex">
                    <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
                  </span>
                </div>
              </div>
              <div className="flex min-w-0 max-w-[400px] flex-1 flex-col items-start gap-2">
                <p className="text-xs leading-4 font-medium text-secondary-text">Note to delivery person</p>
                <textarea
                  value={note}
                  maxLength={100}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. Do not use the front door, use the other entrance at the side of the house."
                  className="h-12 w-full resize-none rounded-field border border-black/12 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
                />
                <div className="flex w-full items-start gap-2">
                  <p className="min-w-0 flex-1 truncate text-xs leading-4 font-medium text-secondary-text">
                    This is an helper text
                  </p>
                  <p className="text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">
                    {note.length}/100
                  </p>
                </div>
              </div>
              <div className="max-w-[400px] flex-1" />
            </div>
            <p className="text-base leading-6 text-black/87">
              <span className="font-medium">Total shipping fee </span>
              <span className="font-medium text-info">$10.00</span>
            </p>
          </div>
        </>
      )}
      <div className="mt-auto flex w-full flex-col items-start pt-6">
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full items-start justify-between px-4 pt-3">
          <Link
            href="/order"
            className="flex h-8 min-w-20 cursor-pointer items-center gap-2 overflow-clip text-sm leading-5 font-medium whitespace-nowrap text-info"
          >
            Previous steps
          </Link>
          <button
            disabled={!nextEnabled}
            className={`flex h-8 min-w-20 items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap ${
              nextEnabled ? "cursor-pointer bg-ink text-white hover:bg-black" : "cursor-default bg-black/10 text-black/40"
            }`}
          >
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}
