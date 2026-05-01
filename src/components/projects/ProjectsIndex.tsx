"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/content/projects";

export function ProjectsIndex() {
  const [cat, setCat] = useState<string>("All");
  const cats = ["All", "Sports", "Transit", "Civic", "Commercial", "Industrial", "Agriculture"];

  const list = useMemo(
    () => PROJECTS.filter((p) => cat === "All" || p.category === cat),
    [cat],
  );

  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
          </div>
          <div className="head-grid">
            <h1>Projects in daylight.</h1>
            <p className="lead">
              A growing portfolio across airports, stadiums, civic and commercial projects. Each one
              a reference for the next.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="filterbar">
          <span className="label">Sector</span>
          {cats.map((c) => (
            <button
              key={c}
              className={"chip " + (cat === c ? "on" : "")}
              onClick={() => setCat(c)}
              type="button"
            >
              {c}
              <span className="count">
                {c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <section className="section tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="prod-grid">
            {list.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="tile">
                <div className={"pic " + p.cls} style={{ aspectRatio: "4/3", position: "relative" }}>
                  <div className="tile-overlay">
                    <span>{p.category}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, opacity: 0.85 }}>{p.area}</span>
                  </div>
                </div>
                <div className="body">
                  <h3 style={{ fontSize: 20 }}>{p.title}</h3>
                  <p style={{ margin: "4px 0 0" }}>{p.location}</p>
                  <div className="tile-foot">
                    <div className="tags">
                      <span className="tag">{p.system}</span>
                    </div>
                    <span className="ico ico-arrow" style={{ width: 14, height: 14, color: "var(--fg-3)" }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

