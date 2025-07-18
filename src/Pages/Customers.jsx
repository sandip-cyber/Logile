import React from 'react'
import CustomerHerosec from '../Components/CustomerHerosec'
import BrandLogoCustomer from '../Features/BrandLogoCustomer'
import Component5 from '../Components/Component5'
import Footer from '../Components/Footer'

const Customers = () => {
  return (
    <>
    <div class="text-sm w-full md:px-8 px-4 ">
      <CustomerHerosec/>
        <BrandLogoCustomer/>
        </div>
        <div>
        <Component5/>
        <Footer/>
    </div>
    </>
  )
}

export default Customers
