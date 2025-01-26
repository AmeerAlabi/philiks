import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ image, title, buttonText, onButtonClick, isButtonDisabled = false }) => {
  return (
    <div className="  w-full md:w-[400px] p-6 flex flex-col items-center gap-4 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full rounded-lg" />

      {/* Title and Button */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-[18px] text-black text-center font-medium">{title}</p>
        <Link to="/programs">
        <button
          className={`w-[100px] rounded-full h-[35px] text-white ${
            isButtonDisabled ? 'bg-black cursor-pointer ' : 'bg-black hover:bg-gray-800'
          }`}
          onClick={onButtonClick}
          disabled={isButtonDisabled}
        >
          {buttonText}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
