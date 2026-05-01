import Link from "next/link";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Futuristic Design",
    desc: "A sleek glassmorphic card layout that blends perfectly with modern UIs.",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Minimal Aesthetic",
    desc: "Subtle gradients, glass panels, and smooth animations give this layout a premium feel.",
  },
  {
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
    title: "Interactive Vibes",
    desc: "Hover effects and smooth motion make it feel alive without using JS.",
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    title: "Sustainable Spaces",
    desc: "Designed with sustainability in mind, blending aesthetics with environmental performance.",
  },
];

export default function BlogCards() {
  return (
    <section className="bg-white py-16 px-6">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto mb-10">
        <p className="text-[#e03d22] font-bold text-lg mb-2">Resources</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4 leading-tight">
          Unlock Industry Expertise: Free Guides, Tools &amp; More
        </h2>
        <p className="text-gray-600 text-lg max-w-[850px]">
          Access expert knowledge, technical documentation, and hands-on guides designed to support your projects.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((b) => (
          <div
            key={b.title}
            className="bg-white rounded-xl border border-gray-200 shadow overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.image} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">{b.desc}</p>
              <Link
                href="/about"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition self-start mt-auto"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
