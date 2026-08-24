/* Customer heading bar + section tabs — Figma node 2958:205927 */

import { Icon } from "@/components/ui/Icon";

const sectionTabs = ["Summary", "Products", "Orders", "Billing accounts"];

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fcdee0] p-1">
      <p className="min-w-0 flex-1 text-center text-base leading-6 font-medium text-black/87">{initials}</p>
    </div>
  );
}

export function CustomerHeader({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="flex w-full flex-col rounded-field">
      <div className="flex h-[92px] w-full flex-col items-start justify-center rounded-t-lg border-b border-black/12 bg-paper px-4 drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]">
        <div className="flex w-full items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <InitialsAvatar initials={initials} />
            <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-3">
              <div className="flex w-full items-end gap-3 whitespace-nowrap text-black">
                <p className="font-segoe truncate text-2xl leading-6 font-semibold">{name}</p>
                <p className="font-segoe min-w-0 flex-1 truncate text-sm leading-[18px] font-light">Saved</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex h-8 min-w-20 cursor-pointer items-center overflow-clip rounded-btn py-2 text-sm leading-5 font-medium text-ink hover:bg-black/5">
                  Customer
                </button>
                <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 hover:bg-black/5">
                  <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-ink">
                    Manage Customer
                  </span>
                  <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-6 pl-6">
            <InitialsAvatar initials="C" />
            <div className="flex flex-col items-start justify-center gap-1.5">
              <div className="flex items-center gap-3">
                <p className="font-segoe text-sm leading-4 whitespace-nowrap text-info">Chalermchai Sri-on</p>
                <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
              </div>
              <p className="font-segoe text-sm leading-4 whitespace-nowrap text-secondary-text">Owner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-11 w-full items-end rounded-b-lg bg-paper px-5 drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]">
        {sectionTabs.map((tab, i) => (
          <button
            key={tab}
            className={`flex max-h-8 min-h-8 cursor-pointer items-center gap-2 px-4 py-2 ${
              i === 0 ? "border-b-2 border-brand" : "justify-center"
            }`}
          >
            <span
              className={`text-sm leading-5 whitespace-nowrap ${
                i === 0 ? "font-bold text-ink" : "font-medium text-black/87"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
