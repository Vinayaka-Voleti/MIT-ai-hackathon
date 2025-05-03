import React from 'react';

const MediaPartners = () => {
  const mediaLogos = [
    { name: "FOX", width: "w-16" },
    { name: "CNET", width: "w-16" },
    { name: "Kiplinger", width: "w-24" },
    { name: "CTV", width: "w-16" },
    { name: "Global HD", width: "w-20" },
    { name: "CBC", width: "w-16" },
    { name: "ABC", width: "w-14" },
    { name: "NBC", width: "w-16" },
    { name: "BT", width: "w-12" },
    { name: "THE STAR", width: "w-24" },
    { name: "BBC", width: "w-16" }
  ];
  return (
    <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6 text-gray-700">
          <p className="text-sm md:text-base">Save this page on your device home screen to have it handy next time you buy stuff online</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {mediaLogos.map((logo, index) => (
            <div key={index} className={`${logo.width.replace('w-', 'w-') === 'w-24' ? 'w-16 sm:w-20 md:w-24' : 
                                          logo.width.replace('w-', 'w-') === 'w-20' ? 'w-14 sm:w-16 md:w-20' : 
                                          logo.width.replace('w-', 'w-') === 'w-16' ? 'w-12 sm:w-14 md:w-16' : 
                                          logo.width.replace('w-', 'w-') === 'w-14' ? 'w-10 sm:w-12 md:w-14' : 
                                          logo.width.replace('w-', 'w-') === 'w-12' ? 'w-8 sm:w-10 md:w-12' : 'w-8 sm:w-12'} 
                                        h-6 sm:h-7 md:h-8 flex items-center justify-center`}>
              <img
                src={`/api/placeholder/${logo.width.replace('w-', '') * 4}/32`}
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