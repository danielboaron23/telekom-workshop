"use client";

/* Session tab strip — Figma nodes 2958:205616 (dashboard) / 2960:223644 (workspace) */

import Link from "next/link";
import { useRouter } from "next/navigation";

export type SessionTab = {
  label: string;
  icon: string; // path under /icons
  href: string;
  active?: boolean;
  closable?: boolean;
  closeHref?: string;
};

function TabIcon({ src }: { src: string }) {
  return (
    <span className="relative size-4 shrink-0">
      <span className="absolute inset-[4.17%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="block size-full" />
      </span>
    </span>
  );
}

export function TabStrip({ tabs }: { tabs: SessionTab[] }) {
  const router = useRouter();
  return (
    <div className="flex w-full shrink-0 items-center gap-3 bg-page/10 px-7 py-2">
      {tabs.map((tab) =>
        tab.active ? (
          <div
            key={tab.label}
            className="flex h-8 items-center gap-4 rounded-t-lg border-t-2 border-brand bg-paper px-3 py-2"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TabIcon src={tab.icon} />
                <p className="text-xs leading-4 font-medium whitespace-nowrap text-black">{tab.label}</p>
              </div>
              {tab.closable && (
                <button
                  aria-label={`Close ${tab.label}`}
                  onClick={() => router.push(tab.closeHref ?? "/")}
                  className="relative size-4 cursor-pointer"
                >
                  <span className="absolute inset-1/4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icons/ui/cross-close-mini.svg" alt="" className="block size-full" />
                  </span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <Link
            key={tab.label}
            href={tab.href}
            className="flex h-8 items-center justify-center gap-2 rounded-btn px-3 py-2 hover:bg-black/5"
          >
            <TabIcon src={tab.icon} />
            <span className="text-center text-xs leading-4 font-medium whitespace-nowrap text-ink">{tab.label}</span>
          </Link>
        ),
      )}
    </div>
  );
}
