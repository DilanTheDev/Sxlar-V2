import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Team Sxlar</h1>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Roster', 'Sponsors', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Menu className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;