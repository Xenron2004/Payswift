
import React, { useState } from "react";
import logo from "../assets/Logo_Payswift.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center mt-[30px] py-[20px] px-10 rounded-40 bg-[#143454] border border-[#8BB3DB] max-w-[1300px] w-11/12 h-[72px] mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Payswift Logo" className="h-8 w-auto" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Close Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636a1 1 0 00-1.414 1.414L10.414 13l6.536 6.536a1 1 0 001.414-1.414L12.828 13l5.536-5.536a1 1 0 000-1.414z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Hamburger Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links for Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <div className="font-sans text-white font-normal">How it works</div>
        <div className="font-sans text-white font-normal">Customers</div>
        <div className="font-sans text-white font-normal">Pricing</div>
        <div className="font-sans text-white font-normal">Learn</div>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-2">
        <button className="w-[100px] h-[42px] text-white border rounded-lg">Login</button>
        <button className="w-[100px] h-[42px] rounded-lg text-white bg-[#3068A1]">Sign Up</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#143454] p-6 md:hidden flex flex-col items-start gap-6">
          {/* Nav Links */}
          <div className="font-sans text-white font-normal">Products</div>
          <div className="font-sans text-white font-normal">Customers</div>
          <div className="font-sans text-white font-normal">Pricing</div>
          <div className="font-sans text-white font-normal">Learn</div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full mt-4">
            <button className="w-full h-[42px] text-white border rounded-lg">Login</button>
            <button className="w-full h-[42px] rounded-lg text-white bg-[#3068A1]">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
