import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaUserSecret } from 'react-icons/fa';


const WebsiteValidator = () => {
  return (
    <div className="bg-[#0E0E2C] text-white">
      {/* Popular Scam Categories Slider */}
      <div className="w-full bg-[#f8f8f8] text-[#0E0E2C] py-3 overflow-x-auto">
        <div className="flex items-center justify-start md:justify-center px-4 md:px-0 space-x-4 md:space-x-8 text-xs sm:text-sm md:text-base font-medium min-w-max md:min-w-0 md:w-full">
          <button className="flex-shrink-0 flex items-center justify-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <a href="#" className="flex-shrink-0 hover:text-blue-700 transition-colors whitespace-nowrap">AMAZON SCAMS</a>
          <a href="#" className="flex-shrink-0 hover:text-blue-700 transition-colors whitespace-nowrap">SOCIAL SECURITY SCAMS</a>
          <a href="#" className="flex-shrink-0 hover:text-blue-700 transition-colors whitespace-nowrap">PAYPAL SCAMS</a>
          <a href="#" className="flex-shrink-0 hover:text-blue-700 transition-colors whitespace-nowrap">BITCOIN SCAMS</a>
          <a href="#" className="flex-shrink-0 hover:text-blue-700 transition-colors whitespace-nowrap">DISCORD SCAMS</a>
          <button className="flex-shrink-0 flex items-center justify-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <div className="mb-8 md:mb-12 flex justify-center">
        <FaUserSecret className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"/>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
          WEBSITE VALIDATOR
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-3 sm:px-6">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4">
            Are you just about to make a purchase online?
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            See below if the website you want to use is legit
          </p>
        </div>
        
        {/* Search Box */}
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <div className="bg-white rounded-lg flex flex-col sm:flex-row overflow-hidden shadow-lg">
            <div className="hidden sm:flex bg-gray-100 p-3 md:p-4 items-center justify-center">
              <FiSearch className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Enter website here" 
              className="flex-grow py-3 sm:py-4 px-4 sm:px-6 text-gray-800 focus:outline-none text-base md:text-lg border-b sm:border-b-0"
            />
            <button className="bg-[#63C1E8] hover:bg-[#4BA7D0] text-[#0E0E2C] font-bold py-3 px-6 sm:px-8 md:px-10 transition-colors duration-300 text-sm md:text-base">
              SEARCH
            </button>
          </div>
        </div>

        {/* Optional: Add to homescreen prompt */}
        <div className="mt-6 md:mt-8 text-gray-300 px-4">
          <p className="text-sm md:text-base">Save this page on your device home screen to have it handy next time you buy stuff online</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteValidator;