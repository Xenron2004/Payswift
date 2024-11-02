
// import React from "react";
// import Send from "../assets/send_receive.svg";
// import Regular from "../assets/Regular_analytics.svg";
// import Wallet from "../assets/Waller.svg";
// import Real from "../assets/Real_Info.svg";

// const Cards = () => {
//   return (
//     <div
//       style={{ backgroundColor: "rgba(211, 229, 248, 0.51)" }}
//       className="w-full py-10 flex justify-center items-center"
//     >
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px] w-11/12 items-center justify-between text-center lg:text-left">
//         <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
//           <img src={Send} alt="Send & Receive" />
//           <div className="font-sans text-[18px] font-regular leading-[32px]">
//             Send & Receive
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
//           <img src={Regular} alt="Regular Analytics" />
//           <div className="font-sans text-[18px] font-regular leading-[32px]">
//             Regular Analytics
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
//           <img src={Wallet} alt="Wallet" />
//           <div className="font-sans text-[18px] font-regular leading-[32px]">
//             Wallet
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
//           <img src={Real} alt="Real Time Info." />
//           <div className="font-sans text-[18px] font-regular leading-[32px]">
//             Real Time Info.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;









import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Send from "../assets/send_receive.svg";
import Regular from "../assets/Regular_analytics.svg";
import Wallet from "../assets/Waller.svg";
import Real from "../assets/Real_Info.svg";

const Cards = () => {
  // Ref and in-view detection for the section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={sectionRef}
      style={{ backgroundColor: "rgba(211, 229, 248, 0.51)" }}
      className="w-full py-10 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px] w-11/12 items-center justify-between text-center lg:text-left">
        {/* Card 1 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src={Send} alt="Send & Receive" />
          <div className="font-sans text-[18px] font-regular leading-[32px]">
            Send & Receive
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src={Regular} alt="Regular Analytics" />
          <div className="font-sans text-[18px] font-regular leading-[32px]">
            Regular Analytics
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={Wallet} alt="Wallet" />
          <div className="font-sans text-[18px] font-regular leading-[32px]">
            Wallet
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <img src={Real} alt="Real Time Info." />
          <div className="font-sans text-[18px] font-regular leading-[32px]">
            Real Time Info.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
