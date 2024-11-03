

import React from "react";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col gap-16 items-center py-3">
       <Helmet>
        <title>Payswift - Pricing</title>
        <meta name="description" content="Affordable pricing plans designed to fit your business needs. Choose from Basic, Pro, and Advanced plans." />
      </Helmet>
      <div className="flex flex-col gap-[10px] items-center justify-start">
        <div className="text-[16px] font-normal font-sans text-HeadingBlue">
          PRICING
        </div>
        <div className="font-sans font-medium text-[28px] md:text-[32px] text-center max-w-[590px] w-11/12">
          Helping innovative companies unlock their full potential.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        
        {/* Basic Plan */}
        <div className="flex flex-col items-start p-8 hover:scale-105 bg-pricingSection rounded-lg w-full max-w-[360px] transition-all duration-300 hover:bg-pricingPro hover:text-white group">
          <div className="bg-customBlue text-white font-sans text-[14px] rounded-[8px] font-medium px-4 py-[6px] mb-4">
            BASIC
          </div>
          <h3 className="text-4xl font-bold text-[#143454] group-hover:text-white mb-4">$100</h3>
          <p className="text-gray-600 text-start group-hover:text-white mb-6">
            Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
          </p>
          <h4 className="text-HeadingBlue font-semibold group-hover:text-white mb-4">FEATURES</h4>
          <ul className="text-gray-200 space-y-2 mb-8">
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Everything included in Basic
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Exchange up to $1MM per month
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Windows & macOS App
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Premium Support
            </li>
          </ul>
          <button className="bg-HeadingBlue text-white py-2 w-full px-6 rounded-lg hover:bg-[#99C6F2]">
            CONTACT US
          </button>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col items-start hover:scale-105 p-8 bg-pricingSection rounded-lg w-full max-w-[360px] transition-all duration-300 hover:bg-pricingPro hover:text-white group">
          <div className="bg-customBlue text-white font-medium px-4 py-[6px] rounded-[8px] mb-4">
            PRO
          </div>
          <h3 className="text-4xl font-bold text-[#143454] group-hover:text-white mb-4">$100</h3>
          <p className="text-gray-600 text-start group-hover:text-white mb-6">
            Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
          </p>
          <h4 className="text-HeadingBlue font-semibold group-hover:text-white mb-4">FEATURES</h4>
          <ul className="text-gray-200 space-y-2 mb-8">
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Everything included in Basic
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Exchange up to $1MM per month
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Windows & macOS App
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Premium Support
            </li>
          </ul>
          <button className="bg-HeadingBlue text-white py-2 w-full px-6 rounded-lg hover:bg-[#99C6F2]">
            CONTACT US
          </button>
        </div>

        {/* Advanced Plan */}
        <div className="flex flex-col items-start p-8 hover:scale-105 bg-pricingSection rounded-lg w-full max-w-[360px] transition-all duration-300 hover:bg-pricingPro hover:text-white group">
          <div className="bg-customBlue text-white font-sans text-[14px] font-medium px-4 py-[6px] rounded-[8px] mb-4">
            ADVANCED
          </div>
          <h3 className="text-4xl font-bold text-[#143454] group-hover:text-white mb-4">$100</h3>
          <p className="text-gray-600 text-start group-hover:text-white mb-6">
            Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
          </p>
          <h4 className="text-HeadingBlue font-semibold group-hover:text-white mb-4">FEATURES</h4>
          <ul className="text-gray-200 space-y-2 mb-8">
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Everything included in Basic
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Exchange up to $1MM per month
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Windows & macOS App
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-HeroBlue group-hover:before:bg-white font-sans font-regular text-[14px] text-[#474747] group-hover:text-white before:rounded-full before:w-2 before:h-2">
              Premium Support
            </li>
          </ul>
          <button className="bg-HeadingBlue text-white  py-2 w-full px-6 rounded-lg hover:bg-[#99C6F2]">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;



