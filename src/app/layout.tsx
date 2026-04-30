import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coxwell – Polycarbonate Roofing & Skylight Systems",
  description:
    "India's leading polycarbonate roofing, façade, and skylight systems since 1995. 5,200+ projects delivered across Gurgaon, Delhi, and Bengaluru.",
  keywords: "polycarbonate roofing, skylight, facade, canopy, coxwell india",
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
