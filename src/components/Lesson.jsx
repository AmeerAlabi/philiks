import React from 'react';
import LessonCard from './LessonCard';
import lessonImage2 from '../Assets/Images/tm.png';
import lessonImage3 from '../Assets/Images/ub.png';

const Lessons = () => {
  // Array of lesson data
  const lessons = [
    {
      image: lessonImage2,
      title: 'Time Management Strategies',
      buttonText: 'View',
      link: 'https://www.youtube.com/channel/UCidLHH1qOr493oVlUmVO9nw', // Correct external link
    },
    {
      image: lessonImage3,
      title: 'Understanding Balance',
      buttonText: 'View',
      link: 'https://www.youtube.com/channel/UCidLHH1qOr493oVlUmVO9nw', // Correct external link
    },
  ];

  return (
    <div className="p-[30px] mb-[100px] min-h-screen">
      <h2 className="text-4xl font-bold text-black mb-8">Lessons</h2>

      {/* Lesson Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={index}
            image={lesson.image}
            title={lesson.title}
            buttonText={lesson.buttonText}
            link={lesson.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
