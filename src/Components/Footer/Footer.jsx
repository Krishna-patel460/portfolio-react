import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id='Footer'
      className='flex flex-col md:flex-row justify-around items-center text-[#FFF0F6] bg-[#FF69B4] py-10 px-6 md:px-12 text-center md:text-left'
    >
      {/* Contact Heading */}
      <div className="mb-6 md:mb-0">
        <h1 className='text-2xl md:text-5xl font-bold mb-2'>Contact</h1>
        <h3 className='text-sm md:text-xl font-normal'>Feel free to reach out!</h3>
      </div>

      {/* Contact Links */}
      <ul className='text-sm md:text-lg space-y-2'>
        <li className='flex gap-2 items-center justify-center md:justify-start'>
          <MdOutlineEmail size={20} />
           <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=krishnaptl341@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            krishnaptl341@gmail.com
          </a>
        </li>
        <li className='flex gap-2 items-center justify-center md:justify-start'>
          <CiLinkedin size={20} />
          <a
            href='https://www.linkedin.com/in/krishna-patel-3851152b4'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            linkedin.com/in/krishna-patel
          </a>
        </li>
        <li className='flex gap-2 items-center justify-center md:justify-start'>
          <FaGithub size={20} />
          <a
            href='https://github.com/Krishna-patel460'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            github.com/krishna-patel460
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
