import React from "react";
import Footer from "@/components/Footer";
import CoursePage from "@/components/CoursePage";
import CompanyLogos from "@/components/Companylogos";
import TeamSection from "@/components/TeamSection";
import Hero2 from "@/components/Hero2";
import CircleComponent from "@/components/CircleComponent";
import ContactUs from "@/components/ContactUs"

function HeroParallaxDemo() {
  return (
    <div>
      <Hero2 />
      <CircleComponent />
      <CoursePage />
      <TeamSection />
      <CompanyLogos />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HeroParallaxDemo;
