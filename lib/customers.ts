export type CustomerRow = {
  personalId: string;
  name: string;
  phone: string;
  msisdn: string;
  customerId: string;
  owner: string;
  /* Row 1 in the Figma renders its owner cell at 14px — kept as-is. */
  bigOwner?: boolean;
};

const saiKumar: CustomerRow = {
  personalId: "025098788",
  name: "Sai Kumar",
  phone: "(555) 4440 317",
  msisdn: "4959952100",
  customerId: "Owner",
  owner: "Sai Kumar",
  bigOwner: true,
};

const sarahPulman: CustomerRow = {
  personalId: "025098788",
  name: "Sarah Pulman",
  phone: "(555) 4440 317",
  msisdn: "4959952100",
  customerId: "Owner",
  owner: "Sarah Pulman",
};

export const searchResults: CustomerRow[] = [saiKumar, ...Array.from({ length: 9 }, () => sarahPulman)];
