export type CatalogCategory = "top" | "mobile" | "internet" | "bundles";

export const catalogCategories: { key: CatalogCategory; label: string }[] = [
  { key: "top", label: "Top offers" },
  { key: "mobile", label: "Mobile" },
  { key: "internet", label: "Internet" },
  { key: "bundles", label: "Bundles" },
];

export type Offer = {
  id: string;
  title: string;
  /* white tile icon; image cards have none */
  icon?: string;
  iconInset?: string;
  categories: CatalogCategory[];
  body?: string[];
  lorem?: boolean;
  image?: "phone" | "router";
  channels?: boolean;
  monthly: { price: string; label: string; was?: string };
  oneTime: { price: string; label: string; was?: string };
  total?: string;
};

const shortBody = ["30GB data", "$0.10/minute for EU & US calls"];
const fullBody = ["30GB data", "Unlimited local calls & text", "$0.10/minute for EU & US calls"];

export const offers: Offer[] = [
  {
    id: "single-line",
    title: "Single line title",
    icon: "/icons/ui/tile-mobile-phone-filled.svg",
    iconInset: "inset-[8.33%_25%]",
    categories: ["mobile"],
    body: shortBody,
    monthly: { price: "$18.99", label: "Monthly" },
    oneTime: { price: "$18.99", label: "One time" },
  },
  {
    id: "mobile-offer",
    title: "Mobile offer",
    icon: "/icons/ui/tile-internet-globe.svg",
    iconInset: "inset-[8.59%_8.46%_9.13%_8.47%]",
    categories: ["mobile"],
    lorem: true,
    monthly: { price: "$18.99", label: "Monthly", was: "$22.00" },
    oneTime: { price: "$18.99", label: "One time", was: "$22.00" },
  },
  {
    id: "tv-packages",
    title: "TV packages offer",
    icon: "/icons/ui/tile-tv-filled.svg",
    iconInset: "inset-[8.33%_4.17%]",
    categories: ["internet"],
    body: fullBody,
    monthly: { price: "$18.99", label: "Monthly", was: "$22.00" },
    oneTime: { price: "$18.99", label: "One time", was: "$22.00" },
  },
  {
    id: "landline-offer",
    title: "Landline offer",
    icon: "/icons/ui/tile-call-phone.svg",
    iconInset: "inset-[8.33%]",
    categories: ["mobile"],
    body: fullBody,
    monthly: { price: "$18.99", label: "Monthly", was: "$22.00" },
    oneTime: { price: "$18.99", label: "One time", was: "$22.00" },
  },
  {
    id: "bundle-offers",
    title: "Bundle offers",
    icon: "/icons/ui/tile-box-product.svg",
    iconInset: "inset-[8.33%]",
    categories: ["bundles"],
    body: fullBody,
    monthly: { price: "$18.99", label: "Monthly" },
    oneTime: { price: "$18.99", label: "One time" },
  },
  {
    id: "device-offer",
    title: "Lorem ipsum dolor sit amet consectetur",
    categories: ["mobile"],
    image: "phone",
    monthly: { price: "$18.99", label: "Pay now", was: "$22.00" },
    oneTime: { price: "$18.99", label: "12 installments", was: "$22.00" },
    total: "$247.00",
  },
  {
    id: "internet-offer",
    title: "Internet offer amet consectetur Lorem ipsum dolor sit",
    icon: "/icons/ui/tile-internet-globe.svg",
    iconInset: "inset-[8.59%_8.46%_9.13%_8.47%]",
    categories: ["internet"],
    channels: true,
    monthly: { price: "$18.99", label: "Monthly", was: "$22.00" },
    oneTime: { price: "$18.99", label: "One time", was: "$22.00" },
  },
  {
    id: "router-offer",
    title: "Lorem ipsum dolor sit amet consectetur",
    categories: ["internet"],
    image: "router",
    monthly: { price: "$18.99", label: "Monthly", was: "$22.00" },
    oneTime: { price: "$18.99", label: "One time", was: "$22.00" },
  },
];
