import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons for LinkedIn and Twitter
import img1 from '../Assets/Images/mb2.png';
import img2 from '../Assets/Images/ah2.png';
import img3 from '../Assets/Images/am2.png';
import img4 from '../Assets/Images/is2.png';
import img5 from '../Assets/Images/ts2.png';
import img6 from '../Assets/Images/sm2.png';

const TeamMembers = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'Mubarak Mustapha',
      role: 'Team Leader',
      description: 'Guiding the direction of Philik with strategic oversight and a focus on impactful educational initiatives.',
      image: img1,
      linkedin: 'https://www.linkedin.com/in/mubarakmustapha', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/mubarakmustapha' // Replace with actual Twitter URL
    },
    {
      name: 'Ahmad Sulaiman Olohuntobi',
      role: 'Programs Manager',
      description: 'Designing and managing Philik’s programs, ensuring they meet the needs of the community and deliver lasting impact.',
      image: img2,
      linkedin: 'https://www.linkedin.com/in/ahmadsolohuntobi', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/ahmadsolohuntobi' // Replace with actual Twitter URL
    },
    {
      name: 'Ameer Alabi',
      role: 'Software Developer',
      description: 'Building and maintaining the digital infrastructure of Philik, creating accessible platforms for students and professionals.',
      image: img3,
      linkedin: 'https://www.linkedin.com/in/ameeralabi', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/ameeralabi' // Replace with actual Twitter URL
    },
    {
      name: 'Abinda Israel',
      role: 'Brand Identity Manager',
      description: 'Managing the visual and brand identity of Philik, ensuring consistent communication across platforms and materials.',
      image: img4,
      linkedin: 'https://www.linkedin.com/in/abinda-israel', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/abinda_israel' // Replace with actual Twitter URL
    },
    {
      name: 'Teslim Adegbegha',
      role: 'Creative Writer',
      description: 'Creating compelling content for Philik’s outreach programs, crafting narratives that inspire and engage the audience.',
      image: img5,
      linkedin: 'https://www.linkedin.com/in/teslimadegbegha', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/teslimadegbegha' // Replace with actual Twitter URL
    },
    {
      name: 'Samuel Lawal',
      role: 'UI/UX',
      description: 'Designing intuitive and user-friendly experiences that enhance Philik’s outreach programs, ensuring impactful engagement with the audience.',
      image: img6,
      linkedin: 'https://www.linkedin.com/in/teslimadegbegha', // Replace with actual LinkedIn URL
      twitter: 'https://twitter.com/teslimadegbegha' // Replace with actual Twitter URL
    }
    
  ];

  return (
    <div className="py-[40px] mt-[1px] min-h-screen px-[30px]">
      <h2 className="text-center px-[30px] mb-[20px] bg-gradient-to-r from-[#000] to-[#F6A139] text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:leading-[70px]">
        Our Amazing Team
      </h2>
      <p className="px-[30px] mb-10 text-[16px] font-[400] text-[#737373] text-center ">
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
              <div className="relative w-[150px] h-[150px]">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F6A139] to-[#000] rounded-full p-[2px]">
                  {/* Image inside the gradient border */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[150px] h-[150px] rounded-full object-cover bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Team Member Details */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-medium text-[#F6A139]">{member.role}</p>
              <p className="mt-4 text-sm text-gray-600">{member.description}</p>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-center gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} color="#0A66C2" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
