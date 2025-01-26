import React from 'react';
import { FaWhatsapp, FaYoutube, FaTelegram, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../Assets/Images/logo (3).png'
import { Substack } from './Substack';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer' className="bg-[#E2F4FF] text-black py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo Section */}
        <div className="text-center mb-2">
          {/* You can replace this with your actual logo */}
          <Link to='/'>
          <img src={logo} alt="Philik Opportunities Logo" className="mx-auto w-[300px] " />
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {/* WhatsApp */}
          <a
            href="https://bit.ly/40JNaLQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaWhatsapp /> WhatsApp Channel
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@philikopportunnites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaYoutube /> YouTube
          </a>
          <a
            href="http://philikopportunities.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <Substack /> Substack
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/philikopportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaTelegram /> Telegram
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/philikopportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaInstagram /> Instagram
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/philikopportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaLinkedinIn /> LinkedIn
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/philik_opptns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#F6A139] rounded-full hover:bg-[#000] hover:text-white transition"
          >
            <FaTwitter /> Twitter
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/50 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Philik Opportunities. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a href="https://github.com/AmeerAlabi" className="underline hover:text-black" target="_blank" rel="noopener noreferrer">
              Ameer🧑‍💻
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
