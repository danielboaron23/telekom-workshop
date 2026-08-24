"use client";

/* Shared workspace header card: back bar + gradient category tile + title.
   Used by Find Customer (2960:223663) and Browse Catalog (2958:206137). */

import { useRouter } from "next/navigation";

export function WorkspaceHeader({
  title,
  icon,
  iconClassName = "size-[22px]",
  backHref = "/",
}: {
  title: string;
  icon: string;
  iconClassName?: string;
  backHref?: string;
}) {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-paper shadow-card">
      <div className="flex w-full items-start gap-2 px-6 py-2">
        <button
          aria-label="Back"
          onClick={() => router.push(backHref)}
          className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5"
        >
          <span className="relative size-4">
            <span className="absolute inset-[12.5%_8.33%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/ui/arrow-line-left.svg" alt="" className="block size-full" />
            </span>
          </span>
        </button>
      </div>
      <div className="h-px w-full bg-black/12" />
      <div className="flex w-full items-start gap-2 px-6 py-4">
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center">
          <div className="flex w-full items-center gap-4">
            <div className="flex items-start">
              <div className="flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt="" className={`block ${iconClassName}`} />
              </div>
            </div>
            <div className="flex min-h-8 flex-col items-start justify-center gap-1">
              <p className="text-lg leading-6 font-bold whitespace-nowrap text-black/87">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
