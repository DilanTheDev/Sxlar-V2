import React from 'react';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-purple-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join Our Community</h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with Team Sxlar and other passionate gamers on our Discord server.
        </p>
        
        <a
          href="https://dsc.gg/team-sxlar"
          className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Join Our Discord</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
