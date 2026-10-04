export type ProductStatus = "live" | "beta" | "building" | "planned";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  market: "Global" | "Bangladesh";
  status: ProductStatus;
  url?: string;
  accent: string; // tailwind color token used for the card glow
};

export const products: Product[] = [
  {
    slug: "goalzen",
    name: "GoalZen",
    tagline: "Goals that actually get finished.",
    description:
      "A calm goal and habit tracker for people who are tired of productivity apps that nag. Web and mobile, built around focus instead of streak anxiety.",
    market: "Global",
    status: "building",
    accent: "#7cf3c4",
  },
  {
    slug: "nestmarks",
    name: "NestMarks",
    tagline: "A home for everything you meant to read.",
    description:
      "Bookmarks, highlights and notes that stay organised without a filing system. Save from anywhere, find it again in seconds.",
    market: "Global",
    status: "building",
    accent: "#ffb86b",
  },
  {
    slug: "sitechek",
    name: "SiteChek",
    tagline: "Know your site is healthy before your users do.",
    description:
      "Uptime, performance, SEO and accessibility checks in one report. Built for indie makers and small teams who cannot afford an ops department.",
    market: "Global",
    status: "building",
    accent: "#8ab4ff",
  },
  {
    slug: "neelghuri",
    name: "NeelGhuri",
    tagline: "Thoughtful toys for curious kids in Bangladesh.",
    description:
      "An online store for safe, well-made toys and learning kits, delivered across Bangladesh. Curated for play that lasts longer than the box.",
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
