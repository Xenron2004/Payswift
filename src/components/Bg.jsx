import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const Bg = () => {
  return (
    <div className="flex max-w-[1280px] mt-4 border-t border-dotted border-gray-300 pt-2 w-11/12 items-center justify-between text-[#212B36] text-[14px] font-sans font-regular ">
      <div>
        Designed and developed by{" "}
        <a
          href="https://www.reevij.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0070F3] underline"
        >
          Reevij Solutions
        </a>
      </div>
      © 2024 Payswift Corp. All rights reserved
    </div>
  );
};

export default Bg;
