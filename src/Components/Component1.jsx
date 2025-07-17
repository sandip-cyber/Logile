import { useState } from "react";
import { solution } from "../assets/all";

const Component1 = () => {
  const [active, setActive] = useState("plan");
  const activeItem = solution.find((item) => item.id === active);

  return (
    <div className="px-6 md:px-10 lg:px-20 py-12">
      {/* Headings */}
      <h2 className="text-2xl font-bold text-center mb-6 lg:hidden">
        We know retail.
        <br />
        We live store operations.
      </h2>
      <h2 className="hidden lg:block text-4xl font-bold text-center mb-10">
        We know retail.
        <br />
        We live store operations.
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Icons Grid */}
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 place-items-center">
          {solution.map((item) => (
            <li key={item.id} className="text-center">
              <button
                onClick={() => setActive(item.id)}
                className={`w-16 h-16 sm:w-20 sm:h-20 border-4 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                  active === item.id
                    ? `${item.textColor} ${item.bordercol} border-current`
                    : "border-gray-300 bg-white"
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} Icon`}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </button>
              <span
                className={`block mt-2 text-xs sm:text-sm font-medium ${
                  active === item.id ? item.textColor : "text-gray-700"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Content Panel */}
        <div className="relative w-full mt-10 lg:mt-0">
          {/* Background layer */}
          <div
            className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] ${
              activeItem.bgcol || "bg-gray-200"
            } z-0`}
          ></div>

          {/* Main Card */}
          <div
            className={`relative z-10 rounded-[2rem] transition-all duration-500 p-6 border border-black bg-white ${activeItem.bordercol} shadow-md`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${activeItem.textColor}`}
              >
                {activeItem.label}
              </h3>
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 border-4 rounded-full flex items-center justify-center ${activeItem.textColor} ${activeItem.bordercol} border-current`}
              >
                <img
                  src={activeItem.icon}
                  alt={`${activeItem.label} Icon`}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>
            </div>

            <p className="mb-6 text-sm sm:text-base leading-relaxed text-left">
              {activeItem.content}
            </p>

            <a
              href={activeItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-5 py-2 text-white font-medium rounded-lg transition duration-300 ${activeItem.buttonColor}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;