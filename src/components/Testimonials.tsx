"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Using Coxwell's polycarbonate sheets has been a wise decision for our business. The sheets' performance and cost-effectiveness have allowed us to offer quality solutions to our clients. We appreciate Coxwell's prompt service and consistent product quality.",
    author: "Ashish Agarwal",
    role: "Balaji Enterprises",
  },
  {
    text: "Working with Coxwell's polycarbonate sheets has been an absolute pleasure. The quality and durability of the materials have consistently met our high standards, making them a reliable choice for our projects.",
    author: "Raja Kamdar",
    role: "Contractor",
  },
  {
    text: "Coxwell's team delivered beyond expectations. From design support to installation, the entire process was seamless and efficient. Highly recommended!",
    author: "Ananya Sharma",
    role: "Architect",
  },
  {
    text: "The quality of the polycarbonate sheets and the service provided was excellent. It truly enhanced our building's facade.",
    author: "Rahul Mehta",
    role: "Developer",
  },
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
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % totalSlides);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalSlides]);

  const go = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent(i);
  };

  const visible = testimonials.slice(current * perView, current * perView + perView);

  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[#e03d22] font-bold text-base mb-1">Testimony</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">What Our Clients Say About Coxwell</h2>
        <p className="text-gray-400 text-lg">Delivering Excellence in Roofing &amp; Facade Solutions.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {visible.map((t, i) => (
          <div key={i} className="bg-white rounded shadow-md p-8 flex flex-col justify-between min-h-[220px]">
            <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
            <div>
              <div className="w-14 h-0.5 bg-black mb-3" />
              <p className="font-semibold text-black">{t.author}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-colors ${
              i === current ? "bg-[#e03d22]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
