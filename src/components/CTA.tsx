import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc] bg-[#f1ede4]">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-3xl mx-auto">
          Specify daylight. We engineer the rest.
        </h2>
        <p className="mt-6 text-lg text-[#4a4a47] max-w-xl mx-auto">
          Send us a brief and our engineering team will respond within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#111110] text-[#fafaf7] text-sm hover:bg-[#4a4a47] transition-colors"
          >
            Start a project
          </Link>
          <a
            href="mailto:specify@coxwell.in"
            className="px-6 py-3 rounded-full border border-[#111110] text-[#111110] text-sm hover:bg-[#111110] hover:text-[#fafaf7] transition-colors"
          >
            specify@coxwell.in
          </a>
        </div>
      </div>
    </section>
  );
}
