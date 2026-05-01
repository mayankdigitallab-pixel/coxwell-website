"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Description",
    content: "Construction of a shopping mall featuring a dome structure and two single side slope elements.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/spectrum-mall-6-1.jpg",
    heading: "Spectrum Mall Project",
    subheading: "Elegant roofing with modern polycarbonate solutions",
    product: "16mm Multicell Clear Polycarbonate Panels 2300sqm",
    thumb: "http://coxwell.in/wp-content/uploads/2025/04/spectrum-mall-6-1.jpg",
  },
  {
    title: "Description",
    content: "Construction of a dome structure for the New High Court Campus in Ranchi.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/Ranchi-HC-Coxwell-Domes-polycarbonate-sheet-Header-file-scaled.jpg",
    heading: "Ranchi High Court Domes",
    subheading: "Architectural domes for institutional roofing",
    product: "16mm Multicell, Blue Polycarbonate Panels — 1900 Sqm",
    thumb: "http://coxwell.in/wp-content/uploads/2025/04/Ranchi-HC-Coxwell-Domes-polycarbonate-sheet-Header-file-scaled.jpg",
  },
  {
    title: "Description",
    content: "Single Side Slope Canopy for creating a shaded area on the campus.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/ip.jpg",
    heading: "Campus Shade Structure",
    subheading: "Functional and durable canopy roofing",
    product: "10mm Multicell, Blue Polycarbonate Panels — 1500 Sq mt",
    thumb: "http://coxwell.in/wp-content/uploads/2025/04/ip.jpg",
  },
  {
    title: "Description",
    content: "Installation of a Polycarbonate Roof for the school's swimming pool.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/22_bc7c7422-a741-4707-972a-ead3488ae653.png",
    heading: "School Pool Roofing",
    subheading: "Weatherproof, light-filled sheltering",
    product: "16mm Multicell, Blue Polycarbonate Panels",
    thumb: "http://coxwell.in/wp-content/uploads/2025/04/22_bc7c7422-a741-4707-972a-ead3488ae653.png",
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const p = projects[current];

  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
        <p className="text-[#e03d22] font-bold text-lg mb-2">Recent Projects</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4 leading-tight">
          Innovative Projects, Lasting Impact
        </h2>
        <p className="text-gray-600 text-lg max-w-[850px]">
          Trusted by leading architects and developers, Coxwell&apos;s solutions redefine durability and design in major projects worldwide.
        </p>
      </div>

      {/* Main viewer */}
      <div className="max-w-[80%] mx-auto border border-gray-200 flex flex-col lg:flex-row" style={{ height: "auto", minHeight: "420px" }}>
        {/* Left text */}
        <div className="lg:w-[30%] p-6 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center gap-6">
          <div>
            <h3 className="text-red-500 text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-black text-sm leading-relaxed">{p.content}</p>
          </div>
          <div>
            <h3 className="text-red-500 text-xl font-semibold mb-2">Product Used:</h3>
            <p className="text-black text-sm">{p.product}</p>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-[70%] relative min-h-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.heading} className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
          <div className="absolute bottom-5 left-5 text-white z-10">
            <h2 className="text-3xl font-bold drop-shadow-lg">{p.heading}</h2>
            <p className="text-lg font-normal drop-shadow">{p.subheading}</p>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="max-w-[80%] mx-auto mt-4 grid grid-cols-4 gap-3">
        {projects.map((proj, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[120px] overflow-hidden border-2 transition-all ${
              current === i ? "border-[#e03d22] scale-105" : "border-gray-200 hover:border-gray-400"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={proj.thumb} alt={proj.heading} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
