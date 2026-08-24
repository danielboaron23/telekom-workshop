/* Carousel + promo banner — Figma nodes 2958:205635 / 2958:205647 */

function ArrowButton({ dir }: { dir: "left" | "right" }) {
  return (
    <button
      aria-label={dir === "left" ? "Previous banner" : "Next banner"}
      className="flex cursor-pointer items-center rounded-full bg-paper p-1 drop-shadow-[0px_2px_4px_rgba(34,33,46,0.12)]"
    >
      <span className="relative size-4">
        <span className="absolute inset-[12.5%_8.33%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/icons/ui/arrow-line-${dir}.svg`} alt="" className="block size-full" />
        </span>
      </span>
    </button>
  );
}

export function BannerCarousel() {
  return (
    <div className="flex h-[376px] w-full flex-col items-center gap-4">
      <div className="flex min-h-0 w-full flex-1 flex-col items-end gap-2">
        <div className="flex shrink-0 items-start gap-4">
          <ArrowButton dir="left" />
          <ArrowButton dir="right" />
        </div>
        <div className="flex min-h-0 w-full flex-1 flex-col justify-center overflow-clip">
          <div className="relative h-80 w-full shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banner-desktop.png"
              alt=""
              className="pointer-events-none absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Text overlay drawn on top of the banner — absolute at 48,108 of the dashboard container */
export function BannerOverlay() {
  return (
    <div className="absolute top-[108px] left-12 flex flex-col items-start gap-3">
      <div className="flex w-full items-center gap-3">
        <p className="text-2xl leading-8 font-bold whitespace-nowrap text-white">Get a WiFi only plan</p>
        <span className="relative size-6">
          <span className="absolute inset-[4.17%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/ui/discount-offer.svg" alt="" className="block size-full" />
          </span>
        </span>
      </div>
      <div className="w-[461px] text-base font-medium text-white">
        <p className="leading-6">Internet connection that works for everyone in </p>
        <p className="leading-6">your family. For work. For school. For play.</p>
      </div>
      <div className="flex items-start gap-4 text-white">
        <div className="flex flex-col items-start">
          <p className="w-[70px] text-lg leading-6 font-bold">$ 50.00</p>
          <p className="w-[77px] text-sm leading-5 font-medium">Per month</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="w-[77px] text-lg leading-6 font-bold">$ 100.00</p>
          <p className="w-[77px] text-sm leading-5 font-medium">One time</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer text-center text-sm leading-5 font-medium whitespace-nowrap text-white underline decoration-solid decoration-from-font">
          More details
        </button>
        <button className="flex h-8 min-w-20 cursor-pointer items-center justify-center gap-2 overflow-clip rounded-btn border border-outlined-border-on-dark px-3 py-2 hover:bg-white/10">
          <span className="text-center text-sm leading-5 font-medium whitespace-nowrap text-white">Shop now</span>
        </button>
      </div>
    </div>
  );
}
