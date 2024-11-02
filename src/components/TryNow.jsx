import React from "react";

const TryNow = () => {
  return (
    <div className="flex flex-col gap-[24px] lg:flex-row max-w-[1280px] items-center p-8 lg:p-16  justify-between w-11/12 rounded-20  bg-HeroBlue h-auto ">
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col items-center lg:items-start gap-[10px] ">
          <div className="text-[14px] font-sans text-[#99C6F2] font-regular ">TRY NOW</div>
          <div className="font-sans font-medium text-white text-[32px] text-center lg:text-start max-w-[538px] w-full ">
            Elevate your payment experience to the next level?
          </div>
        </div>
        <div className="font-sans font-regular text-center lg:text-start max-w-[545px] w-full leading-[21px] tracking-[0.36px] text-[14px] text-[#D9D9D9]">
          Helping small businesses streamline invoicing, integrate with ease,
          and manage cash flow effortlessly.
        </div>
      </div>

      <div className="flex max-w-[300px] w-full  gap-2 mt-4">
        <button className="w-full max-w-[150px]  h-[42px] rounded-lg text-white bg-[#3068A1]">
          Get Started
        </button>
        <button className="w-full max-w-[150px] h-[42px] text-white border rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TryNow;
