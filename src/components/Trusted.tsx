import Image from "next/image";

const logos = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];

export default function Trusted() {
  return (
    <section className="section tight" style={{ background: "var(--cox-gray-50)" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, flex: 1 }}>
          {logos.slice(0, 4).map((t) => (
            <Image key={t} src={`/images/${t}.png`} alt={t} width={100} height={60}
              style={{ objectFit: "contain", height: 52, width: "auto", transition: "transform .2s" }} />
          ))}
        </div>

        <div style={{ background: "var(--cox-orange)", color: "#fff", borderRadius: "var(--radius-md)", padding: "28px 40px", textAlign: "center", flexShrink: 0 }}>
          <p style={{ margin: "0 0 6px", fontFamily: "var(--font-text)", fontSize: 14, fontWeight: 500, opacity: .85 }}>Trusted by</p>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.5rem,5vw,3.5rem)", lineHeight: 1 }}>2755+</p>
          <p style={{ margin: "4px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20 }}>Clients</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, flex: 1 }}>
          {logos.slice(4).map((t) => (
            <Image key={t} src={`/images/${t}.png`} alt={t} width={100} height={60}
              style={{ objectFit: "contain", height: 52, width: "auto", transition: "transform .2s" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
