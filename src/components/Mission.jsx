import React from 'react';

const Mission = () => {
  return (
    <div className=" mt-[20px]">
      {/* Title */}
      <h2 className="text-center px-[30px] mb-[20px] sm:text-left bg-gradient-to-r from-[#000] to-[#F6A139] text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[70px]">
        Our Mission And Vision
      </h2>

      {/* Content Section */}
      <div className="w-full bg-[#FDECD8] flex flex-col sm:flex-row justify-center gap-8 sm:gap-[30px] p-[30px] sm:p-[40px] py-[50px]">
        {/* Purpose 1 */}
        <div className="border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-[#F7AC51] sm:pr-[20px] pb-6 sm:pb-0">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#F7AC51] mb-4">
            Our Mission
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-black">
            “Connecting students to the opportunities that matter most , turning thier skills and passion into pathways for success”
          </p>
        </div>

        {/* Purpose 2 */}
        <div className="sm:pr-[20px]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#F7AC51] mb-4">
            Our Vision
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-black">
            “To be the ultimate hub where students find the right opportunities , at the right time , to unlock their true potential ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
