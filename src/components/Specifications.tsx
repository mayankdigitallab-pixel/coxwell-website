const specs = [
  { property: "Light Transmission", value: "Up to 70% diffuse" },
  { property: "UV Protection", value: "100% UV blocking coating" },
  { property: "Impact Resistance", value: "250× stronger than glass" },
  { property: "Weight", value: "6× lighter than glass" },
  { property: "Temperature Range", value: "-40°C to +120°C" },
  { property: "Warranty", value: "10 years" },
  { property: "Expected Lifespan", value: "15+ years" },
  { property: "Standard Compliance", value: "IS 14434 certified" },
  { property: "LEED Credits", value: "Contributes to LEED certification" },
  { property: "Fire Rating", value: "Fire retardant grade available" },
];

export default function Specifications() {
  return (
    <section id="specifications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
              Technical Data
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900">
              Built to Perform
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Every Coxwell panel is engineered and tested against rigorous performance standards.
              Download our product datasheets, CAD drawings, and installation guides.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Product Specs", "CAD Details", "Installation Guide", "Warranty Docs"].map((doc) => (
                <a
                  key={doc}
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:border-amber-400 hover:text-amber-600 transition-colors shadow-sm"
                >
                  ↓ {doc}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-slate-900">
              <h3 className="text-white font-semibold">Performance Specifications</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {specs.map((s) => (
                <div key={s.property} className="flex items-center justify-between px-6 py-3.5">
                  <span className="text-slate-500 text-sm">{s.property}</span>
                  <span className="text-slate-800 text-sm font-semibold text-right max-w-[55%]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
