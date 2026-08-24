import type { Meta, StoryObj } from "@storybook/react";
import { CatalogView } from "@/components/catalog/CatalogView";
import { OfferCard } from "@/components/catalog/OfferCard";
import { OfferConfigurator } from "@/components/offer/OfferConfigurator";
import { OrderItemsCard } from "@/components/order/OrderItemsCard";
import { DeliveryCard } from "@/components/order/DeliveryCard";
import { EquipmentCard } from "@/components/order/EquipmentCard";
import { BillingCard } from "@/components/order/BillingCard";
import { SummaryCard } from "@/components/order/SummaryCard";
import { offers } from "@/lib/catalog";

const meta: Meta = {
  title: "Organisms/Commerce & Order Wizard",
  parameters: { layout: "fullscreen", nextjs: { appDirectory: true } },
};
export default meta;

export const CatalogOfferCards: StoryObj = {
  render: () => (
    <div className="grid grid-cols-4 items-stretch gap-6 bg-page p-6">
      {offers.slice(0, 4).map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  ),
};

export const CatalogWithFilters: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6 bg-page p-6">
      <CatalogView header={null} />
    </div>
  ),
};

export const OfferWizard: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <OfferConfigurator />
    </div>
  ),
};

export const OrderItems: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <OrderItemsCard />
    </div>
  ),
};

export const DeliveryMethod: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <DeliveryCard />
    </div>
  ),
};

export const EquipmentIds: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <EquipmentCard />
    </div>
  ),
};

export const BillingDetails: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <BillingCard />
    </div>
  ),
};

export const OrderSummary: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <SummaryCard />
    </div>
  ),
};
