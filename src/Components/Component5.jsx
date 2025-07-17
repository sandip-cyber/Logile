import React from "react";
import { testimonials } from "../assets/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const Component5 = () => {
  return (
    <div
      className="relative w-full px-4 py-10 bg-cover bg-center ScrollEffect"
      style={{
        backgroundImage:
          "url('https://www.logile.com/wp-content/uploads/2024/10/clothing-store-blur.jpg')",
      }}
    >
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        slidesPerView={1}
        className="relative"
      >
        {testimonials.map(({ logo, bgColor, quote, author, title }, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg backdrop-blur-md bg-white/70 max-w-4xl mx-auto">
              {/* Logo section */}
              <div
                className="flex items-center justify-center p-8 md:w-1/3 w-full"
                style={{ backgroundColor: bgColor }}
              >
                <div className="rounded-full border-4 border-gray-300 p-4 bg-white flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`${author} logo`}
                    className="max-w-[120px] max-h-[120px] object-contain"
                  />
                </div>
              </div>

              {/* Testimonial text */}
              <div className="p-8 md:w-2/3 w-full flex flex-col justify-center text-center md:text-left">
                <p className="text-gray-900 text-lg leading-relaxed mb-6">{`“${quote}”`}</p>
                <p className="font-bold text-gray-900">{author}</p>
                <p className="font-semibold text-gray-700">{title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Arrows */}
        <button
          className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-100 transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </Swiper>
    </div>
  );
}

export default Component5;