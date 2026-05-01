import Image from "next/image";

export default function RatingBar() {
  return (
    <section style={{ background: "var(--cox-gray-50)", borderBottom: "1px solid var(--border)", padding: "20px 0" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "clamp(16px, 4vw, 48px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, color: "var(--cox-black)" }}>
          <span style={{ color: "#FFA500", fontSize: 22 }}>★</span>
          9.6/10
        </div>
        <p style={{ margin: 0, fontSize: 14, color: "var(--fg-2)" }}>
          based on <strong style={{ color: "var(--cox-black)" }}>1200+ reviews</strong> on
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Image src="/images/ambitionbox-icon-150x150.webp" alt="AmbitionBox" width={28} height={28} style={{ objectFit: "contain" }} />
          <Image src="/images/google-Logo-300x98.webp" alt="Google" width={70} height={24} style={{ objectFit: "contain" }} />
          <Image src="/images/zoho-logo-300x128.webp" alt="Zoho" width={60} height={26} style={{ objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
}
