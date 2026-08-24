import type { Meta, StoryObj } from "@storybook/react";
import { BannerCarousel, BannerOverlay } from "@/components/dashboard/BannerCarousel";
import { SearchCustomerCard } from "@/components/dashboard/SearchCustomerCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ResultsCard } from "@/components/find-customer/ResultsCard";
import { ContactCard } from "@/components/customer/ContactCard";
import { TimelineCard } from "@/components/customer/TimelineCard";
import { ProductsCard } from "@/components/customer/ProductsCard";
import { BillingColumn } from "@/components/customer/BillingColumn";
import { CustomerHeader } from "@/components/customer/CustomerHeader";
import { getCustomer } from "@/lib/customers";

const meta: Meta = {
  title: "Organisms/Dashboard & Customer",
  parameters: { layout: "fullscreen", nextjs: { appDirectory: true } },
};
export default meta;

const sai = getCustomer("sai-kumar")!;
const chen = getCustomer("chen-wei-ling")!;

export const Banner: StoryObj = {
  render: () => (
    <div className="relative bg-page p-6">
      <BannerCarousel />
      <BannerOverlay />
    </div>
  ),
};

export const SearchCustomer: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <SearchCustomerCard />
    </div>
  ),
};

export const QuickActionsStrip: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <QuickActions />
    </div>
  ),
};

export const FindCustomerResults: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <ResultsCard />
    </div>
  ),
};

export const CustomerHeading: StoryObj = {
  render: () => (
    <div className="bg-page p-6">
      <CustomerHeader name={sai.name} initials={sai.initials} />
    </div>
  ),
};

export const Customer360Columns: StoryObj = {
  render: () => (
    <div className="flex items-start gap-4 bg-page p-6">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <ContactCard customer={sai} />
        <TimelineCard by={sai.taskBy} ba={sai.ba} />
      </div>
      <div className="min-w-0 flex-1">
        <ProductsCard customer={sai} />
      </div>
      <div className="min-w-0 flex-1">
        <BillingColumn customer={chen} />
      </div>
    </div>
  ),
};
