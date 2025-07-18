
import { Link } from 'react-router-dom';
import { all, logos } from '../assets/all';
import Button from '../Features/Button';
import Button1 from '../Features/Button1';
import Navbar from './Navbar';
const HeroSection = () => {
    

    
  return (
    
    <div className="">
    <section className="flex flex-col bg-[#1233c1] text-white pb-1 text-sm  font-sans border rounded-4xl   overflow-hidden shadow-lg ">
    <Navbar/>

    <div className="flex justify-center text-left w-full min-h-auto bg-cover  text-white rounded-4xl " style={{backgroundImage:`url(${all.herosec})`}}>
     
<div className=" bg-[#1233c1]/10  bg-opacity-50 w-auto rounded-xl p-6
 ">
       
     <h1
    className=" text-4xl md:text-6xl font-bold md:mr-60 md:pl-14 relative md:top-8 z-20 md:pr-50">
       Solutions Built for Retailers by Retailers
    </h1> 
    
    <p className= "hidden md:block  text-slate-100  md:text-left max-md:px-1 text-left max-w-xl pl-15 mt-15  ">
        <span className="md:text-2xl ">
        Unlock the logic of retail with a suite of unified store solutions that use sophisticated AI and machine learning to plan, schedule and execute your retail strategy through a connected workforce.
    </span>
    </p>
<div className="ml-10 mt-8 mb-14">
     <Link to="/demo"><button className=" lg:inline bg-white hidden md:block text-[#1233c1] text-sm hover:opacity-90 active:scale-95 transition-all w-40 md:h-11 h-12 mx-5 my-4 rounded-md font-bold">
          Request a Demo
        </button>
    </Link>
    

</div>
</div>
     </div>
    
    

    <div className="block md:hidden sm:bg-blue-900 md:bg-blue-900">
    <p className="text-slate-100 md:text-base max-md:px-5 font-semibold  text-left max-w-xl py-5">
        Unlock the logic of retail with a suite of unified store solutions that use sophisticated AI and machine learning to plan, schedule and execute your retail strategy through a connected workforce.
    </p>
         <Link to="/demo"><button className=" lg:inline bg-white  md:hidden text-[#1233c1] text-sm hover:opacity-90 active:scale-95 transition-all w-40 md:h-11 h-12 mx-5 my-4 rounded-md font-bold">
          Request a Demo
        </button>
    </Link>
   
</div>

{/* Company logo scroll */}

    <div className="overflow-hidden w-full relative max-w-full mx-auto select-none mt-0">
        <div
            className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none to-transparent">
        </div>

        <div className="marquee-inner flex will-change-transform min-w-[200%]">
            <div className="flex py-3">
                 {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-8 w-auto mx-6 grayscale hover:grayscale-0 transition"
          />
        ))}
            </div>
        </div>

    
    </div>
</section>
 <div className=' flex items-center justify-center  '>
        <Link to="/customers"> <button
         className=" bg-white hover:bg-[#1233c1] text-[#1233c1] border-[#1233c1] hover:text-white border-2  mt-6 inline text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-xl">
         See More Customers
         
     </button>
     </Link>
     </div>
</div>
  )
}

export default HeroSection
