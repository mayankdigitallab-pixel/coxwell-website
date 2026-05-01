"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 30, suffix: "+", label: "Years of Experience" },
  { target: 5200, suffix: "+", label: "Projects Delivered" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();

    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(update);
      else setValue(target);
    }

    requestAnimationFrame(update);
  }, [active, target]);

  return value;
}

function CounterBox({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const value = useCountUp(target, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center justify-center py-8 border-r border-gray-200 last:border-r-0 px-4">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl lg:text-6xl font-bold text-black leading-none">{value}</span>
        <span className="text-3xl font-semibold text-black">{suffix}</span>
      </div>
      <p className="mt-3 text-base font-medium text-black">{label}</p>
    </div>
  );
}

export default function Numbers() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 divide-gray-200">
          {counters.map((c) => (
            <CounterBox key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
