"use client";

import { useState } from "react";

const projects = [
  {
    title: "Description",
    content: "Construction of a shopping mall featuring a dome structure and two single side slope elements.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/spectrum-mall-6-1.jpg",
    heading: "Spectrum Mall Project",
    subheading: "Elegant roofing with modern polycarbonate solutions",
    product: "16mm Multicell Clear Polycarbonate Panels — 2300 sqm",
  },
  {
    title: "Description",
    content: "Construction of a dome structure for the New High Court Campus in Ranchi.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/Ranchi-HC-Coxwell-Domes-polycarbonate-sheet-Header-file-scaled.jpg",
    heading: "Ranchi High Court Domes",
    subheading: "Architectural domes for institutional roofing",
    product: "16mm Multicell, Blue Polycarbonate Panels — 1900 sqm",
  },
  {
    title: "Description",
    content: "Single Side Slope Canopy for creating a shaded area on the campus.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/ip.jpg",
    heading: "Campus Shade Structure",
    subheading: "Functional and durable canopy roofing",
    product: "10mm Multicell, Blue Polycarbonate Panels — 1500 sqm",
  },
  {
    title: "Description",
    content: "Installation of a Polycarbonate Roof for the school's swimming pool.",
    image: "http://coxwell.in/wp-content/uploads/2025/04/22_bc7c7422-a741-4707-972a-ead3488ae653.png",
    heading: "School Pool Roofing",
    subheading: "Weatherproof, light-filled sheltering",
    product: "16mm Multicell, Blue Polycarbonate Panels",
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const p = projects[current];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head single">
          <div>
            <span className="idx">G · Recent Projects</span>
            <h2>Innovative Projects, Lasting Impact</h2>
          </div>
          <p className="meta">
            Trusted by leading architects and developers, Coxwell&apos;s solutions redefine durability and design in major projects worldwide.
          </p>
        </div>

        {/* Main viewer */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", border: "1px solid var(--border)", marginBottom: 16 }} className="cs-grid">
          <div style={{ padding: "clamp(24px,3vw,40px)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--cox-orange)", fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.5, margin: 0 }}>{p.content}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--cox-orange)", fontSize: 20, fontWeight: 500, marginBottom: 8 }}>Product Used:</h3>
              <p style={{ color: "var(--fg-2)", fontSize: 14, margin: 0 }}>{p.product}</p>
            </div>
          </div>

          <div style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.heading} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 380 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,20,20,.65) 0%, transparent 50%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, color: "#fff" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(22px,2.5vw,36px)", margin: "0 0 6px", lineHeight: 1.1, textShadow: "0 1px 4px rgba(0,0,0,.5)" }}>{p.heading}</h2>
              <p style={{ margin: 0, fontSize: 15, opacity: .85, textShadow: "0 1px 3px rgba(0,0,0,.4)" }}>{p.subheading}</p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }} className="cs-thumbs">
          {projects.map((proj, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{ height: 110, overflow: "hidden", border: `2px solid ${current === i ? "var(--cox-orange)" : "var(--border)"}`, borderRadius: "var(--radius-sm)", cursor: "pointer", padding: 0, transition: "border-color .2s", transform: current === i ? "scale(1.03)" : "scale(1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={proj.image} alt={proj.heading} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </button>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:920px){ .cs-grid{grid-template-columns:1fr !important;} .cs-thumbs{grid-template-columns:1fr 1fr !important;} }`}</style>
    </section>
  );
}
