import Image from "next/image";

const logos = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];

export default function Trusted() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left logos */}
        <div className="grid grid-cols-4 gap-5 flex-1 justify-items-center">
          {logos.slice(0, 4).map((t) => (
            <Image key={t} src={`/images/${t}.png`} alt={t} width={100} height={60} className="object-contain h-14 w-auto hover:scale-105 transition-transform" />
          ))}
        </div>

        {/* Center box */}
        <div className="bg-gradient-to-br from-[#e03d22] to-[#e25f44] text-white rounded-xl px-10 py-8 text-center shrink-0">
          <p className="text-base font-semibold mb-2">Trusted by</p>
          <p className="text-5xl font-extrabold leading-none">2755+</p>
          <p className="text-xl font-semibold mt-1">Clients</p>
        </div>

        {/* Right logos */}
        <div className="grid grid-cols-4 gap-5 flex-1 justify-items-center">
          {logos.slice(4).map((t) => (
            <Image key={t} src={`/images/${t}.png`} alt={t} width={100} height={60} className="object-contain h-14 w-auto hover:scale-105 transition-transform" />
          ))}
        </div>
      </div>
    </section>
  );
}
