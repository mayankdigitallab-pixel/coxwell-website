const applications = [
  {
    title: "Roofing",
    desc: "Pitched & flat roof systems for commercial, industrial, and residential structures.",
    icon: "🏠",
    gradient: "from-blue-50 to-sky-100",
    accent: "text-blue-600",
  },
  {
    title: "Skylights",
    desc: "Flush-mounted and ridge skylights that flood interiors with natural, diffused light.",
    icon: "☀️",
    gradient: "from-amber-50 to-yellow-100",
    accent: "text-amber-600",
  },
  {
    title: "Atriums",
    desc: "Large-span transparent enclosures for retail, hospitality, and mixed-use spaces.",
    icon: "🏛️",
    gradient: "from-emerald-50 to-teal-100",
    accent: "text-emerald-600",
  },
  {
    title: "Façades",
    desc: "Architectural cladding systems that combine aesthetics with thermal performance.",
    icon: "🏢",
    gradient: "from-violet-50 to-purple-100",
    accent: "text-violet-600",
  },
  {
    title: "Carports",
    desc: "Stylish, durable cover solutions for parking areas with UV protection.",
    icon: "🚗",
    gradient: "from-slate-50 to-gray-100",
    accent: "text-slate-600",
  },
  {
    title: "Canopies & Walkways",
    desc: "Weather-protected pathways and entrance canopies for institutions and campuses.",
    icon: "🚶",
    gradient: "from-orange-50 to-amber-100",
    accent: "text-orange-600",
  },
  {
    title: "Greenhouses",
    desc: "Light-optimised growing environments using high-clarity polycarbonate panels.",
    icon: "🌿",
    gradient: "from-green-50 to-lime-100",
    accent: "text-green-600",
  },
  {
    title: "Industrial Roofing",
    desc: "Heavy-duty translucent roofing for factories, warehouses, and logistics parks.",
    icon: "🏭",
    gradient: "from-red-50 to-rose-100",
    accent: "text-red-600",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
            Where We Shine
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900">
            Built for Every Application
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            From greenhouses to metro stations — Coxwell systems perform reliably across
            the widest range of building types.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {applications.map((app) => (
            <div
              key={app.title}
              className={`p-6 rounded-2xl bg-gradient-to-br ${app.gradient} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
            >
              <div className="text-3xl mb-3">{app.icon}</div>
              <h3 className={`font-bold text-lg mb-1 ${app.accent}`}>{app.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
