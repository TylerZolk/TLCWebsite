import type { Metadata } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data/site";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlccolumbia.com"),
  title: {
    default: `${siteConfig.name}: Columbia Nights Start Here`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "TLC is a nightlife bar in Columbia, SC, near the stadium. Weekly events, TLC Tuesday, and private bookings.",
  openGraph: {
    title: `${siteConfig.name}: Columbia Nights Start Here`,
    description:
      "TLC is a nightlife bar in Columbia, SC, near the stadium. Weekly events, TLC Tuesday, and private bookings.",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bebas.variable} ${hanken.variable} h-full`}>
      <body className="min-h-full bg-ink text-off-white">{children}</body>
    </html>
  );
}
