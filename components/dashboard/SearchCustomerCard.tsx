/* "Search for a customer" card — Figma node 2958:205636 */

export function SearchCustomerCard() {
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      <div className="flex w-full flex-col gap-6 bg-paper">
        <p className="w-[960px] text-lg leading-6 font-bold text-ink">Search for a customer</p>
        <div className="flex w-full items-start gap-6">
          <div className="flex w-96 flex-col items-start gap-2">
            <button className="flex h-8 min-h-8 w-full cursor-pointer items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
              <span className="flex min-w-0 flex-1 items-center gap-2">
                <span className="min-w-0 flex-1 text-left text-xs leading-4 font-medium text-secondary-text">
                  Search by
                </span>
                <span className="relative size-4 shrink-0">
                  <span className="absolute inset-x-1/4 inset-y-1/3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/ui/chevron-mini-down.svg" alt="" className="block size-full" />
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
            <div className="flex h-8 w-full min-w-40 items-center gap-2 overflow-clip rounded-field border border-gray-300 px-3 py-2">
              <span className="relative size-4 shrink-0">
                <span className="absolute inset-[4.17%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/ui/search-16.svg" alt="" className="block size-full" />
                </span>
              </span>
              <input
                type="text"
                placeholder="Type here and press ‘Enter’ for search"
                className="h-4 min-w-0 flex-1 bg-transparent text-xs leading-4 font-medium text-ink outline-none placeholder:text-secondary-text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
