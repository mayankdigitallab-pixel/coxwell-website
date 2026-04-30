import Image from "next/image";

const clientNames = [
  "Salesforce", "Delhi Metro Rail", "L&T", "Godrej", "Tata Projects",
  "Shapoorji", "DLF", "Oberoi Realty", "Embassy Group", "Prestige Group",
];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by India's leading organisations
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image
              src="/images/Salesforce-logo-300x210.png"
              alt="Salesforce"
              width={120}
              height={84}
              className="object-contain h-12 w-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
            <Image
              src="/images/delhi-metro-rail-corporation-logo-7F2259B20E-seeklogo.com_.png"
              alt="Delhi Metro Rail"
              width={120}
              height={84}
              className="object-contain h-12 w-auto"
            />
          </div>
          {clientNames.slice(2).map((name) => (
            <div
              key={name}
              className="flex items-center justify-center p-4 h-16 rounded-xl bg-slate-50"
            >
              <span className="text-slate-400 font-semibold text-sm text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
