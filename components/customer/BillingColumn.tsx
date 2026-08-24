/* Indicators + billing info + recent bills chart — Figma nodes 2958:206012 / 2958:206019 */

import { Icon } from "@/components/ui/Icon";

const bills = [
  { value: "$40.00", month: "01/2022", height: 168 },
  { value: "$140.00", month: "02/2022", height: 392 },
  { value: "$40.00", month: "03/2022", height: 168 },
  { value: "$160.00", month: "Apr 2022", height: 367 },
  { value: "$20.00", month: "May 2022", height: 127 },
  { value: "$60.00", month: "Jun 2022", height: 252 },
  { value: "$30.00", month: "Jul 2022", height: 168 },
  { value: "$100.00", month: "Aug 2022", height: 300 },
  { value: "$50.00", month: "Sep 2022", height: 392 },
  { value: "$15.00", month: "Oct 2022", height: 107 },
  { value: "$150.00", month: "Nov 2022", height: 351 },
  { value: "$25.00", month: "Dec 2022", height: 152 },
];

function IndicatorRow({ icon, inset, label }: { icon: string; inset: string; label: string }) {
  return (
    <button className="flex w-full cursor-pointer items-center gap-2 rounded-field border border-[#d7d0d0] p-[7px] text-left hover:bg-black/2">
      <span className="flex items-center justify-center rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2">
        <Icon src={icon} inset={inset} />
      </span>
      <span className="min-w-0 flex-1 text-sm leading-4 font-medium text-black/87 underline decoration-solid decoration-from-font">
        {label}
      </span>
    </button>
  );
}

export function BillingColumn() {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-3 overflow-clip rounded-card bg-paper p-4 shadow-card">
        <IndicatorRow icon="/icons/ui/note-bill-paper.svg" inset="inset-[4.17%_12.5%]" label="Pending orders (3)" />
        <IndicatorRow icon="/icons/ui/note-document-file.svg" inset="inset-[8.33%_16.67%]" label="Active cases (3)" />
      </div>
      <div className="flex h-[790px] w-full flex-col items-start gap-4 overflow-clip rounded-card bg-paper p-4 shadow-card">
        <div className="flex w-full flex-col items-start gap-3">
          <div className="flex w-full flex-col items-end justify-center">
            <div className="flex w-full items-center justify-between pb-3">
              <p className="truncate text-sm leading-5 font-bold text-ink">Billing information</p>
            </div>
            <div className="h-px w-full bg-black/12" />
          </div>
          <div className="flex w-full flex-col items-start gap-6 overflow-clip rounded-field border border-black/12 px-4 pt-4 pb-6">
            <div className="flex w-full flex-col items-end justify-center">
              <div className="flex w-full items-center justify-between pb-3">
                <p className="truncate text-sm leading-5 font-bold text-ink">Balance</p>
                <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-info hover:bg-black/5">
                  Pay now
                </button>
              </div>
              <div className="h-px w-full bg-black/12" />
            </div>
            <div className="flex w-full flex-col items-start gap-2">
              <div className="flex items-center gap-[15px]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)]">
                  <Icon src="/icons/ui/wallet-money.svg" size={24} inset="inset-[12.5%_8.33%]" />
                </span>
                <p className="text-[30px] leading-10 font-semibold whitespace-nowrap text-black/87">$120.00</p>
              </div>
              <div className="flex w-full flex-wrap content-start items-start gap-x-4 gap-y-2">
                <p className="text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">
                  Due date: 10/09/2021
                </p>
                <div className="flex items-center gap-2">
                  <Icon src="/icons/ui/error-alert.svg" inset="inset-[8.33%]" />
                  <p className="text-xs leading-4 font-medium whitespace-nowrap text-black/87">
                    Amount past due ($120.00)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[513px] w-full flex-col items-start rounded-field border border-black/12 p-4">
            <div className="flex w-full flex-col items-start pb-6">
              <div className="flex w-full items-center justify-between pb-3">
                <p className="truncate text-sm leading-5 font-bold text-ink">Recent bills</p>
                <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-info hover:bg-black/5">
                  All bills
                </button>
              </div>
              <div className="h-px w-full bg-black/12" />
            </div>
            <div className="w-full min-h-0 flex-1 overflow-x-auto [scrollbar-width:none]">
              <div className="relative flex h-[392px] items-end">
                <div className="absolute inset-0 flex items-end justify-center pb-7">
                  <div className="h-px min-w-full bg-black/12" />
                </div>
                {bills.map((bill) => (
                  <div
                    key={bill.month}
                    style={{ height: bill.height }}
                    className="relative flex w-[110px] shrink-0 flex-col items-center justify-end gap-3 self-end"
                  >
                    <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-2 overflow-clip rounded-t-field px-10">
                      <div className="flex items-center py-1">
                        <p className="w-[124px] text-center text-xs leading-4 font-medium text-black/87">
                          {bill.value}
                        </p>
                      </div>
                      <div className="min-h-px w-full flex-1 rounded-t-field bg-gradient-to-b from-brand to-magenta" />
                    </div>
                    <p className="text-center text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">
                      {bill.month}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end px-5 pt-4">
              <div className="h-1 w-[83px] rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
