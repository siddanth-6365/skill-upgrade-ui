import React from "react";
// import HeroSection from "@/components/heroSection";
// import InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import Footer from "@/components/Footer";
// import Scroll from "@/components/Scroll";
import CoursePage from "@/components/CoursePage";
import CompanyLogos from "@/components/Companylogos";
import TeamSection from "@/components/TeamSection";
import Hero2 from "@/components/Hero2";
import CircleComponent from "@/components/CircleComponent";

function HeroParallaxDemo() {
  return (
    <div>
    
      <Hero2 />
      <CircleComponent />
      <CoursePage />
      <TeamSection />
      <CompanyLogos />
      <Footer />
    </div>
  );
}

export default HeroParallaxDemo;
