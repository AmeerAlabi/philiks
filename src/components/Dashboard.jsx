import React from 'react';
import offline from '../Assets/Images/dashboard.png';

const Dashboard = () => {
  return (
    <div className="mb-[30px] flex-col-reverse  flex  md:flex-row justify-center items-center gap-[20px] md:gap-[100px] p-5">
      {/* Image Section */}
     
      
      {/* Text Section */}
      <div className="w-full my-[40px] md:w-[400px] flex flex-col justify-start items-start gap-[15px] text-center md:text-left">
        <h1 className="font-bold text-[#22a699] text-[32px] md:text-[48px] lg:text-[64px] leading-[1.2]">
        Interactive Dashboards
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal text-black mt-[5px]">
        Stay ahead with real-time analytics that visualize student progress and performance at a glance.
        </p>
        <button className="w-[180px]  mx-auto md:mx-0 md:w-[200px] h-[45px] md:h-[50px] bg-black text-white rounded-[30px] mt-[20px]">
          Get Started
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src={offline}
          alt="Offline Learning"
          className="w-[300px] h-[200px] md:w-[600px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Dashboard;
