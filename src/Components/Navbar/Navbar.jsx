import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='flex flex-wrap justify-between items-center px-6 py-4 md:px-20 bg-[#FFF0F6] text-[#2E2E2E] shadow-md'>
      {/* Logo */}
      <span className='text-xl md:text-2xl font-bold tracking-wide text-[#FF69B4]'>
        Portfolio
      </span>

      {/* Nav Links */}
      <ul
        className={`${
          menu ? 'block' : 'hidden'
        } absolute top-20 left-0 w-full bg-white bg-opacity-95 text-center p-6 rounded-b-2xl shadow-md md:shadow-none md:bg-transparent md:static md:flex md:gap-8 md:items-center md:w-auto`}
      >
        <a href="#About">
          <li className='text-md md:text-lg font-medium py-2 hover:text-[#FF69B4] transition'>
            About
          </li>
        </a>
        <a href="#Education">
          <li className='text-md md:text-lg font-medium py-2 hover:text-[#FF69B4] transition'>
            Education
          </li>
        </a>
        <a href="#Skills">
          <li className='text-md md:text-lg font-medium py-2 hover:text-[#FF69B4] transition'>
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className='text-md md:text-lg font-medium py-2 hover:text-[#FF69B4] transition'>
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className='text-md md:text-lg font-medium py-2 hover:text-[#FF69B4] transition'>
            Contact
          </li>
        </a>
      </ul>

      {/* Hamburger / Close Icon */}
      <div className='md:hidden z-50'>
        {menu ? (
          <RiCloseLine
            size={30}
            className='text-[#FF69B4] cursor-pointer'
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className='text-[#FF69B4] cursor-pointer'
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
