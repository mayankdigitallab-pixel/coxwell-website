const numbers = [
  { value: "30+", label: "years of innovation" },
  { value: "5,200+", label: "projects delivered" },
  { value: "2,755+", label: "clients served" },
  { value: "10+", label: "industry awards" },
];

export default function Numbers() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#d9d6cc] bg-[#111110] text-[#fafaf7]">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl">
          <p className="label text-[#fafaf7]/60">E — By the Numbers</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-[1.05]">
            A practice measured in atriums, not impressions.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#fafaf7]/10 border border-[#fafaf7]/10">
          {numbers.map((n) => (
            <div key={n.label} className="bg-[#111110] p-8 lg:p-10">
              <p className="font-display text-5xl lg:text-7xl tracking-tight">{n.value}</p>
              <p className="mt-4 text-[#fafaf7]/60">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
