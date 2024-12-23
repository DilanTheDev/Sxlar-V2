import React from 'react';
import { User } from 'lucide-react';

const players = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Player ${i + 1}`,
  role: ['Coach', 'Support', 'Entry Fragger', 'IGL', 'Pro Fragger'][i % 5],
}));

const Roster = () => {
  return (
    <section id="roster" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Roster</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <User className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{player.name}</h3>
                  <p className="text-purple-400">{player.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
