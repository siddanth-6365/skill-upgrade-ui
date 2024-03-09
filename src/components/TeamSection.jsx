import CompanyLogos from "./ui/Companylogos";

export default function Example() {
  return (
    <>
      <div id="instructors" className="bg-white py-4 sm:py-[5rem] " style={{ fontFamily: "Cambria, Georgia, serif" }}>
        <div className="mx-auto  max-w-7xl  px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Instructors
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Our team consists of experienced professionals with diverse
            backgrounds in software engineering, mechanical engineering, design
            and development and also in electrical and electronics engineering.
            We are united by a collaborative passion for innovation and a
            commitment to excellence in everything we do. Our team consists of
            well-disciplined tutors who are very friendly with everyone. And
            also, every time ready to deliver best quality of knowledge to the
            learners.
          </p>
        </div>
      </div>
      <CompanyLogos />
    </>
  );
}
