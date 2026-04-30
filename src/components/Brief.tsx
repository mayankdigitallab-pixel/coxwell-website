const reasons = [
  {
    n: "01",
    title: "Daylight, designed",
    body: "Up to 70% diffuse transmission with no heat ingress or glare. Engineered for naturally lit interiors.",
  },
  {
    n: "02",
    title: "Built to outlast",
    body: "15+ year on-roof lifespan, 10-year warranty. Tested biennially against thermal, hail, and UV stress.",
  },
  {
    n: "03",
    title: "Sustainably specified",
    body: "LEED-aligned EPDs across the full range. Low embodied carbon, fully recyclable, IS 14434 compliant.",
  },
  {
    n: "04",
    title: "Engineered to fit",
    body: "Custom widths, colours, and profiles. Project-specific stamping, drawings, and field support.",
  },
];

export default function Brief() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label text-[#4a4a47]">B — Why Coxwell</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] text-[#111110]">
              Four reasons architects keep returning.
            </h2>
            <p className="mt-6 text-[#4a4a47] leading-relaxed">
              Established 1995. Specified for India&apos;s largest atriums, stadiums, and airports.
              Our panels transmit daylight without the heat or glare of glass.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-[#d9d6cc] border border-[#d9d6cc]">
            {reasons.map((r) => (
              <div key={r.n} className="bg-[#fafaf7] p-8 lg:p-10">
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-2xl text-[#111110]">{r.n}</span>
                  <span className="label text-[#4a4a47]">/ 04</span>
                </div>
                <h3 className="font-display text-2xl text-[#111110] mb-3">{r.title}</h3>
                <p className="text-[#4a4a47] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
