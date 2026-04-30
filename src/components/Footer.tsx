import Link from "next/link";

const groups = {
  Products: ["Prism", "Vivid", "Snapwall", "Multicell", "X-Fix", "All products"],
  Applications: ["Roofing", "Skylights & atriums", "Façades", "Walkways", "Greenhouses"],
  Resources: ["Spec sheets", "Certifications", "CAD details", "Installation guides", "Warranty"],
  Company: ["About", "Projects", "Press", "Careers", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#d9d6cc] bg-[#fafaf7]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="font-display text-3xl text-[#111110]">Coxwell</div>
            <p className="mt-4 text-[#4a4a47] leading-relaxed max-w-sm">
              Polycarbonate systems for roofing, atriums, façades, and walkways.
              Engineered in India since 1995.
            </p>
            <div className="mt-6">
              <p className="label text-[#4a4a47]">Engineering brief</p>
              <a href="mailto:specify@coxwell.in" className="mt-1 inline-block text-[#111110] underline underline-offset-4">
                specify@coxwell.in
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#4a4a47]">
              <span>Gurgaon</span>
              <span>·</span>
              <span>Delhi</span>
              <span>·</span>
              <span>Bengaluru</span>
            </div>
          </div>

          {Object.entries(groups).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <p className="label text-[#4a4a47]">{title}</p>
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-[#111110] hover:underline underline-offset-4">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#d9d6cc] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-[#4a4a47]">
          <p>© 1995–{new Date().getFullYear()} Coxwell Global Pvt. Ltd.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#111110]">Terms</Link>
            <Link href="#" className="hover:text-[#111110]">Privacy</Link>
            <Link href="/sitemap.xml" className="hover:text-[#111110]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
