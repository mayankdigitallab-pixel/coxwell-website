import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectDetail({ project, next }: { project: Project; next: Project[] }) {
  return (
    <>
      <section className="pagehead">
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/projects">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>
          <div className="head-grid">
            <div>
              <span className="eyebrow tick">
                {project.category} · {project.location}
              </span>
              <h1 style={{ marginTop: 18 }}>{project.title}.</h1>
            </div>
            <p className="lead">
              A reference project featuring Coxwell systems. (Photography and final case study copy
              can be added as the project library is finalized.)
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={"pic " + project.cls} style={{ aspectRatio: "21/9", marginTop: 48, position: "relative" }}>
          <div className="tile-overlay" style={{ padding: 32 }}>
            <span>FIG. 01 · Elevation, late afternoon</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14 }}>Photography · placeholder</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="proj-body">
            <div style={{ position: "sticky", top: 96, alignSelf: "start" }}>
              <dl className="spec">
                <dt>Sector</dt>
                <dd>{project.category}</dd>
                <dt>Location</dt>
                <dd>{project.location}</dd>
                <dt>Area</dt>
                <dd>{project.area}</dd>
                <dt>System</dt>
                <dd>{project.system}</dd>
                <dt>Engineer</dt>
                <dd>Coxwell Engineering</dd>
              </dl>
            </div>
            <div className="stack" style={{ gap: 32 }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 2.4vw, 32px)",
                  lineHeight: 1.2,
                  color: "var(--fg)",
                  margin: 0,
                  maxWidth: "30ch",
                }}
              >
                &quot;The brief was to flood the space with daylight without heat. Coxwell&apos;s diffuse
                polycarbonate panels did exactly that.&quot;
              </p>
              <span style={{ color: "var(--fg-3)", fontSize: 13 }}>— Project architect, placeholder quote</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, margin: "24px 0 0", lineHeight: 1.15 }}>
                The brief
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--fg-2)" }}>
                This case study page is wired for real URLs and SEO. Once you share project photos and
                final details, we can replace placeholders with actual copy and media.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
                <div className="pic pic-orange stripes-d" style={{ aspectRatio: "4/3", position: "relative" }}>
                  <div className="tile-overlay" style={{ padding: 18 }}>
                    <span />
                    <span style={{ fontSize: 12 }}>Detail · ridge cap</span>
                  </div>
                </div>
                <div className="pic pic-cool stripes-h" style={{ aspectRatio: "4/3", position: "relative" }}>
                  <div className="tile-overlay" style={{ padding: 18 }}>
                    <span />
                    <span style={{ fontSize: 12 }}>Detail · purlin connection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section subtle tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="idx">Next project</span>
              <h2>More work.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="prod-grid">
            {next.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="tile">
                <div className={"pic " + p.cls} style={{ aspectRatio: "4/3" }} />
                <div className="body">
                  <h3 style={{ fontSize: 20 }}>{p.title}</h3>
                  <p>{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width:920px){ .proj-body { grid-template-columns: 1fr !important; } .proj-body > div:first-child { position: static !important; } }`}</style>
    </>
  );
}

