"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  { text: "Using Coxwell's polycarbonate sheets has been a wise decision for our business. The sheets' performance and cost-effectiveness have allowed us to offer quality solutions to our clients. We appreciate Coxwell's prompt service and consistent product quality.", author: "Ashish Agarwal", role: "Balaji Enterprises" },
  { text: "Working with Coxwell's polycarbonate sheets has been an absolute pleasure. The quality and durability of the materials have consistently met our high standards, making them a reliable choice for our projects.", author: "Raja Kamdar", role: "Contractor" },
  { text: "Coxwell's team delivered beyond expectations. From design support to installation, the entire process was seamless and efficient. Highly recommended!", author: "Ananya Sharma", role: "Architect" },
  { text: "The quality of the polycarbonate sheets and the service provided was excellent. It truly enhanced our building's facade.", author: "Rahul Mehta", role: "Developer" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(2);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth <= 768 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / perView);

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % totalSlides), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalSlides]);

  const go = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(i);
  };

  const visible = testimonials.slice(current * perView, current * perView + perView);

  return (
    <section className="section tight" style={{ background: "var(--cox-gray-50)" }}>
      <div className="container">
        <div className="section-head single">
          <div>
            <span className="idx">H · Testimony</span>
            <h2>What our clients say about Coxwell</h2>
          </div>
          <p className="meta">Delivering Excellence in Roofing &amp; Facade Solutions.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${perView}, 1fr)`, gap: 20, marginBottom: 28 }}>
          {visible.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 220 }}>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.6, margin: 0, fontSize: 15 }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ marginTop: 20 }}>
                <div style={{ width: 48, height: 1, background: "var(--cox-black)", marginBottom: 10 }} />
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, margin: 0, color: "var(--cox-black)" }}>{t.author}</p>
                <p style={{ color: "var(--fg-3)", fontSize: 13, margin: "2px 0 0" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{ width: 10, height: 10, borderRadius: "50%", border: "none", cursor: "pointer", background: i === current ? "var(--cox-orange)" : "var(--cox-gray-300)", transition: "background .3s" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
