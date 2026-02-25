import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
