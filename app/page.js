import CaseStudies from "@/components/caseStudies";
import DesignApproachSection from "@/components/designApproachData";
import FeaturedResources from "@/components/FeaturedResources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/Services";
import SoftwareBuildingSection from "@/components/SoftwareBuildingSection";
import SoftwareSection from "@/components/SoftwareSection";
import TechStackSection from "@/components/techStackData";
import TestimonialSlider from "@/components/TestimonialSlider";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <HeroSection /> 
      <SoftwareSection />
      <ServicesSection />
      <PartnerSection />
      <TestimonialSlider />
      <CaseStudies />
      <SoftwareBuildingSection />
      <DesignApproachSection />
      <TechStackSection />
       <Timeline />
      <FeaturedResources />
    
      <Footer /> 
    </div>
  );
}
