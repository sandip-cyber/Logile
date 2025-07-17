import React from "react";

const stats = [
  {
    number: "~40%",
    label: "improvement in productivity",
    bgColor: "bg-blue-500",
  },
  {
    number: "25%",
    label: "reduction in overtime hours",
    bgColor: "bg-orange-400",
  },
  {
    number: "31%",
    label: "decrease in turnover",
    bgColor: "bg-pink-400",
  },
];

const Status = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-900 px-5">
        A Store Operations Platform That Unifies People, Process and Performance 
      </h2>
      <p className="mt-2 max-w-xl mx-auto text-gray-700">
        Connect your teams with the tools and intelligence they need—from the back office to the store floor.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 ${stat.bgColor} text-white transition-transform duration-300 hover:scale-105`}
          >
            <strong className="text-4xl font-bold block">{stat.number}</strong>
            <span className="mt-2 block text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Status;