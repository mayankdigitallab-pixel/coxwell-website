import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brief from "@/components/Brief";
import Products from "@/components/Products";
import Applications from "@/components/Applications";
import Numbers from "@/components/Numbers";
import Featured from "@/components/Featured";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brief />
        <Products />
        <Applications />
        <Numbers />
        <Featured />
        <CTA />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
