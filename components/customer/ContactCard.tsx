/* Dark contact info card — Figma node 2958:205973 */

import { Icon } from "@/components/ui/Icon";
import type { Customer } from "@/lib/customers";

export function ContactCard({ customer }: { customer: Customer }) {
  const details = [
    { icon: "/icons/ui/note-document.svg", inset: "inset-[4.17%_12.5%]", text: customer.passport },
    { icon: "/icons/ui/note-mobile-phone.svg", inset: "inset-[4.17%_16.67%]", text: customer.contactPhone ?? customer.phone },
    { icon: "/icons/ui/email-white.svg", inset: "inset-[12.5%_4.17%]", text: customer.email },
    {
      icon: "/icons/ui/location.svg",
      inset: "inset-[4.17%_16.67%]",
      text: customer.address,
      maxWidth: customer.addressClamp,
    },
  ];
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-ink-card p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center overflow-clip rounded-full">
            {customer.avatar ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={customer.avatar} alt="" className="size-full object-cover" />
            ) : (
              <span className="flex size-full items-center justify-center rounded-full bg-[#fcdee0] text-base leading-6 font-medium text-black/87">
                {customer.initials}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-2">
            <p className="w-full truncate text-sm leading-5 font-medium text-white">{customer.title}</p>
            <p className="w-full truncate text-xs leading-4 font-medium text-white">Account owner</p>
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        {details.map((d) => (
          <div key={d.text} className="flex w-full items-center gap-2">
            <Icon src={d.icon} inset={d.inset} />
            <p
              className="min-w-0 truncate text-sm leading-5 font-medium text-white"
              style={d.maxWidth ? { maxWidth: d.maxWidth } : undefined}
            >
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
