import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { icon: <FaHtml5 color="#E44D26" size={40} />, label: 'HTML5' },
    { icon: <FaCss3Alt color="#1572B6" size={40} />, label: 'CSS3' },
    { icon: <FaJs color="#F7DF1E" size={40} />, label: 'JavaScript' },
    { icon: <FaReact color="#61DBFB" size={40} />, label: 'React' },
    { icon: <SiTailwindcss color="#38BDF8" size={40} />, label: 'Tailwind CSS' },
    { icon: <FaGitAlt color="#F1502F" size={40} />, label: 'Git' },
    { icon: <FaFigma color="#F24E1E" size={40} />, label: 'Figma' },
    { icon: <SiMongodb color="#4DB33D" size={40} />, label: 'MongoDB' },
    { icon: <FaCode color="#007ACC" size={40} />, label: 'VS Code' },
  ];

  return (
    <section id="Skills" className="bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Skills</h2>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#FFDDEE] rounded-xl shadow p-6 w-32 h-32 hover:scale-105 transition duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-sm font-semibold text-center">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;

