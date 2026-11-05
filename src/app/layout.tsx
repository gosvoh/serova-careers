import type { Metadata, Viewport } from "next";
import { Manrope, PT_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f4efe6",
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  category: "Business",
  applicationName: "SEROVA.CAREERS",
  authors: [{ name: site.name, url: site.url }],
  icons: "/favicon.ico",
  robots: { index: true, follow: true },
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  creator: "Aleksey Vokhmin",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: "SEROVA.CAREERS",
    title: site.title,
    description: site.description,
    images: [{ url: "/og-logo.png", width: 819, height: 309, alt: "SEROVA.CAREERS — Надежда Серова", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
