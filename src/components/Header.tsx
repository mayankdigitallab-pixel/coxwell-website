"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type NavId =
  | "home"
  | "products"
  | "applications"
  | "projects"
  | "about"
  | "specs";

const NAV: Array<{ id: NavId; label: string; href: string; mega?: "products" | "applications" }> =
  [
    { id: "home", label: "Home", href: "/" },
    { id: "products", label: "Products", href: "/products", mega: "products" },
    { id: "applications", label: "Applications", href: "/applications", mega: "applications" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "about", label: "About", href: "/about" },
    { id: "specs", label: "Specifications", href: "/specs" },
  ];

function activeFromPathname(pathname: string): NavId {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/applications")) return "applications";
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/about")) return "about";
  return "specs";
}

export function Header() {
  const pathname = usePathname();
  const active = useMemo(() => activeFromPathname(pathname), [pathname]);

  const [mm, setMM] = useState<null | "products" | "applications">(null);
  const closeTimer = useRef<number | null>(null);

  const open = (id: "products" | "applications") => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMM(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMM(null), 120);
  };

  useEffect(() => {
    setMM(null);
  }, [pathname]);

  return (
    <header className="hdr" onMouseLeave={scheduleClose}>
      <div className="container hdr-inner">
        <Link className="brand" href="/" aria-label="Coxwell home">
          <img src="/assets/logo-brandmark.svg" alt="" />
          <span>Coxwell</span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              className={"nav-item " + (active === n.id ? "active" : "")}
              aria-expanded={n.mega ? mm === n.mega : undefined}
              onMouseEnter={() => (n.mega ? open(n.mega) : setMM(null))}
              onClick={() => setMM(null)}
            >
              {n.label}
              {n.mega && <span className="caret" />}
            </Link>
          ))}
        </nav>

        <div className="hdr-cta">
          <Link className="btn btn-sm btn-outline" href="/contact">
            Contact
          </Link>
          <Link className="btn btn-sm btn-dark" href="/contact">
            Get a quote <span className="ico ico-arrow" style={{ width: 12, height: 12 }} />
          </Link>
        </div>
      </div>

      {mm === "products" && <ProductsMega />}
      {mm === "applications" && <ApplicationsMega />}
    </header>
  );
}

function ProductsMega() {
  return (
    <div className="megamenu">
      <div className="container mm-grid">
        <div className="mm-col">
          <h5>Innovative</h5>
          <Link href="/products/prism">Prism — prismatic 6-layer</Link>
          <Link href="/products/vivid">Vivid — louver matrix</Link>
          <Link href="/products/snapwall">Snapwall — click-lock</Link>
        </div>
        <div className="mm-col">
          <h5>Traditional</h5>
          <Link href="/products/multicell">Multicell</Link>
          <Link href="/products/xfix">X-Fix</Link>
          <Link href="/products/static">Static Sheet</Link>
          <Link href="/products/spry">Spry</Link>
        </div>
        <div className="mm-col">
          <h5>Resources</h5>
          <Link href="/specs">Spec sheets</Link>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Colour shades
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Installation guides
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Warranty
          </a>
        </div>
        <Link className="mm-feature" href="/products/prism">
          <div className="pic stripes-h" />
          <h4>Prism — New 2025</h4>
          <p>
            Solar Screening for Climate Control™. Save up to 30% HVAC energy with prismatic 6-layer
            technology.
          </p>
          <span className="btn btn-ghost btn-sm" style={{ padding: 0 }}>
            Open product →
          </span>
        </Link>
      </div>
    </div>
  );
}

function ApplicationsMega() {
  const apps: Array<[string, string]> = [
    ["Roofing", "roof"],
    ["Skylights & atriums", "daylight"],
    ["Façades", "facade"],
    ["Carports & canopies", "panel"],
    ["Walkways & underpasses", "roof"],
    ["Greenhouses", "leed"],
  ];

  return (
    <div className="megamenu">
      <div className="container mm-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {apps.map(([name, ic]) => (
          <Link
            key={name}
            href="/applications"
            style={{ padding: "12px 0", display: "flex", alignItems: "center", gap: 14 }}
          >
            <span className={"ico ico-" + ic} style={{ width: 24, height: 24 }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

