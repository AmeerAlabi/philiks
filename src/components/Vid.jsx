import React from 'react';

const Vid = () => {
  return (
    <div className="flex justify-center items-center my-[80px]">
      <iframe 
        width="800" 
        height="500" 
        src="https://www.youtube.com/embed/z0LxaArBvk8" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Vid;
