import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://amanixlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amanix Labs — a product studio",
    template: "%s · Amanix Labs",
  },
  description:
    "Amanix Labs is an independent product studio building GoalZen, NestMarks, SiteCheck and NeelGhuri, and taking on select web, mobile and AI development work.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amanix Labs",
    title: "Amanix Labs — a product studio",
    description:
      "Small team, long horizon. We build software products we would want to use ourselves.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanix Labs — a product studio",
    description:
      "Small team, long horizon. We build software products we would want to use ourselves.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
