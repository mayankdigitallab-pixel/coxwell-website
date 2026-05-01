import Image from "next/image";

export default function RatingBar() {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-10">
        {/* Score */}
        <div className="flex items-center gap-2 text-black font-semibold text-xl">
          <span className="text-orange-400 text-2xl">★</span>
          <span>9.6/10</span>
        </div>

        {/* Text */}
        <div className="text-gray-500 text-sm text-center">
          based on <strong className="text-black">1200+ reviews</strong> on
        </div>

        {/* Logos */}
        <div className="flex items-center gap-6">
          <Image src="/images/ambitionbox-icon-150x150.webp" alt="AmbitionBox" width={28} height={28} className="object-contain" />
          <Image src="/images/google-Logo-300x98.webp" alt="Google" width={70} height={24} className="object-contain" />
          <Image src="/images/zoho-logo-300x128.webp" alt="Zoho" width={60} height={26} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
