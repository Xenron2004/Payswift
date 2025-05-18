import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Transactions from './Transactions'
import HowItWorks from './HowItWorks'
import FuturePayment from './FuturePayment'
import Mission from './Mission'
import Cards from './Cards'
import Pricing from './Pricing'
import TryNow from './TryNow'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div className='flex flex-col bg-HeroBlue  gap-[100px] items-center  h-[900px] '>
      <Helmet>
        <title>Payswift - Home</title>
        <meta name="description" content="Explore the features and pricing of our platform to see how it can support your business growth." />
      </Helmet>
      <Navbar/>
      <Hero/>
      <Transactions/>
      <HowItWorks/>
      <FuturePayment/>
      <Mission/>
      <Cards/>
      <Pricing/>
      <TryNow/>
      <Footer/>
    </div>
  )
}

export default Home









// import React, { useEffect, useRef } from 'react';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import Transactions from './Transactions';
// import HowItWorks from './HowItWorks';
// import FuturePayment from './FuturePayment';
// import Mission from './Mission';
// import Cards from './Cards';
// import Pricing from './Pricing';
// import TryNow from './TryNow';
// import Footer from './Footer';
// import { Helmet } from 'react-helmet';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// // const Home = () => {
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     // Initialize Locomotive Scroll
// //     const scroll = new LocomotiveScroll({
// //       el: scrollRef.current,
// //       smooth: true,
// //       lerp: 0.1, // Adjust the easing for smoothness
// //     });

// //     // Cleanup on component unmount
// //     return () => {
// //       scroll.destroy();
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <Helmet>
// //         <title>Payswift - Home</title>
// //         <meta
// //           name="description"
// //           content="Explore the features and pricing of our platform to see how it can support your business growth."
// //         />
// //       </Helmet>

// //       <div
// //         ref={scrollRef}
// //         data-scroll-container
// //         className="bg-HeroBlue flex flex-col gap-[100px] items-center"
// //       >
// //         <Navbar />
// //         <div data-scroll-section>
// //           <Hero />
// //         </div>
// //         <div data-scroll-section>
// //           <Transactions />
// //         </div>
// //         <div data-scroll-section>
// //           <HowItWorks />
// //         </div>
// //         <div data-scroll-section>
// //           <FuturePayment />
// //         </div>
// //         <div data-scroll-section>
// //           <Mission />
// //         </div>
// //         <div data-scroll-section>
// //           <Cards />
// //         </div>
// //         <div data-scroll-section>
// //           <Pricing />
// //         </div>
// //         <div data-scroll-section>
// //           <TryNow />
// //         </div>
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;




