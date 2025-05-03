import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';

const App = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <Navbar />
      <div className="pt-24"> {/* Offset for fixed navbar */}
        <Hero />
      </div>
    </div>
  );
};

export default App;
  