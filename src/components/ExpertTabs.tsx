"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "architect",
    label: "Architect",
    heading: "Design Boldly. Build Intelligently.",
    desc: "We empower architects to push boundaries combining creative freedom with technical confidence.",
    points: [
      "Bring your design to life with Coxwell's flexible materials and finish options.",
      "Access BIM-ready drawings and technical documents in one place.",
      "Optimize light, insulation, and sustainability in every design.",
      "Get end-to-end expert support — from ideation to execution.",
    ],
    href: "/about",
    image: "/images/Architect.png",
  },
  {
    id: "contractor",
    label: "Contractor",
    heading: "Build Faster. Build Smarter.",
    desc: "We help contractors deliver projects faster — with systems designed for ease, efficiency, and support.",
    points: [
      "Fast-install, lightweight structures that cut downtime.",
      "Durable, easy-to-handle systems that minimize rework.",
      "Customized lengths & tailored sizes per site requirements at no extra cost.",
      "Simplified procurement with ready inventory and flexible payment terms.",
    ],
    href: "/about",
    image: "/images/contractor.png",
  },
  {
    id: "developer",
    label: "Developer",
    heading: "Build to Last. Certified to Perform.",
    desc: "We partner with institutions to deliver future-ready systems that meet the strictest benchmarks.",
    points: [
      "Certified systems: fire-retardant, UV, and weatherproof.",
      "Bulk sourcing with long-term support and warranties.",
      "Timely delivery, installation & documentation.",
      "Ideal for public and private infrastructure projects.",
      "15-year warranty on all Coxwell products.",
    ],
    href: "/about",
    image: "/images/Developer.png",
  },
];

export default function ExpertTabs() {
  const [active, setActive] = useState("architect");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(90deg, #2a0e09, #1b0705)", transform: "skewY(-3deg)" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-10 items-center" style={{ transform: "skewY(3deg)" }}>
        {/* Left */}
        <div className="flex-1 text-white">
          <p className="text-[#e25f44] text-sm font-semibold mb-3">We work with</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Powering the Future of Construction<br />with Industry Experts
          </h2>

          {/* Tab buttons */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 py-2 rounded-lg font-semibold text-sm border-none cursor-pointer transition-all ${
                  active === t.id
                    ? "bg-[#e03d22] text-white"
                    : "bg-white text-[#e03d22] hover:bg-gray-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div>
            <h3 className="text-xl font-semibold mb-2">{tab.heading}</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">{tab.desc}</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {tab.points.map((p) => (
                <li key={p} className="text-white/80 text-sm">{p}</li>
              ))}
            </ul>
            <Link
              href={tab.href}
              className="inline-block border border-white text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#e03d22] transition-colors"
            >
              See more →
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={tab.image}
            alt={tab.label}
            width={420}
            height={420}
            className="object-contain max-w-full"
            style={{ transition: "opacity 0.4s ease" }}
          />
        </div>
      </div>
    </section>
  );
}
