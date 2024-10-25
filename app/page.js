import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import SoftwareSection from "@/components/SoftwareSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SoftwareSection />
      <PartnerSection />
    </div>
  );
}
