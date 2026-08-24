import { MainHeader } from "./MainHeader";
import { TabMenu } from "./TabMenu";
import { TabStrip, type SessionTab } from "./TabStrip";
import { ProductivityRail } from "./ProductivityRail";

/* Shared workspace chrome: header + nav rows + right productivity rail. */
export function AppShell({ tabs, children }: { tabs: SessionTab[]; children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[889px] flex-1 flex-col items-start bg-page">
      <div className="sticky top-0 z-40 flex w-full flex-col bg-page">
        <MainHeader />
        <TabMenu />
        <TabStrip tabs={tabs} />
      </div>
      {children}
      <ProductivityRail />
    </div>
  );
}
