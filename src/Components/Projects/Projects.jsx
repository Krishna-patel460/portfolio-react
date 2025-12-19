import React from 'react';
import ProjectCard from './ProjectCard';

import foodImg from "../../assets/foodres.png";
import papdImg from "../../assets/papad.png";
import cyberImg from "../../assets/cyber.png";

const Projects = () => {
  return (
    <section id="Projects" className="bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Projects</h1>

        {/* Project Cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          <ProjectCard
            title="Foodrestaurant Website"
            main="Developed using HTML, CSS, and JavaScript. A fully responsive food ordering website with smooth scroll and image slider."
            img={foodImg}
          />
          <ProjectCard
            title="CyberSecurity Awareness Game"
            main="Built using HTML, CSS, and JavaScript. It’s a fun quiz game to raise awareness about safe internet practices."
            img={cyberImg}
          />
          <ProjectCard
            title="Homemade Papad Website"
            main="An e-commerce style website for selling homemade papad online. Created using HTML, CSS, and JavaScript."
            img={papdImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

