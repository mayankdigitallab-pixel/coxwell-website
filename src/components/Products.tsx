import Link from "next/link";
import Image from "next/image";

const products = [
  {
    n: "01",
    name: "Prism",
    descriptor: "Solar Screening for Climate Control™",
    spec: "6-layer prismatic · 16–25 mm · U = 0.99 W/m²K",
    body: "Reflects summer heat, admits passive winter warmth. The first prismatic polycarbonate engineered for Indian climate.",
    family: "Innovative",
    isNew: true,
    image: "/images/1b.png",
  },
  {
    n: "02",
    name: "Vivid",
    descriptor: "Daylight-Directional Louver Technology™",
    spec: "16–25 mm · Tri-colour fusion · Micro-louver matrix",
    body: "Precision micro-louvers redirect daylight in two axes. A theatrical option for façades and feature roofs.",
    family: "Innovative",
    isNew: true,
    image: "/images/2b.png",
  },
  {
    n: "03",
    name: "Snapwall",
    descriptor: "Click-lock vertical glazing",
    spec: "40 mm · 10-wall X-structure · U = 0.99 W/m²K",
    body: "The first polycarbonate vertical-glazing system with structural click-lock. Replaces glass at scale.",
    family: "Innovative",
    isNew: true,
    image: "/images/4b-1.png",
  },
  {
    n: "04",
    name: "Multicell",
    descriptor: "Premium multiwall, double-tooth interlock",
    spec: "6–30 mm · 3-cell / 5-cell · IS 14434",
    body: "Leak-proof, accessibly priced multiwall. The most-specified Coxwell panel in India.",
    family: "Traditional",
    image: "/images/6b.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc] bg-[#f1ede4]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="label text-[#4a4a47]">C — Products</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] text-[#111110]">
              A system for every surface.
            </h2>
            <p className="mt-4 text-[#4a4a47] leading-relaxed">
              Seven panel systems across two families — innovative high-performance lines and proven traditional ranges.
            </p>
          </div>
          <Link
            href="/products"
            className="self-start lg:self-end label text-[#111110] flex items-center gap-2 hover:underline underline-offset-4"
          >
            All products →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-[#d9d6cc] border border-[#d9d6cc]">
          {products.map((p) => (
            <Link
              key={p.name}
              href={`/products#${p.name.toLowerCase()}`}
              className="bg-[#fafaf7] p-8 lg:p-10 hover:bg-white transition-colors group block"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-[#111110]">{p.n}</span>
                  <span className="label text-[#4a4a47]">/ {String(products.length).padStart(2, "0")}</span>
                </div>
                {p.isNew && (
                  <span className="label text-[#6b5d4a] border border-[#6b5d4a] px-2 py-0.5">
                    New
                  </span>
                )}
              </div>

              <div className="aspect-[4/3] mb-6 overflow-hidden bg-[#f1ede4]">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-contain p-6 group-hover:scale-[1.02] transition-transform"
                />
              </div>

              <p className="label text-[#4a4a47] mb-3">{p.family}</p>
              <h3 className="font-display text-3xl text-[#111110] mb-2">{p.name}</h3>
              <p className="text-[#111110] mb-3">{p.descriptor}</p>
              <p className="text-sm text-[#4a4a47] font-mono mb-4 tracking-tight">{p.spec}</p>
              <p className="text-[#4a4a47] leading-relaxed">{p.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
