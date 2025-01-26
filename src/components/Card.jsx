import React from 'react';
import crd1 from '../Assets/Images/crd1.png';
import check from '../Assets/Images/check-badge.png';

const Card = ({ title, description, image, features }) => {
  return (
    <div className="flex flex-col p-[30px] bg-white shadow-lg rounded-2xl w-full max-w-[600px] h-auto border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Title */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#000] to-[#F24C3D] text-transparent bg-clip-text mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-lg font-medium text-gray-600 mb-6">
        {description}
      </p>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="rounded-lg object-cover w-full h-[300px] mb-6"
      />

      {/* Features */}
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <img src={check} alt="Check" className="w-6 h-6" />
            <h3 className="text-lg font-medium text-gray-800">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Card
