import { notFound } from "next/navigation";
import { AppShell } from "@/components/chrome/AppShell";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { ContactCard } from "@/components/customer/ContactCard";
import { TimelineCard } from "@/components/customer/TimelineCard";
import { ProductsCard } from "@/components/customer/ProductsCard";
import { BillingColumn } from "@/components/customer/BillingColumn";
import { getCustomer } from "@/lib/customers";

/* Summary — customer 360. Figma node 2958:205890 (1312x1295). */
export default async function CustomerSummaryPage({ params }: PageProps<"/customers/[id]">) {
  const { id } = await params;
  const customer = getCustomer(id);
  if (!customer) notFound();

  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        {
          label: customer.name,
          icon: "/icons/ui/person-avatar-dark.svg",
          href: `/customers/${customer.id}`,
          active: true,
          closable: true,
          closeHref: "/find-customer",
        },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-start gap-7 p-6">
          <CustomerHeader name={customer.name} initials={customer.initials} />
          <div className="flex w-full items-start gap-4">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ContactCard customer={customer} />
              <TimelineCard by={customer.taskBy} ba={customer.ba} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ProductsCard customer={customer} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <BillingColumn customer={customer} />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
