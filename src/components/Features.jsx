import React from 'react';
import collab from '../Assets/Images/collab.png';
import icon1 from '../Assets/Images/icon1.png';
import icon2 from '../Assets/Images/icon2.png';
import icon3 from '../Assets/Images/icon3.png';
import icon4 from '../Assets/Images/icon4.png';

const Features = () => {
  return (
    <div className="px-5 py-10 ">
      {/* Title */}
      <h1 className="my-10 mx-auto text-center text-[32px] md:text-[48px] font-bold text-[#F24C3D] max-w-[900px]">
        Elevate Learning with Philik’s Cutting-Edge Academic Solutions
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-5">
        {/* Image */}
        <img
          src={collab}
          alt="Collaboration"
          className="w-full md:w-[400px] rounded-[20px] object-cover shadow-lg"
        />

        {/* Features */}
        <div className="flex flex-col gap-[40px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src={icon1} alt="Smart Learning Tools" className="w-[80px] h-[80px]" />
              <h1 className="text-[24px] md:text-[28px] font-bold mt-4 text-[#222]">
                Smart Learning Tools
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-700 mt-2">
                Seamlessly access our innovative digital resources designed to simplify and enhance the learning process.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src={icon2} alt="Personalized Learning" className="w-[80px] h-[80px]" />
              <h1 className="text-[24px] md:text-[28px] font-bold mt-4 text-[#222]">
                Personalized Learning
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-700 mt-2">
                Leverage AI-driven insights to customize study plans, ensuring every student thrives at their own pace.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src={icon3} alt="Comprehensive Content" className="w-[80px] h-[80px]" />
              <h1 className="text-[24px] md:text-[28px] font-bold mt-4 text-[#222]">
                Comprehensive Content
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-700 mt-2">
                Explore an extensive library of expertly curated materials tailored to diverse academic needs and goals.
              </p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src={icon4} alt="Real-Time Tracking" className="w-[80px] h-[80px]" />
              <h1 className="text-[24px] md:text-[28px] font-bold mt-4 text-[#222]">
                Real-Time Tracking
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-700 mt-2">
                Monitor growth and stay ahead with intuitive dashboards that keep students and mentors aligned.
              </p>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <h1 className="text-[36px] md:text-[48px] font-bold text-black">
              250+
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-700">
              Students Reached
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-[#F24C3D] transition duration-300">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
