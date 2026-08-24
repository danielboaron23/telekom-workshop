import { AppShell } from "@/components/chrome/AppShell";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderStepper } from "@/components/order/OrderStepper";
import { SummaryCard } from "@/components/order/SummaryCard";

/* Summary — step 5 of the order wizard. Figma node 2969:68198 (+ expanded
   state frames 2958:207260 / 2969:70026 / 2969:71171). */
export default function OrderSummaryPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/summary",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OrderHeader showRefresh={false} backHref="/billing" />
          <OrderStepper active={4} />
          <SummaryCard />
        </div>
      </div>
    </AppShell>
  );
}
