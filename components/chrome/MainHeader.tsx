/* MS365/Main Header — Figma node 2958:205591 */

const topnavIcons = [
  { src: "/icons/topnav/search.svg", alt: "Search", inset: "inset-[4.17%]" },
  { src: "/icons/topnav/lab-experiment.svg", alt: "Lab", inset: "inset-[4.17%_12.5%]" },
  { src: "/icons/topnav/bulb.svg", alt: "Ideas", inset: "inset-[4.17%_16.67%]" },
  { src: "/icons/topnav/add-plus.svg", alt: "Add", inset: "inset-[8.33%]" },
  { src: "/icons/topnav/filter-simple.svg", alt: "Filter", inset: "inset-[8.33%]" },
  { src: "/icons/topnav/settings.svg", alt: "Settings", inset: "inset-[4.17%]" },
  { src: "/icons/topnav/help-info.svg", alt: "Help", inset: "inset-[4.17%]" },
  { src: "/icons/topnav/person-avatar.svg", alt: "Account", inset: "inset-[4.17%]" },
];

export function MainHeader() {
  return (
    <header className="flex h-11 w-full shrink-0 items-center bg-black">
      <div className="flex min-w-0 flex-1 items-center justify-between">
        <div className="flex h-[30px] items-center gap-2 px-6">
          <p className="text-xs leading-4 font-medium whitespace-nowrap text-white">CEP</p>
          <div className="h-[22px] w-px bg-white/50" />
          <p className="text-xs leading-4 font-medium whitespace-nowrap text-header-secondary">
            Customer Service Workspace
          </p>
        </div>
        <div className="flex items-center gap-[29px] px-6">
          {topnavIcons.map((icon) => (
            <button key={icon.src} aria-label={icon.alt} className="relative size-[18px] cursor-pointer">
              <span className={`absolute ${icon.inset}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon.src} alt="" className="block size-full" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
