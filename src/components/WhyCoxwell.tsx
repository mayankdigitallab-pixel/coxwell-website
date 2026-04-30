import { Shield, Zap, Leaf, Award, Sun, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "10-Year Warranty",
    desc: "Industry-leading guarantee on all our panel systems, backed by 30 years of expertise.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Sun,
    title: "70% Light Transmission",
    desc: "Up to 70% diffuse light transmission for naturally lit, energy-efficient spaces.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Leaf,
    title: "LEED Certified",
    desc: "Our systems contribute to green building ratings and IS 14434 compliance.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Superior thermal insulation reduces HVAC loads and lowers operational costs.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Award,
    title: "Est. 1995",
    desc: "Three decades of engineering experience delivering 5,200+ successful projects.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    desc: "From product selection to installation — a single accountable partner for your project.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function WhyCoxwell() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
              Why Coxwell
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Trusted by India's Top Architects & Builders
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              For over 30 years, Coxwell has been the preferred partner for architects, contractors,
              and developers across India. Our polycarbonate systems are engineered to deliver
              superior performance, aesthetics, and value over their lifetime.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { num: "5,200+", label: "Projects" },
                { num: "2,755+", label: "Clients" },
                { num: "3", label: "Offices" },
                { num: "15+ Yr", label: "Avg. Lifespan" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center"
                >
                  <div className="text-3xl font-bold text-amber-500">{s.num}</div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${r.color}`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">{r.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
