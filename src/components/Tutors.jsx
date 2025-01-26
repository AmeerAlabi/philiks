import React from 'react';
import pic from '../Assets/Images/tutors.png';

const Tutors = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 p-5 items-center w-full h-auto bg-[#DDF8F5]">
      {/* Image Section */}
      <img
        src={pic}
        alt="Tutors"
        className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] object-cover"
      />

      {/* Text Section */}
      <div className="flex flex-col max-w-[500px] text-center md:text-left">
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-[#22A699]">
          The best tutors from around the world
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#808080] mt-4">
          Our network of global experts ensures that you receive personalized
          guidance tailored to your unique learning needs.
        </p>
      </div>
    </div>
  );
};

export default Tutors;
