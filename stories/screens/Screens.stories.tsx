import type { Meta, StoryObj } from "@storybook/react";
import AgentDashboardPage from "@/app/page";
import FindCustomerPage from "@/app/find-customer/page";
import BrowseCatalogPage from "@/app/catalog/page";
import OfferPage from "@/app/offer/page";
import OrderItemsPage from "@/app/order/page";
import DeliveryMethodPage from "@/app/delivery/page";
import EquipmentIdsPage from "@/app/equipment/page";
import BillingDetailsPage from "@/app/billing/page";
import OrderSummaryPage from "@/app/summary/page";
import OrderCompletePage from "@/app/order-complete/page";
import { AppShell } from "@/components/chrome/AppShell";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { ContactCard } from "@/components/customer/ContactCard";
import { TimelineCard } from "@/components/customer/TimelineCard";
import { ProductsCard } from "@/components/customer/ProductsCard";
import { BillingColumn } from "@/components/customer/BillingColumn";
import { getCustomer } from "@/lib/customers";

const meta: Meta = { title: "Screens/All Screens", parameters: { layout: "fullscreen", nextjs: { appDirectory: true } } };
export default meta;

export const AgentDashboard: StoryObj = { render: () => <AgentDashboardPage /> };
export const FindCustomer: StoryObj = { render: () => <FindCustomerPage /> };

const sai = getCustomer("sai-kumar")!;
export const CustomerSummary360: StoryObj = {
  render: () => (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "#" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "#" },
        { label: sai.name, icon: "/icons/ui/person-avatar-dark.svg", href: "#", active: true, closable: true },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-start gap-7 p-6">
          <CustomerHeader name={sai.name} initials={sai.initials} />
          <div className="flex w-full items-start gap-4">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ContactCard customer={sai} />
              <TimelineCard by={sai.taskBy} ba={sai.ba} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <ProductsCard customer={sai} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
              <BillingColumn customer={sai} />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  ),
};

export const BrowseCatalog: StoryObj = { render: () => <BrowseCatalogPage /> };
export const OfferConfiguration: StoryObj = { render: () => <OfferPage /> };
export const OrderItems: StoryObj = { render: () => <OrderItemsPage /> };
export const DeliveryMethod: StoryObj = { render: () => <DeliveryMethodPage /> };
export const EquipmentIds: StoryObj = { render: () => <EquipmentIdsPage /> };
export const BillingDetails: StoryObj = { render: () => <BillingDetailsPage /> };
export const OrderSummary: StoryObj = { render: () => <OrderSummaryPage /> };
export const OrderComplete: StoryObj = { render: () => <OrderCompletePage /> };
