/* Right productivity pane — Figma node 2958:205679 */

export function ProductivityRail({ fixed = true }: { fixed?: boolean }) {
  return (
    <aside className={`${fixed ? "fixed" : "absolute"} top-11 right-0 bottom-0 z-50 w-16 bg-chrome`}>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-rail-line" />
      <div className="flex w-16 flex-col items-center">
        <button aria-label="Copilot" className="flex size-11 cursor-pointer items-center justify-center p-2.5">
          <span className="relative size-5">
            <span className="absolute top-[1.61px] left-0.5 h-[16.79px] w-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/rail/copilot.svg" alt="" className="block size-full" />
            </span>
          </span>
        </button>
        <button aria-label="SMS" className="flex size-11 cursor-pointer items-center justify-center p-[5px]">
          <span className="h-[14.7px] w-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/rail/sms.svg" alt="" className="block size-full" />
          </span>
        </button>
        <button aria-label="Calls" className="size-11 cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/rail/calls.svg" alt="" className="block size-full" />
        </button>
        <button aria-label="Teams" className="size-11 cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/rail/teams.svg" alt="" className="block size-full" />
        </button>
      </div>
    </aside>
  );
}
