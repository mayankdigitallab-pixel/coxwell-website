import type { Metadata } from "next";
import "./globals.css";
import "../styles/colors_and_type.css";
import "../styles/site.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Coxwell — Polycarbonate roofing & façade systems",
  description:
    "Polycarbonate roofing, façade and skylight systems. Engineered daylight without heat, glare, or ageing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-accent="orange" data-type="default">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
