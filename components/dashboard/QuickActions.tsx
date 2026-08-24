/* Quick-action button strip — Figma node 2958:205637 */

import Link from "next/link";

const actions = [
  { label: "Buy Prepaid SIM", icon: "/icons/ui/cat-sim.svg", href: "/catalog" },
  { label: "Buy Postpaid", icon: "/icons/ui/cat-box.svg", href: "/catalog" },
  { label: "Buy Accesories", icon: "/icons/ui/cat-headphones.svg", href: "/catalog" },
  { label: "Browse Catalog", icon: "/icons/ui/cat-bag.svg", href: "/catalog" },
];

export function QuickActions() {
  return (
    <div className="flex h-[140px] w-full flex-col overflow-clip rounded-card bg-paper p-6 shadow-card">
      <div className="flex min-h-0 w-full flex-1 items-start gap-6">
        {actions.map((action) => (
          <div key={action.label} className="flex h-full min-w-0 flex-1 flex-col items-start">
            <Link
              href={action.href}
              className="flex min-h-0 w-full flex-1 cursor-pointer flex-col items-center justify-center overflow-clip rounded-card bg-surface p-4 hover:bg-[#ececec]"
            >
              <span className="flex items-center gap-2 p-2">
                <span className="relative size-8 shrink-0">
                  <span className="absolute top-0 left-0 size-8 rounded-lg bg-[linear-gradient(-90deg,#f05c62_0%,#e50075_100%)] shadow-card" />
                  <span className="absolute top-2 left-2 size-4">
                    <span className="absolute inset-[8.33%]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={action.icon} alt="" className="block size-full" />
                    </span>
                  </span>
                </span>
                <span className="text-sm leading-5 font-medium whitespace-nowrap text-ink">{action.label}</span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
