import React from 'react';
import { User } from 'lucide-react';

// Define the type for a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
}

// Team members data
const teamMembers: TeamMember[] = [
  { id: 1, name: 'Sxlar Inscily', role: 'Player' },
  { id: 2, name: 'Sxlar Emiz', role: 'Player' },
  { id: 3, name: 'Sxlar Intruder', role: 'Player' },
  { id: 4, name: 'Sxlar Dil', role: 'Head Manager' },
  { id: 5, name: 'Sxlar Marlon', role: 'Founder' },
  { id: 6, name: 'Sxlar Vxnum', role: 'Founder' },
];

const Roster: React.FC = () => {
  return (
    <section id="roster" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Team Sxlar Roster</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <User className="w-8 h-8 text-purple-500" />
                </div>
                {/* Member Details */}
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
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
