import Link from "next/link";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="container">
        <div
          className="row between"
          style={{
            alignItems: "flex-end",
            paddingBottom: 64,
            borderBottom: "1px solid rgba(255,255,255,.14)",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              maxWidth: "18ch",
              color: "#fff",
              margin: 0,
            }}
          >
            Specify daylight. We engineer the rest.
          </h3>
          <Link className="btn btn-primary btn-lg" href="/contact">
            Start a project →
          </Link>
        </div>

        <div className="top" style={{ paddingTop: 64, borderBottom: 0, paddingBottom: 48 }}>
          <div>
            <div className="brand">
              <img src="/assets/logo-brandmark.svg" alt="" />
              <span>Coxwell</span>
            </div>
            <p className="tagline">
              Daylight is the heart of every space we build. Coxwell has been engineering
              polycarbonate systems for India&apos;s architectural landscape for over 30 years.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 18, color: "rgba(255,255,255,.66)", fontSize: 13 }}>
              <span>
                <span className="ico ico-pin" style={{ width: 14, height: 14, marginRight: 6, verticalAlign: "-2px" }} />
                Gurgaon · Delhi · Bengaluru
              </span>
              <span>
                <span className="ico ico-mail" style={{ width: 14, height: 14, marginRight: 6, verticalAlign: "-2px" }} />
                hello@coxwell.in
              </span>
            </div>
          </div>

          <div>
            <h5>Products</h5>
            <ul>
              <li>
                <Link href="/products/prism">Prism</Link>
              </li>
              <li>
                <Link href="/products/vivid">Vivid</Link>
              </li>
              <li>
                <Link href="/products/snapwall">Snapwall</Link>
              </li>
              <li>
                <Link href="/products/multicell">Multicell</Link>
              </li>
              <li>
                <Link href="/products/xfix">X-Fix</Link>
              </li>
              <li>
                <Link href="/products">All products →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Applications</h5>
            <ul>
              <li>
                <Link href="/applications">Roofing</Link>
              </li>
              <li>
                <Link href="/applications">Skylights & atriums</Link>
              </li>
              <li>
                <Link href="/applications">Façades</Link>
              </li>
              <li>
                <Link href="/applications">Walkways</Link>
              </li>
              <li>
                <Link href="/applications">Greenhouses</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Resources</h5>
            <ul>
              <li>
                <Link href="/specs">Spec sheets</Link>
              </li>
              <li>
                <Link href="/specs">Certifications</Link>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  CAD details
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Installation guides
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Coxwell</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Press
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>© 1995–2026 Coxwell Global Pvt. Ltd. All rights reserved.</span>
          <div>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

