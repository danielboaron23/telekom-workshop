/* Dark contact info card — Figma node 2958:205973 */

import { Icon } from "@/components/ui/Icon";

const details = [
  { icon: "/icons/ui/note-document.svg", inset: "inset-[4.17%_12.5%]", text: "Passport: C05066558805988" },
  { icon: "/icons/ui/note-mobile-phone.svg", inset: "inset-[4.17%_16.67%]", text: "(333) 344 3443" },
  { icon: "/icons/ui/email-white.svg", inset: "inset-[12.5%_4.17%]", text: "Sai.Kumar@hotmail.com" },
  {
    icon: "/icons/ui/location.svg",
    inset: "inset-[4.17%_16.67%]",
    text: "16 Sandilands Road, Kovan, Singapore 546080",
    /* Figma truncates this line with an ellipsis at this width */
    maxWidth: 288,
  },
];

export function ContactCard() {
  return (
    <div className="flex w-full flex-col overflow-clip rounded-card bg-ink-card p-4 shadow-card">
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center overflow-clip rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/avatar-sai.png" alt="" className="size-full object-cover" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-2">
            <p className="w-full truncate text-sm leading-5 font-medium text-white">Mr. Sai Kumar</p>
            <p className="w-full truncate text-xs leading-4 font-medium text-white">Account owner</p>
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        {details.map((d) => (
          <div key={d.text} className="flex w-full items-center gap-2">
            <Icon src={d.icon} inset={d.inset} />
            <p
              className="min-w-0 truncate text-sm leading-5 font-medium text-white"
              style={"maxWidth" in d ? { maxWidth: d.maxWidth } : undefined}
            >
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
