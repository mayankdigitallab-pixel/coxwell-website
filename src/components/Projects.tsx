import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Commercial Atrium",
    location: "Gurgaon, Haryana",
    category: "Atrium",
    image: "/images/freepik__the-style-is-candid-image-photography-with-natural__87414.png",
  },
  {
    title: "Industrial Roofing",
    location: "Delhi NCR",
    category: "Roofing",
    image: "/images/20mm-Blue-X-Structure_DSC0040.jpg",
  },
  {
    title: "Walkway Canopy",
    location: "Bengaluru",
    category: "Canopy",
    image: "/images/freepik__the-style-is-candid-image-photography-with-natural__33824.png",
  },
  {
    title: "Facade Installation",
    location: "Mumbai",
    category: "Façade",
    image: "/images/DAY-2.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto px-6 py-3 rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            View All 5,200+ Projects →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "sm:col-span-2 sm:row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
                  <MapPin size={12} />
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
