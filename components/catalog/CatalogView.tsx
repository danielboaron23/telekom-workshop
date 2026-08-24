"use client";

/* Browse Catalog content: category tabs + filters + offer grid.
   Figma nodes 2958:206148 (tabs) / 2958:206150 (results card).
   The second Figma frame (2958:208592) is the Mobile-tab state of this view. */

import { useState } from "react";
import { Icon, IconButton } from "@/components/ui/Icon";
import { OfferCard } from "@/components/catalog/OfferCard";
import { catalogCategories, offers, type CatalogCategory } from "@/lib/catalog";

export function CatalogView({ header }: { header: React.ReactNode }) {
  const [category, setCategory] = useState<CatalogCategory>("top");
  const activeLabel = catalogCategories.find((c) => c.key === category)!.label;
  const visible = category === "top" ? offers : offers.filter((o) => o.categories.includes(category));

  return (
    <>
      <div className="flex w-full flex-col items-start gap-4">
        {header}
        <div className="flex w-full items-start">
          <div className="flex min-w-0 flex-1 flex-col items-start">
            <div className="flex items-center">
              {catalogCategories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={`flex max-h-8 min-h-8 cursor-pointer items-center gap-2 px-4 py-2 ${
                    c.key === category ? "border-b-2 border-brand" : "justify-center"
                  }`}
                >
                  <span
                    className={`text-sm leading-5 whitespace-nowrap text-black/87 ${
                      c.key === category ? "font-bold" : "font-medium"
                    }`}
                  >
                    {c.label}
                  </span>
                </button>
              ))}
            </div>
            <div className="h-px w-full bg-black/12" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start overflow-clip rounded-card bg-paper p-4 shadow-card">
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-center gap-6">
            <div className="flex items-end gap-4">
              <div className="flex w-[280px] flex-col items-start gap-2">
                <div className="flex h-8 w-full min-w-40 items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
                  <Icon src="/icons/ui/search-16.svg" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="h-4 min-w-0 flex-1 bg-transparent text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
                  />
                </div>
              </div>
              <div className="flex w-[280px] flex-col items-start gap-2">
                <button className="flex h-8 min-h-8 w-full cursor-pointer items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
                  <span className="flex min-w-0 flex-1 items-center gap-2">
                    <span className="min-w-0 flex-1 text-left text-xs leading-4 font-medium text-secondary-text">
                      {activeLabel}
                    </span>
                    <Icon src="/icons/ui/chevron-mini-down.svg" inset="inset-x-1/4 inset-y-1/3" />
                  </span>
                </button>
              </div>
            </div>
            <IconButton src="/icons/ui/filter-simple.svg" label="Filter" inset="inset-[8.33%]" />
          </div>
          <div className="h-px w-full bg-black/12" />
          <div className="flex w-full items-center gap-6">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <p className="min-w-0 flex-1 text-sm leading-5 font-bold text-black/87">
                {category === "top" ? 100 : visible.length} Results
              </p>
              <div className="flex items-center gap-2">
                <p className="text-sm leading-5 font-medium whitespace-nowrap text-black/87">
                  Serviceability address: 123 Merry lane, Seattle, WA, 98101
                </p>
                <button className="cursor-pointer text-center text-sm leading-5 font-medium whitespace-nowrap text-info">
                  Change
                </button>
              </div>
              <div className="flex items-center gap-1">
                <Icon src="/icons/ui/info.svg" />
                <p className="text-xs leading-4 font-medium whitespace-nowrap text-secondary-text">
                  Prices excl. taxes, additional charges may be applied
                </p>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-black/12" />
          <div className="grid w-full grid-cols-4 items-stretch gap-6">
            {visible.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
