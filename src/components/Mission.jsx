

import React from "react";
import { Helmet } from "react-helmet";


const Mission = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center max-w-[668px] w-full h-auto px-4">
       <Helmet>
        <title>Payswift - Our Mission</title>
        <meta name="description" content="Our mission is to support innovative companies by providing robust solutions for growth and financial efficiency." />
      </Helmet>
      <div className="flex flex-col gap-4 items-center text-center">
        <div className="text-HeadingBlue font-sans font-regular text-[16px]">
          OUR MISSION
        </div>
        <div className="font-sans font-medium text-center max-w-[540px] w-full text-[28px]  md:text-[32px]">
          We've supported forward-thinking companies
        </div>
        <p className="font-sans font-regular tracking-[0.36px] leading-[21px] text-[#474747]">
          Businesses of all sizes and industries have achieved significant
          improvements with our support.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[668px] items-center text-center">
        <div className="flex flex-col gap-2">
          <p className="font-sans font-medium text-[48px]">38%</p>
          <p className="font-sans font-medium text-[15px] text-[#363636]">
            Revenue Business
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sans font-medium text-[48px]">300K</p>
          <p className="font-sans font-medium text-[15px] text-[#363636]">
            In annual revenue
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sans font-medium text-[48px]">29+</p>
          <p className="font-sans font-medium text-[15px] text-[#363636]">
            Months of runway
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

