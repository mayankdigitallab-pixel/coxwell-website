"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/content/products";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>
              {product.family} / {product.title}
            </span>
          </div>
          <div className="head-grid">
            <div>
              <span className="eyebrow tick">
                {product.family} · {product.subtitle}
              </span>
              <h1 style={{ marginTop: 18 }}>{product.title}.</h1>
            </div>
            <p className="lead">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48 }} className="pdp-hero">
            <div className={"pic " + product.cls} style={{ aspectRatio: "4/3", position: "relative" }}>
              <div className="tile-overlay" style={{ padding: 24 }}>
                <span>FIG. 02 · Cross-section</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 13, opacity: 0.9 }}>
                  {product.subtitle}
                </span>
              </div>
            </div>
            <div className="stack" style={{ gap: 20 }}>
              <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
                {product.badge && <span className="tag accent">{product.badge}</span>}
                {product.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Daylight where you want it. Insulation where you need it.
              </h2>

              <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.5, margin: 0 }}>
                Specify by performance, not by guesswork. Select thickness, colour fusion, and use — then we&apos;ll
                respond with a scoped quote within 24 hours.
              </p>

              <dl className="spec" style={{ marginTop: 16 }}>
                <dt>Performance</dt>
                <dd>{product.perf[0] ?? "—"}</dd>
                <dt>Range</dt>
                <dd>{product.perf[1] ?? "—"}</dd>
                <dt>Application</dt>
                <dd>{product.tags[0] ?? "—"}</dd>
                <dt>Warranty</dt>
                <dd>10-year</dd>
              </dl>

              <div className="row" style={{ gap: 12, marginTop: 8 }}>
                <Link className="btn btn-dark" href="/contact">
                  Request a sample
                </Link>
                <button className="btn btn-outline" type="button" onClick={() => alert("Spec sheet download will be added.")}>
                  Download spec sheet ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section subtle tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">02 · Configurator</span>
              <h2>Configure your {product.title} panel.</h2>
            </div>
            <p className="meta">Pick a thickness, colour fusion, and target use — we&apos;ll prepare a scoped quote within 24 hours.</p>
          </div>
          <Configurator product={product} />
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">03 · Where it's used</span>
              <h2>Specified across these applications.</h2>
            </div>
            <p className="meta">
              {product.title} is specified when the brief demands engineered daylight, long-span durability, and a 10-year product life.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="prod-grid">
            {[
              { t: "Airport canopies", d: "Up to 30m clear span", cls: "pic-blue stripes-h" },
              { t: "Atrium roofs", d: "Tempered diffuse light", cls: "pic-cool stripes-h" },
              { t: "Stadium walkways", d: "High-traffic, hail-rated", cls: "pic-orange stripes-d" },
              { t: "Civic skylights", d: "Custom colour matched", cls: "pic-mixed stripes-v" },
            ].map((u) => (
              <Link key={u.t} href="/applications" className="tile">
                <div className={"pic " + u.cls} />
                <div className="body">
                  <h3 style={{ fontSize: 18 }}>{u.t}</h3>
                  <p>{u.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .pdp-hero { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}

function Configurator({ product }: { product: Product }) {
  const [c, set] = useState({
    thickness: "16mm",
    colour: "Vivid blue",
    surface: "Prismatic",
    use: product.tags[0] ?? "Façade",
    area: 120,
  });

  const colours = [
    { n: "Vivid blue", c: "linear-gradient(135deg, #4781a8, #2E5375)" },
    { n: "Heritage red", c: "linear-gradient(135deg, #c95046, #76302b)" },
    { n: "Soft metallic", c: "linear-gradient(135deg, #d6b667, #91603b)" },
    { n: "Anti-glare opal", c: "linear-gradient(135deg, #fff, #d0d0cb)" },
    { n: "Tri-fusion sunset", c: "linear-gradient(135deg, #c47942, #ae4267, #784164)" },
    { n: "Tri-fusion forest", c: "linear-gradient(135deg, #84b15a, #47683c, #595646)" },
  ];

  const update = <K extends keyof typeof c>(k: K, v: (typeof c)[K]) => set({ ...c, [k]: v });

  const est = useMemo(() => {
    const base = Math.round((c.area * 1850 * (c.thickness === "25mm" ? 1.5 : c.thickness === "20mm" ? 1.2 : 1)) / 1000) * 1000;
    return base;
  }, [c.area, c.thickness]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, border: "1px solid var(--border)", background: "#fff" }} className="conf-grid">
      <div style={{ padding: "40px clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", gap: 32 }}>
        <div>
          <span className="eyebrow">01 · Thickness</span>
          <div className="row" style={{ gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            {["16mm", "20mm", "25mm"].map((t) => (
              <button key={t} className={"chip " + (c.thickness === t ? "on" : "")} onClick={() => update("thickness", t)} type="button">
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">02 · Colour fusion</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, marginTop: 10 }}>
            {colours.map((co) => (
              <button key={co.n} onClick={() => update("colour", co.n)} style={{ background: "none", border: 0, padding: 0, cursor: "pointer", textAlign: "left" }} type="button">
                <div style={{ aspectRatio: "1/1", background: co.c, border: c.colour === co.n ? "2px solid var(--accent)" : "1px solid var(--border)", borderRadius: 2 }} />
                <span style={{ fontSize: 11, color: "var(--fg-2)", display: "block", marginTop: 6, lineHeight: 1.2 }}>{co.n}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">03 · Surface</span>
          <div className="row" style={{ gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            {["Prismatic", "Anti-glare", "Anti-static", "Infrared block"].map((s) => (
              <button key={s} className={"chip " + (c.surface === s ? "on" : "")} onClick={() => update("surface", s)} type="button">
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">04 · Application</span>
          <div className="row" style={{ gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            {["Façade", "Roof", "Skylight", "Vertical glazing", "Carport"].map((s) => (
              <button key={s} className={"chip " + (c.use === s ? "on" : "")} onClick={() => update("use", s)} type="button">
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">05 · Area (m²): {c.area}</span>
          <input type="range" min="20" max="2000" step="10" value={c.area} onChange={(e) => update("area", Number(e.target.value))} style={{ width: "100%", marginTop: 10, accentColor: "var(--accent)" }} />
          <div className="row between" style={{ fontSize: 11, color: "var(--fg-3)" }}>
            <span>20 m²</span>
            <span>2,000 m²</span>
          </div>
        </div>
      </div>

      <div style={{ background: "var(--cox-black)", color: "#fff", padding: "40px clamp(28px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: 24 }}>
        <span className="eyebrow" style={{ color: "rgba(255,255,255,.55)" }}>
          Your spec
        </span>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.01em", margin: 0, color: "#fff" }}>
          {product.title} · {c.colour} · {c.surface}
        </h3>
        <dl style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 24px", margin: 0, fontSize: 13 }}>
          <dt style={{ color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 11, margin: 0 }}>Thickness</dt>
          <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-display)" }}>{c.thickness}</dd>
          <dt style={{ color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 11, margin: 0 }}>Application</dt>
          <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-display)" }}>{c.use}</dd>
          <dt style={{ color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 11, margin: 0 }}>Area</dt>
          <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-display)" }}>{c.area} m²</dd>
          <dt style={{ color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: ".06em", fontSize: 11, margin: 0 }}>Lead time</dt>
          <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-display)" }}>3–4 weeks</dd>
        </dl>

        <div style={{ paddingTop: 24, marginTop: "auto", borderTop: "1px solid rgba(255,255,255,.18)" }}>
          <span style={{ color: "rgba(255,255,255,.55)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em" }}>
            Indicative price
          </span>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 500, lineHeight: 1, marginTop: 6 }}>
            ₹{est.toLocaleString("en-IN")}
          </div>
          <span style={{ color: "rgba(255,255,255,.55)", fontSize: 12 }}>
            excl. taxes & installation · scoped quote within 24h
          </span>
        </div>
        <button className="btn btn-primary btn-lg" type="button" onClick={() => alert("This will send to engineering once Zoho integration is wired.")}>
          Send to engineering →
        </button>
      </div>

      <style>{`@media (max-width:920px){ .conf-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

