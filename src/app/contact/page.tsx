import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Send us a brief",
  description: "Send a project brief and receive an engineering response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-12 px-6 lg:px-10">
          <div className="max-w-[1280px] mx-auto">
            <p className="label text-[#4a4a47]">Contact</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[1.05] text-[#111110] max-w-4xl">
              Send us a brief.
            </h1>
            <p className="mt-6 text-lg text-[#4a4a47] max-w-2xl">
              Our engineering team responds to every project enquiry within 24 hours.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-10 border-t border-[#d9d6cc] py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="space-y-10">
                <div>
                  <p className="label text-[#4a4a47]">Engineering</p>
                  <a href="mailto:specify@coxwell.in" className="mt-2 block font-display text-2xl text-[#111110] hover:underline underline-offset-4">
                    specify@coxwell.in
                  </a>
                  <p className="mt-1 text-sm text-[#4a4a47]">24-hour response.</p>
                </div>
                <div>
                  <p className="label text-[#4a4a47]">Distributors</p>
                  <a href="mailto:partners@coxwell.in" className="mt-2 block font-display text-2xl text-[#111110] hover:underline underline-offset-4">
                    partners@coxwell.in
                  </a>
                </div>
                <div>
                  <p className="label text-[#4a4a47]">Press</p>
                  <a href="mailto:press@coxwell.in" className="mt-2 block font-display text-2xl text-[#111110] hover:underline underline-offset-4">
                    press@coxwell.in
                  </a>
                </div>
                <div>
                  <p className="label text-[#4a4a47]">Headquarters</p>
                  <p className="mt-2 text-[#111110] leading-relaxed">
                    Coxwell Global Pvt. Ltd.<br />
                    1005, Level 10, JMD Regent Square<br />
                    Mehrauli–Gurgaon Road<br />
                    Gurgaon 122002, Haryana
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
