import React from "react";
import { logosgrids } from "../assets/all";

const BrandLogoCustomer = () => {
  return (
    <section className="py-20 bg-white ScrollEffect">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-4">
          Helping retailers worldwide achieve real-time adaptability and unparalleled efficiency
        </h2>
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-8">
          {logosgrids.map((logo, index) => (
            <li key={index} className="flex justify-center">
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${logo.alt} - this link opens in a new tab`}
                className="block w-full max-w-[100px] bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain mx-auto"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandLogoCustomer;
