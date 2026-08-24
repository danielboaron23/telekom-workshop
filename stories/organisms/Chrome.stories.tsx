import type { Meta, StoryObj } from "@storybook/react";
import { MainHeader } from "@/components/chrome/MainHeader";
import { TabMenu } from "@/components/chrome/TabMenu";
import { ProductivityRail } from "@/components/chrome/ProductivityRail";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";
import { OrderHeader } from "@/components/order/OrderHeader";

const meta: Meta = { title: "Organisms/App Chrome", parameters: { layout: "fullscreen", nextjs: { appDirectory: true } } };
export default meta;

export const TopChrome: StoryObj = {
  render: () => (
    <div className="flex flex-col bg-page pb-8">
      <MainHeader />
      <TabMenu />
    </div>
  ),
};

export const Rail: StoryObj = {
  render: () => (
    <div className="relative h-72 bg-page">
      <div className="absolute inset-y-0 right-0 w-16">
        <div className="relative h-full">
          <ProductivityRail />
        </div>
      </div>
    </div>
  ),
};

export const WorkspaceHeaders: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6 bg-page p-6">
      <WorkspaceHeader title="Find Customer" icon="/icons/ui/zoom-plus-white.svg" backHref="#" />
      <WorkspaceHeader title="Browse catalog" icon="/icons/ui/book-library-filled.svg" iconClassName="size-6" backHref="#" />
      <OrderHeader backHref="#" />
      <OrderHeader showRefresh={false} backHref="#" />
    </div>
  ),
};
