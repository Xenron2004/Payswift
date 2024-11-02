import React from "react";
import { MdArrowOutward } from "react-icons/md";

const EmailInput = () => {
  return (
    <div className="flex border rounded-lg border-[#8BB3DB] justify-between px-1 items-center">
      <input
        type="email"
        placeholder="Your email address"
        className=" bg-HeroBlue rounded-[8px] p-2 h-[50px] max-w-[466px] text-[15px] font-sans font-regular text-[#ACACAC] w-full  focus:outline-none focus:border-blue-500 transition duration-200"
      />
        <button className="bg-[#3068A1] h-[42px] hover:bg-blue-700 max-w-[150px] w-full flex items-center  justify-center gap-3 text-white font-normal py-2 px-4 rounded-lg">
        Get Started
        <MdArrowOutward width={22} height={22} />
      </button>
    
    </div>
  );
};

export default EmailInput;
