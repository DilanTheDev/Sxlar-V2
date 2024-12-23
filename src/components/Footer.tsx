import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Team Sxlar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;