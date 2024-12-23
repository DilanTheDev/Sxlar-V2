import React from 'react';
import { Target, Trophy, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-400">To build a community of passionate gamers and compete at the highest level.</p>
          </div>
          
          <div className="text-center p-6">
            <Trophy className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Goals</h3>
            <p className="text-gray-400">Dominate competitive scenes and inspire the next generation of esports athletes.</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
            <p className="text-gray-400">Teamwork, dedication, and continuous improvement drive everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;