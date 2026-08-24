/* 16/24px icon box with a Figma-style inset for the glyph. */
export function Icon({
  src,
  size = 16,
  inset = "inset-[4.17%]",
  className = "",
}: {
  src: string;
  size?: 16 | 18 | 24;
  inset?: string;
  className?: string;
}) {
  const box = size === 24 ? "size-6" : size === 18 ? "size-[18px]" : "size-4";
  return (
    <span className={`relative shrink-0 ${box} ${className}`}>
      <span className={`absolute ${inset}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="block size-full" />
      </span>
    </span>
  );
}

export function IconButton({
  src,
  label,
  inset = "inset-[4.17%]",
  onClick,
}: {
  src: string;
  label: string;
  inset?: string;
  onClick?: () => void;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 rounded-full p-2 hover:bg-black/5"
    >
      <Icon src={src} inset={inset} />
    </button>
  );
}
