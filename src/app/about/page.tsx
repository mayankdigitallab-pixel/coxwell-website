import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Engineer-led since 1995",
  description: "Privately held, founder-led polycarbonate manufacturer. 280+ engineers, 3 plants, 5,200+ projects across 27 states.",
};

const timeline = [
  { year: "1995", body: "Founded with six engineers and a single extruder in North India." },
  { year: "2003", body: "First airport canopy specification — 6,400 m² of multiwall, still in service." },
  { year: "2011", body: "Second plant. X-Fix and Spry product lines introduced." },
  { year: "2018", body: "First Indian polycarbonate manufacturer with LEED-aligned EPDs across the full range." },
  { year: "2025", body: "Innovative range launched — Prism, Vivid, and Snapwall." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="label text-[#4a4a47]">About</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-4xl">
              An engineer-led practice. Privately held since 1995.
            </h1>
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc] py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="label text-[#4a4a47]">The premise</p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-3xl lg:text-4xl leading-[1.15] text-[#111110]">
                We were founded on the idea that daylight is the most underused material in Indian architecture —
                and that delivery should match the engineering rigour of structural systems.
              </p>
              <p className="mt-6 text-[#4a4a47] leading-relaxed">
                Three decades on, that premise still shapes the practice. We remain founder-led with no external
                ownership. Each panel is biennially tested, individually certified, and stamped per installation.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc] py-16 lg:py-24 bg-[#f1ede4]">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="label text-[#4a4a47]">Operations</p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-[#d9d6cc] border border-[#d9d6cc]">
              {[
                { value: "3", label: "manufacturing plants in North India" },
                { value: "280+", label: "engineers, technicians, and field staff" },
                { value: "27", label: "Indian states with active installations" },
                { value: "2,755+", label: "architects, OEMs, and contractors" },
              ].map((s) => (
                <div key={s.label} className="bg-[#fafaf7] p-8 lg:p-10">
                  <p className="font-display text-5xl lg:text-6xl tracking-tight text-[#111110]">{s.value}</p>
                  <p className="mt-3 text-[#4a4a47]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc] py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="label text-[#4a4a47]">Timeline</p>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl leading-[1.1] text-[#111110]">
                Five moments that shaped the practice.
              </h2>
            </div>
            <ol className="lg:col-span-8 border-t border-[#d9d6cc]">
              {timeline.map((t) => (
                <li key={t.year} className="py-6 border-b border-[#d9d6cc] grid grid-cols-12 gap-6">
                  <span className="col-span-3 font-display text-2xl text-[#111110]">{t.year}</span>
                  <p className="col-span-9 text-[#4a4a47] leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
