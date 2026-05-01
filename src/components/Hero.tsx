"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white pt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Roofing &amp; Facade Solutions<br />
            to Create Iconic and Durable Buildings
          </h1>
          <p className="text-[#bbb] text-base lg:text-lg max-w-[500px] mb-8 leading-relaxed">
            Premium polycarbonate sheet, roofing solutions &amp; architectural
            systems designed for durability, aesthetics, and performance.
          </p>
          <Link
            href="/contact"
            className="bg-[#e03d22] text-white px-7 py-3 rounded-full font-semibold inline-block hover:bg-[#c32d19] transition-colors"
          >
            Get demo with us
          </Link>
        </div>

        {/* Right slider */}
        <div className="flex-1 w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            slidesPerView={1}
            className="hero-swiper rounded-lg overflow-hidden"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i} className="relative" style={{ height: "400px" }}>
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

      <style>{`
        .hero-swiper { height: 400px; }
        .hero-swiper .swiper-pagination-bullet { background: #fff; opacity: 0.7; }
        .hero-swiper .swiper-pagination-bullet-active { background: #e03d22; opacity: 1; }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev { color: #fff; }
        @media (max-width: 900px) { .hero-swiper { height: 280px; } }
      `}</style>
    </section>
  );
}
