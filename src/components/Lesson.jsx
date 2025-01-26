import React from 'react';
import LessonCard from './LessonCard';
import lessonImage1 from '../Assets/Images/lessons.png';


const Lessons = () => {
  // Array of card data
  const lessons = [
    {
      image: lessonImage1,
      title: 'Data-Driven Decision-Making for Beginners',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Mastering Python for Data Science',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Introduction to Machine Learning',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Web Development Essentials',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Cybersecurity Fundamentals',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'AI and Robotics Basics',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Cloud Computing for Beginners',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Blockchain and Cryptocurrency',
      buttonText: 'View',
      isButtonDisabled: true,
    },
    {
      image: lessonImage1,
      title: 'Creative Coding with JavaScript',
      buttonText: 'View',
      isButtonDisabled: true,
    },
  ];

  return (
    <div className="p-[30px] mb-[100px]  min-h-screen">
      <h2 className="text-4xl font-bold  text-black mb-8 ">
        Lessons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={index}
            image={lesson.image}
            title={lesson.title}
            buttonText={lesson.buttonText}
            isButtonDisabled={lesson.isButtonDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
