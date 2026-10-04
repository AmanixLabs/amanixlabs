export type ProductStatus = "live" | "beta" | "building" | "planned";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  market: "Global" | "Bangladesh";
  status: ProductStatus;
  url?: string;
  accent: string; // per-product glow colour used on the card
};

export const products: Product[] = [
  {
    slug: "goalzen",
    name: "GoalZen",
    tagline: "Turn a goal into a path you can follow today.",
    description:
      "Goals, tasks, routines and a Finish Mode that keeps you on one thing until it is done. Web app, Android app and a Chrome new-tab extension, with NestMarks built in as your resource library.",
    market: "Global",
    status: "beta",
    url: "https://goalzen.app",
    accent: "#7cf3c4",
  },
  {
    slug: "nestmarks",
    name: "NestMarks",
    tagline: "A private home for the links you want to keep.",
    description:
      "A bookmark manager built for finding things again: full-text search, nested collections, dead-link checks and AI tidy-ups you approve as a diff. Use the managed service or self-host it.",
    market: "Global",
    status: "beta",
    url: "https://nestmarks.com",
    accent: "#ffb86b",
  },
  {
    slug: "sitecheck",
    name: "SiteCheck",
    tagline: "Know your site is down before your users do.",
    description:
      "Website and heartbeat monitoring with on-call alerting, built for small teams who want PagerDuty-grade reliability without the enterprise price tag.",
    market: "Global",
    status: "building",
    accent: "#8ab4ff",
  },
  {
    slug: "neelghuri",
    name: "NeelGhuri",
    tagline: "Toys and everyday things for kids in Bangladesh.",
    description:
      "An online store for children's toys and daily essentials, with a Bengali storefront, bKash and cash on delivery, and delivery across Bangladesh.",
    market: "Bangladesh",
    status: "building",
    url: "https://neelghuri.com",
    accent: "#ff7b9c",
  },
];

export const statusLabel: Record<ProductStatus, string> = {
  live: "Live",
  beta: "Beta",
  building: "In development",
  planned: "Planned",
};
