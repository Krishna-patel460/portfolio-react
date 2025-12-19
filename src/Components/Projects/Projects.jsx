import React from 'react';
import ProjectCard from './ProjectCard';

import honeyImg from "../../assets/honey.png";
import papadImg from "../../assets/papad.png";
import agroconnectImg from "../../assets/agroconnect.png";

const Projects = () => {
  return (
    <section id="Projects" className="bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Projects
        </h1>

        {/* Project Cards */}
        <div className="flex flex-wrap gap-8 justify-center">

          <ProjectCard
            title="Honey Website"
            main="Developed using HTML, CSS, and JavaScript. A fully responsive honey ordering website with smooth scroll and image slider.we provide natural honey without and any added ingredients."
            img={honeyImg}
            github="https://github.com/Krishna-patel460/Honey_Website"
          />

          <ProjectCard
            title="Agroconnect Website"
            main="This website help farmers to sell their products online.It also help farmer's to obeserve their crop efiiciently."
            img={agroconnectImg}
            github="https://github.com/Krishna-patel460/Agroconnect"
          />

          <ProjectCard
            title="Homemade Papad Website"
            main="An e-commerce style website for selling homemade papad online,they provide hand-rolled papad. "
            img={papadImg}
            github="https://github.com/Krishna-patel460/Papad-website"
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;


