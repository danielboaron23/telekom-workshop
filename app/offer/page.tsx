import Link from "next/link";
import { AppShell } from "@/components/chrome/AppShell";
import { OfferHeader } from "@/components/offer/OfferHeader";
import { OfferConfigurator } from "@/components/offer/OfferConfigurator";

/* Offer configuration — Figma frames 2960:222429 / 2958:207616 / 2960:223002
   (the three step-states of one wizard screen, 1287x1058). */
export default function OfferPage() {
  return (
    <AppShell
      tabs={[
        { label: "Agent Dashboard", icon: "/icons/ui/person-avatar-circle.svg", href: "/" },
        { label: "Find Customer", icon: "/icons/ui/zoom-in.svg", href: "/find-customer" },
        { label: "Sai Kumar", icon: "/icons/ui/person-avatar-dark.svg", href: "/customers/sai-kumar" },
        {
          label: "Order Flow",
          icon: "/icons/ui/note-bill-paper-dark.svg",
          href: "/offer",
          active: true,
          closable: true,
          closeHref: "/customers/sai-kumar",
        },
      ]}
    >
      <div className="flex w-full flex-1 flex-col pr-16">
        <div className="flex w-full flex-1 flex-col items-start gap-6 p-6">
          <OfferHeader />
          <OfferConfigurator />
        </div>
        <div className="sticky bottom-0 flex w-full items-center justify-end bg-paper py-4 pr-6">
          <Link
            href="/order"
            className="flex h-8 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn bg-ink px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-white hover:bg-black"
          >
            Continue to order
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
