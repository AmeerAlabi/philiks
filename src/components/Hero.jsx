import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pic from '../Assets/Images/herot.png';
import pic2 from '../Assets/Images/hero-2.png';

const Hero = () => {
  return (
    <div className="mt-[20px] flex flex-col lg:flex-row gap-[20px] p-5 items-center lg:items-start">
      {/* 1st Section */}
      <div className="w-full lg:w-[551px] flex flex-col p-5">
        {/* Tagline */}
        <div className="flex gap-[10px] p-[10px] cursor-not-allowed bg-[#ddf8f5] w-full max-w-[320px] h-[46px] rounded-[32px] justify-center items-center">
          <div className="flex  items-center justify-center w-[48px] h-[32px] text-black bg-white p-3 rounded-full">
            New
          </div>
          <div className="flex gap-[5px] items-center">
            <p className="text-black text-[12px]">Time Management Courses Uploaded</p>
            <FaArrowRight />
          </div>
        </div>
        {/* Heading and Description */}
        <div className="mt-5">
          <h1 className="text-[32px] md:text-[40px] lg:text-[54px] font-bold text-black">
            Balance Academics. Amplify Passions.
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#737373] mt-4">
            Join a program designed to help students excel academically while pursuing what they love.
          </p>
          <button className="text-white bg-black w-[120px] h-[45px] rounded-full mt-[10px] hover:bg-[#22A699] transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="w-full max-w-[380px]">
        <img
          src={pic}
          alt="Hero 1"
          className="w-full h-auto max-h-[600px] object-cover rounded-[30px]"
        />
      </div>

      {/* 3rd Section */}
      <div className="w-full max-w-[237px] flex flex-col gap-10 items-center lg:items-start">
        <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-light text-black text-center lg:text-left">
          Your Journey to Balance Starts Here.
        </h3>
        <img src={pic2} alt="Hero 2" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
