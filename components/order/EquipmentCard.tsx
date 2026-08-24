"use client";

/* Equipment IDs — Figma frames 2958:206729 (empty → Next Step disabled)
   and 2969:67222 (filled → enabled): two states of one step. */

import { useState } from "react";
import Link from "next/link";
import { Icon, IconButton } from "@/components/ui/Icon";

function ScannedField({
  label,
  value,
  onChange,
  onScan,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onScan: () => void;
}) {
  return (
    <div className="flex w-[262px] items-end gap-2">
      <div className="flex min-w-[180px] flex-1 flex-col items-start gap-2">
        <div className="flex items-start gap-1 text-xs leading-4 font-medium">
          <p className="text-secondary-text">{label}</p>
          <p className="w-[5px] text-ink">*</p>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-full rounded-field border border-gray-300 bg-paper px-3 py-2 text-xs leading-4 font-medium text-ink outline-none"
        />
      </div>
      <IconButton src="/icons/ui/scan.svg" label={`Scan ${label}`} inset="inset-[8.33%]" onClick={onScan} />
    </div>
  );
}

export function EquipmentCard() {
  const [serial, setSerial] = useState("");
  const [sim, setSim] = useState("");
  const valid = serial.trim() !== "" && sim.trim() !== "";

  return (
    <div className="flex min-h-[271px] w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      <div className="flex w-full flex-col items-start gap-6">
        <p className="w-full text-base leading-6 font-medium text-black/87">
          Please populate equipment numbers below.
        </p>
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex flex-wrap content-center items-center gap-2">
            {["Related to mobile", "(XXX) XXX XXXX", "Golden Mobile Offer"].map((title, i) => (
              <div key={title} className="flex items-start gap-2">
                <p className="text-sm leading-5 font-bold text-black/87">{title}</p>
                {i < 2 && <div className="h-5 w-px bg-black/12" />}
              </div>
            ))}
          </div>
          <div className="flex w-full flex-wrap content-start items-start gap-6">
            <ScannedField
              label="Serial number"
              value={serial}
              onChange={setSerial}
              onScan={() => setSerial("3e6435y34")}
            />
            <ScannedField
              label="SIM number"
              value={sim}
              onChange={setSim}
              onScan={() => setSim("328865431123536")}
            />
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full flex-col items-start pt-6">
        <div className="h-px w-full bg-black/12" />
        <div className="flex w-full items-start justify-between px-4 pt-3">
          <Link
            href="/delivery"
            className="flex h-8 min-w-20 cursor-pointer items-center gap-2 overflow-clip text-sm leading-5 font-medium whitespace-nowrap text-info"
          >
            Previous Step
          </Link>
          <button
            disabled={!valid}
            className={`flex h-8 min-w-20 items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap ${
              valid ? "cursor-pointer bg-ink text-white hover:bg-black" : "cursor-default bg-black/10 text-black/40"
            }`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
