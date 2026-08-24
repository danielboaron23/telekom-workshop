import { AppShell } from "@/components/chrome/AppShell";
import { HeaderCard } from "@/components/find-customer/HeaderCard";
import { ResultsCard } from "@/components/find-customer/ResultsCard";

/* Workspace_Desktop — Find Customer. Figma node 2960:223625 (1312x1078). */
export default function FindCustomerPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        {
          label: "Find Customer",
          icon: "/icons/ui/zoom-in.svg",
          href: "/find-customer",
          active: true,
          closable: true,
          closeHref: "/",
        },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-center gap-6 overflow-clip bg-page p-6">
          <div className="flex w-full flex-col items-start gap-4">
            <HeaderCard />
          </div>
          <ResultsCard />
        </div>
      </div>
    </AppShell>
  );
}
