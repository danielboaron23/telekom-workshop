/* Catalog offer card — Figma "toggle-area" variants inside 2958:206150 */

import { Icon } from "@/components/ui/Icon";
import type { Offer } from "@/lib/catalog";

const channelLogos = [
  "/images/logo-history.png",
  "/images/logo-nbc.png",
  "/images/logo-netflix.png",
  "/images/logo-cnn.png",
  "/images/logo-pbs.png",
];

function PriceBlock({ price, label, was }: { price: string; label: string; was?: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
      <p className="w-full text-sm leading-4 font-bold text-black/87">{price}</p>
      <p className="w-full text-xs leading-4 font-medium text-black/87">{label}</p>
      {was && <p className="w-full text-xs leading-4 font-medium text-secondary-text line-through">{was}</p>}
    </div>
  );
}

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="flex h-full min-w-0 flex-1 flex-col overflow-clip rounded-card bg-paper p-4 shadow-card">
      <div className="flex min-h-0 w-full flex-1 flex-col items-start gap-6">
        <div className="-mb-2 flex w-full flex-col items-start gap-4">
          <div className="flex min-h-[60px] w-full items-start gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 self-stretch">
              {offer.icon && (
                <span className="flex items-center justify-center self-start rounded-btn bg-[linear-gradient(-90deg,#fe7a7f_0%,#f05c62_100%)] p-2">
                  <Icon src={offer.icon} inset={offer.iconInset} />
                </span>
              )}
              <div className="flex min-w-0 flex-1 items-start gap-3 self-start">
                <p className="min-w-0 flex-1 text-sm leading-5 font-bold text-black/87">{offer.title}</p>
                <Icon src="/icons/ui/discount-offer-dark.svg" />
              </div>
            </div>
          </div>
          <span className="flex max-h-6 min-h-6 items-center gap-1 rounded-full bg-black/10 px-2 py-1">
            <span className="text-center text-xs leading-4 font-medium text-black">Postpaid</span>
          </span>
        </div>
        {offer.image ? (
          <div className="flex h-[108px] w-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={offer.image === "phone" ? "/images/catalog-phone.png" : "/images/catalog-router.png"}
              alt=""
              className="h-full w-auto object-contain"
            />
          </div>
        ) : offer.channels ? (
          <div className="flex h-[108px] w-full items-center gap-1.5">
            {channelLogos.map((logo) => (
              <span key={logo} className="flex items-center justify-center rounded-lg border border-black/12 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="" className="block h-3 w-4 object-contain" />
              </span>
            ))}
            <span className="pl-1 text-xs leading-4 font-medium text-black/87">+16</span>
          </div>
        ) : (
          <div className="flex h-[108px] w-full flex-col items-start gap-2">
            <p className="w-full text-xs leading-4 font-bold text-black/87">What are you getting?</p>
            {offer.lorem ? (
              <div className="flex w-full flex-col items-start gap-2">
                <p className="w-full text-xs leading-4 font-medium text-black/87">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
                <button className="cursor-pointer text-xs leading-4 font-medium text-black/87 underline decoration-solid decoration-from-font">
                  Read more
                </button>
              </div>
            ) : (
              <div className="flex w-full flex-col items-start gap-2">
                {offer.body?.map((line) => (
                  <p key={line} className="w-full text-xs leading-4 font-medium text-black/87">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="flex h-[88px] w-full flex-col items-start gap-4">
          <div className="flex w-full items-center gap-3">
            <PriceBlock {...offer.monthly} />
            <PriceBlock {...offer.oneTime} />
          </div>
          {offer.total && (
            <p className="w-full text-xs leading-4 text-black/87">
              <span className="font-medium">Total </span>
              <span className="font-bold">{offer.total}</span>
            </p>
          )}
        </div>
        <div className="mt-auto flex h-8 w-full items-center gap-2">
          <button className="min-w-0 flex-1 cursor-pointer text-left text-sm leading-5 font-medium text-info">
            Details
          </button>
          <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border px-3 py-2 text-center text-sm leading-5 font-medium whitespace-nowrap text-ink hover:bg-black/5">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
