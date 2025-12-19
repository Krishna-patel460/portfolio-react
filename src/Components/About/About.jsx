import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import aboutImg from "../../assets/aboutportfolio.png";

const About = () => {
  return (
    <section id="About" className="bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">About</h2>

        {/* Image and Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              className="h-auto w-full max-w-lg rounded-lg object-contain shadow-md"
              src={aboutImg}
              alt="about"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-10">
            {/* Block 1 */}
            <div className="flex gap-5 items-start">
              <IoArrowForward size={36} className="mt-1 text-[#FF69B4]" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-normal">Frontend Developer</h3>
                <p className="text-base md:text-lg leading-snug text-[#4B4B4B]">
                  I specialize in building responsive web interfaces using modern technologies like React and Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-5 items-start">
              <IoArrowForward size={36} className="mt-1 text-[#FF69B4]" />
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-normal">UI/UX Designer</h3>
                <p className="text-base md:text-lg leading-snug text-[#4B4B4B]">
                  I design clean and user-friendly interfaces, with a focus on accessibility and intuitive interactions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;




