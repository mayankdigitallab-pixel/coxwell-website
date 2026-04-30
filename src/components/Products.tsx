import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const innovative = [
  {
    name: "Prism",
    tagline: "Solar screening with heat reflection & winter warmth",
    image: "/images/1b.png",
    badge: "Innovative",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Vivid",
    tagline: "Tri-colour fusion with louver technology",
    image: "/images/2b.png",
    badge: "Innovative",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Snapwall",
    tagline: "Click-lock vertical glazing system",
    image: "/images/4b-1.png",
    badge: "Innovative",
    color: "from-emerald-500 to-teal-600",
  },
];

const traditional = [
  { name: "Multicell", desc: "Multi-wall polycarbonate panels for superior insulation" },
  { name: "X-Fix", desc: "Structural glazing with clean sightlines" },
  { name: "Static", desc: "Economical solid polycarbonate panels" },
  { name: "Spry", desc: "Flexible polycarbonate for curved applications" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
            Our Systems
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900">
            7 Panel Systems. Infinite Possibilities.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            From high-performance innovative systems to reliable traditional panels, Coxwell has
            the right solution for every project.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles size={18} className="text-amber-500" />
            <h3 className="text-xl font-bold text-slate-800">Innovative Range</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovative.map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${p.color} mb-3`}
                  >
                    {p.badge}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{p.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.tagline}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-amber-500 text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-800 mb-8">Traditional Range</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {traditional.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <span className="text-amber-600 font-bold text-sm">
                    {p.name[0]}
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{p.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
