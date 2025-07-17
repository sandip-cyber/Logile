import React from "react";

const Component6 = () => {
  return (
    <div className="relative py-16">
      {/* Shadow layer */}
      <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none z-0">
        <div className="w-full max-w-6xl h-full rounded-[2rem] bg-[#170033] shadow-inner" />
      </div>

      {/* Main CTA Box */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-[#1233C1] text-white rounded-[2rem] border-[3px] border-black shadow-[10px_10px_0_0_#b3c0f8] px-6 md:px-12 py-12 text-center ">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
          Are You Ready for a Next-Level <br className="hidden md:block" />
          Customer Experience?
        </h2>

        <a
          href="https://www.logile.com/demo/"
          target="_self"
          className="inline-block px-6 py-3 bg-white text-[#1233C1] font-semibold text-lg rounded-xl shadow hover:bg-gray-100 transition"
        >
          Let&apos;s Talk
        </a>
      </div>
    </div>
  );
}

export default Component6;
