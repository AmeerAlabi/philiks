import React from 'react';
import { FaAward, FaUsers, FaRegLightbulb } from 'react-icons/fa';  // Importing icons for achievements

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUsers size={40} color="#4CAF50" />,
      title: 'Philik Organizes Outreach for Over 100 Students',
      description: 'Philik successfully conducted an outreach program aimed at empowering and guiding over 100 students towards career readiness and personal development.',
    },
    {
      icon: <FaAward size={40} color="#FF9800" />,
      title: 'Philik Organizes Webinar for Over 100 Individuals',
      description: 'A well-attended webinar with over 100 participants, including undergraduates and professionals, focused on career growth and skill development.',
    },
    {
      icon: <FaRegLightbulb size={40} color="#3F51B5" />,
      title: 'Philik Launched on January 21st, 2025 in Collaboration with Mission:Brain',
      description: 'A successful launch in collaboration with Mission:Brain, where Philik also received the Academic Leadership Award from Unilorin for outstanding contributions to education.',
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-black text-center mb-8">Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white p-6 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              {achievement.icon}
              <h3 className="text-2xl font-semibold">{achievement.title}</h3>
            </div>
            <p className="text-lg text-gray-700">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
