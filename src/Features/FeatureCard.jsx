import React from 'react';
import { features } from '../assets/all';

const FeatureCard = () => {
  return (
    <div className="w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg border p-5 gap-5"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-28 h-28 object-cover rounded-md shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              <a
                href={feature.href}
                className="mt-3 inline-block text-blue-600 font-medium hover:underline"
              >
                {feature.link} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
