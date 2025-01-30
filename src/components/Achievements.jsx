import React from 'react';
import { FaAward, FaUsers, FaRegLightbulb } from 'react-icons/fa'; // Importing icons for achievements

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUsers size={40} className="text-green-500" />,
      title: 'Empowering 100+ Students Through Outreach',
      description: 'Philik successfully organized an outreach program, equipping over 100 students with essential career and personal development skills.',
    },
    {
      icon: <FaAward size={40} className="text-orange-500" />,
      title: 'Impactful Webinar for 100+ Participants',
      description: 'A highly engaging webinar attended by students and professionals, focusing on career growth and skill development.',
    },
    {
      icon: <FaRegLightbulb size={40} className="text-blue-600" />,
      title: 'International Recognition for Academic Leadership',
      description: 'Philik, in collaboration with Mission:Brain Unilorin, received an international Academic Leadership Award for significant contributions in education and mentorship.',
    },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {achievement.icon}
              <h3 className="text-2xl font-semibold text-gray-800">{achievement.title}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
