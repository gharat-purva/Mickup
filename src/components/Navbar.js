import React from 'react';
import { FaImage } from 'react-icons/fa';
import { FaCircleNotch, FaDiceFour, FaUserAlt, FaCalendarAlt, FaEnvelope, FaCog, FaPowerOff, FaBell, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      {/* Left side: Mickup text */}
      <div className="flex items-center space-x-4">
        <FaCircleNotch className="text-5xl text-purple" />
        <span className="text-xl font-semibold">Mickup</span>
      </div>

      {/* Right side: User info and icons */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center justify-center space-x-2 bg-purple p-2 rounded-xl w-28">
          <FaDiceFour className="" />  {/* Removed margin class */}
          <span>Home</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
          <FaUserAlt />
        </div>
        <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
          <FaCalendarAlt />
        </div>
        <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
          <FaCog />
        </div>
        <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
          <FaPowerOff />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
            <FaBell />
          </div>
          <FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" />
          <span>Nirmala Sari</span>
          <FaChevronDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
