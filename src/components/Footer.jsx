import React from "react";
import Logo from "../assets/Logo_light.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import Bg from "./Bg";

const Footer = () => {
  return (
    <div className="flex flex-wrap max-w-[1280px] gap-8 w-11/12 py-10 px-2 border-t justify-between">
      <div className="flex flex-col gap-2 ">
        {/* Logo section */}
        <img src={Logo} className="w-[106px] h-[20px]" alt="Payswift Logo" />
        <div className="font-sans font-medium text-[14px] max-w-[204px] w-full">4900 Hopyard Rd STE 100, Pleasanton, CA 94588</div>
      </div>

      <div className="flex flex-wrap   max-w-[500px] w-full    items-center justify-between">
        {/* Links */}
        <div className="flex flex-col ">
          {/* company */}
          <h3 className="text-gray-800 font-semibold text-center mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-center text-gray-600">
            {" "}
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                About Us
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Careers
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Press
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Blog
              </a>
            </li>{" "}
          </ul>
        </div>
        <div>
          {/* resources */}
          <h3 className="text-gray-800 font-semibold text-center mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-center text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Integration Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          {/* support */}
          <h3 className="text-gray-800 text-center font-semibold mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-center text-gray-600 ">
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-[14px] font-sans font-regular">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-w-[162px] w-full items-start">
        {/* social Links */}
        <div className="text-gray-800  text-center font-semibold mb-3">Social Links</div>
        <div className="flex flex-row  gap-4 justify-between ">
          <FaFacebookF className="hover:text-gray-800 cursor-pointer" />
          <FaTwitter className="hover:text-gray-800 cursor-pointer" />
          <FaGithub className="hover:text-gray-800 cursor-pointer" />
          <FaTelegramPlane className="hover:text-gray-800 cursor-pointer" />
          <FaInstagram className="hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
      <Bg/>
    
    </div>
   
  );
};

export default Footer;

// Footer.jsx
// import React from "react";
// import Logo from "../assets/Logo_light.svg";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaGithub,
//   FaTelegramPlane,
//   FaInstagram,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="max-w-[1280px] w-11/12 items-center justify-center py-10 px-4 border-t border-gray-200">
//       <div className="grid grid-cols-1 just sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Logo and Address Section */}
//         <div className="flex flex-col gap-4 items-start">
//           <img src={Logo} className="w-[106px] h-[20px]" alt="Payswift Logo" />
//           <div className="font-sans font-medium text-sm text-gray-600 max-w-[204px] w-full">
//             4900 Hopyard Rd STE 100, Pleasanton, CA 94588
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="flex flex-wrap sm:flex-nowrap gap-8 justify-between">
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
//             <ul className="space-y-2 text-gray-600 text-center sm:text-left">
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Press
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="text-gray-800 font-semibold mb-3">Resources</h3>
//             <ul className="space-y-2 text-gray-600 text-center sm:text-left">
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   API Reference
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Integration Partners
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="text-gray-800 font-semibold mb-3">Support</h3>
//             <ul className="space-y-2 text-gray-600 text-center sm:text-left">
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   FAQs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-800">
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Links Section */}
       
//           <div className=" flex flex-col items-center sm:items-start" >
//             <h3 className="text-gray-800 font-semibold mb-3">Social Links</h3>
//             <div className="flex space-x-4 text-gray-600">
//               <FaFacebookF className="hover:text-gray-800 cursor-pointer" />
//               <FaTwitter className="hover:text-gray-800 cursor-pointer" />
//               <FaGithub className="hover:text-gray-800 cursor-pointer" />
//               <FaTelegramPlane className="hover:text-gray-800 cursor-pointer" />
//               <FaInstagram className="hover:text-gray-800 cursor-pointer" />
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
