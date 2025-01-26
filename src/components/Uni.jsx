import React from 'react';
import icon1 from '../Assets/Images/uni1.png';
import icon2 from '../Assets/Images/uni2.png';
import icon3 from '../Assets/Images/uni3.png';

const Uni = () => {
  return (
    <div className=" py-10">
      {/* Marquee Container */}
      <div className="overflow-hidden relative h-[120px]">
        <div className="marquee flex items-center gap-10">
          {/* Icon 1 */}
          <img
            src={icon1}
            alt="Icon 1"
            className="w-[100px] h-[100px] object-contain"
          />
          {/* Icon 2 */}
          <img
            src={icon2}
            alt="Icon 2"
            className="w-[100px] h-[100px] object-contain"
          />
          {/* Icon 3 */}
          <img
            src={icon3}
            alt="Icon 3"
            className="w-[100px] h-[100px] object-contain"
          />
          {/* Duplicate icons for seamless scrolling */}
          <img
            src={icon1}
            alt="Icon 1"
            className="w-[100px] h-[100px] object-contain"
          />
          <img
            src={icon2}
            alt="Icon 2"
            className="w-[100px] h-[100px] object-contain"
          />
          <img
            src={icon3}
            alt="Icon 3"
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
      </div>

      {/* Style */}
      <style jsx>{`
        .marquee {
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Uni;
