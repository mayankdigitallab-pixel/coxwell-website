import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import Applications from "@/components/Applications";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications — Wherever daylight matters",
  description: "Roofing, skylights, atriums, façades, walkways, and greenhouses. Six categories, twenty-seven states, three decades.",
};

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-12 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="label text-[#4a4a47]">Applications</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-4xl">
              Wherever daylight matters.
            </h1>
            <p className="mt-6 text-lg text-[#4a4a47] max-w-2xl">
              Coxwell systems perform across the widest range of building types in India. Six categories,
              twenty-seven states, three decades of installations.
            </p>
          </div>
        </section>

        <Applications />
        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
