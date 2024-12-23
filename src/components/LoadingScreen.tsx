import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <img src="https://i.imgur.com/mmJL9xX.png" alt="Loading" className="w-24 h-24" />
      </div>
    </div>
  );
};

export default LoadingScreen;
