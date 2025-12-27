import React from 'react';
import TextChange from '../TextChange';
import profileImg from '../../assets/profile.jpeg';

const Home = () => {
  return (
    <section className="bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section change thay ae */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight mb-4">
            <TextChange />
          </h1>
          
          <p className="text-sm md:text-2xl tracking-tight mb-6">
            I am a front-end developer and UI/UX designer. I am currently pursuing Computer Engineering from Madhuben & Bhanubhai Patel Institute Of Technology.
          </p>
          
          <a
  href="#Footer"
  className="inline-block bg-[#FF69B4] text-white mt-3 py-2 px-6 text-sm md:text-lg
             hover:bg-[#EC407A] duration-300 hover:scale-105 font-semibold rounded-3xl"
>
  Contact Me
</a>

        </div>

        {/* profile image */}
        <div className="md:w-1/2 flex justify-center">
          <img className="w-full max-w-sm md:max-w-md rounded-xl shadow-md" src={profileImg} alt="avatar photo" />
        </div>

      </div>
    </section>
  );
};

export default Home;

 
