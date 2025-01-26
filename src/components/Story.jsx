import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Story = () => {
  // State to track dropdown toggle
  const [openDropdown, setOpenDropdown] = useState(null);

  // Data for dropdown sections with itemized content
  const dropdownData = [
    {
      title: 'Awards & Achievements',
      content: [
        'Won the Global Innovation Award in 2022 for outstanding contributions to education.',
        'Recognized as one of the top 10 impactful initiatives by Education Today.',
        'Awarded the Excellence in Community Outreach medal by the African Development Group.',
      ],
    },
    {
      title: 'Partnerships',
      content: [
        'Collaborated with TechForGood to provide scholarships to underprivileged students.',
        'Partnered with leading universities for research in STEM education.',
        'Teamed up with NGOs to improve access to digital learning tools in rural areas.',
      ],
    },
    {
      title: 'Community Impact',
      content: [
        'Empowered over 10,000 students through workshops and training programs.',
        'Provided free coding kits to more than 5,000 children in underserved communities.',
        'Organized annual outreach programs promoting education equity.',
      ],
    },
  ];

  // Function to toggle dropdowns
  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="p-6 py-[60px] min-h-screen mt-[80px] bg-gray-100">
      {/* Section Title */}
      <h2 className="text-[40px] font-bold text-black mb-4 px-[30px] text-center">
        Our <span className="text-[#F6A139]">Story</span>
      </h2>

      {/* Quote and Dropdowns */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Quote Section */}
        <div className="lg:w-1/2 bg-white shadow-xl p-10 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <p className="text-2xl lg:text-3xl italic font-medium text-black">
            <span className="text-4xl lg:text-5xl text-[#F6A139]">"</span>
            What started as a small initiative to address learning gaps has grown into a pan-African movement. We’re driven by the belief that education is a fundamental right, not a privilege.
            <span className="text-4xl lg:text-5xl text-[#F6A139]">"</span>
          </p>
        </div>

        {/* Dropdown Section */}
        <div className="lg:w-1/2 space-y-6">
          {dropdownData.map((item, index) => (
            <div
              key={index}
              className="shadow-lg border border-gray-300 bg-white rounded-lg overflow-hidden"
            >
              {/* Dropdown Header */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-6 text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition duration-200"
              >
                {item.title}
                <span
                  className={`transform transition-transform ${
                    openDropdown === index ? 'rotate-180' : ''
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>

              {/* Dropdown Content */}
              {openDropdown === index && (
                <ul className="p-6 border-t border-gray-200 text-gray-600 text-sm space-y-4">
                  {item.content.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-[#F6A139] font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
