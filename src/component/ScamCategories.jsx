import React from 'react';

const ScamCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Online Shopping Scams",
      description: "Fake online stores, counterfeit products, non-delivery of paid items",
      icon: "🛒",
      url: "https://www.fdacs.gov/Consumer-Resources/Scams-and-Fraud/Online-Shopping-Scams"
    },
    {
      id: 2,
      title: "Investment Scams",
      description: "Pyramid schemes, fake crypto platforms, fraudulent investment opportunities",
      icon: "💰",
      url: "https://www.investor.gov/protect-your-investments/fraud/types-fraud/investment-scams"
    },
    {
      id: 3,
      title: "Phishing Attacks",
      description: "Fake emails, messages, and websites designed to steal personal information",
      icon: "🎣",
      url: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/phishing"
    },
    {
      id: 4,
      title: "Identity Theft",
      description: "Unauthorized use of personal information for financial gain",
      icon: "🔒",
      url: "https://www.identitytheft.gov"
    },
    {
      id: 5,
      title: "Tech Support Scams",
      description: "Fraudsters posing as tech support to access your devices or accounts",
      icon: "💻",
      url: "https://www.ftc.gov/news-events/topics/identity-theft-and-data-security/tech-support-scams"
    },
    {
      id: 6,
      title: "Romance Scams",
      description: "Fake online relationships used to extract money from victims",
      icon: "❤️",
      url: "https://www.consumer.ftc.gov/articles/what-you-need-know-about-romance-scams"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E0E2C] mb-3 sm:mb-4">Common Scam Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Stay informed about the most prevalent types of scams and learn how to protect yourself
            from falling victim to fraudulent schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => window.open(category.url, '_blank', 'noopener,noreferrer')}
            >
              <div className="text-3xl sm:text-4xl mb-3 md:mb-4">{category.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E0E2C] mb-1 sm:mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{category.description}</p>
              <a 
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-4 inline-block text-[#63C1E8] hover:text-[#4BA7D0] font-medium text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a 
            href="https://consumer.ftc.gov/scams"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0E0E2C] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:bg-[#1A1A4A] transition-colors duration-300 inline-flex items-center text-sm sm:text-base"
          >
            View All Scam Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScamCategories;