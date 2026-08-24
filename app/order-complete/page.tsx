import Link from "next/link";
import { AppShell } from "@/components/chrome/AppShell";

/* Order placed confirmation — Figma node 2958:207186 (1287x1058). */
export default function OrderCompletePage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/order-complete",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-start p-6">
          <div className="flex h-[420px] w-full overflow-clip rounded-card bg-paper shadow-card">
            <div className="h-full w-[295px] shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/order-success.jpeg" alt="" className="size-full object-cover" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex w-full min-h-0 flex-1 flex-col items-center justify-center gap-1">
                <button className="cursor-pointer text-sm leading-5 font-medium text-black/87 underline decoration-solid decoration-from-font">
                  ProductOrder_12345678909876
                </button>
                <p className="text-sm leading-5 font-medium text-secondary-text">has been successfully placed.</p>
              </div>
              <div className="h-px w-full bg-black/12" />
              <div className="flex w-full items-center justify-end gap-4 px-6 py-3">
                <Link
                  href="/customers/sai-kumar"
                  className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-ink hover:bg-black/5"
                >
                  Go to customer 360
                </Link>
                <Link
                  href="/catalog"
                  className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-ink px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-white hover:bg-black"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
