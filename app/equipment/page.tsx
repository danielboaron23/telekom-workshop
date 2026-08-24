import { AppShell } from "@/components/chrome/AppShell";
import { OrderHeader } from "@/components/order/OrderHeader";
import { OrderStepper } from "@/components/order/OrderStepper";
import { EquipmentCard } from "@/components/order/EquipmentCard";

/* Equipment IDs — step 3 of the order wizard. Figma nodes 2958:206729 /
   2969:67222 (empty/filled states, 1287x1058). */
export default function EquipmentIdsPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/equipment",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OrderHeader showRefresh={false} backHref="/delivery" />
          <OrderStepper active={2} />
          <EquipmentCard />
        </div>
      </div>
    </AppShell>
  );
}
