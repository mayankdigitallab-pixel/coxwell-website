import Link from "next/link";

const apps = [
  {
    n: "01",
    title: "Roofing",
    body: "Long-span polycarbonate roofing for industrial, commercial, and civic projects — from single carports to 30-metre clear-span structures.",
    stat: "3,200+",
    statLabel: "roofs delivered",
  },
  {
    n: "02",
    title: "Skylights & atriums",
    body: "Glare-free diffuse daylight for malls, airports, and offices — without the heat or weight of glass.",
    stat: "62 atria",
    statLabel: "incl. 4 airports",
  },
  {
    n: "03",
    title: "Façades & cladding",
    body: "Translucent and embossed façade systems for civic and retail buildings. Daylight in, signage out.",
    stat: "18,000 m²",
    statLabel: "of cladding in 2024",
  },
  {
    n: "04",
    title: "Carports & canopies",
    body: "Heat-blocking polycarbonate canopies for parking, EV chargers, and outdoor seating.",
    stat: "9 OEM",
    statLabel: "auto brands specified",
  },
  {
    n: "05",
    title: "Walkways & underpasses",
    body: "Connected-canopy systems for transit hubs, campuses, and hospitals.",
    stat: "4,200 m²",
    statLabel: "interchange canopy",
  },
  {
    n: "06",
    title: "Greenhouses",
    body: "Diffuse multiwall systems for controlled-environment agriculture, with engineered thermal break.",
    stat: "27",
    statLabel: "commercial nurseries",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <p className="label text-[#4a4a47]">D — Applications</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05] text-[#111110]">
              Wherever daylight matters.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[#4a4a47] text-lg leading-relaxed">
              From metro interchanges to research greenhouses, Coxwell systems perform across the
              widest range of building types in India. Six categories. Twenty-seven states. Three decades.
            </p>
          </div>
        </div>

        <div className="border-t border-[#d9d6cc]">
          {apps.map((a) => (
            <Link
              key={a.n}
              href={`/applications#${a.title.toLowerCase().replace(/\s|&/g, "-")}`}
              className="group block border-b border-[#d9d6cc] py-8 lg:py-10 hover:bg-[#f1ede4] transition-colors -mx-6 px-6 lg:-mx-10 lg:px-10"
            >
              <div className="grid lg:grid-cols-12 items-center gap-6">
                <div className="lg:col-span-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl text-[#111110]">{a.n}</span>
                  <span className="label text-[#4a4a47]">/ 06</span>
                </div>
                <h3 className="lg:col-span-3 font-display text-2xl lg:text-3xl text-[#111110]">
                  {a.title}
                </h3>
                <p className="lg:col-span-5 text-[#4a4a47] leading-relaxed">{a.body}</p>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="font-display text-2xl text-[#111110]">{a.stat}</p>
                  <p className="label text-[#4a4a47] mt-1">{a.statLabel}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
