import React from "react";
import { cards } from "../assets/all";


const Component3 = () => {
  return (
    <section className="bg-[#1355ea] px-4 py-14 relative -z-20 -mt-10 ScrollEffect">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          We&apos;re transforming the <br className="sm:hidden" /> retail
          landscape
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Desktop: Image on top */}
            <img
              src={card.image}
              alt={card.title}
              className="hidden md:block w-full h-48 object-cover"
            />

            {/* Mobile: Flex row layout */}
            <div className="flex md:block p-5 items-start gap-4">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-sm text-[#2d1b64] border border-[#2d1b64] px-3 py-1 rounded uppercase font-semibold mb-3">
                  <i className={card.icon}></i>
                  {card.tag}
                </div>

                <hr className="border-[#2d1b64] my-2 md:hidden" />

                <h3 className="text-[#1d1d1f] font-bold text-base leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Mobile only image on right */}
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-16 object-cover rounded-md flex-shrink-0 md:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Component3;