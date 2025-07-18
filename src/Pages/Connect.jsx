import React from 'react'
import Ads from '../Components/Ads'
import Navbar from '../Components/Navbar'
import HeroSection1 from '../Components/HeroSection1'
import VideoEmbed from '../Components/VideoEmbed'
import Header from '../Features/Header'
import Card from '../Features/Card'
import Header1 from '../Features/Header1'
import Footer from '../Components/Footer'
import Component6 from '../Components/Component6'
import FeatureCard from '../Features/FeatureCard'
import Article from '../Features/Article'

const Connect = () => {
  return (
    <>
      <div class="text-sm w-full md:px-8 px-4 ">
    <HeroSection1/>
    <VideoEmbed/>
    <Article/>
    <Header/>
    <Card/>
    <Header1/>
    <FeatureCard/>
    <Component6/>
    </div>
    <Footer/>
    <div>
      
    </div>
    </>
  )
}

export default Connect
