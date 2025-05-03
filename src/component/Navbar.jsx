import React, { useState } from 'react';
import { FiSearch,FiMenu, FiX } from 'react-icons/fi';
import { FaUserSecret } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0E0E2C] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            
          <span className="text-xl font-bold tracking-tight flex justify-center items-center gap-2">
            <FaUserSecret className="text-red-600 w-6 h-6" />
            Scam Shield
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/validator" className="font-medium hover:text-[#63C1E8] transition-colors duration-200">
              VALIDATOR
            </a>
            <div className="relative group">
              <a href="/scams" className="font-medium hover:text-[#63C1E8] transition-colors duration-200 flex items-center">
                SCAMS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                <a href="/scams/amazon" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  Amazon Scams
                </a>
                <a href="/scams/paypal" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  PayPal Scams
                </a>
                <a href="/scams/bitcoin" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  Bitcoin Scams
                </a>
                <a href="/scams/all" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  View All Scams
                </a>
              </div>
            </div>
            <a href="/report" className="font-medium hover:text-[#63C1E8] transition-colors duration-200">
              REPORT A SCAM
            </a>
            <a href="/contact" className="font-medium hover:text-[#63C1E8] transition-colors duration-200">
              CONTACT
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search..."
                className="bg-white/10 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#63C1E8] py-2 px-4 text-sm w-48 lg:w-64"
              />
              <button className="bg-[#63C1E8] hover:bg-[#4BA7D0] text-white py-2 px-4 rounded-r-md transition-colors duration-200">
                SEARCH
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0E0E2C] border-t border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-white/10 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#63C1E8] py-2 px-4 text-sm"
              />
              <button className="absolute right-1 top-1 bg-[#63C1E8] hover:bg-[#4BA7D0] text-white py-1 px-3 rounded transition-colors duration-200 text-sm">
                SEARCH
              </button>
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="/validator" className="py-2 font-medium hover:text-[#63C1E8] transition-colors duration-200">
                VALIDATOR
              </a>
              <div>
                <a href="/scams" className="py-2 font-medium hover:text-[#63C1E8] transition-colors duration-200">
                  SCAMS
                </a>
                <div className="pl-4 mt-1 flex flex-col space-y-1 text-sm text-gray-300">
                  <a href="/scams/amazon" className="py-1 hover:text-[#63C1E8]">Amazon Scams</a>
                  <a href="/scams/paypal" className="py-1 hover:text-[#63C1E8]">PayPal Scams</a>
                  <a href="/scams/bitcoin" className="py-1 hover:text-[#63C1E8]">Bitcoin Scams</a>
                  <a href="/scams/all" className="py-1 hover:text-[#63C1E8]">View All Scams</a>
                </div>
              </div>
              <a href="/report" className="py-2 font-medium hover:text-[#63C1E8] transition-colors duration-200">
                REPORT A SCAM
              </a>
              <a href="/contact" className="py-2 font-medium hover:text-[#63C1E8] transition-colors duration-200">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;