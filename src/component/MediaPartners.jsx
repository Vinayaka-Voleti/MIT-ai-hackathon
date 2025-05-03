import React from 'react';

// Import all logos
import foxLogo from '../assets/img1.png';
// import cnetLogo from '../assets/cnet.png';
import kiplingerLogo from '../assets/img3.png';
import ctvLogo from '../assets/img2.png';
import globalHdLogo from '../assets/img4.png';
import cbcLogo from '../assets/img6.png';
// import abcLogo from '../assets/abc.png';
import nbcLogo from '../assets/img7.png';
import btLogo from '../assets/img8.png';
import theStarLogo from '../assets/img9.png';
import bbcLogo from '../assets/img10.png';

const MediaPartners = () => {
  const mediaLogos = [
    { name: "FOX", width: "w-16", src: foxLogo },
    // { name: "CNET", width: "w-16", src: cnetLogo },
    { name: "Kiplinger", width: "w-24", src: kiplingerLogo },
    { name: "CTV", width: "w-16", src: ctvLogo },
    { name: "Global HD", width: "w-20", src: globalHdLogo },
    { name: "CBC", width: "w-16", src: cbcLogo },
    // { name: "ABC", width: "w-14", src: abcLogo },
    { name: "NBC", width: "w-16", src: nbcLogo },
    { name: "BT", width: "w-12", src: btLogo },
    { name: "THE STAR", width: "w-24", src: theStarLogo },
    { name: "BBC", width: "w-16", src: bbcLogo }
  ];

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6 text-gray-700">
          <p className="text-sm md:text-base">
            Save this page on your device home screen to have it handy next time you buy stuff online
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {mediaLogos.map((logo, index) => (
            <div
              key={index}
              className={`${
                logo.width === 'w-24' ? 'w-16 sm:w-20 md:w-24' :
                logo.width === 'w-20' ? 'w-14 sm:w-16 md:w-20' :
                logo.width === 'w-16' ? 'w-12 sm:w-14 md:w-16' :
                logo.width === 'w-14' ? 'w-10 sm:w-12 md:w-14' :
                logo.width === 'w-12' ? 'w-8 sm:w-10 md:w-12' :
                'w-8 sm:w-12'
              } h-6 sm:h-7 md:h-8 flex items-center justify-center`}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
