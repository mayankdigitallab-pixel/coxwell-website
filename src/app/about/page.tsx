import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Coxwell",
  description: "30 years of engineered daylight in Indian architecture.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <div className="head-grid">
            <h1>30 years of daylight.</h1>
            <p className="lead">
              Coxwell was founded in 1995 to revolutionise how Indian buildings handle daylight.
              Three decades on, our panels sit on airports, stadiums, atriums, and walkways across
              27 states — and we&apos;re still privately held, still engineer-led.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="about-grid">
            <div className="pic pic-cool stripes-h" style={{ aspectRatio: "4/5", position: "relative" }}>
              <div className="tile-overlay" style={{ padding: 24 }}>
                <span>FIG. 01 · Coxwell HQ · Gurgaon</span>
                <span />
              </div>
            </div>
            <div className="stack" style={{ gap: 24, justifyContent: "center" }}>
              <span className="idx">Our story</span>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.25, fontWeight: 400, margin: 0, letterSpacing: "-0.005em" }}>
                We founded Coxwell on the belief that daylight is the most underused material in
                Indian architecture — and that the panel that delivers it should be as well-engineered
                as the steel that holds it up.
              </p>
              <p style={{ color: "var(--fg-2)", margin: 0, fontSize: 16, lineHeight: 1.5 }}>
                From a small extrusion workshop to multiple plants and 5,200+ projects, we&apos;ve stayed
                engineer-led, biennially tested, and outcome-focused. Every panel that leaves us is
                sized, certified, and stamped against a real installation — not a generic SKU.
              </p>
              <Link className="btn btn-outline" style={{ alignSelf: "flex-start" }} href="/contact">
                Visit a Coxwell plant →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section subtle tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">Timeline</span>
              <h2>Three decades, in milestones.</h2>
            </div>
            <p className="meta">
              A short history of Coxwell — from the first extrusion workshop to today&apos;s plants and
              the launch of the Innovative range.
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {[
              ["1995", "Founded", "Six engineers, one extruder, and a small workshop. The first Coxwell panel ships to a residential carport."],
              ["2003", "First airport canopy", "Coxwell is specified for a major domestic terminal canopy — 6,400 m² of multiwall."],
              ["2011", "Plant 2", "A second plant brings capacity to 12,000 m² per day and unlocks the X-Fix and Spry product families."],
              ["2018", "LEED programme", "Coxwell becomes the first Indian polycarbonate manufacturer with LEED-aligned EPDs across the full product range."],
              ["2025", "Innovative range", "30 years and 5,200+ projects in: Coxwell launches Prism, Vivid, and Snapwall — a new generation of climate-control panels."],
            ].map(([y, t, d]) => (
              <div key={y} style={{ display: "grid", gridTemplateColumns: "140px 1fr 2fr", gap: 48, padding: "28px 0", borderBottom: "1px solid var(--border)", alignItems: "baseline" }} className="tl-row">
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, color: "var(--accent)" }}>{y}</span>
                <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, lineHeight: 1.15 }}>{t}</strong>
                <p style={{ margin: 0, color: "var(--fg-2)", lineHeight: 1.5, fontSize: 15 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx" style={{ color: "rgba(255,255,255,.45)" }}>
                Today
              </span>
              <h2 style={{ color: "#fff" }}>What we look like, in numbers.</h2>
            </div>
          </div>
          <div className="statgrid">
            <div className="stat accent">
              <div className="n">3</div>
              <p className="l">Manufacturing plants across North India.</p>
            </div>
            <div className="stat">
              <div className="n">
                280<span className="unit">+</span>
              </div>
              <p className="l">Coxwell engineers, technicians, and field staff.</p>
            </div>
            <div className="stat">
              <div className="n">
                2,755<span className="unit">+</span>
              </div>
              <p className="l">Clients served — architects, OEMs, and contractors.</p>
            </div>
            <div className="stat">
              <div className="n">
                100<span className="unit">%</span>
              </div>
              <p className="l">Privately held. Still founder-led.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .about-grid { grid-template-columns: 1fr !important; } .tl-row { grid-template-columns: 1fr !important; gap: 8px !important; } }`}</style>
    </>
  );
}

