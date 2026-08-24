"use client";

/* Find Customer search + results table — Figma node 2960:223675 */

import { useRouter } from "next/navigation";
import { SearchFields } from "@/components/search/SearchFields";
import { customers, type Customer } from "@/lib/customers";

const columns = ["Personal ID", "Name", "Phone #", "MSISDN", "Customer ID", "Owners name", "Status"];

function Row({ row }: { row: Customer }) {
  const router = useRouter();
  const cells = [row.personalId, row.name, row.phone, row.msisdn, row.customerId];
  return (
    <button
      onClick={() => router.push(`/customers/${row.id}`)}
      className="flex h-12 w-[1380px] cursor-pointer items-center border-b border-black/12 text-left hover:bg-[#fef2f3]"
    >
      {cells.map((value, i) => (
        <span
          key={i}
          className={`flex h-8 w-[194.54px] items-center gap-2 ${i === 1 ? "px-3" : "px-4"}`}
        >
          <span className="text-xs leading-4 font-medium whitespace-nowrap text-black/87">{value}</span>
        </span>
      ))}
      <span className="flex h-8 w-[194.54px] items-center gap-2 px-4">
        <span
          className={`${row.bigOwner ? "text-sm leading-5" : "text-xs leading-4"} font-medium whitespace-nowrap text-black/87`}
        >
          {row.owner}
        </span>
      </span>
      <span className="flex h-8 w-[194.54px] items-center gap-2 px-4" />
    </button>
  );
}

export function ResultsCard() {
  return (
    <div className="flex w-full flex-col overflow-clip rounded-lg bg-paper p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-6">
        <SearchFields placeholder="Search" />
        <div className="h-px w-full bg-black/12" />
        <p className="text-sm leading-5 font-bold whitespace-nowrap text-black/87">
          Search results ({customers.length})
        </p>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-col items-start">
            <div className="flex h-[52px] w-[1380px] items-center border-b border-black/12">
              {columns.map((col) => (
                <span key={col} className="flex min-h-5 w-[194.57px] items-center gap-1 px-4">
                  <span className="text-xs leading-4 font-bold whitespace-nowrap text-black/87">{col}</span>
                </span>
              ))}
            </div>
            {customers.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </div>
        </div>
        <div className="flex w-full items-start justify-end gap-4">
          <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border px-3 py-2 hover:bg-black/5">
            <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-ink">Shop</span>
          </button>
          <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-ink px-3 py-2 hover:bg-black">
            <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-white">
              Create Customer
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
