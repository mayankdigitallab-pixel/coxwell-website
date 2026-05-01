import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RatingBar from "@/components/RatingBar";
import Numbers from "@/components/Numbers";
import Trusted from "@/components/Trusted";
import ExpertTabs from "@/components/ExpertTabs";
import Systems from "@/components/Systems";
import VideoSection from "@/components/VideoSection";
import CaseStudies from "@/components/CaseStudies";
import BlogCards from "@/components/BlogCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RatingBar />
        <Numbers />
        <Trusted />
        <ExpertTabs />
        <Systems />
        <VideoSection />
        <CaseStudies />
        <BlogCards />
        <Testimonials />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
