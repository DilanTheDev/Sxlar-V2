import React from 'react';

const sponsors = [
  {
    id: 1,
    name: 'Sponsor 1',
    imageUrl: 'https://i.imgur.com/I6Qys2Y.png',
  },
  {
    id: 2,
    name: 'Sponsor 2',
    imageUrl: 'https://i.imgur.com/I6Qys2Y.png',
  },
  {
    id: 3,
    name: 'Sponsor 3',
    imageUrl: 'https://i.imgur.com/I6Qys2Y.png',
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Sponsors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href="#"
              className="block transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={sponsor.imageUrl}
                alt={sponsor.name}
                className="w-full max-w-[300px] mx-auto rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;