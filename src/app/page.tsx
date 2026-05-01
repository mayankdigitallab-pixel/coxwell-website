import { HeroBleed } from "@/components/Hero";
import {
  ApplicationsStrip,
  FeaturedProject,
  Manifesto,
  ProductsTease,
  StatsBand,
  ValueRow,
} from "@/components/home/HomeSections";
import RatingBar from "@/components/RatingBar";
import Trusted from "@/components/Trusted";
import ExpertTabs from "@/components/ExpertTabs";
import VideoSection from "@/components/VideoSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBleed />
      <RatingBar />
      <Manifesto />
      <ValueRow />
      <ProductsTease />
      <ApplicationsStrip />
      <StatsBand />
      <Trusted />
      <ExpertTabs />
      <VideoSection />
      <CaseStudies />
      <Testimonials />
      <FeaturedProject />
    </>
  );
}
