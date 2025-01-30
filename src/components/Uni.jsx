import React from 'react';
import icon1 from '../Assets/Images/ngm1.png';
import icon2 from '../Assets/Images/ngm2.png';
import icon3 from '../Assets/Images/mission.png';
import icon4 from '../Assets/Images/ace.png';
import icon5 from '../Assets/Images/yl.jpg';

const Uni = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h1 className="text-center text-[32px] md:text-[48px] font-bold text-[#333]">
        Our Partners
      </h1>
      
      {/* Marquee Container */}
      <div className="relative overflow-hidden mt-8">
        <div className="marquee flex items-center gap-10">
          {/* Logos with Optional Links */}
          <a href="https://ngmplatform.com/" target="_blank" rel="noopener noreferrer">
            <img src={icon1} alt="Partner 1" className="w-[150px] h-[150px] object-contain transition-transform hover:scale-110" />
          </a>
          <a href="https://ngmplatform.com/" target="_blank" rel="noopener noreferrer">
            <img src={icon2} alt="Partner 2" className="w-[150px] h-[150px] object-contain transition-transform hover:scale-110" />
          </a>
          <a href="https://ng.linkedin.com/company/mission-brain-at-university-of-ilorin" target="_blank" rel="noopener noreferrer">
            <img src={icon3} alt="Partner 3" className="w-[120px] h-[120px] object-contain transition-transform hover:scale-110" />
          </a>
          <a href="https://acemyx.com/" target="_blank" rel="noopener noreferrer">
            <img src={icon4} alt="Partner 4" className="w-[120px] h-[120px] object-contain transition-transform hover:scale-110" />
          </a>
          <a href="https://acemyx.com/" target="_blank" rel="noopener noreferrer">
            <img src={icon5} alt="Partner 4" className="w-[120px] h-[120px] object-contain transition-transform hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .marquee {
          display: flex;
          white-space: nowrap;
          animation: scroll 12s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Uni;
