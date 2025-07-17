import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import Component1 from '../Components/Component1.jsx'
import Ads from '../Components/Ads.jsx'
import Component2 from '../Components/Component2.jsx'
import Component3 from '../Components/Component3.jsx'
import Component4 from '../Components/Component4.jsx'
import Component5 from '../Components/Component5.jsx'
import Component6 from '../Components/Component6.jsx'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
const Home = () => {
  return (
    <>
      <div className="text-sm w-full px-8 ">
    <HeroSection/>
    <Component1/>
    <Component2/>
    <Component3/>
    <Component4/>
    <Component5/>
    <Component6/>
    <Footer/>
    
    </div>
    </>
  )
  
}

export default Home
