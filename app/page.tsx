import { MainHeader } from "@/components/chrome/MainHeader";
import { TabMenu } from "@/components/chrome/TabMenu";
import { TabStrip } from "@/components/chrome/TabStrip";
import { ProductivityRail } from "@/components/chrome/ProductivityRail";
import { BannerCarousel, BannerOverlay } from "@/components/dashboard/BannerCarousel";
import { SearchCustomerCard } from "@/components/dashboard/SearchCustomerCard";
import { QuickActions } from "@/components/dashboard/QuickActions";

/* Buy Internet — Agent dashboard. Figma node 2958:205590 (1312x889). */
export default function AgentDashboardPage() {
  return (
    <div className="relative flex min-h-[889px] flex-1 flex-col items-start bg-page">
      <MainHeader />
      <TabMenu />
      <TabStrip />
      <div className="flex min-h-0 w-full flex-1 items-start">
        <div className="flex h-full min-w-0 flex-1 flex-col items-start gap-7 py-6 pr-22 pl-6">
          <div className="relative flex w-full flex-col items-start gap-[23px] overflow-clip">
            <BannerCarousel />
            <SearchCustomerCard />
            <QuickActions />
            <BannerOverlay />
          </div>
        </div>
      </div>
      <ProductivityRail />
    </div>
  );
}
