import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const metadataBase = new URL(
  siteConfig.siteUrl || "http://localhost:43123",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "RAKN LABS — We Build Games",
    template: "%s — RAKN LABS",
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: [
    "RAKN LABS",
    "game studio",
    "video games",
    "independent games",
  ],
  openGraph: {
    title: "RAKN LABS — We Build Games",
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "RAKN LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAKN LABS — We Build Games",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030305",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-foreground">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
