import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Atoms/Tabs & Segments", parameters: { layout: "centered" } };
export default meta;

function Demo() {
  const [tab, setTab] = useState(0);
  const [seg, setSeg] = useState("12 months");
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          {["Top offers", "Mobile", "Internet", "Bundles"].map((label, i) => (
            <button
              key={label}
              onClick={() => setTab(i)}
              className={`flex max-h-8 min-h-8 cursor-pointer items-center gap-2 px-4 py-2 ${
                tab === i ? "border-b-2 border-brand" : "justify-center"
              }`}
            >
              <span
                className={`text-sm leading-5 whitespace-nowrap text-black/87 ${tab === i ? "font-bold" : "font-medium"}`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
        <div className="h-px w-full bg-black/12" />
      </div>
      <div className="flex items-center rounded-lg border border-black/12 bg-black/5 p-px">
        {["12 months", "24 months"].map((option) => (
          <button
            key={option}
            onClick={() => setSeg(option)}
            className={`flex h-8 cursor-pointer items-center gap-1 rounded-[7px] px-3 py-1 text-xs leading-4 font-medium text-black/87 ${
              seg === option ? "border border-black/12 bg-paper drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export const AllVariants: StoryObj = { render: () => <Demo /> };
