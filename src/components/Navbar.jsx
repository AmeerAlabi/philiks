import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo (3).png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-5 h-[120px] px-10 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-black hover:text-gray-600 transition duration-300">PHILIK</h1>

      {/* Navigation Links */}
      <div className={`hidden md:flex w-[400px] px-[10px] h-[63px] rounded-full py-2 justify-center items-center gap-5 bg-[#FDECD8]`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 rounded-full ${isActive ? 'bg-white text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
          }
        >
          Home
        </NavLink>
      
        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 rounded-full ${isActive ? 'bg-white text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
          }
        >
          Programs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 rounded-full ${isActive ? 'bg-white text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
          }
        >
          About
        </NavLink>
    
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex gap-6">
      <Link
        to="https://instagram.com/philikopportunities"  // Scrolls to the footer section
        smooth={true}  // Enables smooth scrolling
        offset={-70}   // Adjust if navbar is fixed
        duration={500} // Duration of the scroll animation
      >
        <button className="w-[123px] h-[45px] rounded-full text-sm font-medium border border-black flex items-center justify-center hover:bg-gray-100 hover:scale-105 transition duration-300">
          Reach Out
        </button>
      </Link>
        <Link to="/programs">
        <button className="w-[123px] h-[45px] rounded-full text-sm font-medium text-white bg-black flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition duration-300">
          Get Started
        </button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="text-black hover:text-gray-600 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[120px] left-0 w-full bg-white shadow-lg flex flex-col items-center z-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 text-lg mt-[15px] font-bold w-[250px] rounded-full text-center ${isActive ? 'bg-[#FDECD8] text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
       
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              `py-2 text-lg font-bold w-[250px] rounded-full text-center ${isActive ? 'bg-[#FDECD8] text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 text-lg font-bold w-[250px] rounded-full text-center ${isActive ? 'bg-[#FDECD8] text-black' : 'text-black'} hover:bg-gray-200 hover:scale-105 transition duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          
          <button className="w-[90%] mt-[15px] my-2 py-3 rounded-full border border-black text-sm font-medium hover:bg-gray-100 hover:scale-105 transition duration-300">
            Reach Out
          </button>
          <button className="w-[90%] mb-[15px] my-2 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 hover:scale-105 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
