import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import CTA from "@/components/CTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — A system for every surface",
  description:
    "Seven polycarbonate panel systems across innovative and traditional ranges. Prism, Vivid, Snapwall, Multicell, X-Fix, Static, Spry.",
};

const products = [
  {
    n: "01", name: "Prism", family: "Innovative", isNew: true,
    descriptor: "Solar Screening for Climate Control™",
    spec: "6-layer prismatic · 16–25 mm · U = 0.99 W/m²K",
    body: "Reflects summer heat while admitting passive winter warmth. The first prismatic polycarbonate engineered for the Indian climate.",
    image: "/images/1b.png",
  },
  {
    n: "02", name: "Vivid", family: "Innovative", isNew: true,
    descriptor: "Daylight-Directional Louver Technology™",
    spec: "16–25 mm · Tri-colour fusion · Micro-louver matrix",
    body: "Precision micro-louver matrix redirects daylight in two axes. Architectural drama for façades and feature roofs.",
    image: "/images/2b.png",
  },
  {
    n: "03", name: "Snapwall", family: "Innovative", isNew: true,
    descriptor: "Click-lock vertical glazing system",
    spec: "40 mm · 10-wall X-structure · U = 0.99 W/m²K",
    body: "The first polycarbonate vertical-glazing system with structural click-lock. Replaces glass at scale.",
    image: "/images/4b-1.png",
  },
  {
    n: "04", name: "Multicell", family: "Traditional",
    descriptor: "Premium multiwall, double-tooth interlock",
    spec: "6–30 mm · 3-cell / 5-cell · IS 14434",
    body: "Leak-proof, accessibly priced multiwall. The most-specified Coxwell panel in India.",
    image: "/images/6b.png",
  },
  {
    n: "05", name: "X-Fix", family: "Traditional",
    descriptor: "7-layer, 5-wall interlock",
    spec: "16–25 mm · Dry-fit · Industrial grade",
    body: "Engineered for industrial roofs and large-span commercial structures. Dry-fit, fast on-site.",
    image: "/images/20mm-Blue-X-Structure_DSC0040.jpg",
  },
  {
    n: "06", name: "Static Sheet", family: "Traditional",
    descriptor: "Glass-replacement solid panel",
    spec: "1.5–12 mm · Up to 89% clarity · 250× impact",
    body: "Solid polycarbonate sheet — 250× the impact strength of glass at a sixth of the weight.",
    image: "/images/Install-1-1.png",
  },
  {
    n: "07", name: "Spry", family: "Traditional",
    descriptor: "Twin-wall multiwall, light-diffusing",
    spec: "6–12 mm · Twin-wall · Diffuse interior",
    body: "Twin-wall multiwall balancing clarity and insulation. A heritage product with continuous improvements.",
    image: "/images/DAY-2.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="label text-[#4a4a47]">Catalogue</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-3xl">
              A system for every surface.
            </h1>
            <p className="mt-6 text-lg text-[#4a4a47] max-w-2xl">
              Seven panel systems across two families. Filter by family or application, or browse the full range below.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32 px-6 lg:px-10 border-t border-[#d9d6cc]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d9d6cc] border border-[#d9d6cc] mt-px">
              {products.map((p) => (
                <article key={p.name} id={p.name.toLowerCase()} className="bg-[#fafaf7] p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl text-[#111110]">{p.n}</span>
                      <span className="label text-[#4a4a47]">/ 07</span>
                    </div>
                    {p.isNew && (
                      <span className="label text-[#6b5d4a] border border-[#6b5d4a] px-2 py-0.5">New</span>
                    )}
                  </div>
                  <div className="aspect-[4/3] mb-6 overflow-hidden bg-[#f1ede4]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="label text-[#4a4a47] mb-3">{p.family}</p>
                  <h2 className="font-display text-3xl text-[#111110] mb-2">{p.name}</h2>
                  <p className="text-[#111110] mb-3">{p.descriptor}</p>
                  <p className="text-sm text-[#4a4a47] font-mono mb-4 tracking-tight">{p.spec}</p>
                  <p className="text-[#4a4a47] leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
