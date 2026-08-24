"use client";

/* "Search for a customer" card — Figma node 2958:205636.
   Pressing Enter opens the Find Customer workspace tab. */

import { useRouter } from "next/navigation";
import { SearchFields } from "@/components/search/SearchFields";

export function SearchCustomerCard() {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      <div className="flex w-full flex-col gap-6 bg-paper">
        <p className="w-[960px] text-lg leading-6 font-bold text-ink">Search for a customer</p>
        <SearchFields
          placeholder="Type here and press ‘Enter’ for search"
          onSubmit={() => router.push("/find-customer")}
        />
      </div>
    </div>
  );
}
