import Image from "next/image";
import Link from "next/link";

const links = {
  Products: ["Prism", "Vivid", "Snapwall", "Multicell", "X-Fix", "Static", "Spry"],
  Applications: ["Roofing", "Skylights", "Atriums", "Façades", "Carports", "Canopies"],
  Resources: ["Product Specs", "CAD Details", "Installation Guide", "Warranty", "Press", "Careers"],
  Company: ["About Us", "Projects", "Contact", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Image
              src="/images/Logo-white-01-1536x443.png"
              alt="Coxwell"
              width={140}
              height={40}
              className="h-9 w-auto mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Daylight is the heart of every space we build. India's premier polycarbonate
              roofing systems since 1995.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter/X", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500/20 hover:text-amber-400 transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Coxwell. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              IS 14434 Certified
            </span>
            <span>·</span>
            <span>LEED Compatible</span>
            <span>·</span>
            <span>10-Year Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
