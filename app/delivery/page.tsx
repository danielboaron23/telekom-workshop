import { AppShell } from "@/components/chrome/AppShell";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderStepper } from "@/components/order/OrderStepper";
import { DeliveryCard } from "@/components/order/DeliveryCard";

/* Delivery Method — step 2 of the order wizard. Figma nodes 2958:206479 /
   2958:206612 / 2969:66848 (three states of one step, 1287-wide frames). */
export default function DeliveryMethodPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/delivery",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OrderHeader showRefresh={false} backHref="/order" />
          <OrderStepper active={1} />
          <DeliveryCard />
        </div>
      </div>
    </AppShell>
  );
}
