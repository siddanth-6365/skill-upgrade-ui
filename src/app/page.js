import React from "react";
import Footer from "@/components/Footer";
import CoursePage from "@/components/CoursePage";
import CompanyLogos from "@/components/Companylogos";
import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";
import CircleComponent from "@/components/CircleComponent";
import ContactUs from "@/components/ContactUs";
import About2 from "@/components/About2";
import Services from "@/components/Services";

function HeroParallaxDemo() {
  return (
    <div>
      <HeroSection />
      <CircleComponent />
      <About2 />
      <CoursePage />
      <Services/>
      <TeamSection />
      <CompanyLogos />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HeroParallaxDemo;
