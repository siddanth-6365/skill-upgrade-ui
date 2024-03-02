import React from "react";

const About2 = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center p-8 gap-8" style={{ fontFamily: "Cambria, Georgia, serif", maxWidth: "1300px", margin: "0 auto" }}>
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl underline font-bold">
            OUR MISSION
          </h1>
          <p className="text-base lg:text-lg mt-4">
            Our mission is simple and efficient: to strengthen individuals
            worldwide to unlock their full potential through user-friendly,
            personalized, and interactive learning experiences. We are dedicated
            to democratizing education by providing a different range of high-quality courses, tools, and resources that inspire lifelong learning of every individual and their personal growth. By promoting a dynamic and supportive learning community, we aim to cultivate the skills, knowledge, and confidence necessary for success in an ever-evolving global landscape. We believe in the power of innovation to transform businesses and improve lives.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl underline font-bold">
            WHAT WE OFFER
          </h1>
          <p className="text-base lg:text-lg mt-4">
            SkillUpgrade offers a wide and varied range of courses covering different topics such as Programming, Design, etc. Whether you are looking to master a new skill, explore a new hobby, acquire proficiency in a new skill, attain proficiency in a new competency, or enhance your professional expertise, we have the resources and support you need to succeed in your career.
          </p>
        </div>
      </section>
    </>
  );
};

export default About2;
