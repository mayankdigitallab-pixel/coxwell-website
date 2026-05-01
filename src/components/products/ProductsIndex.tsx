"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/content/products";

export function ProductsIndex() {
  const [filter, setFilter] = useState<string>("All");
  const [app, setApp] = useState<string>("All applications");

  const families = useMemo(() => ["All", ...new Set(PRODUCTS.map((p) => p.family))], []);
  const apps = [
    "All applications",
    "Façade",
    "Roof",
    "Skylight",
    "Vertical glazing",
    "Industrial",
    "Carport",
    "Greenhouse",
    "Canopy",
    "Public",
    "Commercial",
    "High‑perf",
  ];

  const list = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (filter === "All" || p.family === filter) &&
          (app === "All applications" || p.tags.includes(app)),
      ),
    [filter, app],
  );

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </div>
          <div className="head-grid">
            <h1>A system for every surface.</h1>
            <p className="lead">
              Seven panel systems across two families — Innovative (Prism, Vivid, Snapwall) and
              Traditional (Multicell, X-Fix, Static, Spry). All tuned for the Indian climate,
              customisable in colour, structure, and finish.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="filterbar">
          <span className="label">Family</span>
          {families.map((f) => (
            <button
              key={f}
              className={"chip " + (filter === f ? "on" : "")}
              onClick={() => setFilter(f)}
              type="button"
            >
              {f}
              <span className="count">
                {f === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.family === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="filterbar">
          <span className="label">Application</span>
          {apps.map((a) => (
            <button
              key={a}
              className={"chip " + (app === a ? "on" : "")}
              onClick={() => setApp(a)}
              type="button"
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <section className="section tight">
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
            className="prod-grid"
          >
            {list.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="tile">
                <div className={"pic " + p.cls} style={{ position: "relative" }}>
                  <div className="tile-overlay">
                    <span>{p.family}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, opacity: 0.85 }}>
                      {p.subtitle}
                    </span>
                  </div>
                </div>
                <div className="body">
                  <div className="row" style={{ alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <h3 style={{ margin: 0 }}>{p.title}</h3>
                    {p.badge && (
                      <span className="tag accent" style={{ fontSize: 10 }}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p>{p.description}</p>
                  <div className="tile-foot">
                    <div className="tags">
                      {p.perf.slice(0, 2).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="ico ico-arrow" style={{ width: 14, height: 14, color: "var(--fg-3)" }} />
                  </div>
                </div>
              </Link>
            ))}

            {list.length === 0 && (
              <p style={{ gridColumn: "1/-1", color: "var(--fg-2)", padding: "48px 0" }}>
                No products match these filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

