import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Plans = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when the element comes into view
    threshold: 0.5,     // Trigger when 50% of the element is in view
  });

  return (
    <div className=" w-full bg-[#FDECD8]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row p-5 md:p-10 justify-center items-center gap-5">
        <h1 className="text-[28px] md:text-[40px] font-bold border-r-0 md:border-r-4 border-red-500 md:pr-5 text-center md:text-left">
          Breaking Barriers with Accessible Learning
        </h1>

        {/* Plan Cards */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mt-5 md:mt-0">
          {/* Plan 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <FaDollarSign size={30} color="#F24C3D" />
            <h2 className="text-[#F24C3D] font-medium text-[20px]">Free Starter Plan</h2>
            <p className="text-[14px] md:text-[16px] font-medium text-[#4E4E4E] max-w-[300px]">
              Gain access to foundational courses without spending a dime—no strings attached.
            </p>
          </div>

          {/* Plan 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <FaDollarSign size={30} color="#F24C3D" />
            <h2 className="text-[#F24C3D] font-medium text-[20px]">Premium Plan</h2>
            <p className="text-[14px] md:text-[16px] font-medium text-[#4E4E4E] max-w-[300px]">
              Unlock advanced courses and exclusive content tailored for ambitious learners.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div ref={ref} className="bg-red-500 w-full">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 p-5">
          {/* Statistic 1 */}
          <div className="text-center">
            <h1 className="text-[48px] md:text-[72px] font-bold text-white">
              {inView && <CountUp end={250} duration={3} /> }+
            </h1>
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Universities Reached
            </span>
          </div>

          {/* Statistic 2 */}
          <div className="text-center">
            <h1 className="text-[48px] md:text-[72px] font-bold text-white">
              {inView && <CountUp end={10000} duration={3} separator="," /> }+
            </h1>
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Active Users
            </span>
          </div>

          {/* Statistic 3 */}
          <div className="text-center">
            <h1 className="text-[48px] md:text-[72px] font-bold text-white">
              {inView && <CountUp end={15000} duration={3} separator="," /> }+
            </h1>
            <span className="font-normal text-[14px] md:text-[18px] text-white opacity-80">
              Hours of Content Delivered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
