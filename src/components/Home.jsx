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

const Home = () => {
  return (
    <div className='flex flex-col bg-HeroBlue  gap-[100px] items-center  h-[900px] '>
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
