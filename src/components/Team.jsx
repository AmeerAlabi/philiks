import React from 'react';
import dummyPic from '../Assets/Images/lessons.png';

const Team = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Team Leader',
      description: 'Leading the team with a focus on innovation and impact.',
      image: dummyPic,
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      description: 'Designing user-friendly interfaces and experiences.',
      image: dummyPic,
    },
    {
      name: 'David Brown',
      role: 'Full-Stack Developer',
      description: 'Building robust and scalable applications.',
      image: dummyPic,
    },
    {
      name: 'Emily White',
      role: 'Project Manager',
      description: 'Ensuring smooth project delivery and coordination.',
      image: dummyPic,
    },
    {
      name: 'Chris Johnson',
      role: 'Content Strategist',
      description: 'Crafting compelling content to drive engagement.',
      image: dummyPic,
    },
    {
      name: 'Sophia Green',
      role: 'Data Analyst',
      description: 'Analyzing data to support informed decisions.',
      image: dummyPic,
    },
  ];

  return (
    <div className=" py-[40px] mt-[1px] min-h-screen px-[30px]">
      <h2 className="text-center px-[30px] mb-[20px]  bg-gradient-to-r from-[#000] to-[#F6A139] text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[70px]">
        Our Amazing Team
      </h2>
      <p className="px-[30px] mb-10 text-[16px]  font-[400] text-[#737373] text-center ">
        “Behind every great program is a team of passionate educators, designers, and leaders.”
      </p>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Team Member Image */}
            <div className="flex justify-center mt-6">
  <div className="relative w-28 h-28">
    {/* Gradient Border */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F6A139] to-[#000] rounded-full p-[2px]">
      {/* Image inside the gradient border */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full rounded-full object-cover bg-white"
      />
    </div>
  </div>
</div>

            {/* Team Member Details */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-medium text-[#F6A139]">{member.role}</p>
              <p className="mt-4 text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
