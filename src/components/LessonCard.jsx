import React from 'react';

const LessonCard = ({ image, title, buttonText, link }) => {
  return (
    <div className="w-full md:w-[400px] p-6 flex flex-col items-center gap-4 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full rounded-lg" />

      {/* Title and Button */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-[18px] text-black text-center font-medium">{title}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center">
          Learn more about this lesson by clicking the button below.
        </p>

        {/* Button */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-[100px] rounded-full h-[35px] bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default LessonCard;
