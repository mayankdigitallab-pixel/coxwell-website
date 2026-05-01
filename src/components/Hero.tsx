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
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* Left — exactly 50% */}
        <div className="w-full lg:w-1/2 flex items-center px-10 lg:px-16 py-16">
          <div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug mb-5">
              Roofing &amp; Facade Solutions<br />
              to Create Iconic and<br />Durable Buildings
            </h1>
            <p className="text-[#bbb] text-sm lg:text-base mb-8 leading-relaxed max-w-[440px]">
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
        </div>

        {/* Right — exactly 50% */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            slidesPerView={1}
            className="hero-swiper"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i} className="relative">
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
        .hero-swiper { height: 520px; }
        .hero-swiper .swiper-pagination-bullet { background: #fff; opacity: 0.7; }
        .hero-swiper .swiper-pagination-bullet-active { background: #e03d22; opacity: 1; }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev { color: #fff; }
        @media (max-width: 1024px) { .hero-swiper { height: 320px; } }
      `}</style>
    </section>
  );
}
