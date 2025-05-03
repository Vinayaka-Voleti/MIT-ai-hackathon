import React from 'react';
import ScannerComponent from './ScannerComponent';

const ScannerPage = () => {
  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#0E0E2C] mb-4">Scam Shield Scanner</h1>
            <p className="text-gray-600">
              Protect yourself from online scams with our advanced scanning tools. 
              Check website URLs, WhatsApp messages, or voice notes for potential threats.
            </p>
          </div>
          
          <div className="mb-8">
            <ScannerComponent />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#0E0E2C] mb-4">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-[#63C1E8] text-3xl font-bold mb-2">01</div>
                <h3 className="font-medium text-[#0E0E2C] mb-2">Enter Content</h3>
                <p className="text-gray-600 text-sm">
                  Input a URL, paste a suspicious WhatsApp message, or upload/record a voice note.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-[#63C1E8] text-3xl font-bold mb-2">02</div>
                <h3 className="font-medium text-[#0E0E2C] mb-2">AI Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Our AI system analyzes the content using advanced algorithms to detect scam patterns.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-[#63C1E8] text-3xl font-bold mb-2">03</div>
                <h3 className="font-medium text-[#0E0E2C] mb-2">Get Results</h3>
                <p className="text-gray-600 text-sm">
                  Receive instant feedback with risk level assessment and detailed explanation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScannerPage;