import React from 'react';
import { Link } from 'react-router-dom';  // Import Link to create internal routing links
import LessonCard from './LessonCard';
import lessonImage1 from '../Assets/Images/plk.jpg';

const Lessons = () => {
  // Array of card data
  const lessons = [
    {
      image: lessonImage1,
      title: 'Time Management Strategies:',
      buttonText: 'View',
      link: 'https://www.youtube.com/watch?v=HmF_WYl1pQ8', // The link for this lesson's detail page
      isButtonDisabled: false,
    },
    {
      image: lessonImage1,
      title: 'Understanding Balance',
      buttonText: 'View',
      link: 'https://www.youtube.com/watch?v=HmF_WYl1pQ8', // The link for this lesson's detail page
      isButtonDisabled: false,
    },
    // Add more lesson cards here as needed
  ];

  return (
    <div className="p-[30px] mb-[100px] min-h-screen">
      <h2 className="text-4xl font-bold text-black mb-8">
        Lessons
      </h2>

      {/* Lesson Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={index}
            image={lesson.image}
            title={lesson.title}
            buttonText={lesson.buttonText}
            isButtonDisabled={lesson.isButtonDisabled}
            link={lesson.link} 
          />
        ))}
      </div>

      {/* Learn More Button */}
      {/* <div className="mt-10 text-center">
        <a
          href="/all-lessons"  // Modify this if you need a different link for all lessons
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
        >
          See All Lessons
        </a>
      </div> */}
    </div>
  );
};

export default Lessons;
