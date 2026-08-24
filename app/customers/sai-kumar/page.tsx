import { AppShell } from "@/components/chrome/AppShell";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { ContactCard } from "@/components/customer/ContactCard";
import { TimelineCard } from "@/components/customer/TimelineCard";
import { ProductsCard } from "@/components/customer/ProductsCard";
import { BillingColumn } from "@/components/customer/BillingColumn";

/* Summary — customer 360 for Sai Kumar. Figma node 2958:205890 (1312x1295). */
export default function CustomerSummaryPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        {
          label: "Sai Kumar",
          icon: "/icons/ui/person-avatar-dark.svg",
          href: "/customers/sai-kumar",
          active: true,
          closable: true,
          closeHref: "/find-customer",
        },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-start gap-7 p-6">
          <CustomerHeader />
          <div className="flex w-full items-start gap-4">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ContactCard />
              <TimelineCard />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ProductsCard />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <BillingColumn />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
