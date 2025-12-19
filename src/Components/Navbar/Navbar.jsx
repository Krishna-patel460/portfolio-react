import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50
                 bg-[#5B2D8B] text-white
                 px-6 md:px-20 py-4
                 flex items-center justify-between shadow-md"
    >
      {/* LEFT: Logo */}
      <span className="text-xl md:text-2xl font-bold text-[#FF69B4]">
        Portfolio
      </span>

      {/* RIGHT: Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        <li><a href="#About" className="hover:text-[#FF69B4]">About</a></li>
        <li><a href="#Education" className="hover:text-[#FF69B4]">Education</a></li>
        <li><a href="#Skills" className="hover:text-[#FF69B4]">Skills</a></li>
        <li><a href="#Projects" className="hover:text-[#FF69B4]">Projects</a></li>
        <li><a href="#Footer" className="hover:text-[#FF69B4]">Contact</a></li>
      </ul>

      {/* RIGHT: Mobile Menu Icon */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="text-[#FF69B4] cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="text-[#FF69B4] cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="absolute top-16 right-6 w-48 bg-white text-[#2E2E2E]
                       rounded-xl shadow-lg p-4 md:hidden">
          <li className="py-2"><a href="#About">About</a></li>
          <li className="py-2"><a href="#Education">Education</a></li>
          <li className="py-2"><a href="#Skills">Skills</a></li>
          <li className="py-2"><a href="#Projects">Projects</a></li>
          <li className="py-2"><a href="#Footer">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;




