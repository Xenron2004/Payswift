
import React from "react";
import HeroImg from "../assets/Hero_Img.svg";
import EmailInput from "./Emailinput";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse mx-auto mt-[-30px] lg:flex-row items-center justify-between max-w-[1280px] w-11/12 h-auto">
        <Helmet>
        <title>Payswift - Get Paid Faster</title>
        <meta name="description" content="Get paid faster and save easily with our all-in-one payment and savings solution for businesses." />
      </Helmet>
      {/* Left section */}
      <motion.div className="flex flex-col gap-[32px]">
        
        {/* Heading */}
        <motion.div
          initial={{ x: "-30%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <span className="font-sans text-white font-bold text-[36px] md:text-[48px] lg:text-[54px]">
            Get Paid Faster
          </span>
          <br />
          <span className="font-sans text-white font-semibold text-[36px] md:text-[48px] lg:text-[54px]">
            Save Easily
          </span>
          <br />
          <span className="font-sans text-white font-semibold text-[36px] md:text-[48px] lg:text-[54px]">
            Keep your Pay
          </span>
        </motion.div>
        
        {/* Description */}
        <motion.p
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[16px] mt-[20px] text-center md:text-start md:mt-0 tracking-[0.36px] font-sans text-[#D9D9D9] font-regular w-full max-w-[517px] text-wrap"
        >
          Empowers small businesses with straightforward invoicing, robust
          integrations, and efficient cash flow management solutions
        </motion.p>
        
        {/* Input Box */}
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <EmailInput />
        </motion.div>

      </motion.div>

      {/* Right section (Image) */}
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <img
          src={HeroImg}
          className="h-auto w-full max-w-[430px] md:max-w-[650px]"
          alt="Hero"
        />
      </motion.div>
      
    </div>
  );
};

export default Hero;
