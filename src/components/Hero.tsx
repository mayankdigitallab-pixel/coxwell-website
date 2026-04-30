import Link from "next/link";

const stats = [
  { label: "Lifespan", value: "15+ years" },
  { label: "Warranty", value: "10-year" },
  { label: "Certifications", value: "LEED · IS 14434" },
  { label: "Projects", value: "5,200+" },
];

export default function Hero() {
  return (
    <section className="pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <p className="label text-[#4a4a47] mb-8">A — Brief</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#111110] tracking-tight">
            Daylight is the heart of every space we build.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#4a4a47] max-w-2xl mx-auto leading-relaxed">
            India&apos;s most-specified polycarbonate systems for roofing, atriums, façades, and walkways.
            Engineered for daylight, durability, and design intent.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#111110] text-[#fafaf7] text-sm hover:bg-[#4a4a47] transition-colors"
            >
              Get a quote
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 rounded-full border border-[#111110] text-[#111110] text-sm hover:bg-[#111110] hover:text-[#fafaf7] transition-colors"
            >
              Explore products
            </Link>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 border-t border-[#d9d6cc]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-8 ${
                i < 3 ? "lg:border-r border-[#d9d6cc]" : ""
              } ${i % 2 === 0 ? "border-r lg:border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <p className="label text-[#4a4a47]">{stat.label}</p>
              <p className="mt-3 font-display text-3xl lg:text-4xl text-[#111110]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="label text-[#4a4a47]">Scroll to begin</span>
          <span className="w-12 h-px bg-[#d9d6cc]" />
        </div>
      </div>
    </section>
  );
}
