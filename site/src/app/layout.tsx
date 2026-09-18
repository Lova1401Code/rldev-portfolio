import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "RL Dev — Développement web sur mesure",
  description: siteConfig.description,
  keywords: [
    "développement web",
    "site web",
    "application web",
    "React",
    "Next.js",
    "NestJS",
    "Madagascar",
    "agence web",
    "site vitrine",
    "sur mesure",
  ],
  authors: [{ name: "RL Dev" }],
  openGraph: {
    title: "RL Dev — Développement web sur mesure",
    description: siteConfig.description,
    type: "website",
    locale: "fr_FR",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "RL Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RL Dev — Développement web sur mesure",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}