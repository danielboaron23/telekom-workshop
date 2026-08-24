/* Session tab strip — Figma node 2958:205616 */

export function TabStrip({ title = "Agent Dashboard" }: { title?: string }) {
  return (
    <div className="flex w-full shrink-0 items-start gap-3 bg-page/10 px-7 py-2">
      <div className="flex h-8 items-center gap-4 rounded-t-lg border-t-2 border-brand bg-paper px-3 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative size-4">
              <span className="absolute inset-[4.17%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/ui/person-avatar-circle.svg" alt="" className="block size-full" />
              </span>
            </span>
            <p className="text-xs leading-4 font-medium whitespace-nowrap text-black">{title}</p>
          </div>
          <button aria-label="Close tab" className="relative size-4 cursor-pointer">
            <span className="absolute inset-1/4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/ui/cross-close-mini.svg" alt="" className="block size-full" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
