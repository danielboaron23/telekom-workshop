/* TabMenu (app-level nav row) — Figma node 2958:205606 */

export function TabMenu() {
  return (
    <div className="flex w-full shrink-0 items-start gap-3 bg-chrome px-4 py-2">
      <button
        aria-label="Menu"
        className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5"
      >
        <span className="relative size-4">
          <span className="absolute inset-[16.67%_8.33%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ui/menu-hamburger.svg" alt="" className="block size-full" />
          </span>
        </span>
      </button>
      <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-paper px-3 py-2">
        <span className="relative size-4">
          <span className="absolute inset-[8.33%_4.16%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ui/home.svg" alt="" className="block size-full" />
          </span>
        </span>
        <span className="text-center text-xs leading-4 font-medium whitespace-nowrap text-brand">Home</span>
      </button>
      <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border px-3 py-2 hover:bg-black/5">
        <span className="relative size-4">
          <span className="absolute inset-[12.5%_4.17%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ui/email.svg" alt="" className="block size-full" />
          </span>
        </span>
        <span className="text-center text-xs leading-4 font-medium whitespace-nowrap text-ink">Inbox</span>
      </button>
    </div>
  );
}
