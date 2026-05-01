export default function VideoSection() {
  return (
    <section className="bg-white py-12 flex justify-center px-6">
      <div className="w-full max-w-[900px] aspect-video rounded-xl overflow-hidden shadow-lg">
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
