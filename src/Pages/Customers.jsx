import React from 'react'
import CustomerHerosec from '../Components/CustomerHerosec'
import BrandLogoCustomer from '../Features/BrandLogoCustomer'
import Footer from '../Components/Footer'
import CardSlide from '../Components/CardSlide'

const Customers = () => {
  return (
    <>
    <div class="text-sm w-full md:px-8 px-4 ">
      <CustomerHerosec/>
        <BrandLogoCustomer/>
        </div>
        <div>
        <CardSlide/>
        <Footer/>
    </div>
    </>
  )
}

export default Customers
