import React from 'react';

const ProjectCard = ({ title, main, img, github }) => {
  return (
    <div className='p-3 flex flex-col md:p-6 w-80 bg-[#FFF0F6] shadow-lg rounded-2xl text-[#2E2E2E]'>

      {/* Image */}
      <img className='p-4 rounded-xl' src={img} alt="project preview" />

      {/* Title */}
      <h3 className='px-4 text-xl font-bold leading-normal md:text-2xl'>
        {title}
      </h3>

      {/* Description */}
      <p className='px-4 text-sm md:text-md leading-tight py-2'>
        {main}
      </p>

      {/* Source Code Button */}
      <div className='mt-2 px-4 flex gap-4'>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[#FF69B4] text-white py-2 px-4 text-sm md:text-md hover:bg-[#EC407A] duration-300 hover:scale-105 font-semibold rounded-3xl'
          >
            Source Code
          </a>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;

