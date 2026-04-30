import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import CTA from "@/components/CTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Selected work",
  description: "A selection of recent Coxwell projects: stadiums, airports, metros, civic infrastructure, and industrial roofs.",
};

const projects = [
  { name: "Stadium roof canopy", sector: "Sports", area: "18,000 m²", system: "X-Fix 25 mm", location: "Delhi", year: "2023", image: "/images/freepik__the-style-is-candid-image-photography-with-natural__87414.png" },
  { name: "Steel works canopy", sector: "Industrial", area: "22,000 m²", system: "X-Fix", location: "Jamshedpur", year: "2022", image: "/images/freepik__the-style-is-candid-image-photography-with-natural__33824.png" },
  { name: "Metro interchange", sector: "Transit", area: "4,200 m²", system: "Multicell", location: "Bengaluru", year: "2024", image: "/images/DAY-2.png" },
  { name: "Airport walkway canopy", sector: "Transit", area: "12,400 m²", system: "X-Fix", location: "Western India", year: "2023", image: "/images/20mm-Blue-X-Structure_DSC0040.jpg" },
  { name: "Civic atrium", sector: "Civic", area: "3,800 m²", system: "Multicell 25 mm", location: "Lucknow", year: "2024", image: "/images/Install-1-1.png" },
  { name: "Mall skylight", sector: "Commercial", area: "6,200 m²", system: "Snapwall", location: "Mumbai", year: "2024", image: "/images/1b.png" },
  { name: "Greenhouse complex", sector: "Agriculture", area: "5,500 m²", system: "Spry twin-wall", location: "Pune", year: "2023", image: "/images/2b.png" },
  { name: "EV charger canopy", sector: "Commercial", area: "1,400 m²", system: "Multicell", location: "Gurgaon", year: "2024", image: "/images/4b-1.png" },
];

const sectors = ["All", "Sports", "Transit", "Civic", "Commercial", "Industrial", "Agriculture"];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-12 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="label text-[#4a4a47]">Selected Work</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-4xl">
              5,200+ projects, twenty-seven states.
            </h1>
            <p className="mt-6 text-lg text-[#4a4a47] max-w-2xl">
              A selection of recent installations across stadiums, airports, civic infrastructure, and industrial roofs.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc]">
          <div className="max-w-[1280px] mx-auto py-6 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <button
                key={s}
                className="label px-4 py-2 rounded-full border border-[#d9d6cc] text-[#111110] hover:bg-[#111110] hover:text-[#fafaf7] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc] pb-24 lg:pb-32">
          <div className="max-w-[1280px] mx-auto pt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((p) => (
                <article key={p.name} className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-[#f1ede4]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="label text-[#4a4a47]">{p.sector}</p>
                    <p className="label text-[#4a4a47]">{p.area}</p>
                  </div>
                  <h2 className="mt-2 font-display text-2xl text-[#111110]">{p.name}</h2>
                  <p className="mt-1 text-sm text-[#4a4a47]">
                    {p.location} · {p.year} · {p.system}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
