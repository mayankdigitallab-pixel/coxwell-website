import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specifications — Coxwell",
  description: "Certifications, tested values, and downloads for specification.",
};

export default function SpecsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Specifications</span>
          </div>
          <div className="head-grid">
            <h1>Specifications & certifications.</h1>
            <p className="lead">
              Everything an architect or engineer needs to specify a Coxwell system: tested values,
              certificates, CAD details, and installation guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">01 · Certifications</span>
              <h2>Tested. Re-tested. Documented.</h2>
            </div>
            <p className="meta">
              Coxwell panels are independently tested every two years against the standards that
              govern Indian commercial construction.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--border)" }} className="cert-grid">
            {[
              ["IS 14434", "Indian Standard for polycarbonate sheets — full range certified."],
              ["LEED", "Aligned across daylighting, thermal, and material credits."],
              ["UL 94", "Class B fire rating across the multiwall and solid families."],
              ["ISO 9001", "Quality management certified across all plants."],
              ["ISO 14001", "Environmental management certified across plants."],
              ["CRRC", "Cool-roof certified for opal and reflective grades."],
              ["BS 476", "Class 1 surface spread of flame on solid panels."],
              ["REACH", "EU REACH-compliant raw material chain."],
            ].map(([k, d], i) => (
              <div
                key={k}
                style={{
                  padding: "28px 24px",
                  borderRight: (i + 1) % 4 ? "1px solid var(--border)" : 0,
                  borderBottom: i < 4 ? "1px solid var(--border)" : 0,
                  minHeight: 200,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, color: "var(--accent)", lineHeight: 1 }}>
                  {k}
                </strong>
                <p style={{ margin: "auto 0 0", fontSize: 13, color: "var(--fg-2)", lineHeight: 1.45 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">02 · Performance</span>
              <h2>How Coxwell systems perform.</h2>
            </div>
            <p className="meta">Headline values across the four product families. Detailed spec sheets are linked from each row.</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid var(--border)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr 80px", padding: "18px 24px", borderBottom: "1px solid var(--border)", background: "var(--cox-gray-50)" }}>
              <span className="eyebrow">System</span>
              <span className="eyebrow">Light</span>
              <span className="eyebrow">U‑value</span>
              <span className="eyebrow">Weight</span>
              <span className="eyebrow">Fire</span>
              <span />
            </div>
            {[
              ["Prism", "Custom dual/tri", "0.99 W/m²K", "3.6 kg/m²", "ASTM G155", "/products/prism"],
              ["Vivid", "Tri-colour fusion", "Configurable", "3.4 kg/m²", "ASTM G155", "/products/vivid"],
              ["Snapwall", "Clear / Opal", "0.99 W/m²K", "4.6 kg/m²", "Fire-resistant", "/products/snapwall"],
              ["Multicell", "60–80% diffuse", "1.7 W/m²K", "2.7 kg/m²", "UL 94 V‑2", "/products/multicell"],
              ["X-Fix", "70% diffuse", "1.7 W/m²K", "2.7 kg/m²", "UL 94 V‑2", "/products/xfix"],
              ["Static Sheet", "Up to 89% clear", "5.4 W/m²K", "3.6 kg/m²", "BS 476 Cl. 1", "/products/static"],
              ["Spry", "Twin-wall diffuse", "3.0 W/m²K", "1.5 kg/m²", "UL 94 V‑2", "/products/spry"],
            ].map(([n, l, u, w, f, href], i) => (
              <Link
                key={n}
                href={href}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr 80px",
                  padding: "20px 24px",
                  borderBottom: i < 6 ? "1px solid var(--border)" : 0,
                  alignItems: "center",
                }}
              >
                <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18 }}>{n}</strong>
                <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{l}</span>
                <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{u}</span>
                <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{w}</span>
                <span style={{ fontSize: 14, color: "var(--fg-2)" }}>{f}</span>
                <span className="ico ico-arrow" style={{ width: 14, height: 14, color: "var(--fg-3)", justifySelf: "end" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">03 · Downloads</span>
              <h2>Documents for your specification.</h2>
            </div>
            <p className="meta">All current. All stamped. All free to download.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="prod-grid">
            {[
              ["Spec sheets", "PDF · 18 files", "Detailed performance, dimensions, and tolerances for every system."],
              ["CAD details", "DWG · 240 details", "Sectional details for every common installation condition."],
              ["Installation guides", "PDF · 12 guides", "Step-by-step, by panel family. With recommended fixings."],
              ["Warranty terms", "PDF · 1 file", "The 10-year Coxwell warranty in full."],
              ["EPDs", "PDF · 6 files", "Environmental product declarations for LEED submissions."],
              ["Test certificates", "PDF · biennial", "Third-party test reports across UL, IS, and BS standards."],
            ].map(([t, k, d], i) => (
              <div key={t} className="tile" style={{ padding: 0 }}>
                <div className="body">
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: 20, marginTop: 14 }}>{t}</h3>
                  <p style={{ margin: "4px 0 0" }}>{d}</p>
                  <div className="tile-foot">
                    <span className="tag">{k}</span>
                    <span className="ico ico-arrow-down" style={{ width: 14, height: 14, color: "var(--fg-3)" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .cert-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </>
  );
}

