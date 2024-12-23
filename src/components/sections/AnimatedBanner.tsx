import React from 'react';

const AnimatedBanner: React.FC = () => {
  return (
    <section id="animated-banner" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Animated Banner Showcase</h2>
        
        <div className="flex justify-center">
          {/* Replace with the actual path to your animated banner */}
          <img
            src="https://i.imgur.com/VyI5ZO0.gif"
            alt="Animated Banner"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedBanner;
