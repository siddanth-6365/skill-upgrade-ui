import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CoursePage from "@/components/CoursePage";
import TeamSection from "@/components/TeamSection";
import HeroSection from "@/components/HeroSection";
import CircleComponent from "@/components/CircleComponent";
import ContactUs from "@/components/ContactUs";
import About2 from "@/components/About2";
import Services from "@/components/Services";

const whatsappLink = "https://chat.whatsapp.com/LGKwNURO8FUCGD9qJCf2iE";

function HeroParallaxDemo() {
  return (
    <>
      <HeroSection />
      <CircleComponent />
      <About2 />
      <CoursePage />
      <Services />
      <TeamSection />
      <ContactUs />
      <Footer />
      <div className="fixed bottom-10 right-10 bg-green-500 rounded-2xl">
        <button className="p-4 text-gray-700">
          <Link href={whatsappLink}>Join Us</Link>{" "}
        </button>
      </div>
    </>
  );
}

export default HeroParallaxDemo;
