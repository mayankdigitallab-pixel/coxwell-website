import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://coxwell-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Coxwell – Polycarbonate Roofing & Skylight Systems Since 1995",
    template: "%s | Coxwell",
  },
  description:
    "India's leading polycarbonate roofing, façade, and skylight systems since 1995. 5,200+ projects delivered across Gurgaon, Delhi, and Bengaluru. LEED-certified, 10-year warranty.",
  keywords: [
    "polycarbonate roofing",
    "polycarbonate skylight",
    "polycarbonate facade",
    "canopy systems india",
    "atrium roofing",
    "carport roofing",
    "coxwell india",
    "multicell polycarbonate",
    "snapwall glazing",
  ],
  authors: [{ name: "Coxwell" }],
  creator: "Coxwell",
  publisher: "Coxwell",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "Coxwell",
    title: "Coxwell – Polycarbonate Roofing & Skylight Systems",
    description:
      "Daylight is the heart of every space we build. India's premier polycarbonate systems since 1995.",
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: "/images/DAY-2.png",
        width: 1200,
        height: 630,
        alt: "Coxwell polycarbonate roofing project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coxwell – Polycarbonate Roofing & Skylight Systems",
    description:
      "India's premier polycarbonate roofing, façade, and skylight systems since 1995.",
    images: ["/images/DAY-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
