import TextScrollAnimation from "./ui/textanimate";
import Image from "next/image";

function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center md:flex-row h-screen w-full items-center bg-cover bg-center bg-no-repeat bg-fixed  "
      style={{
        backgroundImage: `url("https://static.wixstatic.com/media/f7c979_fb1290fc30fb45978f0272380123835d~mv2.png/v1/fill/w_1600,h_996,al_c,q_90,enc_auto/gradient-3.png")`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 ">
        <div className="font-serif md:ml-16 text-left  text-white text-[50px] md:text-[120px] ">
          <h1>Upgrade</h1>
          <h1 className="text-gray-500">Your Skills</h1>
          <h1 className="text-gray-500">With Us!</h1>
          {/* <TextScrollAnimation /> */}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full md:w-3/4 mx-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <Image
            layout="responsive"
            width={800}
            height={600}
            alt="Picture of the author"
            src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
