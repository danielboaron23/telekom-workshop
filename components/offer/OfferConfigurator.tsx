"use client";

/* Offer configuration wizard — Figma frames 2960:222429 (Plan settings),
   2958:207616 (Add-ons) and 2960:223002 (Select number) are the three
   step-states of this one screen. */

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type SectionKey = "plan" | "addons" | "number";

const addOns = [
  { id: "a", title: "Add-on name can be long", included: true, badge: false, was: false },
  { id: "b", title: "Add-on name can be long", included: false, badge: true, was: true },
  { id: "c", title: "Add-on name can be long Add-on name can be long", included: false, badge: false, was: false },
  { id: "d", title: "Add-on name can be long Add-on name can be long", included: false, badge: false, was: false },
];

const numbers = ["(444) 444 4444", "(555) 555 5555", "(666) 666 6666", "(777) 777 7777", "(888) 888 8888", "(999) 999 9999"];

function SectionHeader({
  icon,
  title,
  summary,
  open,
  onToggle,
}: {
  icon: string;
  title: string;
  summary?: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`flex w-full cursor-pointer items-center gap-4 border border-black/12 bg-paper px-4 py-[15px] text-left ${
        open ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
      <Icon
        src="/icons/ui/chevron-big-up.svg"
        inset="inset-[8.33%_25%]"
        className={open ? "" : "rotate-180"}
      />
      <div className="flex min-w-0 flex-1 items-start gap-2">
        <span className="flex h-5 items-center">
          <Icon src={icon} inset="inset-[8.33%]" />
        </span>
        <div className="flex min-w-0 flex-1 flex-wrap content-center items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">{title}</p>
          {summary}
        </div>
      </div>
    </button>
  );
}

function ContinueRow({ note, onContinue }: { note?: boolean; onContinue: () => void }) {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex min-w-0 flex-1 items-start gap-1">
        {note && (
          <>
            <Icon src="/icons/ui/info.svg" />
            <p className="text-xs leading-4 font-medium text-black/87">Some selections may impact the price.</p>
          </>
        )}
      </div>
      <button
        onClick={onContinue}
        className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-ink px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-white hover:bg-black"
      >
        Continue
      </button>
    </div>
  );
}

export function OfferConfigurator() {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({ plan: true, addons: false, number: false });
  const [completed, setCompleted] = useState<Record<SectionKey, boolean>>({ plan: false, addons: false, number: false });
  const [commitment, setCommitment] = useState<"12 months" | "24 months">("12 months");
  const [selected, setSelected] = useState<string[]>(["b"]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [numberTab, setNumberTab] = useState<"new" | "old">("new");
  const [numberMode, setNumberMode] = useState<"generated" | "list">("list");
  const [chosenNumber, setChosenNumber] = useState(numbers[0]);

  const toggle = (key: SectionKey) => setOpen((o) => ({ ...o, [key]: !o[key] }));
  const advance = (from: SectionKey, to: SectionKey) => {
    setCompleted((c) => ({ ...c, [from]: true }));
    setOpen((o) => ({ ...o, [from]: false, [to]: true }));
  };

  const divider = <div className="h-4 w-px bg-black/12" />;
  const summaryText = (text: string) => (
    <p className="text-sm leading-5 font-medium whitespace-nowrap text-secondary-text">{text}</p>
  );

  const chosenAddOns = addOns.filter((a) => a.included || selected.includes(a.id));

  return (
    <div className="flex w-full flex-col items-start gap-6 overflow-clip rounded-card bg-paper p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-4">
        {/* Plan settings */}
        <div className="flex w-full flex-col items-start">
          <SectionHeader
            icon="/icons/ui/menu-gridview-red.svg"
            title="Plan settings"
            summary={!open.plan && completed.plan ? summaryText(`Commitment: ${commitment}`) : undefined}
            open={open.plan}
            onToggle={() => toggle("plan")}
          />
          {open.plan && (
            <div className="flex w-full flex-col items-start gap-6 rounded-b-lg border border-t-0 border-black/12 bg-paper px-6 py-4">
              <div className="flex w-full flex-wrap content-start items-start gap-6">
                <div className="flex min-w-[264px] flex-1 flex-col items-start gap-2">
                  <div className="flex items-start gap-1 text-xs leading-4 font-medium">
                    <p className="text-secondary-text">Commitment Duration</p>
                    <p className="w-[5px] text-ink">*</p>
                  </div>
                  <div className="flex items-center rounded-lg border border-black/12 bg-black/5 p-px">
                    {(["12 months", "24 months"] as const).map((option) => (
                      <button
                        key={option}
                        onClick={() => setCommitment(option)}
                        className={`flex h-8 cursor-pointer items-center gap-1 rounded-[7px] px-3 py-1 text-xs leading-4 font-medium text-black/87 ${
                          commitment === option
                            ? "border border-black/12 bg-paper drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]"
                            : ""
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <ContinueRow note onContinue={() => advance("plan", "addons")} />
            </div>
          )}
        </div>
        {/* Add-ons */}
        <div className="flex w-full flex-col items-start">
          <SectionHeader
            icon="/icons/ui/puzzle-red.svg"
            title="Add-ons"
            summary={
              !open.addons && completed.addons ? (
                <>
                  {chosenAddOns.slice(0, 2).map((a, i) => (
                    <div key={a.id} className="flex items-center gap-4">
                      {i > 0 && divider}
                      {summaryText("Add-on name")}
                    </div>
                  ))}
                </>
              ) : undefined
            }
            open={open.addons}
            onToggle={() => toggle("addons")}
          />
          {open.addons && (
            <div className="flex w-full flex-col items-start gap-6 rounded-b-lg border border-t-0 border-black/12 bg-paper px-6 py-4">
              <div className="flex w-full flex-wrap content-start items-start gap-2">
                {["Category", "Category", "Category name can be long"].map((label, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(i)}
                    className={`flex h-9 cursor-pointer items-center rounded-full bg-paper px-4 py-2 text-xs leading-4 ${
                      activeCategory === i ? "border-2 border-ink font-bold" : "border border-gray-300 font-medium"
                    } text-black/87`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex w-full items-stretch gap-6">
                {addOns.map((addOn) => {
                  const isOn = addOn.included || selected.includes(addOn.id);
                  return (
                    <div
                      key={addOn.id}
                      className={`flex min-h-[290px] min-w-0 flex-1 flex-col rounded-card bg-paper p-4 ${
                        isOn ? "border-2 border-ink" : "border border-black/12"
                      }`}
                    >
                      <div className="flex min-h-0 w-full flex-1 flex-col items-start gap-6">
                        <div className="flex min-h-[60px] w-full items-start gap-2">
                          <div className="flex min-w-0 flex-1 items-center gap-2 self-stretch">
                            <span className="flex items-center justify-center self-start rounded-btn bg-[linear-gradient(-90deg,#fe7a7f_0%,#f05c62_100%)] p-2">
                              <Icon src="/icons/ui/tile-puzzle-filled.svg" inset="inset-[8.33%]" />
                            </span>
                            <div className="flex min-w-0 flex-1 items-start gap-3 self-start">
                              <p className="min-w-0 flex-1 text-sm leading-5 font-bold text-black/87">{addOn.title}</p>
                              {addOn.badge && <Icon src="/icons/ui/discount-offer-dark.svg" />}
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto flex w-full items-center gap-3">
                          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
                            <p className="w-full text-xs leading-4 font-bold text-black/87">$18.99</p>
                            <p className="w-full text-xs leading-4 font-medium text-black/87">Monthly</p>
                            {addOn.was && (
                              <p className="w-full text-xs leading-4 font-medium text-secondary-text line-through">$22.00</p>
                            )}
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
                            <p className="w-full text-xs leading-4 font-bold text-black/87">$18.99</p>
                            <p className="w-full text-xs leading-4 font-medium text-black/87">One time</p>
                            {addOn.was && (
                              <p className="w-full text-xs leading-4 font-medium text-secondary-text line-through">$22.00</p>
                            )}
                          </div>
                        </div>
                        <div className="flex h-8 w-full items-center gap-2">
                          <button className="min-w-0 flex-1 cursor-pointer text-left text-sm leading-5 font-medium text-info">
                            Details
                          </button>
                          {addOn.included ? (
                            <span className="text-sm leading-5 font-bold text-ink">Included</span>
                          ) : (
                            <button
                              onClick={() =>
                                setSelected((sel) =>
                                  sel.includes(addOn.id) ? sel.filter((s) => s !== addOn.id) : [...sel, addOn.id],
                                )
                              }
                              className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-ink hover:bg-black/5"
                            >
                              {selected.includes(addOn.id) ? "Remove" : "Select"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <ContinueRow onContinue={() => advance("addons", "number")} />
            </div>
          )}
        </div>
        {/* Select number */}
        <div className="flex w-full flex-col items-start">
          <SectionHeader
            icon="/icons/ui/hashtag-red.svg"
            title="Select number"
            open={open.number}
            onToggle={() => toggle("number")}
          />
          {open.number && (
            <div className="flex w-full flex-col items-start gap-6 rounded-b-lg border border-t-0 border-black/12 bg-paper px-6 py-4">
              <div className="flex w-full flex-col items-start">
                <div className="flex items-center">
                  {(
                    [
                      { key: "new", label: "Request a new number" },
                      { key: "old", label: "Keep my old number" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setNumberTab(tab.key)}
                      className={`flex max-h-8 min-h-8 cursor-pointer items-center gap-2 px-4 py-2 ${
                        numberTab === tab.key ? "border-b-2 border-brand" : "justify-center"
                      }`}
                    >
                      <span
                        className={`text-sm leading-5 whitespace-nowrap text-black/87 ${
                          numberTab === tab.key ? "font-bold" : "font-medium"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="h-px w-full bg-black/12" />
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="flex items-start gap-1 text-xs leading-4 font-medium">
                    <p className="text-secondary-text">Select a number</p>
                    <p className="w-[5px] text-ink">*</p>
                  </div>
                  <div className="flex w-full flex-wrap content-start items-start gap-x-6 gap-y-1">
                    {(
                      [
                        { key: "generated", label: "New number (245) 284 6555" },
                        { key: "list", label: "Select from a list" },
                      ] as const
                    ).map((radio) => (
                      <button
                        key={radio.key}
                        onClick={() => setNumberMode(radio.key)}
                        className="flex cursor-pointer items-center gap-2 py-2"
                      >
                        {numberMode === radio.key ? (
                          <span className="flex size-5 items-center justify-center rounded-full bg-ink">
                            <span className="size-2 rounded-full bg-white" />
                          </span>
                        ) : (
                          <span className="size-5 rounded-full border border-gray-300" />
                        )}
                        <span className="text-sm leading-5 font-semibold text-black/87">{radio.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {numberMode === "list" && (
                  <div className="flex w-full flex-wrap content-start items-start gap-2">
                    {numbers.map((num) => (
                      <button
                        key={num}
                        onClick={() => setChosenNumber(num)}
                        className={`flex h-9 cursor-pointer items-center rounded-full bg-paper px-4 py-2 text-xs leading-4 font-medium text-black/87 ${
                          chosenNumber === num ? "border-2 border-ink" : "border border-gray-300"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
