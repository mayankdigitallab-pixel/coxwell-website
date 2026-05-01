import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications — Coxwell",
  description: "Roofing, skylights, façades, walkways, canopies, and greenhouse applications.",
};

export default function ApplicationsPage() {
  const apps = [
    {
      t: "Roofing",
      d: "Long-span polycarbonate roofing for industrial, commercial, and civic projects. From a single carport to 30m clear-span sheds.",
      stat: "3,200+ roofs delivered",
      cls: "pic-blue stripes-h",
      ic: "roof",
      href: "/products",
    },
    {
      t: "Skylights & atriums",
      d: "Glare-free diffuse daylight for malls, airports, and offices — without the heat or weight of glass.",
      stat: "62 atria, including 4 airports",
      cls: "pic-cool stripes-h",
      ic: "daylight",
      href: "/products",
    },
    {
      t: "Façades & cladding",
      d: "Translucent and embossed façade systems for civic and retail buildings. Daylight on the outside, daylight on the inside.",
      stat: "18,000 m² of cladding 2024",
      cls: "pic-orange stripes-d",
      ic: "facade",
      href: "/products",
    },
    {
      t: "Carports & canopies",
      d: "Heat-blocking polycarbonate canopies for parking, drop-offs, and outdoor seating.",
      stat: "Specified by 9 OEM auto brands",
      cls: "pic-warm stripes-h",
      ic: "panel",
      href: "/products",
    },
    {
      t: "Walkways & underpasses",
      d: "Linked-canopy walkways for transit interchanges, campuses, and hospitals.",
      stat: "4,200 m² interchange canopy",
      cls: "pic-mixed stripes-d",
      ic: "roof",
      href: "/projects",
    },
    {
      t: "Greenhouses",
      d: "Diffuse multiwall systems for controlled-environment agriculture. Engineered for thermal break and full-spectrum diffusion.",
      stat: "27 commercial nurseries",
      cls: "pic-warm stripes-v",
      ic: "leed",
      href: "/products",
    },
  ];

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Applications</span>
          </div>
          <div className="head-grid">
            <h1>Where Coxwell is specified.</h1>
            <p className="lead">
              Six application categories, each backed by a tailored panel system, engineering
              support, and reference projects. Pick the one that matches your brief — we&apos;ll do
              the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="apps-grid">
            {apps.map((a, i) => (
              <Link
                key={a.t}
                href={a.href}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid var(--border)", minHeight: 340 }}
                className="app-row"
              >
                <div className={"pic " + a.cls} style={{ position: "relative" }}>
                  <div className="tile-overlay" style={{ padding: 24 }}>
                    <span>{String(i + 1).padStart(2, "0")} / 06</span>
                    <span />
                  </div>
                </div>
                <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, justifyContent: "space-between" }}>
                  <div>
                    <span className={"ico ico-" + a.ic} style={{ width: 32, height: 32, color: "var(--accent)" }} />
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, lineHeight: 1.1, margin: "18px 0 12px" }}>
                      {a.t}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--fg-2)", margin: 0, lineHeight: 1.45 }}>{a.d}</p>
                  </div>
                  <div style={{ paddingTop: 18, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{a.stat}</span>
                    <span className="ico ico-arrow" style={{ width: 14, height: 14, color: "var(--fg-3)" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .apps-grid { grid-template-columns: 1fr !important; } .app-row { grid-template-columns: 1fr !important; } .app-row .pic { aspect-ratio: 4/3; } }`}</style>
    </>
  );
}

