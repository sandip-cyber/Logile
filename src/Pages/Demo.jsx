import React from 'react'
import HeroSection3 from '../Components/HeroSection3';
import Contact from '../Components/Content';
import Status from '../Features/Status';
import Component5 from '../Components/Component5';
import Component6 from '../Components/Component6';
import Header2 from '../Features/Header2';
import VideoEmbed from '../Components/VideoEmbed';
import Article1 from '../Features/Article1';
import Footer from '../Components/Footer';
import BrandLogo from '../Features/BrandLogo';

const Demo = () => {
  return (
    <>
    <div className="text-sm w-full md:px-8  px-4">
      <HeroSection3/>
      <Contact/>
      <Status/>
      <BrandLogo/>
      <Component5/>
      <Header2/>
      <VideoEmbed/>
      <Article1/>
      <Component6/>
</div>
      <Footer/>
      
  
    </>
  )
}

export default Demo;
