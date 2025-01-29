import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the arrow-up icon from react-icons

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add an event listener for scrolling
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#F6A139] text-white p-3 rounded-full shadow-lg hover:bg-[#000] transition-all duration-300"
          title="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
