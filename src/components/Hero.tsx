import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/images/DAY-2.png"
          alt="Coxwell polycarbonate roofing project"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-6">
            Est. 1995 · LEED Certified
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Daylight is the heart of every space we build.
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            India&apos;s premier polycarbonate roofing, façade, and skylight systems.
            Engineered for lasting performance with up to 70% diffuse light transmission.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
            >
              Explore Products <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Play size={16} className="fill-current" /> View Projects
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: "5,200+", label: "Projects Delivered" },
              { value: "2,755+", label: "Clients Served" },
              { value: "10 Yr", label: "Warranty" },
              { value: "15+ Yr", label: "Lifespan" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
