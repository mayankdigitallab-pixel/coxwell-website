import Link from "next/link";

export function Manifesto() {
  return (
    <section className="section">
      <div className="container">
        <div className="row between" style={{ alignItems: "flex-end", gap: 48, flexWrap: "wrap" }}>
          <span className="idx">A · The brief</span>
          <span className="eyebrow" style={{ maxWidth: "30ch", textAlign: "right" }}>
            Coxwell, established 1995. Polycarbonate roofing, façade and skylight systems.
          </span>
        </div>
        <p className="bigq" style={{ marginTop: 48, maxWidth: "24ch", fontSize: "clamp(2rem, 4.4vw, 3.6rem)" }}>
          We make the panels that let daylight through — without the heat, glare, or ageing of glass.
          Specified for India&apos;s largest atriums, stadiums and airports.
        </p>
      </div>
    </section>
  );
}

export function ValueRow() {
  const items = [
    { ix: "01", t: "Daylight, designed", d: "Up to 70% diffuse transmission. Glare-free, even illumination — no harsh shadows, no hotspots.", ic: "daylight" },
    { ix: "02", t: "Built to outlast", d: "15+ year on-roof lifespan. Tested every two years for UV retention, impact, and thermal performance.", ic: "warranty" },
    { ix: "03", t: "Sustainably specified", d: "LEED-credit aligned across daylighting, thermal, and materials. Recyclable at end of life.", ic: "leed" },
    { ix: "04", t: "Engineered to fit", d: "Custom widths, profiles and colours. From a single carport to 18,000 m² stadium canopies.", ic: "panel" },
  ];

  return (
    <section className="section tight">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="idx">B · What we make better</span>
            <h2>Four reasons architects keep specifying Coxwell.</h2>
          </div>
          <p className="meta">
            A clean polycarbonate system is not a commodity. It is a tuned daylight instrument — and we tune ours for India&apos;s climate, code, and construction reality.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
          className="vp-row"
        >
          {items.map((v) => (
            <div
              key={v.ix}
              style={{
                padding: "40px 28px",
                borderRight: v.ix !== "04" ? "1px solid var(--border)" : 0,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                minHeight: 280,
              }}
            >
              <div className="row between" style={{ alignItems: "flex-start" }}>
                <span className="idx">{v.ix}</span>
                <span className={"ico ico-" + v.ic} style={{ width: 36, height: 36, color: "var(--accent)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, margin: 0, lineHeight: 1.1 }}>{v.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.45, color: "var(--fg-2)", margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:920px){ .vp-row { grid-template-columns: 1fr 1fr !important; } .vp-row > div:nth-child(2n) { border-right:0 !important; } .vp-row > div:nth-child(-n+2) { border-bottom:1px solid var(--border); } }`}</style>
    </section>
  );
}

export function ProductsTease() {
  const products = [
    { slug: "prism", t: "Prism", sub: "6-layer prismatic · NEW", d: "Solar Screening for Climate Control™. Reflects summer heat, admits passive winter warmth — in dual or tri-colour fusion.", tags: ["Façade", "High‑perf"], cls: "pic-orange stripes-d" },
    { slug: "vivid", t: "Vivid", sub: "Tri-colour fusion · NEW", d: "Daylight-Directional Louver Technology™. Three colours fused in one panel for dramatic, glare-free façades and roofs.", tags: ["Façade", "Roof"], cls: "pic-mixed stripes-d" },
    { slug: "snapwall", t: "Snapwall", sub: "10-wall click-lock · NEW", d: "The first polycarbonate system with a 10-wall X-structure. Click-Lock vertical glazing for modern façades.", tags: ["Façade", "Vertical"], cls: "pic-blue stripes-v" },
    { slug: "multicell", t: "Multicell", sub: "Double-tooth interlock", d: "Premium multiwall with leak-proof double-tooth interlocking. Long-span and engineered for diverse specs at accessible cost.", tags: ["Roof", "Skylight"], cls: "pic-cool stripes-h" },
  ];

  return (
    <section className="section subtle">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="idx">C · Products</span>
            <h2>Seven systems, two families.</h2>
          </div>
          <p className="meta">
            Innovative panels (Prism, Vivid, Snapwall) introduce climate-control, louver and click-lock technologies. Traditional panels (Multicell, X-Fix, Static, Spry) remain the workhorse range.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="prod-grid">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="tile">
              <div className={"pic " + p.cls} style={{ position: "relative" }}>
                <div className="tile-overlay">
                  <span>{String(i + 1).padStart(2, "0")} / 04</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, opacity: 0.85 }}>{p.sub}</span>
                </div>
              </div>
              <div className="body">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="tile-foot">
                  <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <span className="ico ico-arrow" style={{ width: 14, height: 14, color: "var(--fg-3)" }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <Link className="btn btn-outline" href="/products">
            See all products and specs
          </Link>
        </div>
      </div>
      <style>{`@media (max-width:1100px){ .prod-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width:560px){ .prod-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function ApplicationsStrip() {
  const apps = [
    { ix: "01", t: "Roofing", ic: "roof" },
    { ix: "02", t: "Skylights & atriums", ic: "daylight" },
    { ix: "03", t: "Façades & cladding", ic: "facade" },
    { ix: "04", t: "Carports & canopies", ic: "panel" },
    { ix: "05", t: "Walkways & underpasses", ic: "roof" },
    { ix: "06", t: "Greenhouses", ic: "leed" },
  ];
  return (
    <section className="section tight">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="idx">D · Applications</span>
            <h2>Where Coxwell is specified.</h2>
          </div>
          <p className="meta">From a single residential carport to international airport canopies — the same engineering, scaled to fit.</p>
        </div>
        <div className="appstrip">
          {apps.map((a) => (
            <Link className="app" key={a.ix} href="/applications">
              <span className="ix">{a.ix}</span>
              <span className={"ico ico-" + a.ic} />
              <strong>{a.t}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="section dark">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="idx" style={{ color: "rgba(255,255,255,.45)" }}>
              E · By the numbers
            </span>
            <h2 style={{ color: "#fff" }}>Three decades of daylight, measured.</h2>
          </div>
          <p className="meta" style={{ color: "rgba(255,255,255,.66)" }}>
            The proof that earns specification: independently tested, biennially re-verified, and visible in projects across 27 Indian states.
          </p>
        </div>
        <div className="statgrid">
          <div className="stat accent">
            <div className="n">
              30<span className="unit">+ yrs</span>
            </div>
            <p className="l">Of innovation in polycarbonate building solutions.</p>
          </div>
          <div className="stat">
            <div className="n">
              5,200<span className="unit">+</span>
            </div>
            <p className="l">Projects delivered across roofing, façade, skylight and outdoor applications.</p>
          </div>
          <div className="stat">
            <div className="n">
              2,755<span className="unit">+</span>
            </div>
            <p className="l">Clients served — from architectural practices to industrial OEMs.</p>
          </div>
          <div className="stat">
            <div className="n">
              10<span className="unit">+</span>
            </div>
            <p className="l">Industry award wins for product and project excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProject() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="idx">F · Selected work</span>
            <h2>Featured project.</h2>
          </div>
          <p className="meta">A growing portfolio across airports, stadiums, civic and commercial projects. Each one a reference for the next.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--border)" }} className="case-grid">
          <div className="pic pic-blue stripes-h" style={{ minHeight: 480, position: "relative" }}>
            <div className="tile-overlay" style={{ padding: 24 }}>
              <span>FIG. 04 · 18,000 m² roof</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13 }}>2023 — completed</span>
            </div>
          </div>
          <div style={{ padding: "48px clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <span className="eyebrow">Case study · Sports infrastructure</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: 0, maxWidth: "18ch" }}>
              Stadium canopy — daylight at the scale of sport.
            </h3>
            <p style={{ color: "var(--fg-2)", maxWidth: "48ch", lineHeight: 1.5, margin: 0, fontSize: 16 }}>
              An 18,000 m² X-Fix polycarbonate roof spanning the seating bowl of a major Delhi stadium. Diffuse 50% transmission keeps the field shaded and the stands daylit — eliminating supplementary lighting in daytime events.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, paddingTop: 24, marginTop: 8, borderTop: "1px solid var(--border)" }}>
              <div>
                <span className="eyebrow">Area</span>
                <b style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, marginTop: 6 }}>18,000 m²</b>
              </div>
              <div>
                <span className="eyebrow">System</span>
                <b style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, marginTop: 6 }}>X-Fix</b>
              </div>
              <div>
                <span className="eyebrow">Year</span>
                <b style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, marginTop: 6 }}>2023</b>
              </div>
            </div>
            <Link className="btn btn-ghost" style={{ marginTop: 8, alignSelf: "flex-start" }} href="/projects/jln">
              Read the case study →
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width:920px){ .case-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

