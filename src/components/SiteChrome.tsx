"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyLead } from "@/components/StickyLead";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showStickyLead = pathname !== "/contact";

  return (
    <div className="site" data-screen-label={pathname}>
      <Header />
      {children}
      <Footer />
      {showStickyLead && <StickyLead />}
    </div>
  );
}

