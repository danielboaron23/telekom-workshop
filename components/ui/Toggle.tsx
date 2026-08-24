"use client";

/* Switch with checkmark knob — Figma "on=on" toggle component. */

import { Icon } from "@/components/ui/Icon";

export function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button onClick={() => onChange(!on)} className="flex cursor-pointer items-center gap-2 py-1">
      <span
        className={`relative h-5 w-9 rounded-full transition-colors ${on ? "bg-ink" : "border border-black/20 bg-black/10"}`}
      >
        <span
          className={`absolute top-1/2 flex size-4 -translate-y-1/2 items-center justify-center rounded-full bg-paper drop-shadow-[0px_1px_2px_rgba(34,33,46,0.24)] transition-all ${
            on ? "left-[18px]" : "left-0.5"
          }`}
        >
          {on && <Icon src="/icons/ui/checkmark-mini.svg" inset="inset-[25%]" className="!size-3" />}
        </span>
      </span>
      <span className="text-sm leading-5 font-medium text-black/87">{label}</span>
    </button>
  );
}
