import { AppShell } from "@/components/chrome/AppShell";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";
import { CatalogView } from "@/components/catalog/CatalogView";

/* Browse Catalog — Figma node 2958:206096 (1312x1438); frame 2958:208592 is
   the Mobile-tab state of the same view. */
export default function BrowseCatalogPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/catalog",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="w-full flex-1 pr-16">
        <div className="flex w-full flex-col items-start gap-6 p-6">
          <CatalogView
            header={
              <WorkspaceHeader
                title="Browse catalog"
                icon="/icons/ui/book-library-filled.svg"
                iconClassName="size-6"
                backHref="/customers/sai-kumar"
              />
            }
          />
        </div>
      </div>
    </AppShell>
  );
}
