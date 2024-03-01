import React from "react";
import HeroSection from "@/components/heroSection";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import Footer from "@/components/Footer";
import Scroll from "@/components/Scroll";
import Aboutus from "@/components/Aboutus";
import CoursePage from "@/components/CoursePage";
import CompanyLogos from "@/components/Companylogos";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Hero2 from "@/components/Hero2";

function HeroParallaxDemo() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      {/* <HeroSection /> */}
      <Aboutus />
      <CoursePage />
      {/* <Scroll /> */}
      <TeamSection />
      <CompanyLogos />
      <Footer />
    </div>
  );
}

export default HeroParallaxDemo;
