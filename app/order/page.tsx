import Link from "next/link";
import { AppShell } from "@/components/chrome/AppShell";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderStepper } from "@/components/order/OrderStepper";
import { OrderItemsCard } from "@/components/order/OrderItemsCard";

/* Order Items — step 1 of the order wizard. Figma node 2958:206268 (1287x1257). */
export default function OrderItemsPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/order",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OrderHeader />
          <OrderStepper active={0} />
          <OrderItemsCard />
        </div>
        <div className="sticky bottom-0 flex w-full flex-col bg-paper">
          <div className="h-px w-full bg-black/12" />
          <div className="flex w-full items-center justify-between px-8 py-4">
            <Link href="/offer" className="text-sm leading-5 font-medium whitespace-nowrap text-info">
              Back
            </Link>
            <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-ink px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-white hover:bg-black">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
