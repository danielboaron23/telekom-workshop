import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/ui/Icon";
import { Toggle } from "@/components/ui/Toggle";

const meta: Meta = { title: "Atoms/Selection Controls", parameters: { layout: "centered" } };
export default meta;

function Demo() {
  const [on, setOn] = useState(true);
  const [radio, setRadio] = useState("a");
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex items-center gap-8">
        <Toggle on={on} onChange={setOn} label="Set auto-payment" />
        <Toggle on={!on} onChange={(v) => setOn(!v)} label="Off state" />
      </div>
      <div className="flex items-center gap-6">
        {(["a", "b"] as const).map((key) => (
          <button key={key} onClick={() => setRadio(key)} className="flex cursor-pointer items-center gap-2 py-2">
            {radio === key ? (
              <span className="flex size-5 items-center justify-center rounded-full bg-ink">
                <span className="size-2 rounded-full bg-white" />
              </span>
            ) : (
              <span className="size-5 rounded-full border border-gray-300" />
            )}
            <span className="text-sm leading-5 font-semibold text-black/87">
              {key === "a" ? "Select from a list" : "New number"}
            </span>
          </button>
        ))}
      </div>
      <button onClick={() => setChecked((v) => !v)} className="flex cursor-pointer items-center gap-2 py-2">
        {checked ? (
          <span className="flex size-5 items-center justify-center rounded-field bg-ink p-1">
            <Icon src="/icons/ui/check-white.svg" className="!size-3" inset="inset-[8%]" />
          </span>
        ) : (
          <span className="size-5 rounded-field border border-gray-300" />
        )}
        <span className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">I hereby accept</span>
      </button>
    </div>
  );
}

export const AllVariants: StoryObj = { render: () => <Demo /> };
