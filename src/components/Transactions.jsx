import React from "react";
import freeTrial from "../assets/Free Trial - iconSvg.co.svg";
import DiverseAcc from "../assets/User Account - iconSvg.co.svg";
import Security from "../assets/Notebook Security - iconSvg.co.svg";

const Transactions = () => {
  return (
    <div className="bg-white max-w-[1280px] w-11/12 shadow-custom-light rounded-20  px-[60px] py-[60px] items-center justify-center ">
      <div className="flex flex-col gap-[60px] ">
        <div className="flex flex-col  gap-[10px]">
          <div className="text-HeadingBlue text-[14px] font-sans font-regular">
            INNOVATIVE TRANSCATIONS
          </div>
          <div className="flex flex-col space-y-3 md:flex-row justify-between space-x-2 items-center">
            <div className="font-sans font-medium w-full md:max-w-[381px] text-[24px] md:text-[30px] lg:text-[36px] ">
              Experience that grows with your scale.
            </div>
            <div className="text-[14px] font-sans font-regular w-full md:max-w-[442px] text-[#474747]">
              Build a customized financial system tailored to your business
              needs, ensuring streamlined cash flow management and enhanced
              financial performance.
            </div>
          </div>
        </div>

        {/* three cards */}

        <div className="grid grid-cols-1 gap-8 items-center justify-between md:grid-cols-2 lg:grid-cols-3">
          {/* card1 */}
          <div className="flex flex-col gap-6">
            <div className="">
              <img src={freeTrial} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-medium text-[16px] ">
                Free Transfers
              </div>
              <div className="text-[14px] w-full md:max-w-[312px]  font-sans text-[#474747]  font-regular tracking-[0.36px] leading-[21px] ">
                Design financial solutions that streamline your experience by
                automating repeat purchases through scheduled payments.
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="flex flex-col gap-6">
            <div className="">
              <img src={DiverseAcc} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-medium text-[16px] ">
                Diverse Accounts
              </div>
              <div className="text-[14px] text-[#474747] w-full md:max-w-[312px] font-sans font-regular tracking-[0.36px] leading-[21px] ">
                Design financial solutions that streamline your experience by
                automating repeat purchases through scheduled payments.
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="flex flex-col gap-6">
            <div className="">
              <img src={Security} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-medium text-[16px] ">
                Unrivaled Security
              </div>
              <div className=" text-[14px] w-full md:max-w-[312px]  text-[#474747] font-sans font-regular tracking-[0.36px] leading-[21px] ">
                Design financial solutions that streamline your experience by
                automating repeat purchases through scheduled payments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
