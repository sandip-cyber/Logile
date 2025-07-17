import Button from '../Features/Button';
import Button1 from '../Features/Button1';
import Navbar from './Navbar';

const HeroSection3 = () => {
  return (
    <div className="w-full">
      <section className="bg-[#0d2589] min-h-[400px] text-white font-sans rounded-[2rem]  md:mx-auto overflow-hidden shadow-lg">
        <Navbar />

        {/* Grid Content */}
        <div className="flex flex-col gap-8 justify-center items-center text-center mt-10">
          {/* Heading */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Request a Demo
          </h1>

          {/* Subheading */}
          <h2 className="text-lg md:text-2xl font-medium max-w-4xl px-2">
            Our dedicated team is committed to finding the right solutions to empower your retail business.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HeroSection3;
