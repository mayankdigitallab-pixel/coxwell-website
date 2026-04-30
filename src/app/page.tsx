import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Applications from "@/components/Applications";
import WhyCoxwell from "@/components/WhyCoxwell";
import Projects from "@/components/Projects";
import Specifications from "@/components/Specifications";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Products />
        <Applications />
        <WhyCoxwell />
        <Projects />
        <Specifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
