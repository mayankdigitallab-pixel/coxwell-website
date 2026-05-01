"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export function HeroBleed() {
  return (
    <section className="hero hero-bleed" style={{ minHeight: "min(86vh, 880px)" }}>
      {/* Left text + right slider split */}
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        {/* Dark left half */}
        <div style={{ width: "50%", background: "var(--cox-black)" }} />
        {/* Slider right half */}
        <div style={{ width: "50%", position: "relative", overflow: "hidden" }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            slidesPerView={1}
            style={{ height: "100%", width: "100%" }}
            className="hero-swiper"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i} style={{ height: "100%", position: "relative" }}>
                <Image
                  src={`/images/banner_${i}.png`}
                  alt={`Coxwell banner ${i}`}
                  fill
                  className="object-cover"
                  priority={i === 1}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Content overlay */}
      <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: "48%", paddingTop: 80, paddingBottom: 80 }}>
          <span className="eyebrow tick" style={{ color: "rgba(255,255,255,.7)", marginBottom: 32, display: "inline-flex" }}>
            Coxwell · Est. 1995
          </span>

          <h1 style={{ color: "#fff", marginTop: 24 }}>
            Roofing &amp; Facade<br />
            Solutions to Create<br />
            <span className="hl">Iconic Buildings</span>
          </h1>

          <p className="lead" style={{ marginTop: 28, color: "rgba(255,255,255,.82)" }}>
            Premium polycarbonate sheet, roofing solutions &amp; architectural
            systems designed for durability, aesthetics, and performance.
          </p>

          <div className="row" style={{ gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <Link className="btn btn-light btn-lg" href="/contact">
              Get a quote
            </Link>
            <Link className="btn btn-outline-light btn-lg" href="/products">
              Explore products
            </Link>
          </div>

          <div className="hero-meta" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,.18)", display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Years of Experience", val: "30+" },
              { label: "Projects Delivered", val: "5,200+" },
              { label: "Client Satisfaction", val: "99%" },
              { label: "Warranty", val: "10-year" },
            ].map((m) => (
              <div key={m.label} className="item">
                <span style={{ display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,.55)", marginBottom: 6 }}>{m.label}</span>
                <strong style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.01em", color: "#fff" }}>{m.val}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-swiper .swiper-pagination-bullet { background: #fff; opacity: .6; }
        .hero-swiper .swiper-pagination-bullet-active { background: var(--cox-orange); opacity: 1; }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev { color: #fff; }
        @media (max-width: 920px) {
          .hero-bleed { min-height: auto !important; }
          .hero-bleed > div:first-child { display: none; }
          .hero-bleed .container { background: var(--cox-black); padding-top: 120px !important; }
          .hero-bleed .container > div { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
