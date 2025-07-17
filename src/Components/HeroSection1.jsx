import { Link } from 'react-router-dom';
import { all } from '../assets/all';
import Button1 from '../Features/Button1';
import Navbar from './Navbar';

const HeroSection1 = () => {
  return (
    <div className="bg-[#0d2589] text-white font-sans rounded-4xl">
      <Navbar />

      <section className="max-w-7xl   rounded-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center">
          
          {/* Text Content */}
          <div>
          <div className="space-y-6 h-[200px] items-center  flex justify-center md:hidden bg-cover" style={{backgroundImage:`url(${all.Connect})`}}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight gap-5">
             Connected Workforce
            </h1>
            </div>
             <h1 className="text-3xl sm:text-4xl md:text-5xl md:pl-8 hidden md:block mx-1 my-5 font-bold leading-tight">
            Connected Workforce</h1>
            <p className="text-white/90 text-base sm:text-lg md:pl-5 px-4 py-4">
              Unlock the logic of retail with a suite of unified store solutions that use
              sophisticated AI and machine learning to plan, schedule and execute your
              retail strategy through a connected workforce.
            </p>
            
        <Link to="/demo"><button className=" lg:inline bg-white text-[#1233c1] text-sm hover:opacity-90 active:scale-95 transition-all w-40 md:h-11 h-12 mx-5 my-4 rounded-md font-bold">
          Request a Demo
        </button>
    </Link> 
          </div>

          {/* Image Content */}
          <div className=" md:h-[550px] hidden md:block rounded-xl overflow-hidden">
            <img
              src={all.Connect}
              alt="Connect"
              className="w-full h-[550px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection1;
