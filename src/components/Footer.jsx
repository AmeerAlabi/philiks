import React from 'react';
import {
  FaWhatsapp,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import subtack, { Substack } from '../components/Substack'
import logo from '../Assets/Images/logo (3).png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-[#E2F4FF] text-gray-800 py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <Link to="/" className="block mb-2">
              <img
                src={logo}
                alt="Philik Opportunities Logo"
                className="w-52 hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-600 max-w-sm">
              Connecting you with the best opportunities. Join our community and stay updated with the latest resources and possibilities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://bit.ly/40JNaLQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://youtube.com/@philikopportunnites"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
              </a>
              <a
                href="https://t.me/philikopportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaTelegram className="text-lg" />
                <span>Telegram</span>
              </a>
              <a
                href="https://instagram.com/philikopportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaInstagram className="text-lg" />
                <span>Instagram</span>
              </a>
              {/* <a
                href="https://substack.com/@philikopportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <Substack />
                <span>Substack</span>
              </a> */}


              <a
                href="https://linkedin.com/company/philikopportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>


              <a
                href="https://x.com/philik_opptns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#F6A139] transition-colors"
              >
                <FaTwitter />
                <span>X</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <form
                action="https://substack.com/@philikopportunities"
                method="GET"
                target="_blank"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Subscribe to our newsletter
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F6A139] focus:border-transparent transition-all duration-200 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#F6A139] text-white rounded-lg hover:bg-[#000] transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        {/* <div className="border-t border-b border-gray-200 py-8 my-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://linkedin.com/company/philikopportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <FaLinkedinIn className="text-[#F6A139] text-xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://x.com/philik_opptns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <FaTwitter className="text-[#F6A139] text-xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>© {new Date().getFullYear()} Philik Opportunities. All rights reserved.</p>
          <p>
            Developed with ❤️ by{' '}
            <a
              href="https://github.com/AmeerAlabi"
              className="text-[#F6A139] hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ameer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;