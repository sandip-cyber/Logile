import React from 'react'
import Ads from '../Components/Ads'
import HeroSection1 from '../Components/HeroSection1';
import Navbar from '../Components/Navbar';
import HeroSection3 from '../Components/HeroSection3';
import ContactForm from '../Components/ContactForm';
import Contact from '../Components/Content';
import Status from '../Features/Status';
import LogoGrid from '../Features/logogrid';
import Component5 from '../Components/Component5';
import Component6 from '../Components/Component6';
import Header2 from '../Features/Header2';
import VideoEmbed from '../Components/VideoEmbed';
import Article1 from '../Features/Article1';
import Footer from '../Components/Footer';

const Demo = () => {
  return (
    <>
    <div className="text-sm w-full px-8 ">
      <HeroSection3/>
      <Contact/>
      <Status/>
      <LogoGrid/>
      <Component5/>
      <Header2/>
      <VideoEmbed/>
      <Article1/>
      <Component6/>
      <Footer/>
</div>
      
  
    </>
  )
}

export default Demo;
