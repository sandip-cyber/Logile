import { all } from '../assets/all';
import Button from '../Features/Button';
import Button1 from '../Features/Button1';
import Navbar from './Navbar';

const HeroSection1 = () => {
  return (
    <div>
      <section className="bg-[#0d2589] text-white text-sm font-sans rounded-[2rem] mx-auto overflow-hidden shadow-lg">
      <Navbar/>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
          
          {/* Left Content */}
          <div className="z-20 space-y-6 px-10">
            <h1 className="text-4xl md:text-6xl font-bold">
              Solutions Built for Retailers by Retailers
            </h1>

            <p className="hidden md:block text-slate-100 text-2xl max-w-xl">
              Unlock the logic of retail with a suite of unified store solutions that use
              sophisticated AI and machine learning to plan, schedule and execute your
              retail strategy through a connected workforce.
            </p>

            <div className="hidden md:block">
              <Button1 />
            </div>
          </div>

          {/* Right Content (Image) */}
          <div
            className="h-[600px] bg-cover bg-center rounded-[2rem] w-full"
            style={{
              backgroundImage: `url(${all.Connect})`,
            }}
          ></div>
        </div>

        {/* Mobile-only content */}
        <div className="md:hidden px-6 pb-8 space-y-4">
          <p className="text-slate-100 text-base font-semibold">
            Unlock the logic of retail with a suite of unified store solutions that use
            sophisticated AI and machine learning to plan, schedule and execute your
            retail strategy through a connected workforce.
          </p>
          <Button1 />
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection1;
