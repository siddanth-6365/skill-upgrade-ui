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
import { RiWhatsappLine } from "react-icons/ri";

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
        <a href={whatsappLink}>
          <button className="p-3 flex justify-center items-center gap-2 text-gray-100">
            <RiWhatsappLine className="w-6 h-6 text-white" />Join US
          </button>
        </a>
      </div>
    </>
  );
}

export default HeroParallaxDemo;
