import Link from "next/link";

const systems = [
  {
    n: "1",
    name: "Standard Roofing System",
    tagline: "Easy to install. Built to last.",
    desc: "A versatile solution for general-purpose structures — reliable, flexible, and installation-ready for most site conditions.",
    dark: true,
  },
  {
    n: "2",
    name: "Heavy Duty Roofing System",
    tagline: "Built for big loads and bigger expectations.",
    desc: "Reinforced with aluminium connectors for enhanced structural stability — ideal for large-scale industrial and utility projects.",
    dark: false,
  },
  {
    n: "3",
    name: "Polycarbonate Façade System",
    tagline: "Elegant daylighting + performance.",
    desc: "Ideal for institutional & commercial façades, combining light diffusion and insulation.",
    dark: true,
  },
  {
    n: "4",
    name: "Snapwall System",
    tagline: "Designed for fast-fit façades.",
    desc: "Tool-free assembly with robust wind resistance, perfect for retail & public spaces.",
    dark: false,
  },
  {
    n: "5",
    name: "X-Fix Structural System",
    tagline: "Precision engineered for quick builds.",
    desc: "Perfect for canopies, stadiums, and high-performance installations.",
    dark: true,
  },
  {
    n: "6",
    name: "Vivid Architectural Sheets",
    tagline: "Color + clarity for iconic designs.",
    desc: "Vivid combines light diffusion with bold architectural expression.",
    dark: false,
  },
  {
    n: "7",
    name: "Multicell Roofing Kit",
    tagline: "Modular roofing, simplified.",
    desc: "Pre-packed kits for villas, pergolas, and outdoor spaces — easy installation, long life.",
    dark: true,
  },
];

export default function Systems() {
  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-[#e03d22] font-semibold mb-2">What we offer</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
          Built for Every Structure.<br />
          Engineered to Perform Without Compromise.
        </h2>
      </div>

      {/* Split layout */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 flex gap-10">
        {/* Left fixed */}
        <div className="hidden lg:block flex-1 sticky top-28 self-start h-fit">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-black mb-4">
              Purpose-Built Systems for <span className="text-[#e03d22]">Real-World</span> Projects
            </h3>
            <ul className="space-y-2 text-[#4a4a47] list-disc pl-5">
              <li>Engineered for Demands.</li>
              <li>Built for Every Build.</li>
              <li>Coxwell systems adapt to real-world needs — from fast timelines to complex structures.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              More Than Protection. It&apos;s <span className="text-[#e03d22]">Transformation.</span>
            </h3>
            <ul className="space-y-2 text-[#4a4a47] list-disc pl-5">
              <li>Design That Performs.</li>
              <li>Impact That Lasts.</li>
            </ul>
          </div>
        </div>

        {/* Right scrollable cards */}
        <div className="flex-1 flex flex-col gap-6 lg:max-h-[600px] lg:overflow-y-auto lg:pr-3 scrollbar-thin scrollbar-thumb-gray-200">
          {systems.map((s) => (
            <div
              key={s.n}
              className={`p-7 rounded-xl transition-transform hover:-translate-y-1 ${
                s.dark ? "bg-[#0f1112] text-white" : "bg-white border border-gray-100 text-black"
              }`}
            >
              <h4 className="text-lg font-bold mb-2">{s.n}. {s.name}</h4>
              <p className={`text-sm mb-2 ${s.dark ? "text-white/80" : "text-gray-600"}`}>{s.tagline}</p>
              <p className={`text-sm leading-relaxed mb-4 ${s.dark ? "text-white/70" : "text-gray-500"}`}>{s.desc}</p>
              <Link
                href="/products"
                className={`text-sm font-semibold ${s.dark ? "text-white" : "text-black"} hover:text-[#e03d22] transition-colors`}
              >
                View System Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
