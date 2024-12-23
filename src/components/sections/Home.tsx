import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to <span className="text-purple-500">Team Sxlar</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Dominating the esports scene with passion, skill, and determination.
          Join us on our journey to the top.
        </p>
      </div>
    </section>
  );
};

export default Home;