import { AppShell } from "@/components/chrome/AppShell";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderStepper } from "@/components/order/OrderStepper";
import { BillingCard } from "@/components/order/BillingCard";

/* Billing details — step 4 of the order wizard. Figma nodes 2958:206873 /
   2969:67670 (existing-account states) and 2958:207491 (new-account form). */
export default function BillingDetailsPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/billing",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OrderHeader showRefresh={false} backHref="/equipment" />
          <OrderStepper active={3} />
          <BillingCard />
        </div>
      </div>
    </AppShell>
  );
}
