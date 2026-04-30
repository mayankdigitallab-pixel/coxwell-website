import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <p className="label text-[#4a4a47]">F — Featured Work</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden bg-[#f1ede4]">
            <Image
              src="/images/freepik__the-style-is-candid-image-photography-with-natural__87414.png"
              alt="Stadium canopy roof, Delhi 2023"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="label text-[#4a4a47] mb-4">Case study · 2023</p>
            <h3 className="font-display text-4xl lg:text-5xl leading-[1.05] text-[#111110]">
              Stadium canopy — daylight at the scale of sport.
            </h3>
            <p className="mt-6 text-[#4a4a47] leading-relaxed">
              An 18,000 m² roof for a Delhi stadium, engineered with X-Fix interlocked panels.
              Diffuse light reaches the pitch without glare on broadcast cameras.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#d9d6cc] pt-6">
              <div>
                <dt className="label text-[#4a4a47]">Location</dt>
                <dd className="mt-1 text-[#111110]">Delhi</dd>
              </div>
              <div>
                <dt className="label text-[#4a4a47]">Area</dt>
                <dd className="mt-1 text-[#111110]">18,000 m²</dd>
              </div>
              <div>
                <dt className="label text-[#4a4a47]">System</dt>
                <dd className="mt-1 text-[#111110]">X-Fix 25 mm</dd>
              </div>
              <div>
                <dt className="label text-[#4a4a47]">Year</dt>
                <dd className="mt-1 text-[#111110]">2023</dd>
              </div>
            </dl>

            <Link
              href="/projects"
              className="mt-8 inline-block label text-[#111110] border-b border-[#111110] pb-1 hover:opacity-60"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
