import React from "react";
import profitGraph from "../assets/Total_Profit.svg";
import Withdraw from "../assets/Instant_withdraw.svg";
import assetGraph from "../assets/Asset_graph.svg";

const HowItWorks = () => {
  return (
    <div className="flex flex-col max-w-[1102px] gap-[32px] w-full items-center">
      <div className="flex flex-col items-center justify-center gap-[14px]">
        <div className="text-[14px] text-HeadingBlue font-sans font-regular">
          WHY US
        </div>
        <div className="font-sans font-medium text-[28px] md:text-[32px] ">
          Why they prefer Payswift
        </div>
      </div>

      <div className="flex max-w-[1102px] w-full md:w-11/12 items-center gap-8 flex-col md:flex-row mx-auto    justify-between ">
        {/* image1 */}
        <div className="bg-extraLightBlue flex flex-col gap-[25px] rounded-[16px] max-w-[540px] w-11/12 h-full max-h-[311px] p-[30px]">
          <div className="flex justify-between flex-col md:flex-row gap-[24px] md:gap-[100px] lg:gap-[152px]  items-center">
            <div className="font-sans font-bold text-[48px] hidden md:block md:text-[64px] text-HeadingBlue">
              3k+
            </div>
            <div>
              <img src={profitGraph} alt="" />
            </div>
          </div>
          <div className="font-sans font-medium  text-[24px] max-w-[332px] w-full tracking-[0.36px] leading-[36px]">
            Businesses already running on Payswift
          </div>
        </div>

        {/* image2 */}
        <div className="flex flex-col  gap-[44px] rounded-[16px] justify-center bg-extraLightBlue max-w-[540px] w-11/12 h-full max-h-[311px] p-[36px]">
          <p className="font-sans font-medium text-[24px] tracking-[0.36px] max-w-[332px] w-full  leading-[36px]">
            Instant withdraw your funds at any time
          </p>
          <div className="flex items-center justify-center">
            <img src={Withdraw} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-[1102px] gap-4 gap-y-0 w-11/12 max-h-[405px] h-auto   p-[36px] justify-between bg-extraLightBlue rounded-[16px]">
        <div className="flex flex-col gap-[14px]">
          <p className="font-sans font-medium text-[24px] tracking-[0.36px] leading-[36px]">
            No asset volatility
          </p>
          <p className="font-sans font-regular hidden md:block text-[14px] text-[#474747] max-w-[312px] w-full tracking-[0.36px] ">
            Generate returns on your cash reserves without making any
            investments
          </p>
        </div>
        <div className="max-w-[605px] relative mt-[36px] aspect-auto lg:mt-[56px] w-full h-auto">
          <img src={assetGraph} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

// import React from "react";
// import profitGraph from "../assets/Total_Profit.svg";
// import Withdraw from "../assets/Instant_withdraw.svg";
// import assetGraph from "../assets/Asset_graph.svg";

// const HowItWorks = () => {
//   return (
//     <div className="flex flex-col max-w-[1102px] w-full items-center mx-auto gap-8 px-4 md:px-8">
//       {/* Heading Section */}
//       <div className="text-center space-y-3">
//         <p className="text-sm text-HeadingBlue font-sans">WHY US</p>
//         <h2 className="font-sans font-medium text-2xl md:text-3xl">
//           Why they prefer Payswift
//         </h2>
//       </div>

//       {/* Cards Section */}
//       <div className="flex flex-col md:flex-row gap-6 w-full items-center justify-between">
//         {/* Card 1 */}
//         <div className="bg-extraLightBlue flex flex-col gap-6 rounded-lg  w-full max-w-[540px] h-full max-h[311px] p-6 md:p-8">
//           <div className="flex justify-between items-center">
//             <span className="text-4xl md:text-5xl font-bold text-HeadingBlue">3k+</span>
//             <img src={profitGraph} alt="Profit Graph" className="w-20 md:w-24" />
//           </div>
//           <p className="font-sans font-medium text-lg md:text-xl leading-7">
//             Businesses already running on Payswift
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-extraLightBlue flex flex-col gap-8 rounded-lg w-full max-w-md p-6 md:p-8 text-center md:text-left">
//           <p className="font-sans font-medium text-lg md:text-xl leading-7">
//             Instant withdraw your funds at any time
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <img src={Withdraw} alt="Instant Withdraw" className="w-20 md:w-24" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-extraLightBlue flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between w-full rounded-lg p-6 md:p-8 max-w-[1102px]">
//         <div className="flex flex-col space-y-2 md:space-y-3">
//           <h3 className="font-sans font-medium text-lg md:text-xl leading-7">No asset volatility</h3>
//           <p className="font-sans text-sm text-gray-600 max-w-sm">
//             Generate returns on your cash reserves without making any investments
//           </p>
//         </div>
//         <div className="w-full md:max-w-[605px] mt-4 md:mt-0">
//           <img src={assetGraph} alt="Asset Graph" className="w-full h-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;
