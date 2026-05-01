export default function VideoSection() {
  return (
    <section className="section tight" style={{ background: "var(--cox-gray-50)", display: "flex", justifyContent: "center" }}>
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <video autoPlay muted loop controls style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
