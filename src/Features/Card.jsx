import React from 'react';

const Card = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-0 items-center bg-white rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden shadow-md">
        
        {/* Image Block */}
        <div className="h-full w-full">
          <img
            src="https://www.logile.com/wp-content/uploads/2024/11/iStock-1307933046.jpg"
            alt="Female customer buying sausage from deli counter in supermarket"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center space-y-4 border-l-4 border-[#1233c1]">
          <h3 className="text-3xl font-semibold text-[#14141f]">
            Increase Staff Productivity
          </h3>
          <p className="text-lg text-[#595964]">
            Easily configure labor plans based on store-specific attributes and local go-to-market objectives. Prioritize work queues based both on plans and real-time events. Help guide store associates to be in the right place at the right time doing the right things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
