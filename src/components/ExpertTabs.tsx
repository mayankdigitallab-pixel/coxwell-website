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
    image: "/images/Developer.png",
  },
];

export default function ExpertTabs() {
  const [active, setActive] = useState("architect");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="section dark" style={{ overflow: "hidden" }}>
      <div className="container" style={{ display: "flex", gap: "clamp(32px,5vw,80px)", flexWrap: "wrap", alignItems: "center" }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <span className="eyebrow tick" style={{ color: "rgba(255,255,255,.55)" }}>We work with</span>
          <h2 style={{ color: "#fff", marginTop: 16, marginBottom: 24 }}>
            Powering the Future of Construction with Industry Experts
          </h2>

          <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={active === t.id ? "btn btn-primary btn-sm" : "btn btn-outline-light btn-sm"}
              >
                {t.label}
              </button>
            ))}
          </div>

          <h3 style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h3)", marginBottom: 10 }}>{tab.heading}</h3>
          <p style={{ color: "rgba(255,255,255,.72)", marginBottom: 18, lineHeight: 1.5 }}>{tab.desc}</p>
          <ul style={{ paddingLeft: 20, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            {tab.points.map((p) => (
              <li key={p} style={{ color: "rgba(255,255,255,.66)", fontSize: 14, lineHeight: 1.5 }}>{p}</li>
            ))}
          </ul>
          <Link className="btn btn-outline-light" href="/about">See more →</Link>
        </div>

        {/* Right image */}
        <div style={{ flex: 1, minWidth: 260, display: "flex", justifyContent: "center" }}>
          <Image src={tab.image} alt={tab.label} width={420} height={420} style={{ objectFit: "contain", maxWidth: "100%", transition: "opacity .4s" }} />
        </div>
      </div>
    </section>
  );
}
