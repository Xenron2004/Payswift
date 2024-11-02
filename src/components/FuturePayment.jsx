

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import One from "../assets/one.svg";
import Two from "../assets/two.svg";
import Three from "../assets/three.svg";

const FuturePayment = () => {
  // Ref and in-view detection for the entire section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={sectionRef} className="w-full bg-[#0D1E32] flex justify-center py-16">
      <div className="max-w-[1280px] w-full px-4">
        {/* Header section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#99C6F2] font-sans text-xs tracking-wide mb-2">
            FUTURE PAYMENT
          </p>
          <p className="text-white max-w-[745px] w-full font-sans font-medium text-[28px] md:text-[36px] md:text-4xl tracking-[0.36px] leading-[43.2px]">
            Boost your earnings with a Reserve account that helps you grow your
            savings
          </p>
        </motion.div>

        {/* Three cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-start bg-[#17314C] p-6 rounded-[10px]"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={One} alt="Free Transfers Icon" className="mb-4" />
            <h3 className="font-sans font-semibold text-lg text-white mb-2">
              Open your account
            </h3>
            <p className="text-[14px] max-w-[312px] w-full font-sans font-regular text-[#d7d7d7] leading-relaxed">
              Sign up to PaySwift and set up your account from the dashboard.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-start bg-[#17314C] p-6 rounded-[10px]"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={Two} alt="Free Transfers Icon" className="mb-4" />
            <h3 className="font-sans font-semibold text-lg text-white mb-2">
              Transfer your money
            </h3>
            <p className="text-[14px] max-w-[312px] w-full font-sans font-regular text-[#d7d7d7] leading-relaxed">
              Move money from another account into start to earning up.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-start bg-[#17314C] p-6 rounded-[10px]"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src={Three} alt="Free Transfers Icon" className="mb-4" />
            <h3 className="font-sans font-semibold text-lg text-white mb-2">
              Watch your balance grow
            </h3>
            <p className="text-[14px] max-w-[312px] w-full font-sans font-regular text-[#d7d7d7] leading-relaxed">
              Accessed instantly and remain insulated from market volatility.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FuturePayment;
